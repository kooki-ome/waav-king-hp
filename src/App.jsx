import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Placeholder title="KINGについて" />} />
        <Route path="/contest" element={<Placeholder title="コンテスト" />} />
        <Route path="/past" element={<Placeholder title="過去のコンテストについて" />} />
        <Route path="/recruit" element={<Placeholder title="秋新歓特設ページ" />} />
        <Route path="/sponsorship" element={<Placeholder title="協賛企業の皆様" />} />
        <Route path="/contact" element={<Placeholder title="お問い合わせ" />} />
        <Route path="/law" element={<Placeholder title="特定商取引に基づく対応" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
