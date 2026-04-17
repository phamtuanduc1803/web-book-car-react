import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { VEHICLE_CONFIGS } from '../constants/vehicleConfigs'
import TripInfoBar from '../components/TripInfoBar'
import SeatMap from '../components/SeatMap'
import BookingPanel from '../components/BookingPanel'
import BookingSuccess from '../components/BookingSuccess'
import styles from './BookingPage.module.css'

export default function BookingPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  // 2. Router hooks (already done above via useSearchParams / useNavigate)
  const from     = searchParams.get('from')     ?? ''
  const to       = searchParams.get('to')       ?? ''
  const depart   = searchParams.get('depart')   ?? ''
  const arrive   = searchParams.get('arrive')   ?? ''
  const duration = searchParams.get('duration') ?? ''
  const priceStr = searchParams.get('price')    ?? ''
  const priceNum = parseInt(priceStr.replace(/\D/g, ''), 10) || 0

  // 3. Local state
  const [vehicleType, setVehicleType] = useState('12')
  const [selected, setSelected]       = useState([])
  const [name, setName]               = useState('')
  const [phone, setPhone]             = useState('')
  const [submitted, setSubmitted]     = useState(false)

  // 4. Derived values
  const config   = VEHICLE_CONFIGS[vehicleType]
  const total    = priceNum * selected.length
  const totalFmt = total > 0 ? total.toLocaleString('vi-VN') + 'đ' : '—'

  // 6. Handlers
  function handleVehicleChange(type) {
    setVehicleType(type)
    setSelected([])
  }

  function handleToggleSeat(num) {
    const state = config.seatStates[num]
    if (state === 'booked' || state === 'pending') return
    setSelected(prev =>
      prev.includes(num)
        ? prev.filter(s => s !== num)
        : [...prev, num].sort((a, b) => a - b)
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (selected.length === 0) return
    setSubmitted(true)
  }

  const pageHeroStyle = { background: 'linear-gradient(135deg, #1a1a1a, #333)' }

  /* ── Success screen ──────────────────── */
  if (submitted) {
    return (
      <div>
        <div className="page-hero" style={pageHeroStyle}>
          <div className="container">
            <h1>{t('booking.pageTitle')}</h1>
            <p>{t('booking.pageSubtitle')}</p>
          </div>
        </div>
        <div className="container page-content">
          <BookingSuccess
            from={from} to={to}
            depart={depart} arrive={arrive} duration={duration}
            vehicleType={vehicleType}
            selected={selected}
            totalFmt={totalFmt}
            name={name} phone={phone}
            onBack={() => navigate(-1)}
          />
        </div>
      </div>
    )
  }

  /* ── Main screen ─────────────────────── */
  return (
    <div>
      <div className="page-hero" style={pageHeroStyle}>
        <div className="container">
          <h1>{t('booking.pageTitle')}</h1>
          <p>{t('booking.pageSubtitle')}</p>
        </div>
      </div>

      <div className="container page-content">
        <TripInfoBar
          from={from} to={to}
          depart={depart} arrive={arrive}
          duration={duration} priceStr={priceStr}
        />

        <div className={styles['booking-layout']}>
          <SeatMap
            vehicleType={vehicleType}
            config={config}
            selected={selected}
            onVehicleChange={handleVehicleChange}
            onToggleSeat={handleToggleSeat}
          />
          <BookingPanel
            selected={selected}
            priceStr={priceStr}
            priceNum={priceNum}
            name={name}
            phone={phone}
            onNameChange={setName}
            onPhoneChange={setPhone}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}
