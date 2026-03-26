import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <img
            src="https://xephiethoc.com/wp-content/uploads/2024/07/phiethoc-1.png"
            alt="Nhà xe AnhHuy92"
            height="60"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="footer-desc">
            Nhà xe AnhHuy92 – Đơn vị vận tải hành khách uy tín trên tuyến
            Hà Nội – Thái Bình – Nam Định. Phục vụ tận tâm, an toàn tuyệt đối.
          </p>
          <div className="footer-hotline">
            <span>Hotline:</span>
            <a href="tel:19009016">1900.9016</a>
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
            <li>Hà Nội → Thái Bình</li>
            <li>Thái Bình → Hà Nội</li>
            <li>Hà Nội → Nam Định</li>
            <li>Nam Định → Hà Nội</li>
            <li>Thái Bình → Nam Định</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Liên hệ</h4>
          <ul className="contact-list">
            <li>📞 <a href="tel:19009016">1900.9016</a></li>
            <li>📞 <a href="tel:02273676767">02273.676.767</a></li>
            <li>📍 Văn phòng Hà Nội: 71 Lê Duẩn, Hai Bà Trưng, Hà Nội</li>
            <li>📍 Văn phòng Thái Bình: 123 Lý Bôn, TP. Thái Bình</li>
            <li>📍 Văn phòng Nam Định: 45 Trần Hưng Đạo, TP. Nam Định</li>
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
