import './PageCommon.css'
import './DiaChiSDT.css'

const hanoi = [
  { name: 'Văn phòng Hà Nội – Lê Duẩn', address: '71 Lê Duẩn, Hai Bà Trưng, Hà Nội', phone: '024.3636.3636', time: '05:00 – 21:00' },
  { name: 'Văn phòng Hà Nội – Giáp Bát', address: 'Bến xe Giáp Bát, Hoàng Mai, Hà Nội', phone: '024.3636.1234', time: '04:30 – 22:00' },
  { name: 'Văn phòng Hà Nội – Nước Ngầm', address: 'Bến xe Nước Ngầm, Hoàng Mai, Hà Nội', phone: '024.3636.5678', time: '05:00 – 21:30' },
]

const thaibinh = [
  { name: 'Văn phòng Thái Bình – Lý Bôn', address: '123 Lý Bôn, TP. Thái Bình', phone: '02273.676.767', time: '04:30 – 20:30' },
  { name: 'Văn phòng Thái Bình – Trần Hưng Đạo', address: '45 Trần Hưng Đạo, TP. Thái Bình', phone: '02273.123.456', time: '05:00 – 20:00' },
  { name: 'Bến xe Thái Bình', address: 'Bến xe Thái Bình, đường Lê Quý Đôn, TP. Thái Bình', phone: '02273.234.567', time: '04:00 – 21:00' },
]

const namdinh = [
  { name: 'Văn phòng Nam Định – Trần Hưng Đạo', address: '45 Trần Hưng Đạo, TP. Nam Định', phone: '02283.123.456', time: '05:00 – 21:00' },
  { name: 'Bến xe Nam Định', address: 'Bến xe Nam Định, đường Trần Quang Khải, TP. Nam Định', phone: '02283.234.567', time: '04:30 – 21:30' },
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
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #fec904, #f0a800)', color: '#000' }}>
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
              <a href="tel:19009016" className="hotline-num">1900.9016</a>
            </div>
          </div>
          <div className="hotline-divider"></div>
          <div className="hotline-item">
            <span className="hotline-icon">📞</span>
            <div>
              <div className="hotline-label">Hotline hỗ trợ</div>
              <a href="tel:02273676767" className="hotline-num">02273.676.767</a>
            </div>
          </div>
          <div className="hotline-divider"></div>
          <div className="hotline-item">
            <span className="hotline-icon">📞</span>
            <div>
              <div className="hotline-label">Hotline khẩn cấp</div>
              <a href="tel:190099166615" className="hotline-num">1900 99 66 15</a>
            </div>
          </div>
        </div>

        <OfficeGroup title="🏙️ Văn Phòng Hà Nội" offices={hanoi} />
        <OfficeGroup title="🏙️ Văn Phòng Thái Bình" offices={thaibinh} />
        <OfficeGroup title="🏙️ Văn Phòng Nam Định" offices={namdinh} />

        <div className="map-section">
          <h2 className="section-title">Bản Đồ Các Văn Phòng</h2>
          <div className="map-placeholder">
            🗺️ Vui lòng liên hệ hotline <strong>1900.9016</strong> để được chỉ đường đến văn phòng gần nhất.
          </div>
        </div>
      </div>
    </div>
  )
}
