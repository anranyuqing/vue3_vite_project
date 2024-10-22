import { creat, query } from '../http'

export function login(params: any) {
  return creat('auth/login', params)
}

export function getPermissionInfo(params: any) {
  return query('auth/permissionInfo', params)
}
