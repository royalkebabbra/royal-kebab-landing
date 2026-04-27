const DELIVEROO_URL = "https://deliveroo.it/it/menu/bra/bra/royal-kebab-center";

const CATEGORIES = [
  { id: "tacos", label: "Tacos" },
  { id: "kebab", label: "Kebab" },
  { id: "cosamia", label: "Cosamia" },
  { id: "burger", label: "Burger" },
  { id: "pizze", label: "Pizze" },
  { id: "familiari", label: "Familiari & Taglio" },
  { id: "fritti", label: "Fritti" },
  { id: "insalate", label: "Insalate" },
  { id: "bibite", label: "Bibite & Extra" },
];

const TACOS_MENU_DESC = "piatto + bibita + patatine fritte";
const KEBAB_MENU_DESC = "piatto + bibita + patatine fritte";
const PIATTO_MENU_DESC = "piatto + lattina";

const tacosSizes = (L, Lm, XL, XLm, XXL, XXLm) => [
  { label: "L",   price: L,   menuPrice: Lm },
  { label: "XL",  price: XL,  menuPrice: XLm },
  { label: "XXL", price: XXL, menuPrice: XXLm },
];

const MENU_ITEMS = [
  { id: "tacos-chicken",     name: "Chicken",     sizes: tacosSizes(6.5, 10.5, 8.5, 12.5, 10.5, 14.5), menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-kofta",       name: "Kofta",       sizes: tacosSizes(6.5, 10.5, 8.5, 12.5, 10.5, 14.5), menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-kebab",       name: "Kebab",       sizes: tacosSizes(6.5, 10.5, 8.5, 12.5, 10.5, 14.5), menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-salsiccia",   name: "Salsiccia",   sizes: tacosSizes(6.5, 10.5, 8.5, 12.5, 10.5, 14.5), menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-cordon-bleu", name: "Cordon Bleu", sizes: tacosSizes(6.5, 10.5, 8.5, 12.5, 10.5, 14.5), menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-falafel",     name: "Falafel",     sizes: tacosSizes(6.5, 10.5, 8.5, 12.5, 10.5, 14.5), menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-wurstel",     name: "Wurstel",     sizes: tacosSizes(6.5, 10.5, 8.5, 12.5, 10.5, 14.5), menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-mixed",       name: "Mixed Tacos", sizes: tacosSizes(7.5, 11.5, 9.5, 13.5, 11.5, 15.5), menuDescription: TACOS_MENU_DESC, category: "tacos", highlight: true },
  { id: "tacos-royal",       name: "Royal Tacos", description: "La specialità della casa", price: 11, menuPrice: 15, menuDescription: TACOS_MENU_DESC, category: "tacos", highlight: true },

  { id: "kebab-panino",             name: "Panino",             price: 6.5, menuPrice: 10.5, menuDescription: KEBAB_MENU_DESC, category: "kebab", subGroup: "Panini" },
  { id: "kebab-arrotolato",         name: "Arrotolato",         price: 6.5, menuPrice: 10.5, menuDescription: KEBAB_MENU_DESC, category: "kebab", subGroup: "Panini" },
  { id: "kebab-panino-falafel",     name: "Panino Falafel",     price: 6.5, menuPrice: 10.5, menuDescription: KEBAB_MENU_DESC, category: "kebab", subGroup: "Panini" },
  { id: "kebab-arrotolato-falafel", name: "Arrotolato Falafel", price: 6.5, menuPrice: 10.5, menuDescription: KEBAB_MENU_DESC, category: "kebab", subGroup: "Panini" },
  { id: "kebab-hot-dog",            name: "Panino Hot Dog",     price: 4,   menuPrice: 7,    menuDescription: KEBAB_MENU_DESC, category: "kebab", subGroup: "Panini" },

  { id: "piatto-pollo", name: "Piatto Pollo", price: 11, menuPrice: 12.5, menuDescription: PIATTO_MENU_DESC, category: "kebab", subGroup: "Piatti" },
  { id: "piatto-kebab", name: "Piatto Kebab", price: 11, menuPrice: 12.5, menuDescription: PIATTO_MENU_DESC, category: "kebab", subGroup: "Piatti", highlight: true },
  { id: "piatto-kofta", name: "Piatto Kofta", price: 12, menuPrice: 13.5, menuDescription: PIATTO_MENU_DESC, category: "kebab", subGroup: "Piatti" },

  { id: "kebab-patatine-con-kebab",      name: "Patatine Fritte con Kebab",      price: 5,   category: "kebab", subGroup: "Porzioni" },
  { id: "kebab-patatine-con-kebab-maxi", name: "Patatine Fritte con Kebab Maxi", price: 7.5, category: "kebab", subGroup: "Porzioni" },
  { id: "kebab-porzione",                name: "Porzione Kebab",                 price: 6,   category: "kebab", subGroup: "Porzioni" },
  { id: "kebab-porzione-maxi",           name: "Porzione Kebab Maxi",            price: 11,  category: "kebab", subGroup: "Porzioni" },

  { id: "cosamia-pollo", name: "Cosamia Pollo", price: 7,  menuPrice: 8.5,  menuDescription: "piatto + bibita", category: "cosamia" },
  { id: "cosamia-kofta", name: "Cosamia Kofta", price: 8,  menuPrice: 9.5,  menuDescription: "piatto + bibita", category: "cosamia" },
  { id: "cosamia-mixed", name: "Cosamia Mixed", price: 10, menuPrice: 11.5, menuDescription: "piatto + bibita", category: "cosamia", highlight: true },

  { id: "burger-hamburger",     name: "Hamburger",          price: 5.5, menuPrice: 9.5,  menuDescription: KEBAB_MENU_DESC, category: "burger" },
  { id: "burger-chicken",       name: "Chicken Burger",     price: 6,   menuPrice: 10,   menuDescription: KEBAB_MENU_DESC, category: "burger" },
  { id: "burger-cheese",        name: "Cheese Burger",      price: 6,   menuPrice: 10,   menuDescription: KEBAB_MENU_DESC, category: "burger" },
  { id: "burger-chicken-wrap",  name: "Chicken Wrap",       price: 6.5, menuPrice: 10.5, menuDescription: KEBAB_MENU_DESC, category: "burger" },
  { id: "burger-double-cheese", name: "Double Cheeseburger", price: 7,   menuPrice: 11,   menuDescription: KEBAB_MENU_DESC, category: "burger", highlight: true },

  { id: "pizza-margherita",     name: "Margherita",         description: "Pomodoro, mozzarella",                                                   price: 6.5, category: "pizze" },
  { id: "pizza-marinara",       name: "Marinara",           description: "Pomodoro",                                                               price: 5.5, category: "pizze" },
  { id: "pizza-royal-kebab",    name: "Royal Kebab",        description: "Kebab, mozzarella, pomodoro, insalata, cipolla, patatine, salse a piacere", price: 11, category: "pizze", highlight: true },
  { id: "pizza-calzone-royal",  name: "Calzone Royal Kebab", description: "Kebab, mozzarella, pomodoro, insalata, cipolla, patatine, salse a piacere", price: 11, category: "pizze", highlight: true },
  { id: "pizza-chips",          name: "Chips",              description: "Pomodoro, mozzarella, patatine fritte",                                   price: 7.5, category: "pizze" },
  { id: "pizza-diavola",        name: "Diavola",            description: "Pomodoro, mozzarella, salamino piccante",                                 price: 7.5, category: "pizze" },
  { id: "pizza-pugliese",       name: "Pugliese",           description: "Pomodoro, mozzarella, cipolla",                                           price: 7.5, category: "pizze" },
  { id: "pizza-wurstel",        name: "Wurstel",            description: "Pomodoro, mozzarella, wurstel",                                           price: 7.5, category: "pizze" },
  { id: "pizza-prosciutto",     name: "Prosciutto",         description: "Pomodoro, mozzarella, prosciutto",                                        price: 7.5, category: "pizze" },
  { id: "pizza-tonno",          name: "Tonno",              description: "Pomodoro, mozzarella, tonno",                                             price: 7.5, category: "pizze" },
  { id: "pizza-tonno-cipolla",  name: "Tonno e Cipolla",    description: "Pomodoro, mozzarella, tonno, cipolla",                                    price: 8,   category: "pizze" },
  { id: "pizza-nuggets",        name: "Nuggets",            description: "Pomodoro, mozzarella, crocchette di pollo, salsa a piacere",              price: 8,   category: "pizze" },
  { id: "pizza-americana",      name: "Americana",          description: "Pomodoro, mozzarella, wurstel, patatine fritte",                          price: 8,   category: "pizze" },
  { id: "pizza-vegetariana",    name: "Vegetariana",        description: "Pomodoro, mozzarella, misto verdure",                                     price: 9,   category: "pizze" },
  { id: "pizza-capricciosa",    name: "Capricciosa",        description: "Pomodoro, mozzarella, prosciutto, funghi, olive, carciofi",               price: 9,   category: "pizze" },
  { id: "pizza-4-stagioni",     name: "4 Stagioni",         description: "Pomodoro, mozzarella, prosciutto, funghi, olive, carciofi",               price: 9,   category: "pizze" },
  { id: "pizza-4-formaggi",     name: "4 Formaggi",         description: "Pomodoro, mozzarella, brie, gorgonzola, edam",                            price: 9,   category: "pizze" },

  { id: "fam-margherita",       name: "Margherita",    description: "Formato familiare", price: 17, category: "familiari", subGroup: "Pizze Familiari" },
  { id: "fam-farcita",          name: "Farcita",       description: "Formato familiare", price: 21, category: "familiari", subGroup: "Pizze Familiari" },
  { id: "fam-royal-kebab",      name: "Royal Kebab",   description: "Formato familiare", price: 25, category: "familiari", subGroup: "Pizze Familiari", highlight: true },
  { id: "taglio-margherita",    name: "Margherita",    price: 2.5, menuPrice: 3.5, menuDescription: "piatto + bibita", category: "familiari", subGroup: "Pizze al Taglio" },
  { id: "taglio-farcita-kebab", name: "Farcita Kebab", price: 4,   menuPrice: 5,   menuDescription: "piatti + bibita", category: "familiari", subGroup: "Pizze al Taglio" },

  { id: "fritti-cheddar",      name: "Cheddar Cheese", price: 5,   category: "fritti" },
  { id: "fritti-cheese-balls", name: "Cheese Balls",   price: 6,   category: "fritti" },
  { id: "fritti-onion-rings",  name: "Onion Rings",    price: 5,   category: "fritti" },
  { id: "fritti-wings",        name: "Wings",          price: 5,   category: "fritti" },
  { id: "fritti-nuggets",      name: "Nuggets",        price: 5,   category: "fritti" },
  { id: "fritti-strips",       name: "Strips",         price: 5,   category: "fritti" },
  { id: "fritti-falafel",      name: "Falafel",        price: 5,   category: "fritti" },
  { id: "fritti-cheese-stick", name: "Cheese Stick",   price: 5,   category: "fritti" },
  { id: "fritti-patatine-s",   name: "Patatine S",     price: 2.5, category: "fritti" },
  { id: "fritti-patatine-l",   name: "Patatine L",     price: 4.5, category: "fritti" },

  { id: "insalate-mixed",   name: "Mixed Salad",    price: 5.9, category: "insalate" },
  { id: "insalate-chicken", name: "Chicken Salad",  price: 7.5, category: "insalate", highlight: true },
  { id: "insalate-tonno",   name: "Salad al Tonno", price: 6.9, category: "insalate" },

  { id: "bibite-acqua",        name: "Acqua 50cl",           price: 0.6, category: "bibite", subGroup: "Bibite" },
  { id: "bibite-gassata",      name: "Bibita gassata 33cl",  price: 1,   category: "bibite", subGroup: "Bibite" },
  { id: "bibite-fanta-exotic", name: "Fanta Exotic 33cl",    price: 1.8, category: "bibite", subGroup: "Bibite" },
  { id: "bibite-relax",        name: "Relax 50cl",           price: 1.8, category: "bibite", subGroup: "Bibite" },
  { id: "bibite-hawai",        name: "Hawai - Pommes 33cl",  price: 1.8, category: "bibite", subGroup: "Bibite" },
  { id: "bibite-redbull",      name: "Red Bull",             price: 1.8, category: "bibite", subGroup: "Bibite" },
  { id: "supp-cheddar",        name: "Cheddar",              price: 1,   category: "bibite", subGroup: "Supplementi" },
  { id: "supp-mozzarella",     name: "Mozzarella",           price: 1,   category: "bibite", subGroup: "Supplementi" },
  { id: "supp-algerina",       name: "Salsa Algerina",       price: 0.5, category: "bibite", subGroup: "Supplementi" },
  { id: "supp-salsa",          name: "Salsa a piacere",      price: 0.3, category: "bibite", subGroup: "Supplementi" },
];

const formatPrice = (price) => `€ ${price.toFixed(2).replace(".", ",")}`;

const hm = (h, m) => h * 60 + m;
const WEEK_HOURS = [
  { day: "Lunedì", weekday: 1, closed: true, intervals: [], display: "Chiuso" },
  { day: "Martedì", weekday: 2, closed: false, intervals: [[hm(12, 0), hm(15, 0)], [hm(18, 0), hm(23, 0)]], display: "12:00–15:00 / 18:00–23:00" },
  { day: "Mercoledì", weekday: 3, closed: false, intervals: [[hm(12, 0), hm(15, 0)], [hm(18, 0), hm(23, 0)]], display: "12:00–15:00 / 18:00–23:00" },
  { day: "Giovedì", weekday: 4, closed: false, intervals: [[hm(12, 0), hm(15, 0)], [hm(18, 0), hm(23, 0)]], display: "12:00–15:00 / 18:00–23:00" },
  { day: "Venerdì", weekday: 5, closed: false, intervals: [[hm(12, 0), hm(15, 0)], [hm(18, 0), hm(23, 30)]], display: "12:00–15:00 / 18:00–23:30" },
  { day: "Sabato", weekday: 6, closed: false, intervals: [[hm(12, 0), hm(15, 0)], [hm(18, 0), hm(23, 30)]], display: "12:00–15:00 / 18:00–23:30" },
  { day: "Domenica", weekday: 0, closed: false, intervals: [[hm(17, 30), hm(23, 30)]], display: "17:30–23:30" },
];

const isOpenNow = (now) => {
  const weekday = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const today = WEEK_HOURS.find((d) => d.weekday === weekday);
  if (!today || today.closed) return false;
  return today.intervals.some(([o, c]) => minutes >= o && minutes < c);
};

const REVIEWS = [
  { name: "Vladyslava M.", rating: 5, text: "1000/10!! Molto Buono e presentazione molto bella, il kebab meno costoso a Bra, ecco qua!" },
  { name: "Andrea V.", rating: 5, text: "Ottimo kebab e pizza,ho preso il menù panino patatine bibita a prezzo convenientissimo! Se in zona tornerò certamente ! Complimenti!" },
  { name: "Rachid C.", rating: 5, text: "Un kebab Buonissimo cosi mai mangiato , economico , locale molto pulito." },
];

const RATING_BREAKDOWN = [
  { stars: 5, percent: 79 },
  { stars: 4, percent: 7 },
  { stars: 3, percent: 3 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 10 },
];

const SVG_SHOPPING_BAG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;
const SVG_SPARKLES = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`;
const SVG_QUOTE = `<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>`;
const SVG_EYE = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
const SVG_EYE_OFF = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`;

const starSvg = (filled, size = 16) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'rgba(247,247,247,0.1)'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${filled ? 'star-filled' : 'star-empty'}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

const renderStars = (value, size = 16) => {
  const rounded = Math.round(value);
  let html = '<div class="stars">';
  for (let i = 0; i < 5; i++) html += starSvg(i < rounded, size);
  html += '</div>';
  return html;
};

function initNavbar() {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('mobile-drawer');

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const closeDrawer = () => {
    drawer.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  };
  const openDrawer = () => {
    drawer.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  };

  toggle.addEventListener('click', () => {
    if (drawer.classList.contains('open')) closeDrawer();
    else openDrawer();
  });

  drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeDrawer));

  const closeBtn = document.getElementById('drawer-close');
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
}

const EXPANDED_CATS = new Set();
const MENU_LIMIT = 6;

function renderMenuItem(item) {
  const topBadge = item.highlight ? `<div class="menu-item-top">${SVG_SPARKLES} Top</div>` : '';
  const desc = item.description ? `<p class="menu-item-desc">${item.description}</p>` : '';
  const orderBtn = `<a href="${DELIVEROO_URL}" target="_blank" rel="noopener noreferrer" class="menu-order">${SVG_SHOPPING_BAG} Ordina</a>`;

  if (item.sizes) {
    const rows = item.sizes.map((s) => `
      <div class="size-row">
        <span class="size-label">${s.label}</span>
        <span class="size-price">${formatPrice(s.price)}</span>
        <span class="size-sep">·</span>
        <span class="size-menu">Menù ${formatPrice(s.menuPrice)}</span>
      </div>
    `).join('');
    const menuDesc = item.menuDescription ? `<p class="menu-price-menu-desc">Menù: ${item.menuDescription}</p>` : '';
    return `
      <article class="menu-item">
        ${topBadge}
        <h3>${item.name}</h3>
        ${desc}
        <div class="menu-sizes">${rows}</div>
        ${menuDesc}
        <div class="menu-item-bottom menu-item-bottom-end">${orderBtn}</div>
      </article>
    `;
  }

  return `
    <article class="menu-item">
      ${topBadge}
      <h3>${item.name}</h3>
      ${desc}
      <div class="menu-item-bottom">
        <div>
          <span class="menu-price">${formatPrice(item.price)}</span>
          ${item.menuPrice !== undefined ? `
            <span class="menu-price-menu">
              Menù: ${formatPrice(item.menuPrice)}
              ${item.menuDescription ? `<span class="menu-price-menu-desc">Menù: ${item.menuDescription}</span>` : ''}
            </span>
          ` : ''}
        </div>
        ${orderBtn}
      </div>
    </article>
  `;
}

function renderMenu(activeId) {
  const tabs = document.getElementById('menu-tabs');
  const panel = document.getElementById('menu-items');

  tabs.innerHTML = CATEGORIES.map((c) => `
    <button type="button" class="menu-tab ${c.id === activeId ? 'active' : ''}" data-cat="${c.id}" role="tab" aria-selected="${c.id === activeId}">${c.label}</button>
  `).join('');

  const allItems = MENU_ITEMS.filter((i) => i.category === activeId);
  const expanded = EXPANDED_CATS.has(activeId);
  const hasMore = allItems.length > MENU_LIMIT;
  const items = hasMore && !expanded ? allItems.slice(0, MENU_LIMIT) : allItems;

  const groups = new Map();
  for (const item of items) {
    const key = item.subGroup || '__default__';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }

  const groupHtml = Array.from(groups.entries()).map(([key, groupItems]) => {
    const title = key === '__default__' ? '' : `<h3 class="menu-subgroup">— ${key}</h3>`;
    const cards = groupItems.map(renderMenuItem).join('');
    return `<div class="menu-group">${title}<div class="menu-items-grid">${cards}</div></div>`;
  }).join('');

  let toggleHtml = '';
  if (hasMore) {
    const hiddenCount = allItems.length - MENU_LIMIT;
    const icon = expanded ? SVG_EYE_OFF : SVG_EYE;
    const label = expanded ? 'Mostra meno' : `Mostra altri ${hiddenCount}`;
    toggleHtml = `<button type="button" class="menu-toggle-all" data-cat="${activeId}">${icon}<span>${label}</span></button>`;
  }

  panel.innerHTML = groupHtml + toggleHtml;

  tabs.querySelectorAll('.menu-tab').forEach((btn) => {
    btn.addEventListener('click', () => renderMenu(btn.dataset.cat));
  });

  const toggleBtn = panel.querySelector('.menu-toggle-all');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (EXPANDED_CATS.has(activeId)) EXPANDED_CATS.delete(activeId);
      else EXPANDED_CATS.add(activeId);
      renderMenu(activeId);
    });
  }
}

function renderHours() {
  const list = document.getElementById('hours-list');
  const status = document.getElementById('open-status');
  const now = new Date();
  const today = now.getDay();
  const open = isOpenNow(now);

  list.innerHTML = WEEK_HOURS.map((d) => {
    const isToday = d.weekday === today;
    return `
      <li class="${isToday ? 'today' : ''}">
        <span class="day-name">
          ${d.day}
          ${isToday ? '<span class="today-badge">Oggi</span>' : ''}
        </span>
        <span class="day-time ${d.closed ? 'closed' : ''}">${d.display}</span>
      </li>
    `;
  }).join('');

  status.classList.toggle('status-open', open);
  status.classList.toggle('status-closed', !open);
  status.querySelector('.label').textContent = open ? 'Aperto Ora' : 'Chiuso';
}

function renderReviews() {
  document.querySelectorAll('[data-stars]').forEach((el) => {
    const value = parseFloat(el.dataset.stars);
    const size = parseInt(el.dataset.size || '16', 10);
    el.innerHTML = renderStars(value, size);
  });

  const breakdownEl = document.getElementById('score-breakdown');
  breakdownEl.innerHTML = RATING_BREAKDOWN.map((b) => `
    <div class="breakdown-row">
      <span class="num">${b.stars}</span>
      <div class="bar"><div class="bar-fill" data-width="${b.percent}"></div></div>
    </div>
  `).join('');

  const grid = document.getElementById('reviews-grid');
  grid.innerHTML = REVIEWS.map((r) => `
    <article class="review-card">
      <span class="review-quote">${SVG_QUOTE}</span>
      ${renderStars(r.rating)}
      <p class="review-text">${r.text}</p>
      <div class="review-meta">
        <p class="review-name">${r.name}</p>
      </div>
    </article>
  `).join('');
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.bar-fill[data-width]').forEach((bar) => {
          bar.style.width = bar.dataset.width + '%';
        });
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });

  els.forEach((el) => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderMenu('tacos');
  renderHours();
  renderReviews();
  initReveal();

  document.querySelectorAll('.feature-card[data-menu-cat]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const cat = el.dataset.menuCat;
      if (!cat) return;
      e.preventDefault();
      renderMenu(cat);
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  setInterval(renderHours, 60_000);
});
