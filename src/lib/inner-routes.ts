export const innerRoutes = {
  home: "/",
  historia: "/historia",
  menu: "/menu",
  espacio: "/espacio",
  visitanos: "/visitanos",
} as const;

export type NavRouteKey = keyof typeof innerRoutes;
export type InnerRouteKey = Exclude<NavRouteKey, "home">;

export const navRouteKeys: NavRouteKey[] = [
  "home",
  "historia",
  "menu",
  "espacio",
  "visitanos",
];
