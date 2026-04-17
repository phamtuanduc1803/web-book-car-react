import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './CharterPage.module.css'

export default function CharterPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const type = searchParams.get('type') ?? '9'

  const vehicles = t('charter.vehicles', { returnObjects: true })
  const vehicle  = vehicles.find(v => v.type === type) ?? vehicles[0]
  const features = t('charter.features', { returnObjects: true })

  const [name, setName]     = useState('')
  const [phone, setPhone]   = useState('')
  const [route, setRoute]   = useState('')
  const [date, setDate]     = useState('')
  const [note, setNote]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  /* ── Success ─── */
  if (submitted) {
    return (
      <div>
        <div className="page-hero" style={{ background: 'linear-gradient(135deg, #1a1a1a, #333)' }}>
          <div className="container">
            <h1>{t('charter.pageTitle')}</h1>
            <p>{t('charter.pageSubtitle')}</p>
          </div>
        </div>
        <div className="container page-content">
          <div className={styles['charter-success']}>
            <div className={styles['charter-success__icon']}>✅</div>
            <h2 className={styles['charter-success__title']}>{t('charter.success.title')}</h2>
            <p className={styles['charter-success__desc']}>{t('charter.success.desc')}</p>
            <div className={styles['charter-success__info']}>
              <div>{t('charter.form.vehicleLabel')}: <strong>{vehicle.name}</strong></div>
              <div>{t('charter.form.route')}: {route}</div>
              <div>{t('charter.form.date')}: {date}</div>
              <div>{t('charter.form.name')}: {name}</div>
              <div>{t('charter.form.phone')}: {phone}</div>
            </div>
            <button
              type="button"
              className={styles['charter-success__back']}
              onClick={() => navigate(-1)}
            >
              ← {t('charter.success.back')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  /* ── Main ─── */
  return (
    <div>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #1a1a1a, #333)' }}>
        <div className="container">
          <h1>{t('charter.pageTitle')}</h1>
          <p>{t('charter.pageSubtitle')}</p>
        </div>
      </div>

      <div className="container page-content">
        <div className={styles['charter-layout']}>

          {/* ── Left: vehicle info ─── */}
          <div className={styles['charter-info']}>
            {/* Vehicle switcher */}
            <div className={styles['vehicle-switcher']}>
              {vehicles.map(v => (
                <button
                  key={v.type}
                  type="button"
                  className={`${styles['vehicle-switcher__btn']} ${v.type === type ? styles['vehicle-switcher__btn--active'] : ''}`}
                  onClick={() => navigate(`/charter?type=${v.type}`, { replace: true })}
                >
                  {v.icon} {v.name}
                </button>
              ))}
            </div>

            {/* Selected vehicle card */}
            <div className={styles['vehicle-card']}>
              <div className={styles['vehicle-card__icon']}>{vehicle.icon}</div>
              <h2 className={styles['vehicle-card__name']}>{vehicle.name}</h2>
              <div className={styles['vehicle-card__seats']}>
                🪑 {vehicle.seats} {t('charter.seats')}
              </div>
              <div className={styles['vehicle-card__price']}>{vehicle.price}</div>
              <p className={styles['vehicle-card__note']}>{vehicle.note}</p>
            </div>

            {/* Features */}
            <div className={styles['charter-features']}>
              <h3 className={styles['charter-features__title']}>{t('charter.featuresTitle')}</h3>
              <ul className={styles['charter-features__list']}>
                {features.map((f, i) => (
                  <li key={i} className={styles['charter-features__item']}>
                    <span className={styles['charter-features__dot']}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: request form ─── */}
          <div className={styles['charter-form-wrap']}>
            <h3 className={styles['charter-form-wrap__title']}>{t('charter.form.title')}</h3>
            <form className={styles['charter-form']} onSubmit={handleSubmit}>
              <div className={styles['charter-form__field']}>
                <label className={styles['charter-form__label']}>{t('charter.form.name')}</label>
                <input
                  className={styles['charter-form__input']}
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={t('charter.form.namePlaceholder')}
                  required
                />
              </div>

              <div className={styles['charter-form__field']}>
                <label className={styles['charter-form__label']}>{t('charter.form.phone')}</label>
                <input
                  className={styles['charter-form__input']}
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder={t('charter.form.phonePlaceholder')}
                  required
                />
              </div>

              <div className={styles['charter-form__field']}>
                <label className={styles['charter-form__label']}>{t('charter.form.route')}</label>
                <input
                  className={styles['charter-form__input']}
                  type="text"
                  value={route}
                  onChange={e => setRoute(e.target.value)}
                  placeholder={t('charter.form.routePlaceholder')}
                  required
                />
              </div>

              <div className={styles['charter-form__field']}>
                <label className={styles['charter-form__label']}>{t('charter.form.date')}</label>
                <input
                  className={styles['charter-form__input']}
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className={styles['charter-form__field']}>
                <label className={styles['charter-form__label']}>{t('charter.form.note')}</label>
                <textarea
                  className={`${styles['charter-form__input']} ${styles['charter-form__textarea']}`}
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  placeholder={t('charter.form.notePlaceholder')}
                  rows={3}
                />
              </div>

              <button type="submit" className={styles['charter-form__submit']}>
                {t('charter.form.submit')}
              </button>

              <p className={styles['charter-form__hotline']}>
                {t('charter.form.orCall')} <a href="tel:0967046789">0967046789</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
