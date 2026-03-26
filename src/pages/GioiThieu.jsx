import './PageCommon.css'

export default function GioiThieu() {
  return (
    <div className="page">
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }}>
        <div className="container">
          <h1>Giới Thiệu</h1>
          <p>Nhà xe AnhHuy92 – Hơn 20 năm phục vụ hành khách</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>Về Nhà Xe AnhHuy92</h2>
            <p>
              Nhà xe AnhHuy92 được thành lập từ năm 2003, là một trong những đơn vị vận tải hành khách
              uy tín hàng đầu trên tuyến Hà Nội – Hưng Yên – Hải Dương – Hải Phòng – Móng Cái. Trải qua hơn 20 năm hoạt động,
              chúng tôi đã phục vụ hàng triệu lượt hành khách với chất lượng dịch vụ ngày càng được nâng cao.
            </p>
            <p>
              Với đội xe hiện đại, đội ngũ lái xe chuyên nghiệp có kinh nghiệm, được đào tạo bài bản về
              kỹ năng lái xe an toàn và phong cách phục vụ khách hàng, AnhHuy92 cam kết mang lại trải nghiệm
              di chuyển thoải mái, an toàn và đúng giờ cho quý hành khách.
            </p>
            <p>
              Chúng tôi liên tục đầu tư đổi mới xe, nâng cấp hệ thống đặt vé trực tuyến và mở rộng mạng
              lưới văn phòng đại lý để phục vụ quý khách ngày một tốt hơn.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-num">20+</div>
              <div className="stat-label">Năm kinh nghiệm</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">50+</div>
              <div className="stat-label">Đầu xe hiện đại</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">30+</div>
              <div className="stat-label">Chuyến mỗi ngày</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">1M+</div>
              <div className="stat-label">Hành khách phục vụ</div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-title">Giá Trị Cốt Lõi</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>An Toàn</h3>
              <p>An toàn là ưu tiên hàng đầu trong mọi chuyến đi. Xe được kiểm định định kỳ, lái xe tuân thủ nghiêm quy định giao thông.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⏰</div>
              <h3>Đúng Giờ</h3>
              <p>Cam kết xuất phát và đến đích đúng giờ. Hành khách có thể yên tâm lên kế hoạch chuyến đi của mình.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Chất Lượng</h3>
              <p>Xe chất lượng cao với đầy đủ tiện nghi: điều hòa, WiFi, ghế ngồi êm ái, đồ uống miễn phí.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Tận Tâm</h3>
              <p>Đội ngũ nhân viên thân thiện, tận tình hỗ trợ hành khách từ lúc đặt vé đến khi đến nơi an toàn.</p>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <h2>Sứ Mệnh Của Chúng Tôi</h2>
          <blockquote>
            "Kết nối mọi người, mang lại sự tiện lợi và an toàn trong từng chuyến hành trình.
            AnhHuy92 không chỉ là nhà xe – chúng tôi là người đồng hành tin cậy của bạn trên mọi chặng đường."
          </blockquote>
        </div>
      </div>
    </div>
  )
}
