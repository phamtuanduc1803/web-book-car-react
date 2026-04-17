// Tập trung tất cả API endpoints tại đây
// Thay thế bằng URL thực khi có backend

const endpoints = {
  // Auth
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    me: '/auth/me',
  },

  // Schedules
  schedules: {
    list: '/schedules',
    detail: (id) => `/schedules/${id}`,
  },

  // Booking
  bookings: {
    create: '/bookings',
    list: '/bookings',
    detail: (id) => `/bookings/${id}`,
    cancel: (id) => `/bookings/${id}/cancel`,
  },

  // Contact
  contact: {
    send: '/contact',
  },
}

export default endpoints
