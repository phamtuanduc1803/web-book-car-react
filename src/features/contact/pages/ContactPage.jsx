import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const subjects = t('contact.subjects', { returnObjects: true })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }}>
        <div className="container">
          <h1>{t('contact.pageTitle')}</h1>
          <p>{t('contact.pageSubtitle')}</p>
        </div>
      </div>

      <div className="container page-content">
        <div className={styles['contact-grid']}>
          <div>
            <h2 className={styles['contact-grid__section-title']}>{t('contact.formTitle')}</h2>
            {sent ? (
              <div className={styles['success-msg']}>
                {t('contact.form.success')}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles['contact-form__row']}>
                  <div className={styles['form-field']}>
                    <label className={styles['form-field__label']}>{t('contact.form.name')}</label>
                    <input
                      className={styles['form-field__input']}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                    />
                  </div>
                  <div className={styles['form-field']}>
                    <label className={styles['form-field__label']}>{t('contact.form.phone')}</label>
                    <input
                      className={styles['form-field__input']}
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phonePlaceholder')}
                      required
                    />
                  </div>
                </div>

                <div className={styles['form-field']}>
                  <label className={styles['form-field__label']}>{t('contact.form.email')}</label>
                  <input
                    className={styles['form-field__input']}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div className={styles['form-field']}>
                  <label className={styles['form-field__label']}>{t('contact.form.subject')}</label>
                  <select
                    className={styles['form-field__select']}
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="">{t('contact.form.selectSubject')}</option>
                    {subjects.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className={styles['form-field']}>
                  <label className={styles['form-field__label']}>{t('contact.form.message')}</label>
                  <textarea
                    className={styles['form-field__textarea']}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                  />
                </div>

                <button type="submit" className={styles['submit-btn']}>
                  {t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className={styles['contact-grid__section-title']}>{t('contact.infoTitle')}</h2>

            <div className={styles['info-card']}>
              <span className={styles['info-card__icon']}>📞</span>
              <div>
                <h4 className={styles['info-card__heading']}>{t('contact.info.hotlineBooking')}</h4>
                <p className={styles['info-card__text']}>
                  <a href="tel:0967046789" className={styles['info-card__link']}>0967046789</a> {t('contact.info.hotlineFree')}
                </p>
              </div>
            </div>

            <div className={styles['info-card']}>
              <span className={styles['info-card__icon']}>📞</span>
              <div>
                <h4 className={styles['info-card__heading']}>{t('contact.info.hotlineOffice')}</h4>
                <p className={styles['info-card__text']}><a href="tel:0967046789" className={styles['info-card__link']}>0967046789</a></p>
                <p className={styles['info-card__text']}><a href="tel:0967046789" className={styles['info-card__link']}>0967046789</a></p>
              </div>
            </div>

            <div className={styles['info-card']}>
              <span className={styles['info-card__icon']}>📍</span>
              <div>
                <h4 className={styles['info-card__heading']}>{t('contact.info.officeHN1')}</h4>
                <p className={styles['info-card__text']}>{t('contact.info.officeHN1Address')}</p>
              </div>
            </div>

            <div className={styles['info-card']}>
              <span className={styles['info-card__icon']}>📍</span>
              <div>
                <h4 className={styles['info-card__heading']}>{t('contact.info.officeHN2')}</h4>
                <p className={styles['info-card__text']}>{t('contact.info.officeHN2Address')}</p>
              </div>
            </div>

            <div className={styles['info-card']}>
              <span className={styles['info-card__icon']}>🕐</span>
              <div>
                <h4 className={styles['info-card__heading']}>{t('contact.info.workingHours')}</h4>
                <p className={styles['info-card__text']}>{t('contact.info.dailyHours')}</p>
                <p className={styles['info-card__text']}>{t('contact.info.hotline247')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
