import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './TimePicker.module.css'

const SLOTS = (() => {
  const result = []
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      result.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
    }
  }
  return result
})()

export default function TimePicker({ value, onChange, placeholder }) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const listRef = useRef(null)

  // Scroll selected item (or first morning slot) into view when opened
  useEffect(() => {
    if (!open || !listRef.current) return
    const target = value
      ? listRef.current.querySelector(`[data-time="${value}"]`)
      : listRef.current.querySelector('[data-time="05:00"]')
    target?.scrollIntoView({ block: 'center' })
  }, [open])

  const handleBlur = useCallback(e => {
    if (
      !triggerRef.current?.contains(e.relatedTarget) &&
      !listRef.current?.contains(e.relatedTarget)
    ) {
      setOpen(false)
    }
  }, [])

  function handleSelect(slot) {
    onChange(slot)
    setOpen(false)
    triggerRef.current?.blur()
  }

  return (
    <div className={styles['time-picker']}>
      {/* ── Trigger ─── */}
      <div
        ref={triggerRef}
        className={`${styles['time-picker__trigger']} ${open ? styles['time-picker__trigger--open'] : ''}`}
        tabIndex={0}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        onFocus={() => setOpen(true)}
        onBlur={handleBlur}
        onKeyDown={e => {
          if (e.key === 'Escape') { setOpen(false); e.preventDefault() }
          if (!open && (e.key === 'Enter' || e.key === ' ')) { setOpen(true); e.preventDefault() }
        }}
      >
        <span className={value ? styles['time-picker__value'] : styles['time-picker__placeholder']}>
          {value || (placeholder ?? '── :──')}
        </span>
        <span className={styles['time-picker__icon']} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </span>
      </div>

      {/* ── List ─── */}
      {open && (
        <ul
          ref={listRef}
          className={styles['time-picker__list']}
          role="listbox"
          onMouseDown={e => e.preventDefault()}
        >
          {SLOTS.map(slot => (
            <li
              key={slot}
              role="option"
              aria-selected={slot === value}
              data-time={slot}
              className={`${styles['time-picker__option']} ${slot === value ? styles['time-picker__option--selected'] : ''}`}
              tabIndex={-1}
              onClick={() => handleSelect(slot)}
            >
              {slot}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
