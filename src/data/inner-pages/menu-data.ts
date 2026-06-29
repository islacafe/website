import { siteImages } from "@/lib/images";
import type { LocalizedString } from "@/lib/localized";

export type MenuItemData = {
  name: LocalizedString;
  price: string;
  badge?: LocalizedString;
  description: LocalizedString;
};

export type MenuCategoryData = {
  id: string;
  tab: LocalizedString;
  code: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  reverse?: boolean;
  items: MenuItemData[];
};

export const menuCategories: MenuCategoryData[] = [
  {
    id: "cafe",
    tab: { es: "Café", en: "Coffee" },
    code: { es: "A · ESPRESSO BAR", en: "A · ESPRESSO BAR" },
    title: { es: "Café", en: "Coffee" },
    description: {
      es: "Grano de origen único, tostado en lotes pequeños. Pídelo con leche de avena, coco o almendra — sin recargo.",
      en: "Single-origin beans, roasted in small batches. Order with oat, coconut, or almond milk — no extra charge.",
    },
    image: siteImages.baristaPour,
    items: [
      {
        name: { es: "Cortadito", en: "Cortadito" },
        price: "2.5",
        description: {
          es: "El shot de Miami — espresso cortado con leche evaporada y azúcar.",
          en: "The Miami shot — espresso cut with evaporated milk and sugar.",
        },
      },
      {
        name: { es: "Café con Leche", en: "Café con Leche" },
        price: "3.5",
        description: {
          es: "Espresso doble, leche al vapor, azúcar caramelizada al borde.",
          en: "Double espresso, steamed milk, caramelized sugar on the rim.",
        },
      },
      {
        name: { es: "Colada", en: "Colada" },
        price: "3",
        badge: { es: "PARA COMPARTIR", en: "TO SHARE" },
        description: {
          es: "Cuatro shots, azúcar y espumita — con sus tacitas para repartir.",
          en: "Four shots, sugar, and foam — with cups to share.",
        },
      },
      {
        name: { es: "Cappuccino", en: "Cappuccino" },
        price: "4",
        description: {
          es: "Espresso, leche texturizada y un velo de cacao isleño.",
          en: "Espresso, textured milk, and a veil of island cocoa.",
        },
      },
      {
        name: { es: "Flat White", en: "Flat White" },
        price: "4.25",
        description: {
          es: "Doble ristretto y microespuma sedosa. Sin azúcar, todo café.",
          en: "Double ristretto and silky microfoam. No sugar, all coffee.",
        },
      },
      {
        name: { es: "Café Bombón", en: "Café Bombón" },
        price: "3.75",
        description: {
          es: "Espresso sobre leche condensada — dulce, en capas, irresistible.",
          en: "Espresso over condensed milk — sweet, layered, irresistible.",
        },
      },
      {
        name: { es: "Pour Over de Origen", en: "Single-Origin Pour Over" },
        price: "5",
        badge: { es: "GRANO DE LA SEMANA", en: "BEAN OF THE WEEK" },
        description: {
          es: "V60 a mano, servido negro. Pregunta por el origen del momento.",
          en: "Hand-poured V60, served black. Ask about this week's origin.",
        },
      },
    ],
  },
  {
    id: "frios",
    tab: { es: "Fríos", en: "Iced" },
    code: { es: "B · HIELO & FRUTA", en: "B · ICE & FRUIT" },
    title: { es: "Fríos", en: "Iced" },
    description: {
      es: "Para el calor de Miami: cold brew lento, batidos de fruta fresca y refrescos de la isla.",
      en: "For Miami heat: slow cold brew, fresh fruit shakes, and island refreshers.",
    },
    image: siteImages.pourOver,
    reverse: true,
    items: [
      {
        name: { es: "Cold Brew de la Casa", en: "House Cold Brew" },
        price: "4.5",
        description: {
          es: "Reposado 18 horas — notas de cacao y caña, sin amargor.",
          en: "Steeped 18 hours — notes of cocoa and cane, no bitterness.",
        },
      },
      {
        name: { es: "Cold Brew con Coco", en: "Coconut Cold Brew" },
        price: "5.25",
        description: {
          es: "Cold brew, leche de coco y un toque de vainilla. Muy isla.",
          en: "Cold brew, coconut milk, and a touch of vanilla. Very island.",
        },
      },
      {
        name: { es: "Iced Latte de Guayaba", en: "Guava Iced Latte" },
        price: "5.5",
        description: {
          es: "Espresso, leche fría y almíbar de guayaba hecho en casa.",
          en: "Espresso, cold milk, and house-made guava syrup.",
        },
      },
      {
        name: { es: "Matcha Helado", en: "Iced Matcha" },
        price: "5.5",
        badge: { es: "VEGANO", en: "VEGAN" },
        description: {
          es: "Matcha ceremonial batido con leche de avena sobre hielo.",
          en: "Ceremonial matcha whisked with oat milk over ice.",
        },
      },
      {
        name: { es: "Batido de Mamey", en: "Mamey Shake" },
        price: "6",
        description: {
          es: "Fruta fresca, leche y hielo — el sabor del trópico en vaso.",
          en: "Fresh fruit, milk, and ice — the taste of the tropics in a glass.",
        },
      },
      {
        name: { es: "Limonada de Coco", en: "Coconut Lemonade" },
        price: "4.5",
        badge: { es: "VEGANO", en: "VEGAN" },
        description: {
          es: "Limón exprimido, agua de coco y menta fresca. Sin lácteos.",
          en: "Fresh lemon, coconut water, and mint. Dairy-free.",
        },
      },
    ],
  },
  {
    id: "brunch",
    tab: { es: "Brunch", en: "Brunch" },
    code: { es: "C · SALADO · 8–14H", en: "C · SAVORY · 8AM–2PM" },
    title: { es: "Brunch", en: "Brunch" },
    description: {
      es: "Cocina caribeña de mañana con producto local. Servido hasta las 2 de la tarde, todos los días.",
      en: "Caribbean morning cooking with local ingredients. Served until 2pm, every day.",
    },
    image: siteImages.tostadaIsla,
    items: [
      {
        name: { es: "Tostada Isla", en: "Tostada Isla" },
        price: "11",
        description: {
          es: "Masa madre, aguacate, huevo poché y un toque de ají amarillo.",
          en: "Sourdough, avocado, poached egg, and a touch of ají amarillo.",
        },
      },
      {
        name: { es: "Pan con Lechón", en: "Pan con Lechón" },
        price: "12",
        badge: { es: "FAVORITO", en: "FAVORITE" },
        description: {
          es: "Cerdo asado lento, mojo de la casa y cebolla encurtida.",
          en: "Slow-roasted pork, house mojo, and pickled onion.",
        },
      },
      {
        name: { es: "Mallorca French Toast", en: "Mallorca French Toast" },
        price: "10",
        description: {
          es: "Mallorca dulce, custard de vainilla y compota de guayaba.",
          en: "Sweet mallorca, vanilla custard, and guava compote.",
        },
      },
      {
        name: { es: "Huevos Habaneros", en: "Huevos Habaneros" },
        price: "12",
        description: {
          es: "Dos huevos sobre sofrito, plátano maduro y queso del país.",
          en: "Two eggs over sofrito, ripe plantain, and country cheese.",
        },
      },
      {
        name: { es: "Bowl de Açaí Caribeño", en: "Caribbean Açaí Bowl" },
        price: "10",
        badge: { es: "VEGANO", en: "VEGAN" },
        description: {
          es: "Açaí, mango, granola de coco y miel de la isla (opcional).",
          en: "Açaí, mango, coconut granola, and island honey (optional).",
        },
      },
      {
        name: { es: "Croquetas de Jamón (4)", en: "Ham Croquettes (4)" },
        price: "8",
        description: {
          es: "Crujientes por fuera, cremosas por dentro, con salsa de la casa.",
          en: "Crispy outside, creamy inside, with house sauce.",
        },
      },
      {
        name: { es: "Tortilla Española", en: "Spanish Tortilla" },
        price: "9",
        description: {
          es: "Patata, cebolla y alioli de ajo. Servida tibia, jugosa al centro.",
          en: "Potato, onion, and garlic alioli. Served warm, juicy in the center.",
        },
      },
    ],
  },
  {
    id: "dulces",
    tab: { es: "Dulces", en: "Pastries" },
    code: { es: "D · PANADERÍA", en: "D · BAKERY" },
    title: { es: "Dulces", en: "Pastries" },
    description: {
      es: "Horneado cada mañana antes de abrir. Cuando se acaban, se acaban — llega temprano.",
      en: "Baked every morning before we open. When they're gone, they're gone — come early.",
    },
    image: siteImages.pastelitosMenu,
    reverse: true,
    items: [
      {
        name: { es: "Pastelito de Guayaba", en: "Guava Pastelito" },
        price: "3",
        description: {
          es: "Hojaldre crujiente relleno de guayaba y queso crema.",
          en: "Crispy puff pastry filled with guava and cream cheese.",
        },
      },
      {
        name: { es: "Croissant de Mantequilla", en: "Butter Croissant" },
        price: "3.5",
        description: {
          es: "Laminado a mano, 27 capas, horneado del día. Puro hojaldre.",
          en: "Hand-laminated, 27 layers, baked fresh daily. Pure pastry.",
        },
      },
      {
        name: { es: "Tres Leches del Día", en: "Tres Leches of the Day" },
        price: "5",
        badge: { es: "FAVORITO", en: "FAVORITE" },
        description: {
          es: "Bizcocho esponjoso bañado en tres leches y canela.",
          en: "Sponge cake soaked in three milks and cinnamon.",
        },
      },
      {
        name: { es: "Quesito", en: "Quesito" },
        price: "3",
        description: {
          es: "Hojaldre relleno de queso crema dulce, glaseado ligero.",
          en: "Puff pastry filled with sweet cream cheese, lightly glazed.",
        },
      },
      {
        name: { es: "Flan de Coco", en: "Coconut Flan" },
        price: "5",
        description: {
          es: "Cremoso, con caramelo oscuro y ralladura de coco fresco.",
          en: "Creamy, with dark caramel and fresh coconut shavings.",
        },
      },
      {
        name: { es: "Mallorca de Jamón y Queso", en: "Ham & Cheese Mallorca" },
        price: "6",
        description: {
          es: "Pan dulce tostado a la plancha con jamón y queso suizo.",
          en: "Sweet mallorca pressed with ham and Swiss cheese.",
        },
      },
    ],
  },
];
