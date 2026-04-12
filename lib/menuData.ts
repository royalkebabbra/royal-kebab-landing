export type MenuCategory =
  | "tacos"
  | "kebab"
  | "burger"
  | "fritti"
  | "insalate"
  | "pizze"
  | "famiglia";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  menuPrice?: number;
  menuDescription?: string;
  category: MenuCategory;
  subGroup?: string;
  highlight?: boolean;
}

export interface CategoryInfo {
  id: MenuCategory;
  label: string;
}

export const categories: CategoryInfo[] = [
  { id: "tacos", label: "Tacos" },
  { id: "kebab", label: "Kebab" },
  { id: "burger", label: "Burger" },
  { id: "fritti", label: "Fritti" },
  { id: "insalate", label: "Insalate" },
  { id: "pizze", label: "Pizze" },
  { id: "famiglia", label: "Familiari & Taglio" },
];

const TACOS_MENU_DESC = "Tacos + bibita + patatine fritte";
const KEBAB_MENU_DESC = "Panino + bibita + patatine fritte";

export const menuItems: MenuItem[] = [
  // ============ TACOS ============
  {
    id: "tacos-chicken",
    name: "Chicken",
    price: 5.0,
    menuPrice: 8.5,
    menuDescription: TACOS_MENU_DESC,
    category: "tacos",
  },
  {
    id: "tacos-beef",
    name: "Beef",
    price: 5.0,
    menuPrice: 8.5,
    menuDescription: TACOS_MENU_DESC,
    category: "tacos",
  },
  {
    id: "tacos-kebab",
    name: "Kebab",
    price: 5.0,
    menuPrice: 8.5,
    menuDescription: TACOS_MENU_DESC,
    category: "tacos",
  },
  {
    id: "tacos-salsiccia",
    name: "Salsiccia",
    price: 5.0,
    menuPrice: 8.5,
    menuDescription: TACOS_MENU_DESC,
    category: "tacos",
  },
  {
    id: "tacos-cordon-bleu",
    name: "Cordon Bleu",
    price: 5.0,
    menuPrice: 8.5,
    menuDescription: TACOS_MENU_DESC,
    category: "tacos",
  },
  {
    id: "tacos-mixed",
    name: "Mixed Tacos",
    price: 5.6,
    menuPrice: 8.9,
    menuDescription: "Mixed tacos + bibita + patatine fritte",
    category: "tacos",
    highlight: true,
  },

  // ============ KEBAB ============
  {
    id: "kebab-classico",
    name: "Classico",
    price: 5.0,
    menuPrice: 8.5,
    menuDescription: KEBAB_MENU_DESC,
    category: "kebab",
  },
  {
    id: "kebab-arrotolato",
    name: "Arrotolato",
    price: 5.0,
    menuPrice: 8.5,
    menuDescription: "Arrotolato + bibita + patatine fritte",
    category: "kebab",
  },
  {
    id: "kebab-piatto",
    name: "Piatto",
    price: 8.0,
    menuPrice: 9.5,
    menuDescription: "Piatto + lattina",
    category: "kebab",
    highlight: true,
  },
  {
    id: "kebab-falafel",
    name: "Falafel",
    price: 5.0,
    menuPrice: 8.5,
    menuDescription: KEBAB_MENU_DESC,
    category: "kebab",
  },
  {
    id: "kebab-patatine",
    name: "Patatine Fritte",
    price: 2.0,
    category: "kebab",
    subGroup: "Extra",
  },
  {
    id: "kebab-patatine-maxi",
    name: "Patatine Fritte Maxi",
    price: 4.0,
    category: "kebab",
    subGroup: "Extra",
  },
  {
    id: "kebab-patatine-con-kebab",
    name: "Patatine Fritte con Kebab",
    price: 3.5,
    category: "kebab",
    subGroup: "Extra",
  },
  {
    id: "kebab-patatine-con-kebab-maxi",
    name: "Patatine Fritte con Kebab Maxi",
    price: 6.9,
    category: "kebab",
    subGroup: "Extra",
  },
  {
    id: "kebab-porzione",
    name: "Porzione Kebab",
    price: 5.0,
    category: "kebab",
    subGroup: "Extra",
  },
  {
    id: "kebab-porzione-maxi",
    name: "Porzione Kebab Maxi",
    price: 9.5,
    category: "kebab",
    subGroup: "Extra",
  },

  // ============ BURGER ============
  {
    id: "burger-hamburger",
    name: "Hamburger",
    price: 4.2,
    menuPrice: 7.2,
    category: "burger",
  },
  {
    id: "burger-chicken",
    name: "Chicken Burger",
    price: 4.9,
    menuPrice: 7.9,
    category: "burger",
  },
  {
    id: "burger-cheese",
    name: "Cheeseburger",
    price: 4.9,
    menuPrice: 7.9,
    category: "burger",
  },
  {
    id: "burger-chicken-wrap",
    name: "Chicken Wrap",
    price: 5.0,
    menuPrice: 8.5,
    category: "burger",
  },
  {
    id: "burger-double-cheese",
    name: "Double Cheeseburger",
    price: 5.5,
    menuPrice: 8.5,
    category: "burger",
    highlight: true,
  },

  // ============ FRITTI ============
  { id: "fritti-cheddar", name: "Cheddar Cheese", price: 4.5, category: "fritti" },
  { id: "fritti-twisters", name: "Twisters", price: 4.5, category: "fritti" },
  { id: "fritti-cheese-balls", name: "Cheese Balls", price: 4.5, category: "fritti" },
  { id: "fritti-onion-rings", name: "Onion Rings", price: 4.5, category: "fritti" },
  { id: "fritti-wings", name: "Wings", price: 4.5, category: "fritti" },
  { id: "fritti-nuggets", name: "Nuggets", price: 4.5, category: "fritti" },
  { id: "fritti-pop-corn", name: "Pop Corn", price: 4.5, category: "fritti" },
  { id: "fritti-strips", name: "Strips", price: 4.5, category: "fritti" },
  { id: "fritti-chele-granchio", name: "Chele di Granchio", price: 4.5, category: "fritti" },
  { id: "fritti-falafel", name: "Falafel", price: 4.5, category: "fritti" },
  { id: "fritti-cheese-stick", name: "Cheese Stick", price: 4.5, category: "fritti" },

  // ============ INSALATE ============
  {
    id: "insalate-mixed",
    name: "Mixed Salad",
    price: 4.5,
    category: "insalate",
  },
  {
    id: "insalate-chicken",
    name: "Chicken Salad",
    price: 6.5,
    category: "insalate",
  },
  {
    id: "insalate-chicken-plat",
    name: "Chicken Plat",
    price: 8.0,
    category: "insalate",
    highlight: true,
  },

  // ============ PIZZE ============
  {
    id: "pizza-margherita",
    name: "Margherita",
    description: "Pomodoro, mozzarella",
    price: 6.0,
    category: "pizze",
  },
  {
    id: "pizza-marinara",
    name: "Marinara",
    description: "Pomodoro",
    price: 4.5,
    category: "pizze",
  },
  {
    id: "pizza-royal-kebab",
    name: "Royal Kebab",
    description:
      "Kebab, mozzarella, pomodoro, insalata, cipolla, patatine, salse a piacere",
    price: 8.5,
    category: "pizze",
    highlight: true,
  },
  {
    id: "pizza-calzone-royal",
    name: "Calzone Royal Kebab",
    description:
      "Kebab, mozzarella, pomodoro, insalata, cipolla, patatine, salse a piacere",
    price: 8.5,
    category: "pizze",
    highlight: true,
  },
  {
    id: "pizza-chips",
    name: "Chips",
    description: "Pomodoro, mozzarella, patatine fritte",
    price: 6.9,
    category: "pizze",
  },
  {
    id: "pizza-diavola",
    name: "Diavola",
    description: "Pomodoro, mozzarella, salamino piccante",
    price: 6.9,
    category: "pizze",
  },
  {
    id: "pizza-napoli",
    name: "Napoli",
    description: "Pomodoro, mozzarella, acciughe",
    price: 6.9,
    category: "pizze",
  },
  {
    id: "pizza-pugliese",
    name: "Pugliese",
    description: "Pomodoro, mozzarella, cipolla",
    price: 6.9,
    category: "pizze",
  },
  {
    id: "pizza-wurstel",
    name: "Wurstel",
    description: "Pomodoro, mozzarella, wurstel",
    price: 6.9,
    category: "pizze",
  },
  {
    id: "pizza-prosciutto",
    name: "Prosciutto",
    description: "Pomodoro, mozzarella, prosciutto",
    price: 6.9,
    category: "pizze",
  },
  {
    id: "pizza-tonno",
    name: "Tonno",
    description: "Pomodoro, mozzarella, tonno",
    price: 6.9,
    category: "pizze",
  },
  {
    id: "pizza-tonno-cipolla",
    name: "Tonno e Cipolla",
    description: "Pomodoro, mozzarella, tonno, cipolla",
    price: 7.5,
    category: "pizze",
  },
  {
    id: "pizza-prosciutto-funghi",
    name: "Prosciutto e Funghi",
    description: "Pomodoro, mozzarella, prosciutto, funghi",
    price: 7.5,
    category: "pizze",
  },
  {
    id: "pizza-salsiccia",
    name: "Salsiccia",
    description: "Pomodoro, mozzarella, salsiccia",
    price: 7.9,
    category: "pizze",
  },
  {
    id: "pizza-siciliana",
    name: "Siciliana",
    description: "Pomodoro, mozzarella, acciughe, peperoni",
    price: 7.9,
    category: "pizze",
  },
  {
    id: "pizza-bufala",
    name: "Bufala",
    description: "Pomodoro, mozzarella di bufala",
    price: 7.9,
    category: "pizze",
  },
  {
    id: "pizza-gorgo-speck",
    name: "Gorgo e Speck",
    description: "Pomodoro, mozzarella, gorgonzola, speck",
    price: 7.9,
    category: "pizze",
  },
  {
    id: "pizza-speck-brie",
    name: "Speck e Brie",
    description: "Pomodoro, mozzarella, speck, brie",
    price: 7.9,
    category: "pizze",
  },
  {
    id: "pizza-4-formaggi",
    name: "4 Formaggi",
    description: "Mozzarella, fontina, gorgonzola, brie",
    price: 7.9,
    category: "pizze",
  },
  {
    id: "pizza-carbonara",
    name: "Carbonara",
    description: "Pomodoro, mozzarella, uova, pancetta, pepe",
    price: 7.9,
    category: "pizze",
  },
  {
    id: "pizza-vegetariana",
    name: "Vegetariana",
    description: "Pomodoro, mozzarella, misto verdure",
    price: 7.9,
    category: "pizze",
  },
  {
    id: "pizza-stracchino-rucola",
    name: "Stracchino e Rucola",
    description: "Mozzarella, stracchino, rucola",
    price: 7.9,
    category: "pizze",
  },
  {
    id: "pizza-capricciosa",
    name: "Capricciosa",
    description: "Pomodoro, mozzarella, funghi, prosciutto, olive, carciofi",
    price: 8.5,
    category: "pizze",
  },
  {
    id: "pizza-4-stagioni",
    name: "4 Stagioni",
    description: "Pomodoro, mozzarella, prosciutto, funghi, olive, carciofi",
    price: 8.5,
    category: "pizze",
  },
  {
    id: "pizza-rustica",
    name: "Rustica",
    description: "Pomodoro, mozzarella, salsiccia, peperoni, cipolla",
    price: 8.5,
    category: "pizze",
  },
  {
    id: "pizza-hamburger",
    name: "Hamburger",
    description: "Pomodoro, mozzarella, hamburger, salsa barbecue, salsa burger",
    price: 8.5,
    category: "pizze",
  },
  {
    id: "pizza-nuggets",
    name: "Nuggets",
    description:
      "Pomodoro, mozzarella, crocchette di pollo, salsa barbecue, salsa burger",
    price: 8.5,
    category: "pizze",
  },
  {
    id: "pizza-gamberi",
    name: "Gamberi",
    description: "Pomodoro, mozzarella, gamberetti, salsa rosa, insalata verde",
    price: 8.5,
    category: "pizze",
  },

  // ============ FAMILIARI & AL TAGLIO ============
  {
    id: "fam-margherita",
    name: "Margherita Familiare",
    description: "Formato familiare",
    price: 15.0,
    category: "famiglia",
    subGroup: "Pizze Familiari",
  },
  {
    id: "fam-farcita",
    name: "Farcita Familiare",
    description: "Formato familiare",
    price: 18.0,
    category: "famiglia",
    subGroup: "Pizze Familiari",
  },
  {
    id: "fam-kebab",
    name: "Pizza Kebab Familiare",
    description: "Formato familiare",
    price: 21.0,
    category: "famiglia",
    subGroup: "Pizze Familiari",
    highlight: true,
  },
  {
    id: "taglio-margherita",
    name: "Margherita",
    description: "Al taglio",
    price: 2.0,
    category: "famiglia",
    subGroup: "Pizze al Taglio",
  },
  {
    id: "taglio-farcita",
    name: "Farcita",
    description: "Al taglio",
    price: 2.5,
    category: "famiglia",
    subGroup: "Pizze al Taglio",
  },
  {
    id: "taglio-farcita-kebab",
    name: "Farcita Kebab",
    description: "Al taglio",
    price: 3.0,
    category: "famiglia",
    subGroup: "Pizze al Taglio",
  },
];

export const formatPrice = (price: number): string =>
  `€ ${price.toFixed(2).replace(".", ",")}`;
