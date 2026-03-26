import './PageCommon.css'
import './TinTuc.css'

const news = [
  {
    title: 'Nhà xe AnhHuy92 ra mắt hệ thống đặt vé trực tuyến mới',
    excerpt: 'Từ tháng 3/2025, hành khách có thể đặt vé xe AnhHuy92 hoàn toàn trực tuyến qua website với giao diện thân thiện, thanh toán nhanh chóng.',
    date: '20/03/2025',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
    category: 'Thông báo',
  },
  {
    title: 'Lịch xe Tết Nguyên Đán 2025 – Thông tin đặt vé sớm',
    excerpt: 'Nhà xe AnhHuy92 thông báo lịch xe Tết Nguyên Đán 2025 và hướng dẫn đặt vé sớm để đảm bảo chỗ về quê ăn Tết.',
    date: '10/01/2025',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    category: 'Thông báo',
  },
  {
    title: 'Bổ sung thêm 10 xe giường nằm cao cấp tuyến Hà Nội – Thái Bình',
    excerpt: 'Để đáp ứng nhu cầu đi lại ngày càng tăng, AnhHuy92 đầu tư thêm 10 xe giường nằm cao cấp với đầy đủ tiện nghi hiện đại.',
    date: '05/12/2024',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    category: 'Tin tức',
  },
  {
    title: 'Chương trình khuyến mãi – Giảm 20% vé xe tháng 11',
    excerpt: 'Nhân dịp kỷ niệm 21 năm thành lập, AnhHuy92 tặng voucher giảm 20% cho 500 hành khách đặt vé trực tuyến trong tháng 11/2024.',
    date: '01/11/2024',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    category: 'Khuyến mãi',
  },
  {
    title: 'Hướng dẫn gửi hàng hóa qua nhà xe AnhHuy92',
    excerpt: 'Dịch vụ chuyển phát hàng hóa của AnhHuy92 nhanh chóng, an toàn, giá cả hợp lý. Hàng được theo dõi real-time qua mã đơn.',
    date: '15/10/2024',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
    category: 'Hướng dẫn',
  },
  {
    title: 'Mở thêm văn phòng mới tại Nam Định',
    excerpt: 'AnhHuy92 khai trương văn phòng mới tại số 45 Trần Hưng Đạo, TP. Nam Định, phục vụ hành khách tốt hơn trên tuyến Nam Định – Hà Nội.',
    date: '01/09/2024',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    category: 'Tin tức',
  },
]

const categoryColors = {
  'Thông báo': '#3b82f6',
  'Tin tức': '#10b981',
  'Khuyến mãi': '#f59e0b',
  'Hướng dẫn': '#8b5cf6',
}

export default function TinTuc() {
  return (
    <div className="page">
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
        <div className="container">
          <h1>Tin Tức</h1>
          <p>Cập nhật thông tin mới nhất từ Nhà xe AnhHuy92</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="news-grid">
          {news.map((n, i) => (
            <div className="news-card" key={i}>
              <div style={{ position: 'relative' }}>
                <img src={n.img} alt={n.title} className="news-img" />
                <span
                  className="news-category-badge"
                  style={{ background: categoryColors[n.category] || '#666' }}
                >
                  {n.category}
                </span>
              </div>
              <div className="news-body">
                <div className="news-date">📅 {n.date}</div>
                <h3 className="news-title">{n.title}</h3>
                <p className="news-excerpt">{n.excerpt}</p>
                <span className="news-read-more">Đọc tiếp →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
