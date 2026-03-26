import { useState } from 'react'
import './PageCommon.css'
import './LienHe.css'

export default function LienHe() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page">
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }}>
        <div className="container">
          <h1>Liên Hệ</h1>
          <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="contact-grid">
          <div className="contact-form-section">
            <h2>Gửi Tin Nhắn Cho Chúng Tôi</h2>
            {sent ? (
              <div className="success-msg">
                ✅ Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Họ và tên *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0912 345 678"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                  />
                </div>
                <div className="form-group">
                  <label>Chủ đề</label>
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">-- Chọn chủ đề --</option>
                    <option>Đặt vé xe</option>
                    <option>Gửi hàng hóa</option>
                    <option>Tra cứu đơn hàng</option>
                    <option>Khiếu nại</option>
                    <option>Hợp tác kinh doanh</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Nội dung *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Nhập nội dung cần hỗ trợ..."
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  📨 Gửi tin nhắn
                </button>
              </form>
            )}
          </div>

          <div className="contact-info-section">
            <h2>Thông Tin Liên Hệ</h2>

            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <h4>Hotline đặt vé</h4>
                <p><a href="tel:0967046789">0967046789</a> (Miễn phí, 24/7)</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <h4>Hotline văn phòng</h4>
                <p><a href="tel:0967046789">0967046789</a></p>
                <p><a href="tel:0967046789">0967046789</a></p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <h4>Văn phòng Hà Nội – Trần Khát Chân</h4>
                <p>113 - 115 Trần Khát Chân, Hai Bà Trưng, Hà Nội</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <h4>Văn phòng Hà Nội – Khuất Duy Tiến</h4>
                <p>Số 8 Khuất Duy Tiến, Nhân Chính, Thanh Xuân, Hà Nội</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">🕐</span>
              <div>
                <h4>Giờ làm việc</h4>
                <p>Hàng ngày: 05:00 – 21:00</p>
                <p>Hotline: 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
