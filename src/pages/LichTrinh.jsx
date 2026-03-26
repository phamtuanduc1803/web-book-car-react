import { useState } from 'react'
import './PageCommon.css'
import './LichTrinh.css'

const schedules = [
  // Hà Nội → Hạ Long (3h30p) — 400.000đ
  { from: 'Hà Nội', to: 'Hạ Long', depart: '05:00', arrive: '08:30', duration: '3h30p', price: '400.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Hạ Long', depart: '07:00', arrive: '10:30', duration: '3h30p', price: '400.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Hạ Long', depart: '09:00', arrive: '12:30', duration: '3h30p', price: '400.000đ', status: 'Gần đầy' },
  { from: 'Hà Nội', to: 'Hạ Long', depart: '11:00', arrive: '14:30', duration: '3h30p', price: '400.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Hạ Long', depart: '13:00', arrive: '16:30', duration: '3h30p', price: '400.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Hạ Long', depart: '15:00', arrive: '18:30', duration: '3h30p', price: '400.000đ', status: 'Gần đầy' },
  { from: 'Hà Nội', to: 'Hạ Long', depart: '17:00', arrive: '20:30', duration: '3h30p', price: '400.000đ', status: 'Còn chỗ' },
  // Hà Nội → Cẩm Phả / Mông Dương (4h30p) — 450.000đ
  { from: 'Hà Nội', to: 'Cẩm Phả (Mông Dương)', depart: '05:00', arrive: '09:30', duration: '4h30p', price: '450.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Cẩm Phả (Mông Dương)', depart: '07:00', arrive: '11:30', duration: '4h30p', price: '450.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Cẩm Phả (Mông Dương)', depart: '09:00', arrive: '13:30', duration: '4h30p', price: '450.000đ', status: 'Gần đầy' },
  { from: 'Hà Nội', to: 'Cẩm Phả (Mông Dương)', depart: '13:00', arrive: '17:30', duration: '4h30p', price: '450.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Cẩm Phả (Mông Dương)', depart: '16:00', arrive: '20:30', duration: '4h30p', price: '450.000đ', status: 'Còn chỗ' },
  // Hà Nội → Vân Đồn (4h) — 450.000đ
  { from: 'Hà Nội', to: 'Vân Đồn', depart: '05:00', arrive: '09:00', duration: '4h', price: '450.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Vân Đồn', depart: '07:00', arrive: '11:00', duration: '4h', price: '450.000đ', status: 'Gần đầy' },
  { from: 'Hà Nội', to: 'Vân Đồn', depart: '09:00', arrive: '13:00', duration: '4h', price: '450.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Vân Đồn', depart: '13:00', arrive: '17:00', duration: '4h', price: '450.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Vân Đồn', depart: '16:00', arrive: '20:00', duration: '4h', price: '450.000đ', status: 'Còn chỗ' },
  // Hà Nội → Móng Cái (qua Tiên Yên, Đầm Hà, Hải Hà) (6h) — 600.000đ
  { from: 'Hà Nội', to: 'Móng Cái', depart: '05:00', arrive: '11:00', duration: '6h', price: '600.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Móng Cái', depart: '07:00', arrive: '13:00', duration: '6h', price: '600.000đ', status: 'Gần đầy' },
  { from: 'Hà Nội', to: 'Móng Cái', depart: '09:00', arrive: '15:00', duration: '6h', price: '600.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Móng Cái', depart: '14:00', arrive: '20:00', duration: '6h', price: '600.000đ', status: 'Còn chỗ' },
  // Hà Nội → Trà Cổ / Vạn Ninh (6h30p) — 650.000đ
  { from: 'Hà Nội', to: 'Trà Cổ - Vạn Ninh', depart: '05:00', arrive: '11:30', duration: '6h30p', price: '650.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Trà Cổ - Vạn Ninh', depart: '07:00', arrive: '13:30', duration: '6h30p', price: '650.000đ', status: 'Gần đầy' },
  { from: 'Hà Nội', to: 'Trà Cổ - Vạn Ninh', depart: '10:00', arrive: '16:30', duration: '6h30p', price: '650.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Trà Cổ - Vạn Ninh', depart: '14:00', arrive: '20:30', duration: '6h30p', price: '650.000đ', status: 'Còn chỗ' },
  // Sân bay Nội Bài → Móng Cái (5h) — 800.000đ
  { from: 'Sân bay Nội Bài', to: 'Móng Cái', depart: '06:00', arrive: '11:00', duration: '5h', price: '800.000đ', status: 'Còn chỗ' },
  { from: 'Sân bay Nội Bài', to: 'Móng Cái', depart: '09:00', arrive: '14:00', duration: '5h', price: '800.000đ', status: 'Còn chỗ' },
  { from: 'Sân bay Nội Bài', to: 'Móng Cái', depart: '12:00', arrive: '17:00', duration: '5h', price: '800.000đ', status: 'Gần đầy' },
  { from: 'Sân bay Nội Bài', to: 'Móng Cái', depart: '15:00', arrive: '20:00', duration: '5h', price: '800.000đ', status: 'Còn chỗ' },
  // Sân bay Nội Bài → Trà Cổ / Vạn Ninh (5h30p) — 850.000đ
  { from: 'Sân bay Nội Bài', to: 'Trà Cổ - Vạn Ninh', depart: '06:00', arrive: '11:30', duration: '5h30p', price: '850.000đ', status: 'Còn chỗ' },
  { from: 'Sân bay Nội Bài', to: 'Trà Cổ - Vạn Ninh', depart: '09:00', arrive: '14:30', duration: '5h30p', price: '850.000đ', status: 'Còn chỗ' },
  { from: 'Sân bay Nội Bài', to: 'Trà Cổ - Vạn Ninh', depart: '12:00', arrive: '17:30', duration: '5h30p', price: '850.000đ', status: 'Gần đầy' },
  { from: 'Sân bay Nội Bài', to: 'Trà Cổ - Vạn Ninh', depart: '15:00', arrive: '20:30', duration: '5h30p', price: '850.000đ', status: 'Còn chỗ' },
]

const allFrom = [...new Set(schedules.map(s => s.from))]
const allTo = [...new Set(schedules.map(s => s.to))]

export default function LichTrinh() {
  const [filterFrom, setFilterFrom] = useState('')
  const [filterTo, setFilterTo] = useState('')

  const filtered = schedules.filter(s =>
    (!filterFrom || s.from === filterFrom) &&
    (!filterTo || s.to === filterTo)
  )

  return (
    <div className="page">
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #1a1a1a, #333)' }}>
        <div className="container">
          <h1>Lịch Trình Xe Chạy</h1>
          <p>Thông tin các chuyến xe và giờ khởi hành hàng ngày</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="schedule-filter">
          <div className="filter-row">
            <div className="filter-field">
              <label>Điểm đi</label>
              <select value={filterFrom} onChange={e => setFilterFrom(e.target.value)}>
                <option value="">Tất cả</option>
                {allFrom.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="filter-field">
              <label>Điểm đến</label>
              <select value={filterTo} onChange={e => setFilterTo(e.target.value)}>
                <option value="">Tất cả</option>
                {allTo.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <button
              className="filter-reset"
              onClick={() => { setFilterFrom(''); setFilterTo('') }}
            >
              Xem tất cả
            </button>
          </div>
          <div className="filter-count">Tìm thấy <strong>{filtered.length}</strong> chuyến xe</div>
        </div>

        <div className="schedule-table-wrap">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Điểm đi</th>
                <th>Điểm đến</th>
                <th>Giờ xuất phát</th>
                <th>Giờ đến</th>
                <th>Thời gian</th>
                <th>Giá vé</th>
                <th>Tình trạng</th>
                <th>Đặt vé</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={i}>
                  <td><strong>{s.from}</strong></td>
                  <td><strong>{s.to}</strong></td>
                  <td>{s.depart}</td>
                  <td>{s.arrive}</td>
                  <td>{s.duration}</td>
                  <td><strong style={{ color: '#dd3333' }}>{s.price}</strong></td>
                  <td>
                    <span className={`badge ${s.status === 'Còn chỗ' ? 'badge-green' : 'badge-yellow'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td>
                    <a href="tel:0967046789" className="book-link">Đặt ngay</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="schedule-note">
          <h3>📢 Lưu ý</h3>
          <ul>
            <li>Lịch trình có thể thay đổi vào các ngày lễ, Tết. Vui lòng gọi hotline <strong>0967046789</strong> để xác nhận.</li>
            <li>Hành khách nên có mặt tại bến xe trước giờ xuất phát ít nhất <strong>15 phút</strong>.</li>
            <li>Giá vé đã bao gồm phí đặt chỗ, không bao gồm phí hành lý quá khổ.</li>
            <li>Trẻ em dưới 5 tuổi đi cùng người lớn được miễn phí (không chiếm ghế).</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
