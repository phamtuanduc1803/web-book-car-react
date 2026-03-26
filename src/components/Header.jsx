import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Trang Chủ' },
  { to: '/gioi-thieu', label: 'Giới Thiệu' },
  { to: '/lich-trinh', label: 'Lịch trình xe chạy' },
  { to: '/dia-chi-sdt', label: 'SĐT – Địa chỉ' },
  { to: '/tin-tuc', label: 'Tin Tức' },
  { to: '/lien-he', label: 'Liên Hệ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-text">ANHHUY92</span>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-phone">
          <span>📞</span>
          <a href="tel:0967046789" className="phone-number">0967046789</a>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
