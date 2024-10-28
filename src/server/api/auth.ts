import { creat, query } from '../http'

export function loginApi(params: any): Promise<any> {
  return creat('auth/login', params)
}

export function getPermissionInfo() {
  return query('auth/permissionInfo', {})
}

export function getQrcode():Promise<any> {
  return query('auth/qrcode', {})
}
