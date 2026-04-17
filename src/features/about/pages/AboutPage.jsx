import { useTranslation } from 'react-i18next'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  const { t } = useTranslation()

  const stats = t('about.stats', { returnObjects: true })
  const coreValues = t('about.values.items', { returnObjects: true })

  return (
    <div>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }}>
        <div className="container">
          <h1>{t('about.pageTitle')}</h1>
          <p>{t('about.pageSubtitle')}</p>
        </div>
      </div>

      <div className="container page-content">
        <div className={styles['about-grid']}>
          <div>
            <h2 className={styles['about-grid__text-heading']}>{t('about.heading')}</h2>
            <p className={styles['about-grid__text-para']}>{t('about.para1')}</p>
            <p className={styles['about-grid__text-para']}>{t('about.para2')}</p>
            <p className={styles['about-grid__text-para']}>{t('about.para3')}</p>
          </div>

          <div className={styles['about-grid__stats']}>
            {stats.map((s) => (
              <div className={styles['stat-card']} key={s.label}>
                <div className={styles['stat-card__number']}>{s.number}</div>
                <div className={styles['stat-card__label']}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles['values-section']}>
          <h2 className="section-title">{t('about.values.title')}</h2>
          <div className={styles['values-section__grid']}>
            {coreValues.map((v) => (
              <div className={styles['value-card']} key={v.title}>
                <div className={styles['value-card__icon']}>{v.icon}</div>
                <h3 className={styles['value-card__title']}>{v.title}</h3>
                <p className={styles['value-card__desc']}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles['mission-section']}>
          <h2 className={styles['mission-section__title']}>{t('about.mission.title')}</h2>
          <blockquote className={styles['mission-section__quote']}>
            {t('about.mission.quote')}
          </blockquote>
        </div>
      </div>
    </div>
  )
}
