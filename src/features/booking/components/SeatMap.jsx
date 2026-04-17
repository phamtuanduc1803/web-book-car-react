import { useTranslation } from 'react-i18next'
import styles from './SeatMap.module.css'

/* ──────────────────────────────────────────────
   Internal: seat shape SVG (top-down view)
   Matches VeXeRe's seat icon design
────────────────────────────────────────────── */
function SeatIcon({ state, isSelected, small = false }) {
  const isBooked  = state === 'booked'
  const isPending = state === 'pending'

  const fill   = isSelected ? 'var(--color-primary)'
               : isBooked   ? '#ffe4e4'
               : isPending  ? '#fff8e7'
               : '#ffffff'

  const stroke = isSelected ? 'var(--color-primary)'
               : isBooked   ? '#c0392b'
               : isPending  ? '#f0a500'
               : '#b8b8b8'

  const checkFill = isSelected ? '#ffffff'    : 'transparent'
  const xFill     = isBooked   ? '#c0392b'   : 'transparent'

  return (
    <svg
      className={small ? styles['seat__icon--small'] : styles['seat__icon']}
      viewBox="0 0 40 32"
      fill="none"
      aria-hidden="true"
    >
      {/* Seat back */}
      <rect x="8.75" y="2.75" width="22.5" height="26.5" rx="2.25"
        fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Left armrest */}
      <rect x="10.25" y="11.75" width="14.5" height="5.5" rx="2.25"
        transform="rotate(90 10.25 11.75)"
        fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Right armrest */}
      <rect x="35.25" y="11.75" width="14.5" height="5.5" rx="2.25"
        transform="rotate(90 35.25 11.75)"
        fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Seat cushion */}
      <rect x="8.75" y="22.75" width="22.5" height="6.5" rx="2.25"
        fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Checkmark — visible when selected */}
      <path
        d="M20 6.333A6.67 6.67 0 0 0 13.334 13 6.67 6.67 0 0 0 20 19.667 6.67 6.67 0 0 0 26.667 13 6.669 6.669 0 0 0 20 6.333zm-1.333 10L15.333 13l.94-.94 2.394 2.387 5.06-5.06.94.946-6 6z"
        fill={checkFill} />
      {/* ✕ — visible when booked */}
      <path
        d="M24.96 9.46l-1.42-1.42L20 11.59l-3.54-3.55-1.42 1.42L18.59 13l-3.55 3.54 1.42 1.42L20 14.41l3.54 3.55 1.42-1.42L21.41 13l3.55-3.54z"
        fill={xFill} />
    </svg>
  )
}

/* ──────────────────────────────────────────────
   Internal: driver steering wheel icon
────────────────────────────────────────────── */
function DriverIcon() {
  return (
    <svg className={styles['seat__icon']} viewBox="0 0 40 32" fill="none" aria-hidden="true">
      {/* Outer ring */}
      <circle cx="20" cy="16" r="10" stroke="#aaa" strokeWidth="1.5" fill="#e8e6e0" />
      {/* Hub */}
      <circle cx="20" cy="16" r="3.5" stroke="#aaa" strokeWidth="1.5" fill="#e8e6e0" />
      {/* Top spoke */}
      <line x1="20" y1="12.5" x2="20" y2="6"
        stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bottom-left spoke */}
      <line x1="17.2" y1="18.8" x2="12.5" y2="24.3"
        stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bottom-right spoke */}
      <line x1="22.8" y1="18.8" x2="27.5" y2="24.3"
        stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ──────────────────────────────────────────────
   Main component
────────────────────────────────────────────── */
export default function SeatMap({ vehicleType, config, selected, onVehicleChange, onToggleSeat }) {
  const { t } = useTranslation()

  function renderCell(cell, key) {
    if (cell === null) {
      return <div key={key} className={styles['bus__cell--empty']} />
    }

    if (cell === 'driver') {
      return (
        <div key={key} className={`${styles.seat} ${styles['seat--driver']}`}>
          <DriverIcon />
          <span className={`${styles['seat__label']} ${styles['seat__label--driver']}`}>
            {t('booking.driver')}
          </span>
        </div>
      )
    }

    if (cell === 'aisle') {
      return <div key={key} className={styles['bus__aisle']} />
    }

    const state      = config.seatStates[cell]
    const isSelected = selected.includes(cell)
    const isDisabled = state === 'booked' || state === 'pending'
    const seatMod    = isSelected ? 'selected' : state
    const label      = String(cell).padStart(2, '0')

    return (
      <button
        key={key}
        type="button"
        className={`${styles.seat} ${styles[`seat--${seatMod}`]}`}
        onClick={() => onToggleSeat(cell)}
        disabled={isDisabled}
        aria-label={`${t('booking.seatLabel')} ${label}`}
        aria-pressed={isSelected}
      >
        <SeatIcon state={state} isSelected={isSelected} />
        <span className={`${styles['seat__label']} ${styles[`seat__label--${seatMod}`]}`}>
          {label}
        </span>
      </button>
    )
  }

  return (
    <div className={styles['seat-map']}>
      <h3 className={styles['seat-map__title']}>{t('booking.seatMap')}</h3>

      {/* Vehicle type selector */}
      <div className={styles['vehicle-selector']}>
        <span className={styles['vehicle-selector__label']}>{t('booking.vehicle.selectLabel')}:</span>
        {['9', '12'].map(type => (
          <button
            key={type}
            type="button"
            className={`${styles['vehicle-selector__btn']} ${vehicleType === type ? styles['vehicle-selector__btn--active'] : ''}`}
            onClick={() => onVehicleChange(type)}
          >
            {t(`booking.vehicle.label${type}`)}
          </button>
        ))}
      </div>

      {/* Legend (vertical) + Bus diagram side by side */}
      <div className={styles['seat-map__diagram']}>

        {/* Legend — vertical, left of bus */}
        <div className={styles['seat-legend']}>
          {[
            { state: 'available', label: t('booking.legend.available') },
            { state: 'selected',  label: t('booking.legend.selected') },
            { state: 'pending',   label: t('booking.legend.pending') },
            { state: 'booked',    label: t('booking.legend.booked') },
          ].map(({ state, label }) => (
            <div key={state} className={styles['seat-legend__item']}>
              <SeatIcon state={state} isSelected={state === 'selected'} small />
              <span className={styles['seat-legend__label']}>{label}</span>
            </div>
          ))}
        </div>

        {/* Bus */}
        <div className={styles.bus}>
          <div className={styles['bus__body']}>
            {config.rows.map((row, ri) => (
              <div
                key={ri}
                className={`${styles['bus__row']} ${ri === 0 ? styles['bus__row--divider'] : ''}`}
              >
                {row.map((cell, ci) => renderCell(cell, ci))}
              </div>
            ))}
          </div>
          <div className={styles['bus__door-label']}>
            ↕ {t('booking.doorLabel')}
          </div>
          <div className={styles['bus__rear']} />
        </div>

      </div>
    </div>
  )
}
