import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './FloatContact.module.css'

const PHONE = '0967046789'

export default function FloatContact() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const handleClick = useCallback((e) => {
    // Mobile: để href="tel:" hoạt động bình thường
    const isMobile = window.matchMedia('(max-width: 600px)').matches
    if (isMobile) return

    // Desktop: copy clipboard, chặn gọi điện
    e.preventDefault()
    navigator.clipboard.writeText(PHONE).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }, [])

  return (
    <div className={styles['float-contact']}>
      <a
        href={`tel:${PHONE}`}
        className={styles['float-contact__phone']}
        title="Gọi ngay"
        onClick={handleClick}
      >
        <span className={styles['float-contact__icon']}>📞</span>
        <span className={styles['float-contact__label']}>{PHONE}</span>
      </a>

      <div className={`${styles['float-contact__toast']} ${copied ? styles['float-contact__toast--visible'] : ''}`}>
        {t('floatContact.copied')}
      </div>
    </div>
  )
}
