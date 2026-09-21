import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <img
            src="/images/logo.png"
            alt="Business Contest KING 実行委員会 ロゴ"
            className="mb-6 w-full max-w-xl brightness-0 invert"
          />
          <p className="font-serif-jp text-sm leading-7">
            Business Contest KING 実行委員会
            <br />
            〒153-8902
            <br />
            東京都目黒区駒場3-8-1 東京大学学生会館
            <br />
            設立 1996年
            <br />
            代表　美和勇輝
            <br />
            構成員 106人
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-5">
            <a href="https://x.com/waav_king" target="_blank" rel="noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
                <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L4.5 22H1.23l8.03-9.17L1.5 2h6.76l4.66 6.18L18.244 2zm-1.16 18.16h1.8L7.02 3.74H5.08l12 16.42z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/businesscontest_king"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11.2 1.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6z" />
              </svg>
            </a>
            <a href="https://lin.ee/S3xJiLt" target="_blank" rel="noreferrer" aria-label="LINE">
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
                <path d="M19.7 4.6C17.9 3 15.1 2 12 2 6.5 2 2 5.6 2 10.1c0 4 3.6 7.4 8.4 8 .3 0 .8.2.9.5l.7 2.2c.1.3.4.3.7.2 2.9-1.2 6.3-3.1 8.6-5.4 2.3-2.3 2.4-4.6 1.4-6.5-.7-1.4-2-2.6-3-3.5zM8.2 12.6H6.6c-.3 0-.5-.2-.5-.5V8.8c0-.3.2-.5.5-.5s.5.2.5.5v2.8h1.1c.3 0 .5.2.5.5s-.2.5-.5.5zm2.4.1c-.3 0-.5-.2-.5-.5V8.8c0-.3.2-.5.5-.5s.5.2.5.5v3.4c0 .3-.2.5-.5.5zm4.6 0h-2.2c-.3 0-.5-.2-.5-.5V8.8c0-.3.2-.5.5-.5s.5.2.5.5v2.8h1.7c.3 0 .5.2.5.5s-.2.5-.5.5zm3.3-.1c-.3 0-.5-.2-.5-.4l-1.6-2.3V12.2c0 .3-.2.5-.5.5s-.5-.2-.5-.5V8.8c0-.3.2-.5.5-.4l1.6 2.3V8.8c0-.3.2-.5.5-.5s.5.2.5.5v3.4c0 .2-.2.4-.5.4z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col gap-2 font-serif-jp text-sm">
            <Link to="/law" className="underline-offset-4 hover:underline">
              特定商取引に基づく対応
            </Link>
            <a
              href="https://drive.google.com/file/d/1otbc8xAJUI4O406W_-sNBPcUBMmn3jEg/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
