import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useUIStore = create(
  devtools(
    (set) => ({
      sidebarOpen: false,
      theme: 'light',

      // Actions
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen }), false, 'toggleSidebar'),
      setTheme: (theme) => set({ theme }, false, 'setTheme'),
    }),
    { name: 'UIStore' }
  )
)

export default useUIStore
