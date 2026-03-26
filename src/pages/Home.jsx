import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const cities = [
  'Hà Nội', 'Thái Bình', 'Nam Định', 'Hải Phòng', 'Hưng Yên', 'Hải Dương'
]

const steps = [
  { icon: '🔍', step: '01', title: 'Tìm kiếm', desc: 'Nhập điểm đi, điểm đến và ngày khởi hành để tìm chuyến xe phù hợp.' },
  { icon: '🚌', step: '02', title: 'Chọn chuyến', desc: 'Lựa chọn chuyến xe, giờ đi và loại ghế ngồi theo nhu cầu của bạn.' },
  { icon: '💳', step: '03', title: 'Thanh toán', desc: 'Thanh toán trực tuyến nhanh chóng, an toàn qua nhiều hình thức khác nhau.' },
  { icon: '🎫', step: '04', title: 'Nhận vé', desc: 'Nhận vé điện tử qua email hoặc SMS, xuất trình khi lên xe.' },
]

const services = [
  {
    icon: '🚌',
    title: 'Vận tải hành khách',
    desc: 'Dịch vụ vận chuyển hành khách tuyến cố định Hà Nội – Thái Bình – Nam Định với hơn 30 chuyến mỗi ngày. Xe chất lượng cao, điều hòa, WiFi.',
    link: '/lich-trinh',
    linkText: 'Xem lịch trình',
  },
  {
    icon: '📦',
    title: 'Chuyển phát nhanh',
    desc: 'Gửi hàng hóa, bưu kiện nhanh chóng, an toàn giữa các tỉnh thành với chi phí hợp lý. Hàng được theo dõi real-time.',
    link: '/lien-he',
    linkText: 'Gửi hàng ngay',
  },
  {
    icon: '📋',
    title: 'Mã hợp đồng & Hàng hóa',
    desc: 'Tra cứu thông tin đơn hàng, hợp đồng vận chuyển bằng mã theo dõi. Minh bạch, chính xác, cập nhật liên tục.',
    link: '/lien-he',
    linkText: 'Tra cứu ngay',
  },
]

const offices = [
  {
    city: 'Hà Nội',
    address: '71 Lê Duẩn, Hai Bà Trưng, Hà Nội',
    phone: '024.3636.3636',
    time: '05:00 – 21:00',
  },
  {
    city: 'Thái Bình',
    address: '123 Lý Bôn, TP. Thái Bình',
    phone: '02273.676.767',
    time: '04:30 – 20:30',
  },
  {
    city: 'Nam Định',
    address: '45 Trần Hưng Đạo, TP. Nam Định',
    phone: '02283.123.456',
    time: '05:00 – 21:00',
  },
]

const routes = [
  {
    from: 'Hà Nội',
    to: 'Thái Bình',
    time: '3 giờ',
    distance: '150 km',
    trips: '30 chuyến/ngày',
    price: '150.000đ',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Ho_Guom.jpg/800px-Ho_Guom.jpg',
  },
  {
    from: 'Hà Nội',
    to: 'Nam Định',
    time: '2.5 giờ',
    distance: '120 km',
    trips: '20 chuyến/ngày',
    price: '130.000đ',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nam_Dinh_Cathedral.jpg/800px-Nam_Dinh_Cathedral.jpg',
  },
]

const amenities = [
  { icon: '🛋️', title: 'Nội thất cao cấp', desc: 'Ghế ngồi rộng rãi, đệm êm ái, có gác chân thoải mái.' },
  { icon: '📶', title: 'WiFi miễn phí', desc: 'Internet tốc độ cao trên suốt hành trình.' },
  { icon: '🍵', title: 'Đồ ăn nhẹ', desc: 'Nước uống và đồ ăn nhẹ miễn phí cho hành khách.' },
  { icon: '🧴', title: 'Khử khuẩn định kỳ', desc: 'Xe được vệ sinh và khử khuẩn sau mỗi chuyến đi.' },
  { icon: '❄️', title: 'Điều hòa 2 chiều', desc: 'Hệ thống điều hòa hiện đại, duy trì nhiệt độ lý tưởng.' },
  { icon: '🔌', title: 'Sạc điện thoại', desc: 'Mỗi ghế có cổng USB và ổ điện để sạc thiết bị.' },
]

export default function Home() {
  const navigate = useNavigate()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')

  const today = new Date().toISOString().split('T')[0]

  function handleSearch(e) {
    e.preventDefault()
    navigate('/lich-trinh')
  }

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://xephiethoc.com/wp-content/uploads/2025/07/1.png"
            alt="Xe khách AnhHuy92"
            className="hero-img"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">DỄ DÀNG ĐẶT VÉ XE<br />TRÊN WEBSITE</h1>
          <p className="hero-sub">Đặt vé nhanh chóng – An toàn – Tiện lợi mọi lúc mọi nơi</p>

          <form className="booking-form" onSubmit={handleSearch}>
            <div className="booking-row">
              <div className="booking-field">
                <label>Điểm đi</label>
                <select value={from} onChange={e => setFrom(e.target.value)} required>
                  <option value="">-- Chọn điểm đi --</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <button
                type="button"
                className="swap-btn"
                onClick={() => { const t = from; setFrom(to); setTo(t) }}
                title="Đổi chiều"
              >⇄</button>
              <div className="booking-field">
                <label>Điểm đến</label>
                <select value={to} onChange={e => setTo(e.target.value)} required>
                  <option value="">-- Chọn điểm đến --</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="booking-field">
                <label>Ngày đi</label>
                <input
                  type="date"
                  value={date}
                  min={today}
                  onChange={e => setDate(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="search-btn">
                🔍 Tìm chuyến
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* STEPS */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title">ĐẶT VÉ CHỈ 4 BƯỚC ĐƠN GIẢN</h2>
          <p className="section-subtitle">Quy trình đặt vé nhanh chóng, dễ dàng ngay trên website</p>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div className="step-card" key={i}>
                <div className="step-number">{s.step}</div>
                <div className="step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">DỊCH VỤ CỦA CHÚNG TÔI</h2>
          <p className="section-subtitle">AnhHuy92 cung cấp đa dạng dịch vụ vận tải phục vụ quý khách</p>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href={s.link} className="service-link">{s.linkText} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="routes-section">
        <div className="container">
          <h2 className="section-title">TUYẾN XE PHỔ BIẾN</h2>
          <p className="section-subtitle">Các tuyến xe được đặt nhiều nhất</p>
          <div className="routes-grid">
            {routes.map((r, i) => (
              <div className="route-card" key={i}>
                <div className="route-img-wrap">
                  <img src={r.img} alt={`${r.from} - ${r.to}`} />
                  <div className="route-badge">{r.price}</div>
                </div>
                <div className="route-info">
                  <div className="route-cities">
                    <span className="city-from">{r.from}</span>
                    <span className="route-arrow">→</span>
                    <span className="city-to">{r.to}</span>
                  </div>
                  <div className="route-meta">
                    <span>🕐 {r.time}</span>
                    <span>📍 {r.distance}</span>
                    <span>🚌 {r.trips}</span>
                  </div>
                  <button className="btn-red route-btn" onClick={() => navigate('/lich-trinh')}>
                    Đặt vé ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="offices-section">
        <div className="container">
          <h2 className="section-title">VĂN PHÒNG & ĐẠI LÝ</h2>
          <p className="section-subtitle">Hệ thống văn phòng phục vụ trên toàn tuyến</p>
          <div className="offices-grid">
            {offices.map((o, i) => (
              <div className="office-card" key={i}>
                <div className="office-city">📍 {o.city}</div>
                <div className="office-detail"><strong>Địa chỉ:</strong> {o.address}</div>
                <div className="office-detail"><strong>Điện thoại:</strong> <a href={`tel:${o.phone.replace(/\D/g,'')}`}>{o.phone}</a></div>
                <div className="office-detail"><strong>Giờ mở cửa:</strong> {o.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="amenities-section">
        <div className="container">
          <h2 className="section-title">TIỆN ÍCH CAO CẤP</h2>
          <p className="section-subtitle">Trải nghiệm dịch vụ đẳng cấp trên mỗi chuyến đi</p>
          <div className="amenities-grid">
            {amenities.map((a, i) => (
              <div className="amenity-item" key={i}>
                <div className="amenity-icon">{a.icon}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Đặt vé ngay hôm nay!</h2>
            <p>Liên hệ hotline để được hỗ trợ 24/7</p>
          </div>
          <div className="cta-phones">
            <a href="tel:19009016" className="cta-phone-btn">📞 1900.9016</a>
            <a href="tel:02273676767" className="cta-phone-btn secondary">📞 02273.676.767</a>
          </div>
        </div>
      </section>
    </div>
  )
}
