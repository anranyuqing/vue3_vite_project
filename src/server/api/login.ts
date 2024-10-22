import { creat } from '../http'

export function login(params: any) {
    return creat('/login', params)
}