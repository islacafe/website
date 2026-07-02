import { menuPhoto } from "@/lib/images";
import type { LocalizedString } from "@/lib/localized";

export type MenuTag = "NUEVO" | "FAVORITO" | "VEGANO" | "PARA COMPARTIR";
export type PriceMode = "size" | "usd";
export type MenuGroup = "Bebidas" | "Batidos";

export const menuTagLabels: Record<MenuTag, LocalizedString> = {
  NUEVO: { es: "NUEVO", en: "NEW" },
  FAVORITO: { es: "FAVORITO", en: "FAVORITE" },
  VEGANO: { es: "VEGANO", en: "VEGAN" },
  "PARA COMPARTIR": { es: "PARA COMPARTIR", en: "TO SHARE" },
};

export const batidoFlatPrice: LocalizedString = { es: "c/u $7.99", en: "$7.99 each" };

export type MenuItemData = {
  name: LocalizedString;
  desc?: LocalizedString;
  icon: string;
  size?: string;
  price?: string;
  tag?: MenuTag;
  photo?: string;
  group?: MenuGroup;
};

export type MenuAddOn = { name: LocalizedString; price: string };

export type MenuHeroQuote = { kicker: LocalizedString; quote: LocalizedString };

export type MenuCategoryData = {
  id: string;
  tab: LocalizedString;
  kicker: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  priceMode: PriceMode;
  heroPhoto?: string;
  heroQuote?: MenuHeroQuote;
  grouped?: boolean;
  items: MenuItemData[];
  addOns?: MenuAddOn[];
};

export const menuCategories: MenuCategoryData[] = [
  {
    id: "cafe",
    tab: { es: "Café", en: "Coffee" },
    kicker: { es: "A · ESPRESSO BAR", en: "A · ESPRESSO BAR" },
    title: { es: "Café", en: "Coffee" },
    description: {
      es: "Del espresso al cortadito. Nuestros clásicos calientes, hechos al momento en la barra.",
      en: "From espresso to cortadito. Our hot classics, made to order at the bar.",
    },
    priceMode: "size",
    heroPhoto: menuPhoto("p_cappuccino.png"),
    items: [
      {
        name: { es: "Capuccino", en: "Cappuccino" },
        size: "8oz",
        icon: "capuccino",
        desc: {
          es: "Capas perfectas de espresso, leche vaporizada y espuma. Textura aterciopelada.",
          en: "Perfect layers of espresso, steamed milk, and foam. Velvety texture.",
        },
      },
      {
        name: { es: "Latte", en: "Latte" },
        size: "12oz",
        icon: "latte",
        desc: {
          es: "Espresso equilibrado con leche vaporizada y una capa ligera de espuma.",
          en: "Balanced espresso with steamed milk and a light layer of foam.",
        },
      },
      {
        name: { es: "Americano", en: "Americano" },
        size: "10oz",
        icon: "americano",
        desc: {
          es: "Shots de espresso rebajados con agua caliente. Suave y limpio.",
          en: "Espresso shots lengthened with hot water. Smooth and clean.",
        },
      },
      {
        name: { es: "Espresso", en: "Espresso" },
        size: "1oz",
        icon: "espresso",
        desc: {
          es: "Un shot rico de espresso concentrado. Intenso y aromático.",
          en: "A rich shot of concentrated espresso. Intense and aromatic.",
        },
      },
      {
        name: { es: "Cortadito", en: "Cortadito" },
        size: "4oz",
        icon: "cortadito",
        desc: {
          es: "Un shot potente de espresso “cortado” con un toque de leche vaporizada. Fuerte y suave.",
          en: "A bold espresso shot “cut” with a touch of steamed milk. Strong and smooth.",
        },
      },
      {
        name: { es: "Moccaccino", en: "Moccaccino" },
        size: "12oz",
        icon: "moccaccino",
        desc: {
          es: "Espresso con leche vaporizada y una rica salsa de chocolate. Calidad premium.",
          en: "Espresso with steamed milk and a rich chocolate sauce. Premium quality.",
        },
      },
      {
        name: { es: "Coladita", en: "Coladita" },
        size: "6oz",
        icon: "coladita",
        desc: {
          es: "Un “cort” de espresso con la misma cantidad de leche vaporizada. Fuerte y suave.",
          en: "An espresso “cort” with an equal amount of steamed milk. Strong and smooth.",
        },
      },
    ],
  },
  {
    id: "frios",
    tab: { es: "Fríos & Chai", en: "Iced & Chai" },
    kicker: { es: "B · HIELO & CHAI", en: "B · ICE & CHAI" },
    title: { es: "Fríos & Chai", en: "Iced & Chai" },
    description: {
      es: "Para el calor de Miami: lattes helados, moccaerappes batidos y chai artesanal. Todos 16oz.",
      en: "For Miami heat: iced lattes, blended moccaerappes, and craft chai. All 16oz.",
    },
    priceMode: "size",
    heroPhoto: menuPhoto("p_icemocca.png"),
    items: [
      {
        name: { es: "Ice Latte", en: "Iced Latte" },
        size: "16oz",
        icon: "ice_latte",
        desc: {
          es: "Espresso con leche fría servido sobre hielo. Suave y cremoso.",
          en: "Espresso with cold milk served over ice. Smooth and creamy.",
        },
      },
      {
        name: { es: "Ice Capuccino", en: "Iced Cappuccino" },
        size: "16oz",
        icon: "ice_capuccino",
        desc: {
          es: "Espresso, leche fría y una capa gruesa de espuma fría. Con un toque de canela.",
          en: "Espresso, cold milk, and a thick layer of cold foam. With a touch of cinnamon.",
        },
      },
      {
        name: { es: "Ice Moccaerappe", en: "Iced Moccaerappe" },
        size: "16oz",
        icon: "ice_moccaerappe",
        desc: {
          es: "Espresso batido con chocolate y leche. Coronado con crema batida.",
          en: "Espresso blended with chocolate and milk. Topped with whipped cream.",
        },
      },
      {
        name: { es: "Ice Americano", en: "Iced Americano" },
        size: "16oz",
        icon: "ice_americano",
        desc: {
          es: "Shots de espresso servidos sobre hielo. Limpio e intenso.",
          en: "Espresso shots served over ice. Clean and intense.",
        },
      },
      {
        name: { es: "Biscoff Iced Latte", en: "Biscoff Iced Latte" },
        size: "16oz",
        icon: "biscoff",
        photo: "p_biscoff.png",
        tag: "NUEVO",
        desc: {
          es: "Crema de galleta Biscoff, espresso, leche y hielo. Con crema batida y galleta desmenuzada.",
          en: "Biscoff cookie butter, espresso, milk, and ice. With whipped cream and crumbled cookie.",
        },
      },
      {
        name: { es: "Tiramisu Iced Latte", en: "Tiramisu Iced Latte" },
        size: "16oz",
        icon: "tiramisu",
        photo: "p_tiramisu.png",
        tag: "NUEVO",
        desc: {
          es: "Crema de tiramisú, espresso, leche y hielo. Con crema batida, cacao y una soletilla.",
          en: "Tiramisu cream, espresso, milk, and ice. With whipped cream, cocoa, and a ladyfinger.",
        },
      },
      {
        name: { es: "Dirty Chai Latte", en: "Dirty Chai Latte" },
        size: "16oz",
        icon: "dirty_chai",
        desc: {
          es: "Chai latte clásico con un shot de espresso.",
          en: "Classic chai latte with a shot of espresso.",
        },
      },
      {
        name: { es: "Vanilla Chai Latte", en: "Vanilla Chai Latte" },
        size: "16oz",
        icon: "vanilla_chai",
        desc: {
          es: "Té chai batido con dulce vainilla.",
          en: "Chai tea blended with sweet vanilla.",
        },
      },
    ],
  },
  {
    id: "desayuno",
    tab: { es: "Desayuno", en: "Breakfast" },
    kicker: { es: "C · MAÑANAS", en: "C · MORNINGS" },
    title: { es: "Desayuno", en: "Breakfast" },
    description: {
      es: "Huevos, tostadas y pan cubano para empezar el día. Servido con producto fresco.",
      en: "Eggs, toast, and Cuban bread to start the day. Served with fresh ingredients.",
    },
    priceMode: "usd",
    heroPhoto: menuPhoto("p_tostada.png"),
    items: [
      {
        name: { es: "Tortilla Sandwich", en: "Tortilla Sandwich" },
        price: "12.95",
        icon: "tortilla_sandwich",
        desc: {
          es: "Tortilla de huevo en pan cubano con nuestros toppings (jamón, queso, cebolla, pimiento, espinaca).",
          en: "Egg omelet on Cuban bread with our toppings (ham, cheese, onion, pepper, spinach).",
        },
      },
      {
        name: { es: "Two Eggs with Ham or Bacon", en: "Two Eggs with Ham or Bacon" },
        price: "12.99",
        icon: "two_eggs",
        desc: {
          es: "Dos huevos al gusto con jamón o bacon y tostada cubana.",
          en: "Two eggs any style with ham or bacon and Cuban toast.",
        },
      },
      {
        name: { es: "Ham and Cheese Croissant", en: "Ham and Cheese Croissant" },
        price: "9.99",
        icon: "croissant",
      },
      {
        name: {
          es: "Eggs with Goat Cheese & Honey Toast",
          en: "Eggs with Goat Cheese & Honey Toast",
        },
        price: "11.99",
        icon: "egg_toast",
        tag: "FAVORITO",
        desc: {
          es: "Tostada de masa madre con huevos revueltos, queso de cabra y miel.",
          en: "Sourdough toast with scrambled eggs, goat cheese, and honey.",
        },
      },
      {
        name: { es: "Avocado Toast", en: "Avocado Toast" },
        price: "7.99",
        icon: "avocado_toast",
        tag: "VEGANO",
        desc: {
          es: "Aguacate, aceite de oliva y sal marina sobre masa madre.",
          en: "Avocado, olive oil, and sea salt on sourdough.",
        },
      },
      {
        name: { es: "Cuban Toast with Butter", en: "Cuban Toast with Butter" },
        price: "2.99",
        icon: "buttered_toast",
      },
      {
        name: { es: "Signature Avocado Toast", en: "Signature Avocado Toast" },
        price: "15.99",
        icon: "signature_avocado",
        tag: "FAVORITO",
        desc: {
          es: "Pasta especial de aguacate con un huevo al gusto y medio aguacate, coronado con bacon, tomate y queso.",
          en: "Special avocado spread with an egg any style and half an avocado, topped with bacon, tomato, and cheese.",
        },
      },
    ],
  },
  {
    id: "sandwiches",
    tab: { es: "Sándwiches", en: "Sandwiches" },
    kicker: { es: "D · PAN CUBANO", en: "D · CUBAN BREAD" },
    title: { es: "Sándwiches", en: "Sandwiches" },
    description: {
      es: "Prensados al momento en pan cubano recién horneado. El corazón de la casa.",
      en: "Pressed to order on freshly baked Cuban bread. The heart of the house.",
    },
    priceMode: "usd",
    heroQuote: {
      kicker: { es: "LA PLANCHA", en: "THE PRESS" },
      quote: {
        es: "Pan cubano, jamón, queso y mojo. Prensado hasta dorar.",
        en: "Cuban bread, ham, cheese, and mojo. Pressed until golden.",
      },
    },
    items: [
      {
        name: { es: "Steak Sandwich", en: "Steak Sandwich" },
        price: "13.99",
        icon: "steak_sandwich",
        desc: {
          es: "Pan cubano tostado, bistec y cebolla con papitas crujientes.",
          en: "Toasted Cuban bread, steak, and onion with crispy shoestring potatoes.",
        },
      },
      {
        name: { es: "Pan Con Lechón", en: "Pan Con Lechón" },
        price: "13.99",
        icon: "pan_lechon",
        desc: {
          es: "Pernil de cerdo asado lento con cebolla y mojo.",
          en: "Slow-roasted pork shoulder with onion and mojo.",
        },
      },
      {
        name: { es: "Cuban Croqueta Sandwich", en: "Cuban Croqueta Sandwich" },
        price: "11.50",
        icon: "croqueta_sandwich",
        desc: {
          es: "Pan cubano con croqueta de jamón, pepinillos, queso suizo, jamón ahumado y salchicha.",
          en: "Cuban bread with ham croquette, pickles, Swiss cheese, smoked ham, and sausage.",
        },
      },
      {
        name: { es: "Ham and Cheese Sandwich", en: "Ham and Cheese Sandwich" },
        price: "7.95",
        icon: "ham_cheese",
      },
      {
        name: { es: "Tuna Sandwich", en: "Tuna Sandwich" },
        price: "12.50",
        icon: "tuna",
        tag: "FAVORITO",
        desc: {
          es: "Ensalada de atún, lechuga y cebolla en pan tostado.",
          en: "Tuna salad, lettuce, and onion on toasted bread.",
        },
      },
      {
        name: { es: "Medianoche Sandwich", en: "Medianoche Sandwich" },
        price: "11.99",
        icon: "medianoche",
        desc: {
          es: "Pan dulce cubano, cerdo asado, jamón, pepinillos y queso suizo.",
          en: "Sweet Cuban bread, roasted pork, ham, pickles, and Swiss cheese.",
        },
      },
    ],
  },
  {
    id: "picar",
    tab: { es: "Para Picar", en: "Snacks" },
    kicker: { es: "E · SNACKS", en: "E · SNACKS" },
    title: { es: "Para Picar", en: "To Share" },
    description: {
      es: "Croquetas, tequeños y empanadas. Pide la tabla y compártela con la mesa.",
      en: "Croquettes, tequeños, and empanadas. Order the platter and share with the table.",
    },
    priceMode: "usd",
    heroPhoto: menuPhoto("p_platter.png"),
    items: [
      { name: { es: "Pan De Bono", en: "Pan De Bono" }, price: "2.25", icon: "pan_de_bono" },
      { name: { es: "Empanadas", en: "Empanadas" }, price: "3.50", icon: "empanada" },
      {
        name: { es: "Tequeños", en: "Tequeños" },
        price: "2.25",
        icon: "tequeno",
        tag: "FAVORITO",
      },
      {
        name: { es: "Croquetas", en: "Croquetas" },
        price: "1.80",
        icon: "croqueta",
        tag: "FAVORITO",
      },
      { name: { es: "Cold Pasta Salad", en: "Cold Pasta Salad" }, price: "8.99", icon: "pasta_salad" },
      {
        name: { es: "Small Bites Platter", en: "Small Bites Platter" },
        price: "27.99",
        icon: "platter",
        photo: "p_platter.png",
        tag: "PARA COMPARTIR",
        desc: {
          es: "Una selección de nuestros favoritos. Perfecto para compartir.",
          en: "A selection of our favorites. Perfect for sharing.",
        },
      },
    ],
  },
  {
    id: "bebidas",
    tab: { es: "Bebidas & Batidos", en: "Drinks & Shakes" },
    kicker: { es: "F · FRESCOS", en: "F · REFRESHERS" },
    title: { es: "Bebidas & Batidos", en: "Drinks & Shakes" },
    description: {
      es: "Batidos de fruta fresca — mamey, guayaba, mango — y refrescos para el camino.",
      en: "Fresh fruit shakes — mamey, guava, mango — and drinks for the road.",
    },
    priceMode: "usd",
    heroPhoto: menuPhoto("p_shake.png"),
    grouped: true,
    items: [
      { name: { es: "Water", en: "Water" }, price: "2.00", icon: "water", group: "Bebidas" },
      { name: { es: "Soda", en: "Soda" }, price: "2.50", icon: "soda", group: "Bebidas" },
      {
        name: { es: "Coconut Water", en: "Coconut Water" },
        price: "3.50",
        icon: "coconut",
        group: "Bebidas",
      },
      {
        name: { es: "Energy Drink", en: "Energy Drink" },
        price: "3.50",
        icon: "energy",
        group: "Bebidas",
      },
      {
        name: { es: "Orange Juice", en: "Orange Juice" },
        price: "6.99",
        icon: "orange_juice",
        group: "Bebidas",
      },
      { name: { es: "Mamey", en: "Mamey" }, price: "7.99", icon: "shake", group: "Batidos" },
      {
        name: { es: "Strawberry & Banana", en: "Strawberry & Banana" },
        price: "7.99",
        icon: "shake",
        group: "Batidos",
      },
      { name: { es: "Banana", en: "Banana" }, price: "7.99", icon: "shake", group: "Batidos" },
      { name: { es: "Guava", en: "Guava" }, price: "7.99", icon: "shake", group: "Batidos" },
      { name: { es: "Mango", en: "Mango" }, price: "7.99", icon: "shake", group: "Batidos" },
    ],
    addOns: [
      { name: { es: "Peanut Butter", en: "Peanut Butter" }, price: "1.00" },
      { name: { es: "Collagen", en: "Collagen" }, price: "1.50" },
      { name: { es: "Protein Powder", en: "Protein Powder" }, price: "1.50" },
    ],
  },
  {
    id: "dulces",
    tab: { es: "Dulces", en: "Sweets" },
    kicker: { es: "G · PANADERÍA", en: "G · BAKERY" },
    title: { es: "Dulces", en: "Sweets" },
    description: {
      es: "Pastelitos, torrejas y tres leches. Horneado cada mañana — cuando se acaban, se acaban.",
      en: "Pastelitos, torrejas, and tres leches. Baked every morning — when they're gone, they're gone.",
    },
    priceMode: "usd",
    heroPhoto: menuPhoto("p_pastelito.png"),
    items: [
      {
        name: { es: "Arroz Con Leche", en: "Arroz Con Leche" },
        price: "4.99",
        icon: "arroz",
        photo: "p_arroz.png",
        desc: {
          es: "Arroz con leche hecho en casa con un toque de canela.",
          en: "Homemade rice pudding with a touch of cinnamon.",
        },
      },
      {
        name: { es: "Nutella Croissant", en: "Nutella Croissant" },
        price: "4.95",
        icon: "croissant",
        photo: "p_nutella.png",
        desc: {
          es: "Croissant hojaldrado bañado en Nutella.",
          en: "Flaky croissant dipped in Nutella.",
        },
      },
      {
        name: { es: "Torrejas", en: "Torrejas" },
        price: "4.50",
        icon: "torreja",
        desc: {
          es: "Pan cubano empapado, frito y espolvoreado con azúcar y canela.",
          en: "Cuban bread soaked, fried, and dusted with sugar and cinnamon.",
        },
      },
      {
        name: { es: "Pastelitos", en: "Pastelitos" },
        price: "1.75",
        icon: "pastelito",
        desc: {
          es: "Hojaldre relleno de guayaba, queso o carne. Recién horneado.",
          en: "Puff pastry filled with guava, cheese, or meat. Freshly baked.",
        },
      },
      {
        name: { es: "Tres Leches", en: "Tres Leches" },
        price: "6.99",
        icon: "tres_leches",
        desc: {
          es: "Bizcocho esponjoso bañado en tres leches. Nuestro clásico.",
          en: "Fluffy sponge cake soaked in three milks. Our classic.",
        },
      },
    ],
  },
];

export type MenuPreviewItem = {
  name: LocalizedString;
  price?: string;
  size?: string;
  icon: string;
  desc: LocalizedString;
};

export type MenuPreviewCard = {
  heading: LocalizedString;
  photo: string;
  items: MenuPreviewItem[];
};

export const menuPreviewCards: MenuPreviewCard[] = [
  {
    heading: { es: "Café", en: "Coffee" },
    photo: menuPhoto("p_cappuccino.png"),
    items: [
      {
        name: { es: "Café con Leche", en: "Café con Leche" },
        size: "12oz",
        icon: "latte",
        desc: {
          es: "Espresso doble, leche al vapor, azúcar caramelizada.",
          en: "Double espresso, steamed milk, caramelized sugar.",
        },
      },
      {
        name: { es: "Cortadito", en: "Cortadito" },
        size: "4oz",
        icon: "cortadito",
        desc: {
          es: "El shot de Miami — espresso cortado con leche evaporada.",
          en: "The Miami shot — espresso cut with evaporated milk.",
        },
      },
      {
        name: { es: "Cold Brew de la Casa", en: "House Cold Brew" },
        size: "16oz",
        icon: "ice_americano",
        desc: {
          es: "Reposado 18 horas, notas de cacao y caña.",
          en: "Steeped 18 hours, notes of cocoa and cane.",
        },
      },
    ],
  },
  {
    heading: { es: "Brunch", en: "Brunch" },
    photo: menuPhoto("p_tostada.png"),
    items: [
      {
        name: { es: "Tostada Isla", en: "Tostada Isla" },
        price: "11",
        icon: "egg_toast",
        desc: {
          es: "Masa madre, aguacate, huevo poché, ají amarillo.",
          en: "Sourdough, avocado, poached egg, ají amarillo.",
        },
      },
      {
        name: { es: "Pan con Lechón", en: "Pan con Lechón" },
        price: "12",
        icon: "pan_lechon",
        desc: {
          es: "Cerdo asado lento, mojo, cebolla encurtida.",
          en: "Slow-roasted pork, mojo, pickled onion.",
        },
      },
      {
        name: { es: "Mallorca French Toast", en: "Mallorca French Toast" },
        price: "10",
        icon: "torreja",
        desc: {
          es: "Mallorca dulce, custard de vainilla, guayaba.",
          en: "Sweet mallorca, vanilla custard, guava.",
        },
      },
    ],
  },
  {
    heading: { es: "Dulces", en: "Sweets" },
    photo: menuPhoto("p_nutella.png"),
    items: [
      {
        name: { es: "Pastelito de Guayaba", en: "Guava Pastelito" },
        price: "3",
        icon: "pastelito",
        desc: {
          es: "Hojaldre crujiente, guayaba y queso crema.",
          en: "Crispy puff pastry, guava, and cream cheese.",
        },
      },
      {
        name: { es: "Croissant de Mantequilla", en: "Butter Croissant" },
        price: "3.5",
        icon: "croissant",
        desc: {
          es: "Laminado a mano, 27 capas, horneado del día.",
          en: "Hand-laminated, 27 layers, baked daily.",
        },
      },
      {
        name: { es: "Tres Leches del Día", en: "Tres Leches of the Day" },
        price: "5",
        icon: "tres_leches",
        desc: {
          es: "Bizcocho esponjoso, tres leches, canela.",
          en: "Fluffy sponge cake, three milks, cinnamon.",
        },
      },
    ],
  },
];
