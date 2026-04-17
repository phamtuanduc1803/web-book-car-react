import { useTranslation } from 'react-i18next'
import styles from './AddressPage.module.css'

function OfficeGroup({ title, offices }) {
  const { t } = useTranslation()

  return (
    <div className={styles['office-group']}>
      <h2 className={styles['office-group__title']}>{title}</h2>
      <div className={styles['office-group__cards']}>
        {offices.map((o) => (
          <div className={styles['office-card']} key={o.name}>
            <h3 className={styles['office-card__name']}>📍 {o.name}</h3>
            <div className={styles['office-card__detail']}>🏠 <strong>{t('address.officeCard.address')}</strong> {o.address}</div>
            <div className={styles['office-card__detail']}>
              📞 <strong>{t('address.officeCard.phone')}</strong>{' '}
              <a href={`tel:${o.phone.replace(/\D/g, '')}`} className={styles['office-card__detail-link']}>{o.phone}</a>
            </div>
            <div className={styles['office-card__detail']}>🕐 <strong>{t('address.officeCard.hours')}</strong> {o.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AddressPage() {
  const { t } = useTranslation()
  const hotlines = t('address.hotlines', { returnObjects: true })
  const hanoiOffices = t('address.hanoiOffices', { returnObjects: true })

  return (
    <div>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }}>
        <div className="container">
          <h1 style={{ color: '#000' }}>{t('address.pageTitle')}</h1>
          <p style={{ color: '#333' }}>{t('address.pageSubtitle')}</p>
        </div>
      </div>

      <div className="container page-content">
        <div className={styles['hotline-banner']}>
          {hotlines.map((h, i) => (
            <div key={h.label} style={{ display: 'contents' }}>
              {i > 0 && <div className={styles['hotline-banner__divider']}></div>}
              <div className={styles['hotline-banner__item']}>
                <span className={styles['hotline-banner__icon']}>📞</span>
                <div>
                  <div className={styles['hotline-banner__label']}>{h.label}</div>
                  <a href={`tel:${h.number}`} className={styles['hotline-banner__number']}>{h.number}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <OfficeGroup title={t('address.hanoiOfficesTitle')} offices={hanoiOffices} />

        <div className={styles['map-section']}>
          <h2 className="section-title">{t('address.map.title')}</h2>
          <div
            className={styles['map-section__placeholder']}
            dangerouslySetInnerHTML={{ __html: t('address.map.placeholder') }}
          />
        </div>
      </div>
    </div>
  )
}
