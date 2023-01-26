import { IconType } from "react-icons";

export interface NavItem {
  id: string;
  name: string;
  displayName: string;
  rootPath: string;
  icon: IconType;
  subItems?: SubNavItem[];
}

export interface SubNavItem
  extends Pick<NavItem, "displayName" | "name" | "id" | "icon"> {
  path: string;
}
