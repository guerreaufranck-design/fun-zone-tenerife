import Link from 'next/link';

const languages = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'nl', flag: '🇳🇱', label: 'Nederlands' },
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
];

export default function WaiverLanguageSelector() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-[3px] text-[#00b4d8]">
          AXE THROWING
        </h1>
        <p className="text-xs tracking-[5px] text-[#00b4d8]/60 uppercase mt-1">
          Tenerife
        </p>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-white mb-8 text-center">
        Select your language / Elige tu idioma
      </h2>

      {/* Flags Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md">
        {languages.map((lang) => (
          <Link
            key={lang.code}
            href={`/${lang.code}/waiver`}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-[#00b4d8]/50 hover:bg-[#00b4d8]/5 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:scale-105 active:scale-95"
          >
            <span className="text-5xl">{lang.flag}</span>
            <span className="text-sm font-medium text-white/80">
              {lang.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-12 text-xs text-white/30 text-center">
        Safety Waiver / Decharge de Responsabilite
      </p>
    </div>
  );
}
