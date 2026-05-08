import { ExternalLink } from 'lucide-react';

const partners = [
  {
    name: 'OddballTrip',
    url: 'https://www.oddballtrip.com',
    description: 'Unique travel experiences and offbeat adventures around the world.',
    badge: 'Travel Partner',
    accentColor: '#00d4ff',
  },
];

export default function Partners() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
            Partners
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full max-w-sm items-center gap-4 rounded-2xl border border-border/40 bg-[#111118] px-6 py-5 transition-all duration-300 hover:border-[#00d4ff]/30 hover:shadow-[0_0_24px_rgba(0,212,255,0.08)]"
            >
              {/* Logo placeholder */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-lg font-bold text-[#00d4ff]">
                OT
              </div>

              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white transition-colors group-hover:text-[#00d4ff]">
                    {partner.name}
                  </span>
                  <span className="rounded-full bg-[#00d4ff]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#00d4ff]">
                    {partner.badge}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </div>

              <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-[#00d4ff]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
