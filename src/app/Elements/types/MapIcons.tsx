// iconsMap.ts
import { SiApple, SiWindows10, SiAndroid } from "react-icons/si";

import { MdOutlineDesktopMac } from "react-icons/md";

import { IconType } from "react-icons";

export const iconsMap: Record<string, IconType> = {
  apple: SiApple,
  android: SiAndroid,
  mac: MdOutlineDesktopMac,
  win: SiWindows10,
  // Agrega más según lo necesites
};
