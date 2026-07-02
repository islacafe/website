export type OrderPlatformKey = "uberEats";

export type OrderPlatform = {
  key: OrderPlatformKey;
  href: string;
};

export const orderPlatforms: OrderPlatform[] = [
  {
    key: "uberEats",
    href: process.env.NEXT_PUBLIC_ORDER_UBER_EATS_URL ?? "#",
  },
];
