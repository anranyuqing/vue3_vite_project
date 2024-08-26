import { unplugin } from './unplugin'
import { server } from './server'

export function setupConfig(ConfigEnv) {
    return {
        plugins: unplugin(ConfigEnv),
        server: server()
    }
}