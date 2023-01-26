import { NavItem } from "./model";
import { FiHome, FiTrendingUp, FiCompass, FiStar } from "react-icons/fi";

export function generateNavItems(): NavItem[] {
  return [
    {
      id: "dashboard",
      displayName: "Dashboard",
      name: "dashboard",
      rootPath: "/",
      icon: FiHome,
    },
    {
      id: "inventory",
      displayName: "Inventory",
      name: "inventory",
      rootPath: "/inventory",
      icon: FiTrendingUp,
    },
    {
      id: "schedule",
      displayName: "Schedule",
      name: "schedule",
      rootPath: "/schedule",
      icon: FiCompass,
    },
    {
      id: "logs",
      displayName: "Logs",
      name: "logs",
      rootPath: "/logs",
      icon: FiStar,
    },
    {
      id: "forecast",
      displayName: "Forecast",
      name: "forecast",
      rootPath: "/forecast",
      icon: FiTrendingUp,
    },
    {
      id: "reports",
      displayName: "Reports",
      name: "reports",
      rootPath: "/reports",
      icon: FiCompass,
    },
  ];
}
