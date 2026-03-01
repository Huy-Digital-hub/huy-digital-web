import { AbschnittContainer } from "@/components/ui/AbschnittContainer";

export function TelegramCtaSektion() {
  return (
    <section className="relative overflow-hidden bg-huy-bg-alt py-24 md:py-32">
      {/* Hintergrund-Akzent */}
      <div className="absolute inset-0 bg-gradient-to-r from-huy-gold/5 via-transparent to-huy-gold/5" />

      <AbschnittContainer>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* Telegram Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-huy-gold/10">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-huy-gold"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-huy-text md:text-4xl">
            Kostenlose Trading-News
            <span className="text-huy-gold"> in Echtzeit</span>
          </h2>

          <p className="mt-4 text-lg text-huy-muted">
            Erhalte marktrelevante Nachrichten direkt auf dein Telegram —
            schneller als jeder News-Feed. Hunderte Trader vertrauen bereits auf
            unseren News Bot.
          </p>

          <div className="mt-8">
            <a
              href="https://t.me/trading_news_deutsch"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-8 py-3 text-lg"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              @trading_news_deutsch beitreten
            </a>
          </div>

          <p className="mt-4 text-sm text-huy-muted">
            100% kostenlos — kein Abo nötig
          </p>
        </div>
      </AbschnittContainer>
    </section>
  );
}
