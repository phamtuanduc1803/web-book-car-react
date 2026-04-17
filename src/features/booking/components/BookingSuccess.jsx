import { useTranslation } from 'react-i18next'
import styles from './BookingSuccess.module.css'

export default function BookingSuccess({
  from,
  to,
  depart,
  arrive,
  duration,
  vehicleType,
  selected,
  totalFmt,
  name,
  phone,
  onBack,
}) {
  const { t } = useTranslation()

  return (
    <div className={styles['booking-success']}>
      <div className={styles['booking-success__icon']}>✅</div>
      <h2 className={styles['booking-success__title']}>{t('booking.success.title')}</h2>
      <p className={styles['booking-success__desc']}>{t('booking.success.desc')}</p>
      <div className={styles['booking-success__info']}>
        <div><strong>{from}</strong> → <strong>{to}</strong></div>
        <div>{depart} – {arrive} &nbsp;·&nbsp; {duration}</div>
        <div>{t('booking.vehicle.label')}: <strong>{t(`booking.vehicle.label${vehicleType}`)}</strong></div>
        <div>
          {t('booking.seatLabel')}:{' '}
          <strong>{selected.map(s => String(s).padStart(2, '0')).join(', ')}</strong>
        </div>
        <div>
          {t('booking.total')}:{' '}
          <strong className={styles['booking-success__price']}>{totalFmt}</strong>
        </div>
        <div>{t('booking.confirmForm.name')}: {name}</div>
        <div>{t('booking.confirmForm.phone')}: {phone}</div>
      </div>
      <button
        type="button"
        className={styles['booking-success__back']}
        onClick={onBack}
      >
        ← {t('booking.success.back')}
      </button>
    </div>
  )
}
