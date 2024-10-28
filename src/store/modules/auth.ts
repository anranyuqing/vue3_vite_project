import { defineStore } from 'pinia'
import { to } from '@/utils'
import { loginApi } from '@/server'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    permissions: [],
    menu: [],
    token: null
  }),
  actions: {
    async login({ account, password }): Promise<boolean> {
      const [err, res] = await to(loginApi({ account, password }))
      if (err) {
        console.error(err)
        return false
      }
      const { token } = res
      this.token = token
      return true
    }
  }
})
