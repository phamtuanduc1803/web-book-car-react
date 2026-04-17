import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DatePicker from '@/components/ui/DatePicker/DatePicker'
import styles from './HomePage.module.css'

const cities = [
  'Hà Nội', 'Sân bay Nội Bài', 'Hạ Long', 'Vân Đồn', 'Cẩm Phả (Mông Dương)', 'Móng Cái', 'Trà Cổ - Vạn Ninh'
]

export default function HomePage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('booking')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const steps = t('home.steps.items', { returnObjects: true })
  const services = t('home.services.items', { returnObjects: true })
  const routes = t('home.routes.items', { returnObjects: true })
  const offices = t('home.offices.items', { returnObjects: true })
  const amenities = t('home.amenities.items', { returnObjects: true })
  const charterVehicles = t('home.bookingForm.charterVehicles', { returnObjects: true })

  const fromOptions = cities.filter(c => c !== to)
  const toOptions = cities.filter(c => c !== from)

  function handleFromChange(e) {
    const val = e.target.value
    setFrom(val)
    if (to === val) setTo('')
  }

  function handleToChange(e) {
    const val = e.target.value
    setTo(val)
    if (from === val) setFrom('')
  }

  function handleSwap() {
    setFrom(to)
    setTo(from)
  }

  function handleSearch(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (from) params.set('from', from)
    if (to) params.set('to', to)
    if (date) params.set('date', date)
    if (returnDate) params.set('returnDate', returnDate)
    navigate(`/schedule?${params.toString()}`)
  }

  return (
    <div>
      {/* ── HERO ──────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles['hero__bg']}>
          <img
            src="https://xephiethoc.com/wp-content/uploads/2025/07/1.png"
            alt="Xe khách AnhHuy92"
            className={styles['hero__image']}
          />
          <div className={styles['hero__overlay']}></div>
        </div>

        <div className={`container ${styles['hero__content']}`}>
          <h1 className={styles['hero__title']}>
            {t('home.hero.title').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
          <p className={styles['hero__subtitle']}>{t('home.hero.subtitle')}</p>

          <div className={styles['booking-form']}>
            {/* ── Tabs ─── */}
            <div className={styles['booking-form__tabs']}>
              <button
                type="button"
                className={`${styles['booking-form__tab']} ${activeTab === 'booking' ? styles['booking-form__tab--active'] : ''}`}
                onClick={() => setActiveTab('booking')}
              >
                🚌 {t('home.bookingForm.tabBook')}
              </button>
              <button
                type="button"
                className={`${styles['booking-form__tab']} ${activeTab === 'charter' ? styles['booking-form__tab--active'] : ''}`}
                onClick={() => setActiveTab('charter')}
              >
                🚐 {t('home.bookingForm.tabCharter')}
              </button>
            </div>

            {/* ── Tab: Đặt vé ─── */}
            {activeTab === 'booking' && (
              <form onSubmit={handleSearch}>
                <div className={styles['booking-form__row']}>
                  <div className={styles['booking-form__field']}>
                    <label className={styles['booking-form__label']}>{t('home.bookingForm.from')}</label>
                    <select
                      className={styles['booking-form__select']}
                      value={from}
                      onChange={handleFromChange}
                      required
                    >
                      <option value="">{t('home.bookingForm.selectFrom')}</option>
                      {fromOptions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <button
                    type="button"
                    className={styles['booking-form__swap-btn']}
                    onClick={handleSwap}
                    title={t('home.bookingForm.swapTitle')}
                  >⇄</button>

                  <div className={styles['booking-form__field']}>
                    <label className={styles['booking-form__label']}>{t('home.bookingForm.to')}</label>
                    <select
                      className={styles['booking-form__select']}
                      value={to}
                      onChange={handleToChange}
                      required
                    >
                      <option value="">{t('home.bookingForm.selectTo')}</option>
                      {toOptions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className={styles['booking-form__row']}>
                  <div className={styles['booking-form__field']}>
                    <label className={styles['booking-form__label']}>{t('home.bookingForm.date')}</label>
                    <DatePicker value={date} onChange={setDate} min={today} />
                  </div>

                  <div className={styles['booking-form__field']}>
                    <label className={styles['booking-form__label']}>
                      {t('home.bookingForm.returnDate')}
                      <span className={styles['booking-form__optional']}> {t('home.bookingForm.returnDateOptional')}</span>
                    </label>
                    <DatePicker value={returnDate} onChange={setReturnDate} min={date || today} />
                  </div>

                  <button type="submit" className={styles['booking-form__submit-btn']}>
                    {t('home.bookingForm.search')}
                  </button>
                </div>
              </form>
            )}

            {/* ── Tab: Thuê xe ─── */}
            {activeTab === 'charter' && (
              <div className={styles['charter-grid']}>
                {charterVehicles.map(v => (
                  <button
                    key={v.type}
                    type="button"
                    className={styles['charter-card']}
                    onClick={() => navigate(`/charter?type=${v.type}`)}
                  >
                    <div className={styles['charter-card__icon']}>{v.icon}</div>
                    <div className={styles['charter-card__name']}>{v.name}</div>
                    <div className={styles['charter-card__desc']}>{v.desc}</div>
                    <div className={styles['charter-card__price']}>{v.price}</div>
                    <span className={styles['charter-card__cta']}>{t('home.bookingForm.charterNow')}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>


      {/* ── POPULAR ROUTES ────────────────── */}
      <section className={styles['routes-section']}>
        <div className="container">
          <h2 className="section-title">{t('home.routes.title')}</h2>
          <p className="section-subtitle">{t('home.routes.subtitle')}</p>
          <div className={styles['routes-section__grid']}>
            {routes.map((r) => (
              <div className={styles['route-card']} key={`${r.from}-${r.to}`}>
                <div className={styles['route-card__img-wrap']}>
                  <img src={r.img} alt={`${r.from} - ${r.to}`} />
                  <div className={styles['route-card__price-badge']}>{r.price}</div>
                </div>
                <div className={styles['route-card__info']}>
                  <div className={styles['route-card__cities']}>
                    <span className={styles['route-card__city']}>{r.from}</span>
                    <span className={styles['route-card__arrow']}>→</span>
                    <span className={styles['route-card__city']}>{r.to}</span>
                  </div>
                  <div className={styles['route-card__meta']}>
                    <span>🕐 {r.time}</span>
                    <span>📍 {r.distance}</span>
                    <span>🚌 {r.trips}</span>
                  </div>
                  <button
                    className={`btn-secondary ${styles['route-card__book-btn']}`}
                    onClick={() => navigate(`/schedule?from=${encodeURIComponent(r.fromCity)}&to=${encodeURIComponent(r.toCity)}`)}
                  >
                    {t('home.routes.bookNow')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICES ───────────────────────── */}
      <section className={styles['offices-section']}>
        <div className="container">
          <h2 className="section-title">{t('home.offices.title')}</h2>
          <p className="section-subtitle">{t('home.offices.subtitle')}</p>
          <div className={styles['offices-section__grid']}>
            {offices.map((o) => (
              <div className={styles['office-card']} key={o.city}>
                <div className={styles['office-card__city']}>📍 {o.city}</div>
                <div className={styles['office-card__detail']}><strong>{t('home.offices.labelAddress')}</strong> {o.address}</div>
                <div className={styles['office-card__detail']}>
                  <strong>{t('home.offices.labelPhone')}</strong>{' '}
                  <a href={`tel:${o.phone.replace(/\D/g, '')}`} className={styles['office-card__detail-link']}>{o.phone}</a>
                </div>
                <div className={styles['office-card__detail']}><strong>{t('home.offices.labelHours')}</strong> {o.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENITIES ─────────────────────── */}
      <section className={styles['amenities-section']}>
        <div className="container">
          <h2 className="section-title">{t('home.amenities.title')}</h2>
          <p className="section-subtitle">{t('home.amenities.subtitle')}</p>
          <div className={styles['amenities-section__grid']}>
            {amenities.map((a) => (
              <div className={styles['amenity-item']} key={a.title}>
                <div className={styles['amenity-item__icon']}>{a.icon}</div>
                <h4 className={styles['amenity-item__title']}>{a.title}</h4>
                <p className={styles['amenity-item__desc']}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
