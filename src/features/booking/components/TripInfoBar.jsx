import { useTranslation } from 'react-i18next'
import styles from './TripInfoBar.module.css'

export default function TripInfoBar({ from, to, depart, arrive, duration, priceStr }) {
  const { t } = useTranslation()

  return (
    <div className={styles['trip-info']}>
      <div className={styles['trip-info__route']}>
        <span className={styles['trip-info__city']}>{from}</span>
        <span className={styles['trip-info__arrow']}>→</span>
        <span className={styles['trip-info__city']}>{to}</span>
      </div>
      <div className={styles['trip-info__meta']}>
        <span>🕐 {depart} – {arrive}</span>
        <span>⏱ {duration}</span>
        <span className={styles['trip-info__price']}>{priceStr} / {t('booking.perSeat')}</span>
      </div>
    </div>
  )
}
