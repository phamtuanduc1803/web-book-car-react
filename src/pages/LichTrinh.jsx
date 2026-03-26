import { useState } from 'react'
import './PageCommon.css'
import './LichTrinh.css'

const schedules = [
  { from: 'Hà Nội', to: 'Thái Bình', depart: '05:00', arrive: '08:00', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Thái Bình', depart: '06:00', arrive: '09:00', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Thái Bình', depart: '07:00', arrive: '10:00', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Thái Bình', depart: '08:00', arrive: '11:00', duration: '3h', price: '150.000đ', status: 'Gần đầy' },
  { from: 'Hà Nội', to: 'Thái Bình', depart: '09:00', arrive: '12:00', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Thái Bình', depart: '10:30', arrive: '13:30', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Thái Bình', depart: '12:00', arrive: '15:00', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Thái Bình', depart: '14:00', arrive: '17:00', duration: '3h', price: '150.000đ', status: 'Gần đầy' },
  { from: 'Hà Nội', to: 'Thái Bình', depart: '16:00', arrive: '19:00', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Thái Bình', depart: '18:00', arrive: '21:00', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Thái Bình', to: 'Hà Nội', depart: '04:30', arrive: '07:30', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Thái Bình', to: 'Hà Nội', depart: '05:30', arrive: '08:30', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Thái Bình', to: 'Hà Nội', depart: '06:30', arrive: '09:30', duration: '3h', price: '150.000đ', status: 'Gần đầy' },
  { from: 'Thái Bình', to: 'Hà Nội', depart: '08:00', arrive: '11:00', duration: '3h', price: '150.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Nam Định', depart: '06:00', arrive: '08:30', duration: '2.5h', price: '130.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Nam Định', depart: '08:00', arrive: '10:30', duration: '2.5h', price: '130.000đ', status: 'Còn chỗ' },
  { from: 'Hà Nội', to: 'Nam Định', depart: '10:00', arrive: '12:30', duration: '2.5h', price: '130.000đ', status: 'Gần đầy' },
  { from: 'Hà Nội', to: 'Nam Định', depart: '14:00', arrive: '16:30', duration: '2.5h', price: '130.000đ', status: 'Còn chỗ' },
  { from: 'Nam Định', to: 'Hà Nội', depart: '05:00', arrive: '07:30', duration: '2.5h', price: '130.000đ', status: 'Còn chỗ' },
  { from: 'Nam Định', to: 'Hà Nội', depart: '07:00', arrive: '09:30', duration: '2.5h', price: '130.000đ', status: 'Còn chỗ' },
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
                    <a href="tel:19009016" className="book-link">Đặt ngay</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="schedule-note">
          <h3>📢 Lưu ý</h3>
          <ul>
            <li>Lịch trình có thể thay đổi vào các ngày lễ, Tết. Vui lòng gọi hotline <strong>1900.9016</strong> để xác nhận.</li>
            <li>Hành khách nên có mặt tại bến xe trước giờ xuất phát ít nhất <strong>15 phút</strong>.</li>
            <li>Giá vé đã bao gồm phí đặt chỗ, không bao gồm phí hành lý quá khổ.</li>
            <li>Trẻ em dưới 5 tuổi đi cùng người lớn được miễn phí (không chiếm ghế).</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
