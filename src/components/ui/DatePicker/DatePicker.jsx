import { useState, useRef, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './DatePicker.module.css'

const DAY_NAMES = {
  vi: ['Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'T7', 'CN'],
  en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

// Returns 0 = Monday … 6 = Sunday
function getFirstWeekday(year, month) {
  const day = new Date(year, month, 1).getDay() // 0 = Sunday
  return (day + 6) % 7
}

function parseDate(val) {
  if (!val) return null
  const [y, m, d] = val.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function toDateString(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

export default function DatePicker({ value, onChange, min, placeholder }) {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('vi') ? 'vi' : 'en'

  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const dropdownRef = useRef(null)

  const selected = parseDate(value)
  const minDate = min ? parseDate(min) : null

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [viewYear, setViewYear] = useState(() => selected?.getFullYear() ?? today.getFullYear())
  const [viewMonth, setViewMonth] = useState(() => selected?.getMonth() ?? today.getMonth())

  // Sync view to selected value when changed externally
  useEffect(() => {
    if (selected) {
      setViewYear(selected.getFullYear())
      setViewMonth(selected.getMonth())
    }
  }, [value])

  // Close on focus leaving both trigger and dropdown
  const handleBlur = useCallback(e => {
    if (
      !triggerRef.current?.contains(e.relatedTarget) &&
      !dropdownRef.current?.contains(e.relatedTarget)
    ) {
      setOpen(false)
    }
  }, [])

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  function handleSelect(day) {
    onChange(toDateString(viewYear, viewMonth, day))
    setOpen(false)
    triggerRef.current?.blur()
  }

  function isDisabled(day) {
    if (!minDate) return false
    const d = new Date(viewYear, viewMonth, day)
    return d < minDate
  }

  function formatDisplay(val) {
    const d = parseDate(val)
    if (!d) return val
    return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-US', {
      day: '2-digit', month: '2-digit', year: 'numeric',
    }).format(d)
  }

  const monthLabel = lang === 'vi'
    ? `Tháng ${viewMonth + 1}/${viewYear}`
    : new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(viewYear, viewMonth))

  const daysInMonth = getDaysInMonth(viewYear, viewMonth)
  const firstOffset = getFirstWeekday(viewYear, viewMonth)
  const dayNames = DAY_NAMES[lang]

  return (
    <div className={styles['date-picker']}>
      {/* ── Trigger ─── */}
      <div
        ref={triggerRef}
        className={`${styles['date-picker__trigger']} ${open ? styles['date-picker__trigger--open'] : ''}`}
        tabIndex={0}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="dialog"
        onFocus={() => setOpen(true)}
        onBlur={handleBlur}
        onKeyDown={e => {
          if (e.key === 'Escape') { setOpen(false); e.preventDefault() }
          if (!open && (e.key === 'Enter' || e.key === ' ')) { setOpen(true); e.preventDefault() }
        }}
      >
        <span className={value ? styles['date-picker__value'] : styles['date-picker__placeholder']}>
          {value ? formatDisplay(value) : (placeholder ?? '── /── /────')}
        </span>
        <span className={styles['date-picker__icon']} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </span>
      </div>

      {/* ── Dropdown ─── */}
      {open && (
        <div
          ref={dropdownRef}
          className={styles['date-picker__dropdown']}
          role="dialog"
          // Prevent mousedown from blurring the trigger in browsers that don't focus buttons
          onMouseDown={e => e.preventDefault()}
        >
          <div className={styles['date-picker__header']}>
            <button
              type="button"
              className={styles['date-picker__nav-btn']}
              onClick={prevMonth}
              tabIndex={-1}
            >‹</button>
            <span className={styles['date-picker__month-label']}>{monthLabel}</span>
            <button
              type="button"
              className={styles['date-picker__nav-btn']}
              onClick={nextMonth}
              tabIndex={-1}
            >›</button>
          </div>

          <div className={styles['date-picker__grid']}>
            {dayNames.map(d => (
              <div key={d} className={styles['date-picker__day-name']}>{d}</div>
            ))}
            {Array.from({ length: firstOffset }, (_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1
              const disabled = isDisabled(day)
              const isToday = day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear()
              const isSel = selected && day === selected.getDate() && viewMonth === selected.getMonth() && viewYear === selected.getFullYear()

              return (
                <button
                  key={day}
                  type="button"
                  tabIndex={-1}
                  disabled={disabled}
                  className={[
                    styles['date-picker__day'],
                    disabled && styles['date-picker__day--disabled'],
                    isToday && !isSel && styles['date-picker__day--today'],
                    isSel && styles['date-picker__day--selected'],
                  ].filter(Boolean).join(' ')}
                  onClick={() => handleSelect(day)}
                >
                  {day}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
