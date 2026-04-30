import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import {
  achievementCases,
  caseStudyResults,
  channelStats,
  members,
  serviceCards,
} from "@/lib/forever-content";

type Theme = "dark" | "light";

const themeClass = {
  dark: {
    section: "text-white",
    heading: "text-white",
    muted: "text-gray-300",
    card: "border border-white/10 bg-white/5 backdrop-blur-sm",
    subCard: "border border-white/10 bg-black/20",
    accent: "text-blue-300",
  },
  light: {
    section: "bg-white text-gray-900",
    heading: "text-gray-900",
    muted: "text-gray-700",
    card: "border border-gray-200 bg-white shadow-sm",
    subCard: "border border-gray-200 bg-gray-50",
    accent: "text-blue-700",
  },
};

function SectionHeading({
  label,
  title,
  description,
  theme = "dark",
}: {
  label: string;
  title: string;
  description?: string;
  theme?: Theme;
}) {
  const styles = themeClass[theme];

  return (
    <div className="mb-10">
      <p className={`text-sm font-bold tracking-widest ${styles.accent}`}>
        {label}
      </p>
      <h2 className={`mt-3 text-3xl md:text-4xl font-bold ${styles.heading}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-3xl text-base leading-relaxed ${styles.muted}`}>
          {description}
        </p>
      )}
    </div>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-sm leading-relaxed">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
      <span>{children}</span>
    </div>
  );
}

type ResultCase = {
  tag: string;
  title: string;
  challenge: string;
  action: string;
  results: Array<{ value: string; label: string }>;
  href?: string | null;
};

function ResultCardsGrid({
  cases,
  styles,
}: {
  cases: ResultCase[];
  styles: (typeof themeClass)[Theme];
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {cases.map((item) => (
        <article key={item.title} className={`rounded-lg p-6 ${styles.card}`}>
          <div className="flex items-center justify-between gap-4">
            <span className={`text-xs font-bold ${styles.accent}`}>{item.tag}</span>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-xs font-bold ${styles.accent} hover:underline`}
              >
                詳細
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
          <h3 className={`mt-3 text-xl font-bold ${styles.heading}`}>{item.title}</h3>
          <p className={`mt-4 text-sm leading-relaxed ${styles.muted}`}>
            {item.challenge}
          </p>
          <p className={`mt-3 text-sm leading-relaxed ${styles.muted}`}>
            {item.action}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {item.results.map((result) => (
              <div key={result.label} className={`rounded-lg p-4 ${styles.subCard}`}>
                <div className={`text-2xl font-bold ${styles.heading}`}>
                  {result.value}
                </div>
                <div className={`mt-1 text-xs ${styles.muted}`}>{result.label}</div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function HomeIntegrationSections() {
  return (
    <div className="mt-24 space-y-24">
      <section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="SERVICE"
            title="4つのサービスで発信力を事業成長につなげる"
            description="よーたろch PR、経営者ブランディング、チームコーチング、商品PR・Web制作を目的に合わせて組み合わせます。"
          />
          <Link
            href="/service"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-blue-400 px-5 py-3 text-sm font-bold text-blue-300 transition hover:bg-blue-400 hover:text-white md:self-auto"
          >
            サービスを見る
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="text-xs font-bold text-blue-300">{service.label}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <AchievementSection theme="dark" compact />

      <MembersSection theme="dark" compact />
    </div>
  );
}

export function ServiceOverviewSection() {
  return (
    <section
      id="service-overview"
      className="space-y-10 rounded-2xl border border-gray-200 bg-white/95 p-6 text-gray-900 shadow-xl shadow-slate-900/10 md:p-8"
    >
      <SectionHeading
        label="SERVICE"
        title="4つのサービスで発信力を事業成長につなげる"
        description="トップページと同じ4分類を軸に、短期の認知拡大から中長期の内製化、制作支援まで一貫して設計します。"
        theme="light"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {channelStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-slate-800 bg-slate-900 p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-bold text-blue-200">{stat.value}</div>
            <div className="mt-2 text-sm font-medium text-gray-100">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {serviceCards.map((service, index) => (
          <article key={service.title} className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-bold text-blue-700">{service.label}</p>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-blue-200">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-2 text-2xl font-bold text-gray-950">{service.title}</h3>
            <p className="mt-3 text-base font-bold leading-relaxed text-slate-800">
              {service.headline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              {service.description}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              {service.detail}
            </p>
            {service.media.length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.media.map((media) => (
                  <div
                    key={media.src}
                    className="flex min-h-[8rem] items-center justify-center rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={media.width}
                      height={media.height}
                      className="max-h-40 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 grid gap-3 text-gray-800">
              {service.points.map((point) => (
                <CheckItem key={point}>{point}</CheckItem>
              ))}
            </div>
            {service.link && (
              <a
                href={service.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 hover:underline"
              >
                {service.link.label}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export function AchievementSection({
  theme = "dark",
  compact = false,
}: {
  theme?: Theme;
  compact?: boolean;
}) {
  const styles = themeClass[theme];
  const cases = compact ? achievementCases.slice(0, 4) : achievementCases;
  const sectionClass =
    theme === "light"
      ? "rounded-2xl border border-gray-200 bg-white/95 p-6 text-gray-900 shadow-xl shadow-slate-900/10 md:p-8"
      : styles.section;

  return (
    <section className={sectionClass}>
      <SectionHeading
        label="RESULTS"
        title="支援実績"
        description="PR動画とSNS運用支援の両面で、認知・問い合わせ・売上につながる成果を出しています。"
        theme={theme}
      />
      <ResultCardsGrid cases={cases} styles={styles} />
    </section>
  );
}

export function CaseStudyResultsSection({ theme = "light" }: { theme?: Theme }) {
  const styles = themeClass[theme];
  const sectionClass =
    theme === "light"
      ? "rounded-2xl border border-gray-200 bg-white/95 p-6 text-gray-900 shadow-xl shadow-slate-900/10 md:p-8"
      : styles.section;

  return (
    <section className={sectionClass}>
      <SectionHeading
        label="RESULTS"
        title="その他の支援実績"
        description="商品PR、チャンネル運用、クリエイター育成まで、既存実績も同じフォーマットで整理しています。"
        theme={theme}
      />
      <ResultCardsGrid cases={caseStudyResults} styles={styles} />
    </section>
  );
}

export function MembersSection({
  theme = "light",
  compact = false,
}: {
  theme?: Theme;
  compact?: boolean;
}) {
  const styles = themeClass[theme];

  return (
    <section className={`${theme === "light" ? "py-24" : ""} ${styles.section}`}>
      <div className={theme === "light" ? "container mx-auto px-4" : ""}>
        <SectionHeading
          label="MEMBER"
          title="主要メンバー"
          description="SNS・事業開発・テクノロジーを横断し、戦略から実行まで伴走します。"
          theme={theme}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {members.map((member) => (
            <article key={member.name} className={`rounded-lg p-6 ${styles.card}`}>
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 bg-gray-800">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white/60">
                      {member.name.slice(0, 1)}
                    </div>
                  )}
                </div>
                <div>
                  <p className={`text-xs font-bold ${styles.accent}`}>{member.role}</p>
                  <h3 className={`mt-1 text-xl font-bold ${styles.heading}`}>{member.name}</h3>
                  <p className={`text-sm ${styles.muted}`}>{member.nameEn}</p>
                </div>
              </div>
              {!compact && (
                <div className={`mt-5 space-y-2 ${styles.muted}`}>
                  {member.description.map((line) => (
                    <CheckItem key={line}>{line}</CheckItem>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
