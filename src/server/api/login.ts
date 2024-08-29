import { creatData } from '../http'

export function login(params: Admin.login) {
    return creatData('/login', params)
}