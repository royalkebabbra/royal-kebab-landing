/* ============ DATA ============ */
const DELIVEROO_URL = "https://deliveroo.it/it/menu/bra/bra/royal-kebab-center";

const CATEGORIES = [
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

const MENU_ITEMS = [
  // TACOS
  { id: "tacos-chicken", name: "Chicken", price: 5.0, menuPrice: 8.5, menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-beef", name: "Beef", price: 5.0, menuPrice: 8.5, menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-kebab", name: "Kebab", price: 5.0, menuPrice: 8.5, menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-salsiccia", name: "Salsiccia", price: 5.0, menuPrice: 8.5, menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-cordon-bleu", name: "Cordon Bleu", price: 5.0, menuPrice: 8.5, menuDescription: TACOS_MENU_DESC, category: "tacos" },
  { id: "tacos-mixed", name: "Mixed Tacos", price: 5.6, menuPrice: 8.9, menuDescription: "Mixed tacos + bibita + patatine fritte", category: "tacos", highlight: true },

  // KEBAB
  { id: "kebab-classico", name: "Classico", price: 5.0, menuPrice: 8.5, menuDescription: KEBAB_MENU_DESC, category: "kebab" },
  { id: "kebab-arrotolato", name: "Arrotolato", price: 5.0, menuPrice: 8.5, menuDescription: "Arrotolato + bibita + patatine fritte", category: "kebab" },
  { id: "kebab-piatto", name: "Piatto", price: 8.0, menuPrice: 9.5, menuDescription: "Piatto + lattina", category: "kebab", highlight: true },
  { id: "kebab-falafel", name: "Falafel", price: 5.0, menuPrice: 8.5, menuDescription: KEBAB_MENU_DESC, category: "kebab" },
  { id: "kebab-patatine", name: "Patatine Fritte", price: 2.0, category: "kebab", subGroup: "Extra" },
  { id: "kebab-patatine-maxi", name: "Patatine Fritte Maxi", price: 4.0, category: "kebab", subGroup: "Extra" },
  { id: "kebab-patatine-con-kebab", name: "Patatine Fritte con Kebab", price: 3.5, category: "kebab", subGroup: "Extra" },
  { id: "kebab-patatine-con-kebab-maxi", name: "Patatine Fritte con Kebab Maxi", price: 6.9, category: "kebab", subGroup: "Extra" },
  { id: "kebab-porzione", name: "Porzione Kebab", price: 5.0, category: "kebab", subGroup: "Extra" },
  { id: "kebab-porzione-maxi", name: "Porzione Kebab Maxi", price: 9.5, category: "kebab", subGroup: "Extra" },

  // BURGER
  { id: "burger-hamburger", name: "Hamburger", price: 4.2, menuPrice: 7.2, category: "burger" },
  { id: "burger-chicken", name: "Chicken Burger", price: 4.9, menuPrice: 7.9, category: "burger" },
  { id: "burger-cheese", name: "Cheeseburger", price: 4.9, menuPrice: 7.9, category: "burger" },
  { id: "burger-chicken-wrap", name: "Chicken Wrap", price: 5.0, menuPrice: 8.5, category: "burger" },
  { id: "burger-double-cheese", name: "Double Cheeseburger", price: 5.5, menuPrice: 8.5, category: "burger", highlight: true },

  // FRITTI
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

  // INSALATE
  { id: "insalate-mixed", name: "Mixed Salad", price: 4.5, category: "insalate" },
  { id: "insalate-chicken", name: "Chicken Salad", price: 6.5, category: "insalate" },
  { id: "insalate-chicken-plat", name: "Chicken Plat", price: 8.0, category: "insalate", highlight: true },

  // PIZZE
  { id: "pizza-margherita", name: "Margherita", description: "Pomodoro, mozzarella", price: 6.0, category: "pizze" },
  { id: "pizza-marinara", name: "Marinara", description: "Pomodoro", price: 4.5, category: "pizze" },
  { id: "pizza-royal-kebab", name: "Royal Kebab", description: "Kebab, mozzarella, pomodoro, insalata, cipolla, patatine, salse a piacere", price: 8.5, category: "pizze", highlight: true },
  { id: "pizza-calzone-royal", name: "Calzone Royal Kebab", description: "Kebab, mozzarella, pomodoro, insalata, cipolla, patatine, salse a piacere", price: 8.5, category: "pizze", highlight: true },
  { id: "pizza-chips", name: "Chips", description: "Pomodoro, mozzarella, patatine fritte", price: 6.9, category: "pizze" },
  { id: "pizza-diavola", name: "Diavola", description: "Pomodoro, mozzarella, salamino piccante", price: 6.9, category: "pizze" },
  { id: "pizza-napoli", name: "Napoli", description: "Pomodoro, mozzarella, acciughe", price: 6.9, category: "pizze" },
  { id: "pizza-pugliese", name: "Pugliese", description: "Pomodoro, mozzarella, cipolla", price: 6.9, category: "pizze" },
  { id: "pizza-wurstel", name: "Wurstel", description: "Pomodoro, mozzarella, wurstel", price: 6.9, category: "pizze" },
  { id: "pizza-prosciutto", name: "Prosciutto", description: "Pomodoro, mozzarella, prosciutto", price: 6.9, category: "pizze" },
  { id: "pizza-tonno", name: "Tonno", description: "Pomodoro, mozzarella, tonno", price: 6.9, category: "pizze" },
  { id: "pizza-tonno-cipolla", name: "Tonno e Cipolla", description: "Pomodoro, mozzarella, tonno, cipolla", price: 7.5, category: "pizze" },
  { id: "pizza-prosciutto-funghi", name: "Prosciutto e Funghi", description: "Pomodoro, mozzarella, prosciutto, funghi", price: 7.5, category: "pizze" },
  { id: "pizza-salsiccia", name: "Salsiccia", description: "Pomodoro, mozzarella, salsiccia", price: 7.9, category: "pizze" },
  { id: "pizza-siciliana", name: "Siciliana", description: "Pomodoro, mozzarella, acciughe, peperoni", price: 7.9, category: "pizze" },
  { id: "pizza-bufala", name: "Bufala", description: "Pomodoro, mozzarella di bufala", price: 7.9, category: "pizze" },
  { id: "pizza-gorgo-speck", name: "Gorgo e Speck", description: "Pomodoro, mozzarella, gorgonzola, speck", price: 7.9, category: "pizze" },
  { id: "pizza-speck-brie", name: "Speck e Brie", description: "Pomodoro, mozzarella, speck, brie", price: 7.9, category: "pizze" },
  { id: "pizza-4-formaggi", name: "4 Formaggi", description: "Mozzarella, fontina, gorgonzola, brie", price: 7.9, category: "pizze" },
  { id: "pizza-carbonara", name: "Carbonara", description: "Pomodoro, mozzarella, uova, pancetta, pepe", price: 7.9, category: "pizze" },
  { id: "pizza-vegetariana", name: "Vegetariana", description: "Pomodoro, mozzarella, misto verdure", price: 7.9, category: "pizze" },
  { id: "pizza-stracchino-rucola", name: "Stracchino e Rucola", description: "Mozzarella, stracchino, rucola", price: 7.9, category: "pizze" },
  { id: "pizza-capricciosa", name: "Capricciosa", description: "Pomodoro, mozzarella, funghi, prosciutto, olive, carciofi", price: 8.5, category: "pizze" },
  { id: "pizza-4-stagioni", name: "4 Stagioni", description: "Pomodoro, mozzarella, prosciutto, funghi, olive, carciofi", price: 8.5, category: "pizze" },
  { id: "pizza-rustica", name: "Rustica", description: "Pomodoro, mozzarella, salsiccia, peperoni, cipolla", price: 8.5, category: "pizze" },
  { id: "pizza-hamburger", name: "Hamburger", description: "Pomodoro, mozzarella, hamburger, salsa barbecue, salsa burger", price: 8.5, category: "pizze" },
  { id: "pizza-nuggets", name: "Nuggets", description: "Pomodoro, mozzarella, crocchette di pollo, salsa barbecue, salsa burger", price: 8.5, category: "pizze" },
  { id: "pizza-gamberi", name: "Gamberi", description: "Pomodoro, mozzarella, gamberetti, salsa rosa, insalata verde", price: 8.5, category: "pizze" },

  // FAMIGLIA
  { id: "fam-margherita", name: "Margherita Familiare", description: "Formato familiare", price: 15.0, category: "famiglia", subGroup: "Pizze Familiari" },
  { id: "fam-farcita", name: "Farcita Familiare", description: "Formato familiare", price: 18.0, category: "famiglia", subGroup: "Pizze Familiari" },
  { id: "fam-kebab", name: "Pizza Kebab Familiare", description: "Formato familiare", price: 21.0, category: "famiglia", subGroup: "Pizze Familiari", highlight: true },
  { id: "taglio-margherita", name: "Margherita", description: "Al taglio", price: 2.0, category: "famiglia", subGroup: "Pizze al Taglio" },
  { id: "taglio-farcita", name: "Farcita", description: "Al taglio", price: 2.5, category: "famiglia", subGroup: "Pizze al Taglio" },
  { id: "taglio-farcita-kebab", name: "Farcita Kebab", description: "Al taglio", price: 3.0, category: "famiglia", subGroup: "Pizze al Taglio" },
];

const formatPrice = (price) => `€ ${price.toFixed(2).replace(".", ",")}`;

const hm = (h, m) => h * 60 + m;
const WEEK_HOURS = [
  { day: "Lunedì", weekday: 1, closed: true, intervals: [], display: "Chiuso" },
  { day: "Martedì", weekday: 2, closed: true, intervals: [], display: "Chiuso" },
  { day: "Mercoledì", weekday: 3, closed: false, intervals: [[hm(12, 0), hm(15, 0)], [hm(18, 0), hm(23, 0)]], display: "12:00–15:00 / 18:00–23:00" },
  { day: "Giovedì", weekday: 4, closed: false, intervals: [[hm(12, 0), hm(15, 0)], [hm(18, 0), hm(23, 0)]], display: "12:00–15:00 / 18:00–23:00" },
  { day: "Venerdì", weekday: 5, closed: false, intervals: [[hm(12, 0), hm(15, 0)], [hm(18, 0), hm(23, 30)]], display: "12:00–15:00 / 18:00–23:30" },
  { day: "Sabato", weekday: 6, closed: false, intervals: [[hm(18, 0), hm(23, 30)]], display: "18:00–23:30" },
  { day: "Domenica", weekday: 0, closed: false, intervals: [[hm(18, 0), hm(23, 0)]], display: "18:00–23:00" },
];

const isOpenNow = (now) => {
  const weekday = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const today = WEEK_HOURS.find((d) => d.weekday === weekday);
  if (!today || today.closed) return false;
  return today.intervals.some(([o, c]) => minutes >= o && minutes < c);
};

const REVIEWS = [
  { name: "Marco R.", rating: 5, date: "2 settimane fa", text: "Kebab davvero ottimo, carne morbida e salse fatte in casa. Consegna puntuale e porzione generosa. Lo consiglio vivamente!" },
  { name: "Sofia L.", rating: 5, date: "1 mese fa", text: "Il Royal Kebab è la loro specialità e si capisce perché. Ingredienti freschi, sapore autentico. Tornerò sicuramente." },
  { name: "Alessandro B.", rating: 4, date: "1 mese fa", text: "Pizza kebab fantastica, finalmente un fast food halal di qualità a Bra. Personale gentile e prezzi onesti." },
];

const RATING_BREAKDOWN = [
  { stars: 5, percent: 70 },
  { stars: 4, percent: 18 },
  { stars: 3, percent: 7 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 2 },
];

/* ============ ICONS (SVG strings) ============ */
const SVG_SHOPPING_BAG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;
const SVG_SPARKLES = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`;
const SVG_QUOTE = `<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>`;

const starSvg = (filled, size = 16) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'rgba(247,247,247,0.1)'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${filled ? 'star-filled' : 'star-empty'}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

const renderStars = (value, size = 16) => {
  const rounded = Math.round(value);
  let html = '<div class="stars">';
  for (let i = 0; i < 5; i++) html += starSvg(i < rounded, size);
  html += '</div>';
  return html;
};

/* ============ NAVBAR ============ */
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
}

/* ============ MENU ============ */
function renderMenu(activeId) {
  const tabs = document.getElementById('menu-tabs');
  const panel = document.getElementById('menu-items');

  tabs.innerHTML = CATEGORIES.map((c) => `
    <button type="button" class="menu-tab ${c.id === activeId ? 'active' : ''}" data-cat="${c.id}" role="tab" aria-selected="${c.id === activeId}">${c.label}</button>
  `).join('');

  const items = MENU_ITEMS.filter((i) => i.category === activeId);
  const groups = new Map();
  for (const item of items) {
    const key = item.subGroup || '__default__';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }

  const groupHtml = Array.from(groups.entries()).map(([key, items]) => {
    const title = key === '__default__' ? '' : `<h3 class="menu-subgroup">— ${key}</h3>`;
    const cards = items.map((item) => `
      <article class="menu-item">
        ${item.highlight ? `<div class="menu-item-top">${SVG_SPARKLES} Top</div>` : ''}
        <h3>${item.name}</h3>
        ${item.description ? `<p class="menu-item-desc">${item.description}</p>` : ''}
        <div class="menu-item-bottom">
          <div>
            <span class="menu-price">${formatPrice(item.price)}</span>
            ${item.menuPrice !== undefined ? `
              <span class="menu-price-menu">
                Menù: ${formatPrice(item.menuPrice)}
                ${item.menuDescription ? `<span class="menu-price-menu-desc">${item.menuDescription}</span>` : ''}
              </span>
            ` : ''}
          </div>
          <a href="${DELIVEROO_URL}" target="_blank" rel="noopener noreferrer" class="menu-order">${SVG_SHOPPING_BAG} Ordina</a>
        </div>
      </article>
    `).join('');
    return `<div class="menu-group">${title}<div class="menu-items-grid">${cards}</div></div>`;
  }).join('');

  panel.innerHTML = groupHtml;

  tabs.querySelectorAll('.menu-tab').forEach((btn) => {
    btn.addEventListener('click', () => renderMenu(btn.dataset.cat));
  });
}

/* ============ HOURS ============ */
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

/* ============ REVIEWS ============ */
function renderReviews() {
  // Overall stars
  document.querySelectorAll('[data-stars]').forEach((el) => {
    const value = parseFloat(el.dataset.stars);
    const size = parseInt(el.dataset.size || '16', 10);
    el.innerHTML = renderStars(value, size);
  });

  // Breakdown bars
  const breakdownEl = document.getElementById('score-breakdown');
  breakdownEl.innerHTML = RATING_BREAKDOWN.map((b) => `
    <div class="breakdown-row">
      <span class="num">${b.stars}</span>
      ${starSvg(true, 14)}
      <div class="bar"><div class="bar-fill" data-width="${b.percent}"></div></div>
      <span class="percent">${b.percent}%</span>
    </div>
  `).join('');

  // Cards
  const grid = document.getElementById('reviews-grid');
  grid.innerHTML = REVIEWS.map((r) => `
    <article class="review-card">
      <span class="review-quote">${SVG_QUOTE}</span>
      ${renderStars(r.rating)}
      <p class="review-text">${r.text}</p>
      <div class="review-meta">
        <p class="review-name">${r.name}</p>
        <p class="review-date">${r.date}</p>
      </div>
    </article>
  `).join('');
}

/* ============ REVEAL ON SCROLL ============ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Animate breakdown bars once revealed
        entry.target.querySelectorAll('.bar-fill[data-width]').forEach((bar) => {
          bar.style.width = bar.dataset.width + '%';
        });
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });

  els.forEach((el) => io.observe(el));

  // Overall rating has bars — make sure it's revealed too
  const overall = document.querySelector('.overall-rating');
  if (overall) io.observe(overall);
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderMenu('tacos');
  renderHours();
  renderReviews();
  initReveal();

  // Refresh open-now status every minute
  setInterval(renderHours, 60_000);
});
