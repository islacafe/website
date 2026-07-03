export const siteImages = {
  logo: "/images/logo.jpg",
  hero: "/images/hero.jpeg",
  baristaPour: "/images/barista-pour.jpeg",
  pastelitosHistoria: "/images/pastelitos-historia.jpeg",
  cafeConLeche: "/images/cafe-con-leche.jpeg",
  tostadaIsla: "/images/tostada-isla.jpeg",
  pastelitosMenu: "/images/pastelitos-menu.jpeg",
  salon: "/images/salon.jpeg",
  barra: "/images/barra.jpeg",
  plantas: "/images/plantas.jpeg",
  mesaAlSol: "/images/mesa-al-sol.jpeg",
  localBrunch: "/images/local-brunch.jpeg",
  localTorrejas: "/images/local-torrejas.jpeg",
  pourOver: "/images/pour-over.jpeg",
  footerBg: "/images/footer-bg.png",
  heroVideoPoster: "/images/footer-bg-poster.jpg",
  heroVideo: "/videos/footer-bg.mp4",
} as const;

export type SiteImageKey = keyof typeof siteImages;

export const menuCategoryImages: Record<string, string> = {
  cafe: siteImages.cafeConLeche,
  brunch: siteImages.tostadaIsla,
  dulces: siteImages.pastelitosMenu,
};

export const menuIcon = (name: string): string => `/images/menu/icons/${name}.png`;
export const menuPhoto = (file: string): string => `/images/menu/photos/${file}`;
export const teamIcon = (name: string): string => `/images/team/${name}.png`;

export const espacioGallery = [
  { src: siteImages.salon, className: "col-span-2 row-span-2" },
  { src: siteImages.localBrunch, className: "" },
  { src: siteImages.plantas, className: "" },
  { src: siteImages.mesaAlSol, className: "" },
  { src: siteImages.localTorrejas, className: "" },
] as const;

export const reviewAvatarColors = [
  "bg-[#9C8466]",
  "bg-[#5E5042]",
  "bg-[#B8966B] text-[#221C16]",
  "bg-[#7A6A57]",
] as const;
