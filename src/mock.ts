
import type { Component } from 'vue'
import { h } from 'vue'
import SvgIcon from "@/components/SvgIcon";

function renderIcon(config: any) {
    const { icon, localIcon, style } = config
    return () => h(SvgIcon, { icon, localIcon, style })
}

export const Menu = [
    {
        label: '首页',
        key: 'home',
        icon: renderIcon({ icon: 'charm:home' }),
    },
    {
        label: '图表',
        key: 'chart',
        icon: renderIcon({ icon: 'charm:chart-bar' }),
    },

]