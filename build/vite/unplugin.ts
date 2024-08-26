import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Icons from "unplugin-icons/vite";
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { getRootPath } from '../../vite.config'

export function unplugin(viteEnv) {

    const { VITE_ICON_PREFIX, VITE_ICON_LOCAL_PREFIX } = viteEnv
    const localIconPath = getRootPath('src/assets/svg')
    const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '')
    return [
        vue(),
        Unocss(),
        Components({
            dirs: ['src/components'],
            resolvers: [NaiveUiResolver(), IconsResolver({
                customCollections: [collectionName],
                componentPrefix: VITE_ICON_PREFIX
            })]
        }),
        Icons({
            compiler: 'vue3',
            autoInstall: true,
            customCollections: {
                [collectionName]: FileSystemIconLoader(localIconPath)
            },
            defaultClass: 'inline-block',
            scale: 1,

        }),
        createSvgIconsPlugin({
            iconDirs: [localIconPath],
            symbolId: `${VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`,
            inject: 'body-last',
            customDomId: '__SVG_ICON_LOCAL__'
        })
    ]
}