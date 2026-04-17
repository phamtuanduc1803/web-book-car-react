import { useTranslation } from 'react-i18next'
import styles from './BookingPanel.module.css'

export default function BookingPanel({
  selected,
  priceStr,
  priceNum,
  name,
  phone,
  onNameChange,
  onPhoneChange,
  onSubmit,
}) {
  const { t } = useTranslation()

  const total    = priceNum * selected.length
  const totalFmt = total > 0 ? total.toLocaleString('vi-VN') + 'đ' : '—'

  return (
    <div className={styles['booking-panel']}>
      <h3 className={styles['booking-panel__title']}>{t('booking.selectedSeats')}</h3>

      {selected.length === 0 ? (
        <p className={styles['booking-panel__empty']}>{t('booking.noSeatSelected')}</p>
      ) : (
        <ul className={styles['booking-panel__seat-list']}>
          {selected.map(s => (
            <li key={s} className={styles['booking-panel__seat-item']}>
              <span>{t('booking.seatLabel')} {String(s).padStart(2, '0')}</span>
              <span>{priceStr}</span>
            </li>
          ))}
        </ul>
      )}

      {selected.length > 0 && (
        <div className={styles['booking-panel__total']}>
          <span>{t('booking.total')}</span>
          <strong className={styles['booking-panel__total-price']}>{totalFmt}</strong>
        </div>
      )}

      <form className={styles['booking-form']} onSubmit={onSubmit}>
        <h4 className={styles['booking-form__title']}>{t('booking.confirmForm.title')}</h4>

        <div className={styles['booking-form__field']}>
          <label className={styles['booking-form__label']}>{t('booking.confirmForm.name')}</label>
          <input
            className={styles['booking-form__input']}
            type="text"
            value={name}
            onChange={e => onNameChange(e.target.value)}
            placeholder={t('booking.confirmForm.namePlaceholder')}
            required
          />
        </div>

        <div className={styles['booking-form__field']}>
          <label className={styles['booking-form__label']}>{t('booking.confirmForm.phone')}</label>
          <input
            className={styles['booking-form__input']}
            type="tel"
            value={phone}
            onChange={e => onPhoneChange(e.target.value)}
            placeholder={t('booking.confirmForm.phonePlaceholder')}
            required
          />
        </div>

        <button
          type="submit"
          className={`${styles['booking-form__submit']} ${selected.length === 0 ? styles['booking-form__submit--disabled'] : ''}`}
          disabled={selected.length === 0}
        >
          {selected.length === 0
            ? t('booking.confirmForm.submitDisabled')
            : t('booking.confirmForm.submit')}
        </button>
      </form>
    </div>
  )
}
