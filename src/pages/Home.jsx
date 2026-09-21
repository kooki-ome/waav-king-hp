import { Link } from 'react-router-dom'

const mvv = [
  {
    label: 'MISSION',
    text: '挑戦の機会を創出し、人の可能性を最大化する。',
  },
  {
    label: 'VISION',
    text: '挑戦と成長を当たり前に。',
  },
  {
    label: 'VALUE',
    text: '挑戦の体現者であり、最高の伴走者であれ。',
  },
]

const cards = [
  {
    title: 'コンテストについて',
    to: '/contest',
    image: '/images/photo-1.webp',
    alt: 'コンテストの様子',
    imageLeft: true,
  },
  {
    title: 'KINGについて',
    to: '/about',
    image: '/images/photo-2.webp',
    alt: '幹部写真',
    imageLeft: false,
  },
  {
    title: '協賛企業の皆様',
    to: '/sponsorship',
    image: '/images/photo-3.webp',
    alt: '活動の様子',
    imageLeft: true,
  },
  {
    title: '過去のコンテストについて',
    to: '/past',
    image: '/images/photo-4.webp',
    alt: '幹部写真',
    imageLeft: false,
  },
]

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-20 pt-10 lg:px-16 lg:pt-16">
        <img
          src="/images/bird.webp"
          alt=""
          className="pointer-events-none absolute -right-8 top-8 w-[42vw] max-w-[520px] min-w-[220px] select-none lg:right-0 lg:top-6"
        />
        <div className="relative max-w-3xl">
          <h1 className="font-display text-[40px] font-bold leading-none tracking-[-0.02em] text-black sm:text-6xl lg:text-[64px]">
            Business Contest KING
          </h1>
          <p className="mt-6 font-serif-jp text-[22px] font-bold tracking-[0.1em] sm:text-[28px]">
            Since 1996
          </p>
          <p className="mt-4 font-serif-jp text-[26px] font-bold leading-snug tracking-[0.08em] sm:text-[32px]">
            学生による学生のための
            <br />
            ビジネスコンテスト
          </p>

          <dl className="mt-10 space-y-4">
            {mvv.map((item) => (
              <div key={item.label}>
                <dt className="font-serif-jp text-xl font-semibold sm:text-2xl">{item.label}</dt>
                <dd className="mt-1 font-serif-jp text-lg font-bold tracking-wide sm:text-xl">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 py-20 text-center lg:px-16">
        <h2 className="font-serif-jp text-[28px] font-semibold leading-snug sm:text-4xl lg:text-[48px]">
          私たちは、東大を拠点に活動する
          <br />
          日本最大級のビジネスコンテスト運営団体です。
        </h2>
        <div className="mx-auto mt-10 max-w-3xl space-y-6 font-serif-jp text-base leading-8 sm:text-lg">
          <p>
            私たちBusiness Contest KING 実行委員会は年５回、全国各地から参加者が集い、学生による学生のためのビジネスコンテストを開催しています。
          </p>
          <p>全国各地から集まる累計400名以上の学生は、将来のビジネスリーダーとなりうる存在です。</p>
          <p>そんな彼らが6日間かけて切磋琢磨し合う環境。それを創り出すのが私たちの使命です。</p>
        </div>
      </section>

      <section className="bg-black">
        {cards.map((card) => (
          <article key={card.title} className="relative min-h-[420px] overflow-hidden lg:min-h-[520px]">
            <img
              src={card.image}
              alt={card.alt}
              className={`absolute inset-0 h-full w-full object-cover lg:inset-y-0 lg:h-full lg:w-[62%] ${card.imageLeft ? 'lg:left-0' : 'lg:right-0'}`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent lg:inset-y-0 lg:w-[45%] lg:via-white ${card.imageLeft ? 'lg:right-0 lg:left-auto lg:bg-gradient-to-l' : 'lg:left-0 lg:bg-gradient-to-r'}`}
            />
            <div
              className={`relative z-10 flex min-h-[420px] items-end px-6 py-10 lg:min-h-[520px] lg:items-center lg:px-16 ${card.imageLeft ? 'lg:justify-end' : 'lg:justify-start'}`}
            >
              <div className="max-w-md">
                <h3 className="font-serif-jp text-[28px] font-semibold text-black sm:text-4xl">
                  {card.title}
                </h3>
                <Link
                  to={card.to}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-[10px] bg-[#FF8A00] px-8 py-5 font-serif-jp text-xl font-bold tracking-wide text-white"
                >
                  詳細はこちら
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Home
