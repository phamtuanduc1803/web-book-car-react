import { useTranslation } from 'react-i18next'
import styles from './NewsPage.module.css'

const categoryColors = {
  announcement: '#3b82f6',
  news: '#10b981',
  promotion: '#f59e0b',
  guide: '#8b5cf6',
}

export default function NewsPage() {
  const { t } = useTranslation()
  const newsItems = t('news.items', { returnObjects: true })

  return (
    <div>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
        <div className="container">
          <h1>{t('news.pageTitle')}</h1>
          <p>{t('news.pageSubtitle')}</p>
        </div>
      </div>

      <div className="container page-content">
        <div className={styles['news-grid']}>
          {newsItems.map((n) => (
            <div className={styles['news-card']} key={n.title}>
              <div className={styles['news-card__img-wrap']}>
                <img src={n.img} alt={n.title} className={styles['news-card__image']} />
                <span
                  className={styles['news-card__category-badge']}
                  style={{ background: categoryColors[n.category] || '#666' }}
                >
                  {t(`news.categories.${n.category}`)}
                </span>
              </div>
              <div className={styles['news-card__body']}>
                <div className={styles['news-card__date']}>📅 {n.date}</div>
                <h3 className={styles['news-card__title']}>{n.title}</h3>
                <p className={styles['news-card__excerpt']}>{n.excerpt}</p>
                <span className={styles['news-card__read-more']}>{t('news.readMore')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
