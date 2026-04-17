import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Header.module.css'

const LANGS = [
  { code: 'vi', flag: '🇻🇳', labelKey: 'header.langVi' },
  { code: 'en', flag: '🇬🇧', labelKey: 'header.langEn' },
]

export default function Header() {
  const { t, i18n } = useTranslation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const currentLang = LANGS.find((l) => l.code === i18n.language) ?? LANGS[0]

  function handleLangSelect(code) {
    i18n.changeLanguage(code)
    localStorage.setItem('i18n_lang', code)
    setLangOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles['header__inner']}`}>

        {/* ── Logo ────────────────────── */}
        <Link to="/" className={styles['header__logo']}>ANHHUY92</Link>

        {/* ── Spacer ──────────────────── */}
        <div className={styles['header__spacer']} />

        {/* ── Auth ────────────────────── */}
        {isLoggedIn ? (
          <button
            className={`${styles['header__auth-btn']} ${styles['header__auth-btn--logout']}`}
            onClick={() => setIsLoggedIn(false)}
          >
            <span className={styles['header__btn-icon']}>👤</span>
            <span className={styles['header__btn-label']}>{t('header.logout')}</span>
          </button>
        ) : (
          <button
            className={styles['header__auth-btn']}
            onClick={() => setIsLoggedIn(true)}
          >
            <span className={styles['header__btn-icon']}>👤</span>
            <span className={styles['header__btn-label']}>{t('header.login')}</span>
          </button>
        )}

        {/* ── Language selector ────────── */}
        <div className={styles['header__lang']}>
          <button
            className={styles['header__lang-trigger']}
            onClick={() => setLangOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
          >
            <span>{currentLang.flag}</span>
            <span className={styles['header__lang-label']}>{t(currentLang.labelKey)}</span>
            <span className={`${styles['header__lang-arrow']} ${langOpen ? styles['header__lang-arrow--open'] : ''}`}>▾</span>
          </button>

          {langOpen && (
            <ul className={styles['header__lang-dropdown']} role="listbox">
              {LANGS.map((l) => (
                <li
                  key={l.code}
                  role="option"
                  aria-selected={l.code === i18n.language}
                  className={`${styles['header__lang-option']} ${l.code === i18n.language ? styles['header__lang-option--active'] : ''}`}
                  onClick={() => handleLangSelect(l.code)}
                >
                  {l.flag} {t(l.labelKey)}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </header>
  )
}
