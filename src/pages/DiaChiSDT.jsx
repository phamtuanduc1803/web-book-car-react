import './PageCommon.css'
import './DiaChiSDT.css'

const hanoi = [
  { name: 'Văn phòng Hà Nội – Trần Khát Chân', address: '113 - 115 Trần Khát Chân, Hai Bà Trưng, Hà Nội', phone: '0967046789', time: '05:00 – 21:00' },
  { name: 'Văn phòng Hà Nội – Khuất Duy Tiến', address: 'Số 8 Khuất Duy Tiến, Nhân Chính, Thanh Xuân, Hà Nội', phone: '0967046789', time: '05:00 – 21:00' },
]

function OfficeGroup({ title, offices }) {
  return (
    <div className="address-section">
      <h2>{title}</h2>
      <div className="address-cards">
        {offices.map((o, i) => (
          <div className="address-card" key={i}>
            <h3>📍 {o.name}</h3>
            <div className="address-detail">🏠 <strong>Địa chỉ:</strong> {o.address}</div>
            <div className="address-detail">📞 <strong>Điện thoại:</strong> <a href={`tel:${o.phone.replace(/\D/g,'')}`}>{o.phone}</a></div>
            <div className="address-detail">🕐 <strong>Giờ mở cửa:</strong> {o.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DiaChiSDT() {
  return (
    <div className="page">
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }}>
        <div className="container">
          <h1 style={{ color: '#000' }}>SĐT – Địa Chỉ</h1>
          <p style={{ color: '#333' }}>Hệ thống văn phòng và đại lý của Nhà xe AnhHuy92</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="hotline-banner">
          <div className="hotline-item">
            <span className="hotline-icon">📞</span>
            <div>
              <div className="hotline-label">Hotline đặt vé</div>
              <a href="tel:0967046789" className="hotline-num">0967046789</a>
            </div>
          </div>
          <div className="hotline-divider"></div>
          <div className="hotline-item">
            <span className="hotline-icon">📞</span>
            <div>
              <div className="hotline-label">Hotline hỗ trợ</div>
              <a href="tel:0967046789" className="hotline-num">0967046789</a>
            </div>
          </div>
          <div className="hotline-divider"></div>
          <div className="hotline-item">
            <span className="hotline-icon">📞</span>
            <div>
              <div className="hotline-label">Hotline khẩn cấp</div>
              <a href="tel:0967046789" className="hotline-num">0967046789</a>
            </div>
          </div>
        </div>

        <OfficeGroup title="🏙️ Văn Phòng Hà Nội" offices={hanoi} />

        <div className="map-section">
          <h2 className="section-title">Bản Đồ Các Văn Phòng</h2>
          <div className="map-placeholder">
            🗺️ Vui lòng liên hệ hotline <strong>0967046789</strong> để được chỉ đường đến văn phòng gần nhất.
          </div>
        </div>
      </div>
    </div>
  )
}
