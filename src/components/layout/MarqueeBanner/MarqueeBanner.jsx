import { useTranslation } from 'react-i18next'
import styles from './MarqueeBanner.module.css'

export default function MarqueeBanner() {
  const { t } = useTranslation()
  const text = t('marquee.text')

  return (
    <div className={styles['marquee-banner']}>
      <div className={styles['marquee-banner__inner']}>
        <span>
          {text}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {text}
        </span>
      </div>
    </div>
  )
}
