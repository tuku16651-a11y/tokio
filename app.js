/* =============================================
   TOKIO SUSHI GƏNCƏ — APP.JS
   ============================================= */

'use strict';

// ─── Constants ───────────────────────────────
const WA_NUMBER = '994559406018';
const PAGE_SCROLL_MAP = {};
let currentPage = 'home';
let currentModalProduct = null;
let currentVacancy = null;
let cart = [];

// ─── DATA ─────────────────────────────────────

const MENU_IMG = 'images/sushi-roll.jpg';

const menuData = {
  sets: [
    {
      id: 'set1',
      name: 'Hotrol & Sezar Set',
      desc: '10 Hotrol + 10 Sezar. Soya souz, İmbir, Vasabi, Çubuqlar daxildir.',
      price: 13.50,
      weight: '20 əd.',
      img: MENU_IMG,
      badge: 'Populyar'
    },
    {
      id: 'set2',
      name: 'Hotrol & Filadelfiya Set',
      desc: '10 Hotrol + 10 Filadelfiya. Soya souz, İmbir, Vasabi, Çubuqlar daxildir.',
      price: 17.50,
      weight: '20 əd.',
      img: MENU_IMG,
      badge: 'Seçilmiş'
    },
    {
      id: 'set3',
      name: 'Hot Set',
      desc: '20 Hot Set. Soya souz, İmbir, Vasabi, Çubuqlar daxildir.',
      price: 13.50,
      weight: '20 əd.',
      img: MENU_IMG
    },
    {
      id: 'set4',
      name: 'Filadelfiya & Spicy Krevet Set',
      desc: '10 Filadelfiya + 10 Spicy Krevet. Soya souz, İmbir, Vasabi, Çubuqlar daxildir.',
      price: 22.50,
      weight: '20 əd.',
      img: MENU_IMG,
      badge: 'Xüsusi'
    },
    {
      id: 'set5',
      name: 'Hotrol & Kaliforniya Set',
      desc: '10 Hotrol + 10 Kaliforniya. Soya souz, İmbir, Vasabi, Çubuqlar daxildir.',
      price: 14.90,
      weight: '20 əd.',
      img: MENU_IMG
    },
    {
      id: 'set6',
      name: 'Filadelfiya & Kaliforniya Set',
      desc: '10 Filadelfiya + 10 Kaliforniya. Soya souz, İmbir, Vasabi, Çubuqlar daxildir.',
      price: 18.50,
      weight: '20 əd.',
      img: MENU_IMG
    }
  ],
  rolls: [
    {
      id: 'r1',
      name: 'Hot Roll',
      desc: 'Xüsusi sousu ilə isti hazırlanmış dadlı roll. 10 əd.',
      price: 7.90,
      weight: '10 əd.',
      img: MENU_IMG
    },
    {
      id: 'r2',
      name: 'Sezar Roll',
      desc: 'Sezar sousu ilə hazırlanmış xüsusi roll. 10 əd.',
      price: 7.90,
      weight: '10 əd.',
      img: MENU_IMG
    },
    {
      id: 'r3',
      name: 'Cheese Roll',
      desc: 'Krem pendir ilə hazırlanmış dadlı roll. 10 əd.',
      price: 7.90,
      weight: '10 əd.',
      img: MENU_IMG
    },
    {
      id: 'r4',
      name: 'Cips Roll',
      desc: 'Cips ilə bəzənmiş xüsusi roll. 10 əd.',
      price: 7.90,
      weight: '10 əd.',
      img: MENU_IMG
    },
    {
      id: 'r5',
      name: 'Hot Baked Roll',
      desc: 'Fırında bişirilmiş isti roll. 10 əd.',
      price: 7.90,
      weight: '10 əd.',
      img: MENU_IMG
    },
    {
      id: 'r6',
      name: 'Avokado Roll',
      desc: 'Təzə avokado ilə hazırlanmış yüngül roll. 10 əd.',
      price: 8.90,
      weight: '10 əd.',
      img: MENU_IMG
    },
    {
      id: 'r7',
      name: 'Kaliforniya Roll',
      desc: 'Krab əti, avokado, xiyar ilə hazırlanmış klassik roll. 10 əd.',
      price: 8.90,
      weight: '10 əd.',
      img: MENU_IMG
    },
    {
      id: 'r8',
      name: 'Filadelfiya Roll',
      desc: 'Krem pendir və somon ilə hazırlanmış premium roll. 10 əd.',
      price: 11.90,
      weight: '10 əd.',
      img: MENU_IMG,
      badge: 'Bestseller'
    },
    {
      id: 'r9',
      name: 'Spicy Krevet Roll',
      desc: 'Ədviyyatlı krevet ilə hazırlanmış qızğın roll. 10 əd.',
      price: 14.90,
      weight: '10 əd.',
      img: MENU_IMG,
      badge: 'Spicy 🌶️'
    }
  ],
  combo: [
    {
      id: 'c1',
      name: 'Kombo Set 20 əd.',
      desc: 'Müxtəlif rollardan ibarət 20 əd. kombo set. Soya souz, İmbir, Vasabi, Çubuqlar daxildir.',
      price: 13.50,
      weight: '20 əd.',
      img: MENU_IMG
    },
    {
      id: 'c2',
      name: 'Kombo Set 30 əd.',
      desc: 'Müxtəlif rollardan ibarət 30 əd. kombo set. Soya souz, İmbir, Vasabi, Çubuqlar daxildir.',
      price: 20.90,
      weight: '30 əd.',
      img: MENU_IMG,
      badge: 'Populyar'
    },
    {
      id: 'c3',
      name: 'Kombo Set 40 əd.',
      desc: 'Müxtəlif rollardan ibarət 40 əd. böyük kombo set. Soya souz, İmbir, Vasabi, Çubuqlar daxildir.',
      price: 28.90,
      weight: '40 əd.',
      img: MENU_IMG,
      badge: 'Xüsusi'
    },
    {
      id: 'c4',
      name: 'Kombo Set 50 əd.',
      desc: 'Müxtəlif rollardan ibarət 50 əd. mega kombo set. Soya souz, İmbir, Vasabi, Çubuqlar daxildir.',
      price: 35.90,
      weight: '50 əd.',
      img: MENU_IMG,
      badge: 'Mega'
    }
  ]
};

const faqData = [
  {
    q: 'Çatdırılma müddəti nə qədərdir?',
    a: 'Gəncə daxilindəki sifarişlər üçün ortalama çatdırılma müddəti 30-60 dəqiqədir. Sifariş verildikdən sonra kuryerimiz sizinlə əlaqə saxlayır.'
  },
  {
    q: 'Minimum sifariş məbləği nədir?',
    a: 'Minimum sifariş məbləği 10 AZN-dir. Çatdırılma xidmətimiz pulsuzdur (müəyyən rayonlar üçün şərtlər tətbiq oluna bilər).'
  },
  {
    q: 'Rezervasiya üçün depozit tələb olunurmu?',
    a: 'Xeyr, rezervasiya tamamilə pulsuzdur. Masa saxlamaq üçün heç bir ödəniş tələb edilmir. Sadəcə gəlmədiyiniz halda xəbər verməyinizi rica edirik.'
  },
  {
    q: 'Allergenləri nəzərə alırsınızmı?',
    a: 'Bəli, biz allergen məlumatlarını çox ciddi qəbul edirik. Sifarişinizi verərkən xüsusi diet tələblərinizi qeyd etdikdə aşpazımız uyğun hazırlayacaq.'
  },
  {
    q: 'Ödəniş üsulları hansılardır?',
    a: 'Nağd pul, bank kartı (Kapital Bank, ABB, PASHA Bank), ANSAN və onlayn ödəniş sistemləri qəbul edilir.'
  },
  {
    q: 'Korporativ sifarişlər mümkündürmü?',
    a: 'Bəli! Şirkətlər, tədbirlər və böyük qruplar üçün xüsusi korporativ menyu və endirim proqramlarımız mövcuddur. WhatsApp vasitəsilə bizimlə əlaqə saxlayın.'
  },
  {
    q: 'Qablaşdırma necədir? Eco-friendlydir?',
    a: 'Biz ekoloji cəhətdən təmiz, geri dönüşümlü qablaşdırma materiallarından istifadə edirik. Soyuducu paketlər suşini çatdırılma zamanı ən təzə vəziyyətdə saxlayır.'
  },
  {
    q: 'Restoranın iş saatları necədir?',
    a: 'B.E – Cümə: 10:00–23:00 | Şənbə: 10:00–24:00 | Bazar: 11:00–23:00. Çatdırılma xidməti restoran iş saatları daxilindədir.'
  }
];

const vacanciesData = [
  {
    id: 'v1',
    icon: '🍱',
    title: 'Suşi Ustad (Itamae)',
    type: 'Tam Ştat',
    salary: '800 – 1200 AZN',
    schedule: 'Dəyişən növbə (2/2)',
    requirements: 'Ən az 1 il suşi hazırlama təcrübəsi, gigiyena sertifikatı',
    desc: 'Tokio Sushi mütbəxinə peşəkar suşi ustad axtarırıq. Kreativlik, dəqiqlik və komanda ruhu vacibdir.',
    duties: 'Menyu maddələrinin hazırlanması, freshness nəzarəti, müştəri sifarişlərinin icrasını'
  },
  {
    id: 'v2',
    icon: '🛵',
    title: 'Kuryer',
    type: 'Yarım / Tam Ştat',
    salary: '500 – 800 AZN + bonus',
    schedule: 'Çevik qrafik',
    requirements: 'Sürücülük vəsiqəsi (B kateqoriyası), Gəncə ərazisinə bələdlik',
    desc: 'Sürətli, etibarlı kuryer işə qəbul edirik. Öz nəqliyyatı olan üçün əlavə bonus nəzərdə tutulur.',
    duties: 'Sifarişlərin vaxtında çatdırılması, müştəri ilə ünsiyyət'
  },
  {
    id: 'v3',
    icon: '👩‍💼',
    title: 'Kassir / Operator',
    type: 'Tam Ştat',
    salary: '600 – 900 AZN',
    schedule: 'Dəyişən növbə',
    requirements: 'Kompüter savadlılığı, ünsiyyət bacarığı, 18+ yaş',
    desc: 'Müştəri xidmətləri üzrə kassir/operator axtarırıq. Qulaqardına vurmamaq, gülərüz olmaq vacibdir.',
    duties: 'Sifarişlərin qəbulu, ödəniş əməliyyatları, müştəri məmnuniyyəti'
  },
  {
    id: 'v4',
    icon: '🧹',
    title: 'Sanitar Texnik',
    type: 'Tam Ştat',
    salary: '500 – 650 AZN',
    schedule: 'Günlük, 09:00–18:00',
    requirements: 'Gigiyena standartları bilikləri, fiziki hazırlıq',
    desc: 'Mətbəx və restoran sahəsinin gigiyena standartlarına uyğun saxlanılması üçün işçi axtarırıq.',
    duties: 'Restoran sahəsinin təmizliyi, sanitariya standartlarına riayət'
  }
];

// ─── PAGE NAVIGATION ───────────────────────────

function showPage(pageId) {
  const oldPage = document.getElementById('page-' + currentPage);
  if (oldPage) {
    PAGE_SCROLL_MAP[currentPage] = window.scrollY;
    oldPage.classList.remove('active');
  }

  currentPage = pageId;

  const newPage = document.getElementById('page-' + pageId);
  if (!newPage) return;
  newPage.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  const savedScroll = PAGE_SCROLL_MAP[pageId] || 0;
  window.scrollTo({ top: savedScroll, behavior: 'instant' });
}

function goBack() {
  PAGE_SCROLL_MAP[currentPage] = window.scrollY;
  showPage('home');
}

// ─── MOBILE MENU ───────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ─── CART ─────────────────────────────────────

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const backdrop = document.getElementById('cartBackdrop');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  backdrop.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function addToCart(productId) {
  const product = findProduct(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  bumpCartCount();
  showToast(`${product.name} səbətə əlavə edildi!`);
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  addToCart(currentModalProduct.id);
  closeProductModalBtn();
}

function findProduct(id) {
  for (const cat of Object.values(menuData)) {
    const found = cat.find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else renderCart();
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  countEl.textContent = totalItems;
  totalEl.textContent = totalPrice.toFixed(2) + ' AZN';

  const isEmpty = cart.length === 0;
  emptyEl.style.display = isEmpty ? 'flex' : 'none';
  footerEl.style.display = isEmpty ? 'none' : 'block';

  const existingItems = itemsEl.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" onerror="this.src='images/sushi-roll.jpg'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(item.name)}</div>
        <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} AZN</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}',-1)" aria-label="Azalt">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}',1)" aria-label="Artır">+</button>
      </div>
    `;
    itemsEl.insertBefore(div, emptyEl);
  });
}

function bumpCartCount() {
  const el = document.getElementById('cartCount');
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}

function sendOrder() {
  if (cart.length === 0) return;

  let msg = '🍱 *YENİ SİFARİŞ — Tokio Sushi Gəncə*\n\n';
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name}\n   ${item.qty} × ${item.price.toFixed(2)} AZN = ${(item.qty * item.price).toFixed(2)} AZN\n`;
  });
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  msg += `💰 *CƏMİ: ${total.toFixed(2)} AZN*\n\n`;
  msg += '📍 Çatdırılma ünvanınızı yazın.';

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── MENU RENDERING ───────────────────────────

function renderMenuGrids() {
  Object.entries(menuData).forEach(([cat, items]) => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    grid.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', item.name);

      const badgeHtml = item.badge
        ? `<div style="position:absolute;top:10px;left:10px;background:var(--accent);color:#fff;font-size:11px;font-weight:700;padding:3px 9px;border-radius:100px;z-index:1;">${escHtml(item.badge)}</div>`
        : '';

      card.innerHTML = `
        <div class="menu-card-img">
          ${badgeHtml}
          <img src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" onerror="this.src='images/sushi-roll.jpg'" />
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${escHtml(item.name)}</div>
          <div class="menu-card-desc">${escHtml(item.desc)}</div>
          <div class="menu-card-footer">
            <span class="menu-card-price">${item.price.toFixed(2)} AZN</span>
            <button class="add-btn" onclick="event.stopPropagation();addToCart('${item.id}')" aria-label="Səbətə əlavə et">+</button>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProductModal(item));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openProductModal(item); });
      grid.appendChild(card);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.menu-section').forEach(s => {
    s.classList.toggle('active', s.id === 'tab-' + tabId);
  });
}

// ─── PRODUCT MODAL ────────────────────────────

function openProductModal(product) {
  currentModalProduct = product;
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalPrice').textContent = product.price.toFixed(2) + ' AZN';
  document.getElementById('modalWeight').textContent = product.weight;
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(e) {
  if (e.target === document.getElementById('productModal')) closeProductModalBtn();
}
function closeProductModalBtn() {
  document.getElementById('productModal').classList.remove('open');
  currentModalProduct = null;
  document.body.style.overflow = '';
}

// ─── FAQ RENDERING ────────────────────────────

function renderFaq() {
  const list = document.getElementById('faqList');
  faqData.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <div class="faq-q" onclick="toggleFaq(this)">
        <span>${escHtml(item.q)}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a">
        <div class="faq-a-inner">${escHtml(item.a)}</div>
      </div>
    `;
    list.appendChild(el);
  });
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ─── VACANCIES RENDERING ──────────────────────

function renderVacancies() {
  const grid = document.getElementById('vacancyGrid');
  vacanciesData.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vacancy-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="vacancy-card-icon">${v.icon}</div>
      <div class="vacancy-card-title">${escHtml(v.title)}</div>
      <div class="vacancy-card-type">${escHtml(v.type)}</div>
      <div class="vacancy-card-desc">${escHtml(v.desc)}</div>
      <div class="vacancy-card-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    `;
    card.addEventListener('click', () => openVacancyModal(v));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openVacancyModal(v); });
    grid.appendChild(card);
  });
}

// ─── VACANCY MODAL ────────────────────────────

function openVacancyModal(v) {
  currentVacancy = v;
  document.getElementById('vacancyModalIcon').textContent = v.icon;
  document.getElementById('vacancyModalTitle').textContent = v.title;
  document.getElementById('vacancyModalType').textContent = v.type;

  const detailsEl = document.getElementById('vacancyModalDetails');
  detailsEl.innerHTML = `
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">💰 Maaş:</span><span class="vacancy-detail-value">${escHtml(v.salary)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">⏰ Qrafik:</span><span class="vacancy-detail-value">${escHtml(v.schedule)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📋 Tələblər:</span><span class="vacancy-detail-value">${escHtml(v.requirements)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📝 Vəzifələr:</span><span class="vacancy-detail-value">${escHtml(v.duties)}</span></div>
  `;

  document.getElementById('vacancyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVacancyModal(e) {
  if (e.target === document.getElementById('vacancyModal')) closeVacancyModalBtn();
}
function closeVacancyModalBtn() {
  document.getElementById('vacancyModal').classList.remove('open');
  currentVacancy = null;
  document.body.style.overflow = '';
}

function applyVacancy() {
  if (!currentVacancy) return;
  const msg = `👋 *Vakansiyaya Müraciət — Tokio Sushi Gəncə*\n\n🔹 *Vəzifə:* ${currentVacancy.title}\n🔹 *İş rejimi:* ${currentVacancy.type}\n\nSalam! Bu vakansiya ilə maraqlanıram. Əlaqə saxlamaq istəyirəm.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── RESERVATION ─────────────────────────────

function submitReservation(e) {
  e.preventDefault();
  const name   = document.getElementById('resName').value.trim();
  const phone  = document.getElementById('resPhone').value.trim();
  const date   = document.getElementById('resDate').value;
  const time   = document.getElementById('resTime').value;
  const guests = document.getElementById('resGuests').value;
  const note   = document.getElementById('resNote').value.trim();

  if (!name || !phone || !date || !time || !guests) {
    showToast('Zəhmət olmasa bütün məcburi xanaları doldurun!');
    return;
  }

  const formattedDate = formatDate(date);
  let msg = `📅 *REZERVASIYA — Tokio Sushi Gəncə*\n\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Ad, Soyad:* ${name}\n`;
  msg += `📞 *Telefon:* ${phone}\n`;
  msg += `📅 *Tarix:* ${formattedDate}\n`;
  msg += `⏰ *Saat:* ${time}\n`;
  msg += `👥 *Nəfər sayı:* ${guests}\n`;
  if (note) msg += `📝 *Qeyd:* ${note}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── GALLERY LIGHTBOX ─────────────────────────

function openLightbox(img) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxImg').alt = img.alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── TOAST ────────────────────────────────────

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ─── UTILS ────────────────────────────────────

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('az-AZ', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

// ─── KEYBOARD ACCESSIBILITY ───────────────────

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (document.getElementById('productModal').classList.contains('open')) {
      closeProductModalBtn();
    } else if (document.getElementById('vacancyModal').classList.contains('open')) {
      closeVacancyModalBtn();
    } else if (document.getElementById('lightbox').classList.contains('open')) {
      closeLightbox();
    } else if (document.getElementById('cartPanel').classList.contains('open')) {
      toggleCart();
    } else if (document.getElementById('mobileMenu').classList.contains('open')) {
      toggleMenu();
    }
  }
});

// ─── INIT ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  renderMenuGrids();
  renderFaq();
  renderVacancies();
  renderCart();

  const today = new Date().toISOString().split('T')[0];
  const resDate = document.getElementById('resDate');
  if (resDate) resDate.min = today;
});
