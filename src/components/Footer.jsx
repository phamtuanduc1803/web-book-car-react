import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <span className="footer-logo-text">ANHHUY92</span>
          <p className="footer-desc">
            Nhà xe AnhHuy92 – Đơn vị vận tải hành khách uy tín trên tuyến
            Hà Nội – Hạ Long – Vân Đồn – Cẩm Phả – Móng Cái – Trà Cổ. Phục vụ tận tâm, an toàn tuyệt đối.
          </p>
          <div className="footer-hotline">
            <span>Hotline:</span>
            <a href="tel:0967046789">0967046789</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Liên kết nhanh</h4>
          <ul>
            <li><Link to="/">Trang Chủ</Link></li>
            <li><Link to="/gioi-thieu">Giới Thiệu</Link></li>
            <li><Link to="/lich-trinh">Lịch trình xe chạy</Link></li>
            <li><Link to="/dia-chi-sdt">SĐT – Địa chỉ</Link></li>
            <li><Link to="/tin-tuc">Tin Tức</Link></li>
            <li><Link to="/lien-he">Liên Hệ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Tuyến xe phổ biến</h4>
          <ul>
            <li>Hà Nội → Hạ Long</li>
            <li>Hà Nội → Vân Đồn</li>
            <li>Hà Nội → Cẩm Phả</li>
            <li>Hà Nội → Móng Cái</li>
            <li>Hà Nội → Trà Cổ - Vạn Ninh</li>
            <li>Sân bay Nội Bài → Móng Cái</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Liên hệ</h4>
          <ul className="contact-list">
            <li>📞 <a href="tel:0967046789">0967046789</a></li>
            <li>📍 113 - 115 Trần Khát Chân, Hai Bà Trưng, Hà Nội</li>
            <li>📍 Số 8 Khuất Duy Tiến, Nhân Chính, Thanh Xuân, Hà Nội</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Nhà xe AnhHuy92. Bản quyền thuộc về AnhHuy92 Transport.</p>
        </div>
      </div>
    </footer>
  )
}
