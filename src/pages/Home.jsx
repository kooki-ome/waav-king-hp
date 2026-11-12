import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ScrollFlow from '../components/ScrollFlow.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import PillButton from '../components/ui/PillButton.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import WinterBanner from '../components/WinterBanner.jsx'

// ※ 文言は現行サイト（26代）のもの。新代の情報が届き次第差し替える。
const mvv = [
  { label: 'MISSION', text: '挑戦の機会を創出し、人の可能性を最大化する。' },
  { label: 'VISION', text: '挑戦と成長を当たり前に。' },
  { label: 'VALUE', text: '挑戦の体現者であり、最高の伴走者であれ。' },
]

const features = [
  { no: '01', title: '多様な学生', text: '初対面かつ多様な属性の人と同じチームになるようにチームが組まれます。', image: '/images/photo-1.webp' },
  { no: '02', title: 'グラウンドルール', text: '大学・学部・学年の公開と敬語の使用を禁止し、遠慮のない議論ができるようにしています。', image: '/images/photo-2.webp' },
  { no: '03', title: '完全初対面制', text: '必ず初対面の人が同じチームになります。初対面の仲間とプランを作り上げる体験が魅力です。', image: '/images/photo-3.webp' },
  { no: '04', title: '短期集中型', text: '短期間で0から1を作り上げます。短期間だからこそ本気で向き合えます。', image: '/images/photo-4.webp' },
  { no: '05', title: 'TF', text: '知識面の補助やファシリテーションで、チームのプランニングを支えます。', image: '/images/photo-1.webp' },
  { no: '06', title: 'CS', text: '目標設定の補助や客観的な分析で成長とチームビルディングを支え、心身のケアを行います。', image: '/images/photo-2.webp' },
]

const links = [
  { title: '過去のコンテスト', en: 'ARCHIVE', to: '/past', image: '/images/photo-3.webp', text: '1996年から続くコンテストの記録。' },
  { title: '協賛企業の皆様', en: 'SPONSORS', to: '/sponsorship', image: '/images/photo-4.webp', text: 'KINGを支えてくださる企業の皆様。' },
]

function FeatureList() {
  const [active, setActive] = useState(0)
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
      {/* 左: ホバーで切り替わる写真 */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink lg:aspect-auto lg:min-h-[560px]">
        {features.map((f, i) => (
          <img
            key={f.no}
            src={f.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <p className="font-en text-sm font-semibold tracking-[0.2em] text-white/70">{features[active].no}</p>
          <p key={active} className="feature-title mt-2 text-3xl font-black">
            {features[active].title}
          </p>
          <p className="mt-3 text-sm leading-7 text-white/85">{features[active].text}</p>
        </div>
      </div>
      {/* 右: 番号付きリスト */}
      <ul className="divide-y divide-ink/10 rounded-3xl bg-white px-2 shadow-sm lg:px-8">
        {features.map((f, i) => (
          <li key={f.no}>
            <Link
              to="/contest"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`group flex items-center gap-6 py-6 transition-colors ${i === active ? 'text-king' : 'text-ink'}`}
            >
              <span className="font-en text-xs font-semibold tracking-[0.2em] text-ink-soft/60">{f.no}</span>
              <span className="text-lg font-bold lg:text-xl">{f.title}</span>
              <span className="ml-auto text-king transition-transform group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <style>{`
        @keyframes feature-in { from { opacity: 0; filter: blur(8px); transform: translateY(8px); } to { opacity: 1; filter: blur(0); transform: none; } }
        .feature-title { animation: feature-in .6s ease-out both; }
      `}</style>
    </div>
  )
}

function Home() {
  return (
    <main>
      <Hero />

      {/* 次のコンテスト（開催期間を過ぎると自動で消える） */}
      <WinterBanner />

      {/* ABOUT: 赤ベタ */}
      <section className="bg-king px-6 py-24 text-white lg:px-16 lg:py-32">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <SectionLabel tone="white">ABOUT US</SectionLabel>
          <h2 className="mt-8 text-[32px] font-black leading-tight sm:text-5xl lg:text-[56px]">
            挑戦の機会を創出し、
            <br />
            人の可能性を最大化する。
          </h2>
          <p className="mt-4 font-en text-sm font-semibold tracking-[0.15em] text-white/80">
            CREATE OPPORTUNITIES. MAXIMIZE POTENTIAL.
          </p>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-8 sm:text-lg">
            私たちBusiness Contest
            KING実行委員会は、東大を拠点に活動する日本最大級のビジネスコンテスト運営団体です。年5回、全国各地から参加者が集い、学生による学生のためのビジネスコンテストを開催しています。
          </p>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {mvv.map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/25 p-6">
                <p className="font-en text-xs font-semibold tracking-[0.2em] text-white/70">{m.label}</p>
                <p className="mt-3 text-lg font-bold leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <PillButton to="/about" variant="white">
              私たちについて
            </PillButton>
          </div>
        </ScrollReveal>
      </section>

      {/* CONTEST: 白 */}
      <section className="bg-paper px-6 py-24 lg:px-16 lg:py-32">
        <ScrollReveal className="mx-auto max-w-6xl text-center">
          <SectionLabel>OUR CONTEST</SectionLabel>
          <h2 className="mt-8 text-[32px] font-black leading-tight text-ink sm:text-5xl">
            他にはない、<span className="text-king">6つの特徴</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8">
            初対面の仲間と、短期間で0から1をつくる。
            <br className="hidden sm:block" />
            KINGのビジコンには、他のビジコンにはない6つの特徴があります。
          </p>
        </ScrollReveal>
        <ScrollReveal className="mx-auto mt-14 max-w-6xl" stagger={0}>
          <FeatureList />
        </ScrollReveal>
        <ScrollReveal className="mx-auto mt-12 max-w-6xl text-center">
          <PillButton to="/contest">コンテストについて</PillButton>
        </ScrollReveal>
      </section>

      {/* TEAM: 黒 */}
      <section className="bg-ink px-6 py-24 text-white lg:px-16 lg:py-32">
        <ScrollReveal className="mx-auto max-w-6xl">
          <SectionLabel tone="white">OUR TEAM</SectionLabel>
          <h2 className="mt-8 text-[32px] font-black leading-tight sm:text-5xl">
            KINGをつくる、
            <br />
            106人の学生。
          </h2>
          <p className="mt-6 max-w-xl leading-8 text-white/80">
            運営統括局・渉外局・広報局・開発局の4局体制。KINGer（弊団体スタッフ）はいずれか1つの局に所属し、1年半という短い期間で最高のコンテストをつくり上げます。
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {['運営統括局', '渉外局', '広報局', '開発局'].map((b) => (
              <div key={b} className="rounded-2xl border border-white/15 p-5 text-center font-bold">
                {b}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <PillButton to="/about" variant="outline">
              局・幹部紹介へ
            </PillButton>
          </div>
        </ScrollReveal>
      </section>

      {/* 2枚カード */}
      <section className="bg-white px-6 py-24 lg:px-16">
        <ScrollReveal className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative block aspect-[4/3] overflow-hidden rounded-3xl bg-ink text-white"
            >
              <img
                src={l.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-en text-xs font-semibold tracking-[0.2em] text-white/70">{l.en}</p>
                <p className="mt-2 text-3xl font-black">{l.title}</p>
                <p className="mt-2 text-sm text-white/85">{l.text}</p>
              </div>
            </Link>
          ))}
        </ScrollReveal>
      </section>

      <ScrollFlow text="BUSINESS CONTEST KING — SINCE 1996 —" className="bg-white text-king/10" />

      {/* CTA */}
      <section className="bg-king px-6 py-24 text-center text-white lg:px-16">
        <ScrollReveal className="mx-auto max-w-3xl">
          <SectionLabel tone="white">JOIN US</SectionLabel>
          <h2 className="mt-8 text-[32px] font-black leading-tight sm:text-5xl">挑戦は、ここから始まる。</h2>
          <p className="mt-6 leading-8 text-white/85">
            コンテストへの参加も、運営メンバーとしての活動も。
            <br className="hidden sm:block" />
            あなたの挑戦を待っています。
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PillButton to="/recruit" variant="white">
              秋新歓特設ページ
            </PillButton>
            <PillButton to="/contact" variant="outline">
              お問い合わせ
            </PillButton>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}

export default Home
