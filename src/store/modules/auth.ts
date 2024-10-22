import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    permissions: [],
    menu: []
    }),
    actions: {
        login() { 
            const modules = import.meta.glob('@/pages/**/*.vue')
            
        }
    }
})
