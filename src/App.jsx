import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MarqueeBanner from './components/MarqueeBanner'
import FloatContact from './components/FloatContact'
import Home from './pages/Home'
import GioiThieu from './pages/GioiThieu'
import LichTrinh from './pages/LichTrinh'
import DiaChiSDT from './pages/DiaChiSDT'
import TinTuc from './pages/TinTuc'
import LienHe from './pages/LienHe'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/web-book-car-react">
      <MarqueeBanner />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<GioiThieu />} />
          <Route path="/lich-trinh" element={<LichTrinh />} />
          <Route path="/dia-chi-sdt" element={<DiaChiSDT />} />
          <Route path="/tin-tuc" element={<TinTuc />} />
          <Route path="/lien-he" element={<LienHe />} />
        </Routes>
      </main>
      <Footer />
      <FloatContact />
    </BrowserRouter>
  )
}

export default App
