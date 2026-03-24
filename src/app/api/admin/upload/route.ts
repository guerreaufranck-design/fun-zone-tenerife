import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(request: NextRequest) {
  const supabase = createAdminClient();

  const formData = await request.formData();
  const file = formData.get('file') as File;
  const bucket = (formData.get('bucket') as string) || 'axe throwing';
  const folder = (formData.get('folder') as string) || 'offers';

  // Optional: insert into offer_media table after upload
  const offerId = formData.get('offerId') as string | null;
  const mediaType = formData.get('mediaType') as string | null;
  const sortOrder = formData.get('sortOrder') as string | null;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const fileExt = file.name.split('.').pop();
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(fileName, buffer, {
      contentType: file.type,
      upsert: false,
    });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(fileName);

  // If offerId is provided, also insert into offer_media table (bypasses RLS)
  if (offerId) {
    const { error: insertError } = await supabase.from('offer_media').insert({
      offer_id: offerId,
      type: mediaType || (file.type.startsWith('video/') ? 'video' : 'image'),
      url: urlData.publicUrl,
      alt_text: { en: '', es: '', fr: '', de: '', nl: '' },
      sort_order: sortOrder ? parseInt(sortOrder, 10) : 0,
    });

    if (insertError) {
      return NextResponse.json({ error: `Upload OK but failed to save media record: ${insertError.message}` }, { status: 500 });
    }
  }

  return NextResponse.json({
    url: urlData.publicUrl,
    fileName,
  });
}

export async function PATCH(request: NextRequest) {
  const supabase = createAdminClient();

  const { items } = await request.json();

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: 'Missing items array' }, { status: 400 });
  }

  // Update sort_order for each media item
  const updates = items.map((item: { id: string; sort_order: number }) =>
    supabase
      .from('offer_media')
      .update({ sort_order: item.sort_order })
      .eq('id', item.id)
  );

  const results = await Promise.all(updates);
  const failed = results.find((r) => r.error);

  if (failed?.error) {
    return NextResponse.json({ error: failed.error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
  const supabase = createAdminClient();

  const { mediaId } = await request.json();

  if (!mediaId) {
    return NextResponse.json({ error: 'Missing mediaId' }, { status: 400 });
  }

  const { error } = await supabase
    .from('offer_media')
    .delete()
    .eq('id', mediaId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
