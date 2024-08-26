import { h } from "vue";
import SvgIcon from "@/components/SvgIcon";

interface IconConfig {
  color: string;
  fontSize: string;
  icon: string;
  localIcon: string;
}

interface LocalStyle extends Partial<Pick<IconConfig, "color" | "fontSize">> { }

export function useIconRender() {
  function iconRender(config: Partial<IconConfig>) {
    const { color, fontSize, icon = "", localIcon } = config;

    const style: LocalStyle = {};
    color && (style.color = color);
    fontSize && (style.fontSize = fontSize);

    if (!icon && !localIcon) {
      console.log("没有传递图标名称，请确保给icon或localIcon传递有效值!");
    }
    return () => h(SvgIcon, { icon, localIcon, style });
  }

  return {
    iconRender,
  };
}
