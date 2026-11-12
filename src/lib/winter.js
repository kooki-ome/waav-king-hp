// 2026 Winter の特設ページ（/winter/、React の外に置いた静的ページ）の情報。
// 日付で表示が切り替わり、開催最終日を過ぎると導線は自動で消える。
export const winter = {
  href: '/winter/',
  image: '/winter/eyecatch.jpg',
  earlyBirdEnd: new Date('2026-11-30T00:00:00+09:00'), // 早割 11/29（日）まで
  entryEnd: new Date('2026-12-14T00:00:00+09:00'), // 最終締切 12/13（日）まで
  eventEnd: new Date('2026-12-28T00:00:00+09:00'), // 開催 12/27（日）まで
}

// 今の時点で出す一言（期間外なら null）
export function winterStatus(now = new Date()) {
  if (now >= winter.eventEnd) return null
  if (now < winter.earlyBirdEnd) return { label: 'エントリー受付中', note: '早割は 11/29（日）まで' }
  if (now < winter.entryEnd) return { label: 'エントリー受付中', note: '締切は 12/13（日）' }
  return { label: 'まもなく開催', note: 'エントリーは締め切りました' }
}
