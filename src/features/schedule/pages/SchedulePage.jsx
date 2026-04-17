import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DatePicker from '@/components/ui/DatePicker/DatePicker'
import TimePicker from '@/components/ui/TimePicker/TimePicker'
import styles from './SchedulePage.module.css'

const P1 = '113-115 Trần Khát Chân'
const P2 = '8 Khuất Duy Tiến'
const NB = 'Nhà ga T1, Nội Bài'

const schedules = [
  // Hà Nội → Hạ Long (3h30p) — 400.000đ
  { from: 'Hà Nội', to: 'Hạ Long', pickup: P1, depart: '05:00', arrive: '08:30', duration: '3h30p', price: '400.000đ', seats: 12, total: 16 },
  { from: 'Hà Nội', to: 'Hạ Long', pickup: P2, depart: '07:00', arrive: '10:30', duration: '3h30p', price: '400.000đ', seats: 10, total: 16 },
  { from: 'Hà Nội', to: 'Hạ Long', pickup: P1, depart: '09:00', arrive: '12:30', duration: '3h30p', price: '400.000đ', seats:  3, total: 16 },
  { from: 'Hà Nội', to: 'Hạ Long', pickup: P2, depart: '11:00', arrive: '14:30', duration: '3h30p', price: '400.000đ', seats: 14, total: 16 },
  { from: 'Hà Nội', to: 'Hạ Long', pickup: P1, depart: '13:00', arrive: '16:30', duration: '3h30p', price: '400.000đ', seats:  8, total: 16 },
  { from: 'Hà Nội', to: 'Hạ Long', pickup: P2, depart: '15:00', arrive: '18:30', duration: '3h30p', price: '400.000đ', seats:  4, total: 16 },
  { from: 'Hà Nội', to: 'Hạ Long', pickup: P1, depart: '17:00', arrive: '20:30', duration: '3h30p', price: '400.000đ', seats: 11, total: 16 },
  // Hà Nội → Cẩm Phả / Mông Dương (4h30p) — 450.000đ
  { from: 'Hà Nội', to: 'Cẩm Phả (Mông Dương)', pickup: P1, depart: '05:00', arrive: '09:30', duration: '4h30p', price: '450.000đ', seats: 13, total: 16 },
  { from: 'Hà Nội', to: 'Cẩm Phả (Mông Dương)', pickup: P2, depart: '07:00', arrive: '11:30', duration: '4h30p', price: '450.000đ', seats:  9, total: 16 },
  { from: 'Hà Nội', to: 'Cẩm Phả (Mông Dương)', pickup: P1, depart: '09:00', arrive: '13:30', duration: '4h30p', price: '450.000đ', seats:  2, total: 16 },
  { from: 'Hà Nội', to: 'Cẩm Phả (Mông Dương)', pickup: P2, depart: '13:00', arrive: '17:30', duration: '4h30p', price: '450.000đ', seats: 15, total: 16 },
  { from: 'Hà Nội', to: 'Cẩm Phả (Mông Dương)', pickup: P1, depart: '16:00', arrive: '20:30', duration: '4h30p', price: '450.000đ', seats:  7, total: 16 },
  // Hà Nội → Vân Đồn (4h) — 450.000đ
  { from: 'Hà Nội', to: 'Vân Đồn', pickup: P2, depart: '05:00', arrive: '09:00', duration: '4h', price: '450.000đ', seats: 11, total: 16 },
  { from: 'Hà Nội', to: 'Vân Đồn', pickup: P1, depart: '07:00', arrive: '11:00', duration: '4h', price: '450.000đ', seats:  3, total: 16 },
  { from: 'Hà Nội', to: 'Vân Đồn', pickup: P2, depart: '09:00', arrive: '13:00', duration: '4h', price: '450.000đ', seats: 14, total: 16 },
  { from: 'Hà Nội', to: 'Vân Đồn', pickup: P1, depart: '13:00', arrive: '17:00', duration: '4h', price: '450.000đ', seats:  8, total: 16 },
  { from: 'Hà Nội', to: 'Vân Đồn', pickup: P2, depart: '16:00', arrive: '20:00', duration: '4h', price: '450.000đ', seats: 10, total: 16 },
  // Hà Nội → Móng Cái (6h) — 600.000đ
  { from: 'Hà Nội', to: 'Móng Cái', pickup: P1, depart: '05:00', arrive: '11:00', duration: '6h', price: '600.000đ', seats: 12, total: 16 },
  { from: 'Hà Nội', to: 'Móng Cái', pickup: P2, depart: '07:00', arrive: '13:00', duration: '6h', price: '600.000đ', seats:  4, total: 16 },
  { from: 'Hà Nội', to: 'Móng Cái', pickup: P1, depart: '09:00', arrive: '15:00', duration: '6h', price: '600.000đ', seats:  9, total: 16 },
  { from: 'Hà Nội', to: 'Móng Cái', pickup: P2, depart: '14:00', arrive: '20:00', duration: '6h', price: '600.000đ', seats: 15, total: 16 },
  // Hà Nội → Trà Cổ / Vạn Ninh (6h30p) — 650.000đ
  { from: 'Hà Nội', to: 'Trà Cổ - Vạn Ninh', pickup: P1, depart: '05:00', arrive: '11:30', duration: '6h30p', price: '650.000đ', seats: 13, total: 16 },
  { from: 'Hà Nội', to: 'Trà Cổ - Vạn Ninh', pickup: P2, depart: '07:00', arrive: '13:30', duration: '6h30p', price: '650.000đ', seats:  2, total: 16 },
  { from: 'Hà Nội', to: 'Trà Cổ - Vạn Ninh', pickup: P1, depart: '10:00', arrive: '16:30', duration: '6h30p', price: '650.000đ', seats: 11, total: 16 },
  { from: 'Hà Nội', to: 'Trà Cổ - Vạn Ninh', pickup: P2, depart: '14:00', arrive: '20:30', duration: '6h30p', price: '650.000đ', seats:  8, total: 16 },
  // Sân bay Nội Bài → Móng Cái (5h) — 800.000đ
  { from: 'Sân bay Nội Bài', to: 'Móng Cái', pickup: NB, depart: '06:00', arrive: '11:00', duration: '5h', price: '800.000đ', seats: 10, total: 16 },
  { from: 'Sân bay Nội Bài', to: 'Móng Cái', pickup: NB, depart: '09:00', arrive: '14:00', duration: '5h', price: '800.000đ', seats: 14, total: 16 },
  { from: 'Sân bay Nội Bài', to: 'Móng Cái', pickup: NB, depart: '12:00', arrive: '17:00', duration: '5h', price: '800.000đ', seats:  3, total: 16 },
  { from: 'Sân bay Nội Bài', to: 'Móng Cái', pickup: NB, depart: '15:00', arrive: '20:00', duration: '5h', price: '800.000đ', seats:  9, total: 16 },
  // Sân bay Nội Bài → Trà Cổ / Vạn Ninh (5h30p) — 850.000đ
  { from: 'Sân bay Nội Bài', to: 'Trà Cổ - Vạn Ninh', pickup: NB, depart: '06:00', arrive: '11:30', duration: '5h30p', price: '850.000đ', seats: 12, total: 16 },
  { from: 'Sân bay Nội Bài', to: 'Trà Cổ - Vạn Ninh', pickup: NB, depart: '09:00', arrive: '14:30', duration: '5h30p', price: '850.000đ', seats: 11, total: 16 },
  { from: 'Sân bay Nội Bài', to: 'Trà Cổ - Vạn Ninh', pickup: NB, depart: '12:00', arrive: '17:30', duration: '5h30p', price: '850.000đ', seats:  4, total: 16 },
  { from: 'Sân bay Nội Bài', to: 'Trà Cổ - Vạn Ninh', pickup: NB, depart: '15:00', arrive: '20:30', duration: '5h30p', price: '850.000đ', seats: 13, total: 16 },
]

const allFrom = [...new Set(schedules.map(s => s.from))]
const allTo = [...new Set(schedules.map(s => s.to))]

export default function SchedulePage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [filterFrom, setFilterFrom] = useState(() => searchParams.get('from') ?? '')
  const [filterTo, setFilterTo] = useState(() => searchParams.get('to') ?? '')
  const [filterDate, setFilterDate] = useState(() => searchParams.get('date') ?? '')
  const [filterTime, setFilterTime] = useState('')
  const [hasReturn, setHasReturn] = useState(() => !!searchParams.get('returnDate'))
  const [returnDate, setReturnDate] = useState(() => searchParams.get('returnDate') ?? '')
  const [returnTime, setReturnTime] = useState('')

  const notes = t('schedule.notes.items', { returnObjects: true })

  const filtered = schedules.filter(s =>
    (!filterFrom || s.from === filterFrom) &&
    (!filterTo || s.to === filterTo) &&
    (!filterTime || s.depart >= filterTime)
  )

  function handleReturnToggle(e) {
    setHasReturn(e.target.checked)
    if (!e.target.checked) {
      setReturnDate('')
      setReturnTime('')
    }
  }

  function handleReset() {
    setFilterFrom('')
    setFilterTo('')
    setFilterDate('')
    setFilterTime('')
    setHasReturn(false)
    setReturnDate('')
    setReturnTime('')
  }

  function handleBook(s) {
    const params = new URLSearchParams({
      from: s.from,
      to: s.to,
      depart: s.depart,
      arrive: s.arrive,
      duration: s.duration,
      price: s.price,
    })
    navigate(`/booking?${params.toString()}`)
  }

  function badgeClass(seats, total) {
    const nearly = seats / total <= 0.3
    return `${styles.badge} ${nearly ? styles['badge--nearly-full'] : styles['badge--available']}`
  }

  return (
    <div>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #1a1a1a, #333)' }}>
        <div className="container">
          <h1>{t('schedule.pageTitle')}</h1>
          <p>{t('schedule.pageSubtitle')}</p>
        </div>
      </div>

      <div className="container page-content">
        {/* ── Filter ─────────────────────── */}
        <div className={styles['schedule-filter']}>
          <div className={styles['schedule-filter__row']}>
            <div className={styles['schedule-filter__field']}>
              <label className={styles['schedule-filter__label']}>{t('schedule.filter.from')}</label>
              <select
                className={styles['schedule-filter__select']}
                value={filterFrom}
                onChange={e => setFilterFrom(e.target.value)}
              >
                <option value="" disabled>{t('schedule.filter.placeholderFrom')}</option>
                {allFrom.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className={styles['schedule-filter__field']}>
              <label className={styles['schedule-filter__label']}>{t('schedule.filter.to')}</label>
              <select
                className={styles['schedule-filter__select']}
                value={filterTo}
                onChange={e => setFilterTo(e.target.value)}
              >
                <option value="" disabled>{t('schedule.filter.placeholderTo')}</option>
                {allTo.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className={styles['schedule-filter__field']}>
              <label className={styles['schedule-filter__label']}>{t('schedule.filter.date')}</label>
              <DatePicker value={filterDate} onChange={setFilterDate} />
            </div>

            <div className={styles['schedule-filter__field']}>
              <label className={styles['schedule-filter__label']}>{t('schedule.filter.time')}</label>
              <TimePicker value={filterTime} onChange={setFilterTime} />
            </div>

          </div>

          <div className={styles['schedule-filter__meta']}>
            <div className={styles['schedule-filter__return-section']}>
              <label className={styles['schedule-filter__return-toggle']}>
                <input
                  type="checkbox"
                  className={styles['schedule-filter__return-checkbox']}
                  checked={hasReturn}
                  onChange={handleReturnToggle}
                />
                <span className={`${styles['schedule-filter__return-check']} ${hasReturn ? styles['schedule-filter__return-check--checked'] : ''}`} />
                <span className={styles['schedule-filter__return-toggle-label']}>🔄 {t('schedule.filter.returnDate')}</span>
              </label>
              {hasReturn && (
                <div className={styles['schedule-filter__return-fields']}>
                  <div className={styles['schedule-filter__return-field']}>
                    <DatePicker value={returnDate} onChange={setReturnDate} />
                  </div>
                  <div className={styles['schedule-filter__return-field']}>
                    <TimePicker value={returnTime} onChange={setReturnTime} />
                  </div>
                </div>
              )}
            </div>
            <span className={styles['schedule-filter__count']}>
              {t('schedule.filter.found')} <strong>{filtered.length}</strong> {t('schedule.filter.foundSuffix')}
            </span>
          </div>
        </div>

        {/* ── Desktop table ─────────────── */}
        <div className={styles['schedule-table__wrap']}>
          <table className={styles['schedule-table']}>
            <thead>
              <tr>
                <th className={styles['schedule-table__head-cell']}>{t('schedule.table.from')}</th>
                <th className={styles['schedule-table__head-cell']}>{t('schedule.table.to')}</th>
                <th className={styles['schedule-table__head-cell']}>{t('schedule.table.pickup')}</th>
                <th className={styles['schedule-table__head-cell']}>{t('schedule.table.depart')}</th>
                <th className={styles['schedule-table__head-cell']}>{t('schedule.table.arrive')}</th>
                <th className={styles['schedule-table__head-cell']}>{t('schedule.table.duration')}</th>
                <th className={styles['schedule-table__head-cell']}>{t('schedule.table.price')}</th>
                <th className={styles['schedule-table__head-cell']}>{t('schedule.table.status')}</th>
                <th className={styles['schedule-table__head-cell']}>{t('schedule.table.book')}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={i} className={styles['schedule-table__row']}>
                  <td className={styles['schedule-table__cell']}><strong>{s.from}</strong></td>
                  <td className={styles['schedule-table__cell']}><strong>{s.to}</strong></td>
                  <td className={styles['schedule-table__cell']}>
                    <span className={styles['schedule-table__pickup']}>📍 {s.pickup}</span>
                  </td>
                  <td className={styles['schedule-table__cell']}>{s.depart}</td>
                  <td className={styles['schedule-table__cell']}>{s.arrive}</td>
                  <td className={styles['schedule-table__cell']}>{s.duration}</td>
                  <td className={styles['schedule-table__cell']}>
                    <strong className={styles['schedule-table__price']}>{s.price}</strong>
                  </td>
                  <td className={styles['schedule-table__cell']}>
                    <span className={badgeClass(s.seats, s.total)}>
                      {s.seats}/{s.total} {t('schedule.status.seats')}
                    </span>
                  </td>
                  <td className={styles['schedule-table__cell']}>
                    <button
                      type="button"
                      className={styles['book-link']}
                      onClick={() => handleBook(s)}
                    >
                      {t('schedule.bookNow')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mobile cards ──────────────── */}
        <div className={styles['schedule-cards']}>
          {filtered.map((s, i) => (
            <div key={i} className={styles['trip-card']}>
              <div className={styles['trip-card__route']}>
                <span className={styles['trip-card__city']}>{s.from}</span>
                <span className={styles['trip-card__route-arrow']}>→</span>
                <span className={styles['trip-card__city']}>{s.to}</span>
              </div>

              <div className={styles['trip-card__pickup']}>
                📍 {s.pickup}
              </div>

              <div className={styles['trip-card__times']}>
                <div className={styles['trip-card__time-block']}>
                  <span className={styles['trip-card__time']}>{s.depart}</span>
                  <span className={styles['trip-card__time-label']}>{t('schedule.table.depart')}</span>
                </div>
                <div className={styles['trip-card__duration-wrap']}>
                  <div className={styles['trip-card__duration-line']} />
                  <span className={styles['trip-card__duration-text']}>{s.duration}</span>
                </div>
                <div className={styles['trip-card__time-block']}>
                  <span className={styles['trip-card__time']}>{s.arrive}</span>
                  <span className={styles['trip-card__time-label']}>{t('schedule.table.arrive')}</span>
                </div>
              </div>

              <div className={styles['trip-card__footer']}>
                <strong className={styles['trip-card__price']}>{s.price}</strong>
                <span className={badgeClass(s.seats, s.total)}>
                  {s.seats}/{s.total} {t('schedule.status.seats')}
                </span>
              </div>

              <button
                type="button"
                className={styles['trip-card__book-btn']}
                onClick={() => handleBook(s)}
              >
                {t('schedule.bookNow')}
              </button>
            </div>
          ))}
        </div>

        {/* ── Notes ─────────────────────── */}
        <div className={styles['schedule-note']}>
          <h3 className={styles['schedule-note__title']}>{t('schedule.notes.title')}</h3>
          <ul className={styles['schedule-note__list']}>
            {notes.map((item, i) => (
              <li
                key={i}
                className={styles['schedule-note__list-item']}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
