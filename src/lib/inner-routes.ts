export const innerRoutes = {
  home: "/",
  historia: "/historia",
  menu: "/menu",
  espacio: "/espacio",
  visitanos: "/visitanos",
} as const;

export type InnerRouteKey = keyof Omit<typeof innerRoutes, "home">;

export const navRouteKeys: InnerRouteKey[] = [
  "historia",
  "menu",
  "espacio",
  "visitanos",
];
