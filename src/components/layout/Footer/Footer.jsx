import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()
  const routes = t('footer.routes', { returnObjects: true })

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles['footer__grid']}`}>
        <div>
          <span className={styles['footer__logo-text']}>ANHHUY92</span>
          <p className={styles['footer__desc']}>{t('footer.desc')}</p>
          <div className={styles['footer__hotline']}>
            <span>{t('footer.hotline')}</span>
            <a href="tel:0967046789" className={styles['footer__hotline-link']}>0967046789</a>
          </div>
        </div>

        <div>
          <h4 className={styles['footer__col-heading']}>{t('footer.quickLinks')}</h4>
          <ul className={styles['footer__link-list']}>
            <li className={styles['footer__link-item']}><Link to="/" className={styles['footer__link-item-anchor']}>{t('footer.nav.home')}</Link></li>
            <li className={styles['footer__link-item']}><Link to="/about" className={styles['footer__link-item-anchor']}>{t('footer.nav.about')}</Link></li>
            <li className={styles['footer__link-item']}><Link to="/schedule" className={styles['footer__link-item-anchor']}>{t('footer.nav.schedule')}</Link></li>
            <li className={styles['footer__link-item']}><Link to="/address" className={styles['footer__link-item-anchor']}>{t('footer.nav.address')}</Link></li>
            <li className={styles['footer__link-item']}><Link to="/news" className={styles['footer__link-item-anchor']}>{t('footer.nav.news')}</Link></li>
            <li className={styles['footer__link-item']}><Link to="/contact" className={styles['footer__link-item-anchor']}>{t('footer.nav.contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles['footer__col-heading']}>{t('footer.popularRoutes')}</h4>
          <ul className={styles['footer__link-list']}>
            {routes.map((r) => (
              <li key={r} className={styles['footer__link-item']}>{r}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles['footer__col-heading']}>{t('footer.contact')}</h4>
          <ul className={styles['footer__link-list']}>
            <li className={styles['footer__link-item']}>📞 <a href="tel:0967046789" className={styles['footer__link-item-anchor']}>0967046789</a></li>
            <li className={styles['footer__link-item']}>📍 113 - 115 Trần Khát Chân, Hai Bà Trưng, Hà Nội</li>
            <li className={styles['footer__link-item']}>📍 Số 8 Khuất Duy Tiến, Nhân Chính, Thanh Xuân, Hà Nội</li>
          </ul>
        </div>
      </div>

      <div className={styles['footer__bottom']}>
        <div className="container">
          <p className={styles['footer__copyright']}>
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
