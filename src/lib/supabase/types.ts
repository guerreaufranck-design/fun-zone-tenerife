// Shared types for multilingual JSONB fields
export type MultilingualText = Record<string, string>;

// Lane types enum
export type LaneType = "axe" | "darts_pixels" | "classic_darts";

// Offer media types
export type MediaType = "image" | "video";

// Dynamic pricing modifier types
export type ModifierType = "percentage" | "fixed";

// Booking payment types
export type PaymentType = "deposit" | "full";

// Booking payment statuses
export type PaymentStatus = "pending" | "paid" | "refunded" | "partial";

// Booking statuses
export type BookingStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "modified"
  | "completed"
  | "no_show"
  | "manual";

// Booking sources
export type BookingSource = "online" | "manual" | "phone";

// ---------- Row types ----------

export type Offer = {
  id: string;
  slug: string;
  title: MultilingualText;
  description: MultilingualText;
  short_desc: MultilingualText;
  duration_minutes: number;
  min_players: number;
  max_players: number;
  lane_type: LaneType;
  includes: string[];
  age_min: number | null;
  is_active: boolean | null;
  sort_order: number | null;
  seo_title: MultilingualText;
  seo_description: MultilingualText;
  available_from: string | null;
  created_at: string | null;
  updated_at: string | null;
};

export type OfferPricing = {
  id: string;
  offer_id: string;
  players: number;
  price_cents: number;
  created_at: string | null;
};

export type DynamicPricing = {
  id: string;
  day_of_week: number | null;
  start_hour: string | null;
  end_hour: string | null;
  modifier_type: ModifierType;
  modifier_value: number;
  label: MultilingualText;
  is_active: boolean | null;
  created_at: string | null;
};

export type OfferMedia = {
  id: string;
  offer_id: string;
  type: MediaType;
  url: string;
  alt_text: MultilingualText;
  sort_order: number | null;
  created_at: string | null;
};

export type Lane = {
  id: string;
  name: string;
  type: LaneType;
  max_players: number;
  is_active: boolean | null;
  created_at: string | null;
};

export type BusinessHours = {
  id: string;
  day_of_week: number;
  open_time: string;
  close_time: string;
  is_closed: boolean | null;
};

export type ClosedDate = {
  id: string;
  date: string;
  reason: string | null;
  created_at: string | null;
};

export type Booking = {
  id: string;
  booking_ref: string;
  offer_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  players: number;
  booking_date: string;
  start_time: string;
  end_time: string;
  lanes_needed: number;
  total_cents: number;
  deposit_cents: number;
  payment_type: PaymentType;
  payment_status: PaymentStatus;
  stripe_session_id: string | null;
  stripe_payment_intent: string | null;
  status: BookingStatus;
  reminder_sent: boolean | null;
  notes: string | null;
  language: string | null;
  source: BookingSource;
  google_event_id: string | null;
  outlook_event_id: string | null;
  modification_token: string | null;
  created_at: string | null;
  updated_at: string | null;
};

export type BookingLane = {
  id: string;
  booking_id: string;
  lane_id: string;
  created_at: string | null;
};

export type FaqItem = {
  id: string;
  question: MultilingualText;
  answer: MultilingualText;
  category: string | null;
  sort_order: number | null;
  is_active: boolean | null;
  created_at: string | null;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: MultilingualText;
  content: MultilingualText;
  excerpt: MultilingualText;
  cover_image: string | null;
  seo_title: MultilingualText;
  seo_description: MultilingualText;
  is_published: boolean | null;
  published_at: string | null;
  created_at: string | null;
  updated_at: string | null;
};

export type TiktokEmbed = {
  id: string;
  tiktok_url: string;
  is_active: boolean | null;
  sort_order: number | null;
  created_at: string | null;
};

export type SiteSetting = {
  key: string;
  value: unknown;
  updated_at: string | null;
};

export type GiftVoucher = {
  id: string;
  code: string;
  offer_id: string | null;
  players: number | null;
  purchaser_name: string;
  purchaser_email: string;
  recipient_name: string | null;
  recipient_email: string | null;
  message: string | null;
  amount_cents: number;
  is_redeemed: boolean | null;
  redeemed_at: string | null;
  redeemed_booking_id: string | null;
  stripe_session_id: string | null;
  payment_status: string | null;
  expires_at: string | null;
  created_at: string | null;
};

// ---------- Insert types (omit server-generated fields) ----------

export type OfferInsert = Omit<Offer, "id" | "created_at" | "updated_at"> &
  Partial<Pick<Offer, "id" | "created_at" | "updated_at">>;

export type OfferPricingInsert = Omit<OfferPricing, "id" | "created_at"> &
  Partial<Pick<OfferPricing, "id" | "created_at">>;

export type DynamicPricingInsert = Omit<DynamicPricing, "id" | "created_at"> &
  Partial<Pick<DynamicPricing, "id" | "created_at">>;

export type OfferMediaInsert = Omit<OfferMedia, "id" | "created_at"> &
  Partial<Pick<OfferMedia, "id" | "created_at">>;

export type LaneInsert = Omit<Lane, "id" | "created_at"> &
  Partial<Pick<Lane, "id" | "created_at">>;

export type BusinessHoursInsert = Omit<BusinessHours, "id"> &
  Partial<Pick<BusinessHours, "id">>;

export type ClosedDateInsert = Omit<ClosedDate, "id" | "created_at"> &
  Partial<Pick<ClosedDate, "id" | "created_at">>;

export type BookingInsert = Omit<Booking, "id" | "created_at" | "updated_at"> &
  Partial<Pick<Booking, "id" | "created_at" | "updated_at">>;

export type BookingLaneInsert = Omit<BookingLane, "id" | "created_at"> &
  Partial<Pick<BookingLane, "id" | "created_at">>;

export type FaqItemInsert = Omit<FaqItem, "id" | "created_at"> &
  Partial<Pick<FaqItem, "id" | "created_at">>;

export type BlogPostInsert = Omit<
  BlogPost,
  "id" | "created_at" | "updated_at"
> &
  Partial<Pick<BlogPost, "id" | "created_at" | "updated_at">>;

export type TiktokEmbedInsert = Omit<TiktokEmbed, "id" | "created_at"> &
  Partial<Pick<TiktokEmbed, "id" | "created_at">>;

export type SiteSettingInsert = Omit<SiteSetting, "updated_at"> &
  Partial<Pick<SiteSetting, "updated_at">>;

export type GiftVoucherInsert = Omit<GiftVoucher, "id" | "created_at"> &
  Partial<Pick<GiftVoucher, "id" | "created_at">>;

// ---------- Update types ----------

export type OfferUpdate = Partial<OfferInsert>;
export type OfferPricingUpdate = Partial<OfferPricingInsert>;
export type DynamicPricingUpdate = Partial<DynamicPricingInsert>;
export type OfferMediaUpdate = Partial<OfferMediaInsert>;
export type LaneUpdate = Partial<LaneInsert>;
export type BusinessHoursUpdate = Partial<BusinessHoursInsert>;
export type ClosedDateUpdate = Partial<ClosedDateInsert>;
export type BookingUpdate = Partial<BookingInsert>;
export type BookingLaneUpdate = Partial<BookingLaneInsert>;
export type FaqItemUpdate = Partial<FaqItemInsert>;
export type BlogPostUpdate = Partial<BlogPostInsert>;
export type TiktokEmbedUpdate = Partial<TiktokEmbedInsert>;
export type SiteSettingUpdate = Partial<SiteSettingInsert>;
export type GiftVoucherUpdate = Partial<GiftVoucherInsert>;

// ---------- Database type for Supabase client ----------

export type Database = {
  public: {
    Tables: {
      offers: {
        Row: Offer;
        Insert: OfferInsert;
        Update: OfferUpdate;
      };
      offer_pricing: {
        Row: OfferPricing;
        Insert: OfferPricingInsert;
        Update: OfferPricingUpdate;
      };
      dynamic_pricing: {
        Row: DynamicPricing;
        Insert: DynamicPricingInsert;
        Update: DynamicPricingUpdate;
      };
      offer_media: {
        Row: OfferMedia;
        Insert: OfferMediaInsert;
        Update: OfferMediaUpdate;
      };
      lanes: {
        Row: Lane;
        Insert: LaneInsert;
        Update: LaneUpdate;
      };
      business_hours: {
        Row: BusinessHours;
        Insert: BusinessHoursInsert;
        Update: BusinessHoursUpdate;
      };
      closed_dates: {
        Row: ClosedDate;
        Insert: ClosedDateInsert;
        Update: ClosedDateUpdate;
      };
      bookings: {
        Row: Booking;
        Insert: BookingInsert;
        Update: BookingUpdate;
      };
      booking_lanes: {
        Row: BookingLane;
        Insert: BookingLaneInsert;
        Update: BookingLaneUpdate;
      };
      faq_items: {
        Row: FaqItem;
        Insert: FaqItemInsert;
        Update: FaqItemUpdate;
      };
      blog_posts: {
        Row: BlogPost;
        Insert: BlogPostInsert;
        Update: BlogPostUpdate;
      };
      tiktok_embeds: {
        Row: TiktokEmbed;
        Insert: TiktokEmbedInsert;
        Update: TiktokEmbedUpdate;
      };
      site_settings: {
        Row: SiteSetting;
        Insert: SiteSettingInsert;
        Update: SiteSettingUpdate;
      };
      gift_vouchers: {
        Row: GiftVoucher;
        Insert: GiftVoucherInsert;
        Update: GiftVoucherUpdate;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
