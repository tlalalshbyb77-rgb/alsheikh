/**
 * موقع الشيخ للحلويات
 * ---------------------------------------------------------------------------
 * إعدادات سريعة — هذا هو المكان الوحيد لتغيير رقم الهاتف وواتساب.
 * بعد التعديل، ستتغير أزرار الاتصال والواتساب والنص المعروض تلقائيًا.
 */

const SITE_SETTINGS = Object.freeze({
  phoneDisplay: '094 575 1372',
  phoneTel: '+218945751372',
  whatsappNumber: '218945751372',
  orderBusinessName: 'الشيخ للحلويات',
});

const MENU_PAGE_SIZE = 12;
const PACKING_STEP = 5;
const INITIAL_PACKING_VALUE = 5;

const PRODUCT_DATA = {
  'النواشف': {
    unit: 'kg',
    products: [
      { name: 'غريبة بندق', price: 40, image: '' },
      { name: 'كعك زهر', price: 30, image: '' },
      { name: 'مميلحة عادية', price: 30, image: '' },
      { name: 'مميلحة تمر', price: 30, image: '' },
      { name: 'غريبة', price: 35, image: '' },
      { name: 'غريبة طحينية', price: 45, image: '' },
      { name: 'سمسمية', price: 2.5, unit: 'piece', image: '' },
      { name: 'غريبة لوز', price: 35, image: '' },
      { name: 'كعك ملون', price: 30, image: '' },
      { name: 'مرسيدس', price: 40, image: '' },
      { name: 'قرينات لوتس', price: 30, image: '' },
      { name: 'قرينات كورنفلكس', price: 30, image: '' },
      { name: 'كعك لوز كاكاو', price: 30, image: '' },
      { name: 'كعك لوز أبيض', price: 30, image: '' },
      { name: 'كعك معسل', price: 30, image: '' },
      { name: 'مقروض طبيعي', price: 1.75, unit: 'piece', image: '' },
      { name: 'مقروض عادي', price: 1.5, unit: 'piece', image: '' },
      { name: 'قرينات شوكولاتة', price: 30, image: '' },
      { name: 'قرينات سكر', price: 30, image: '' },
      { name: 'قرينات لوز', price: 45, image: '' },
      { name: 'أصابع كورنفلكس', price: 30, image: '' },
      { name: 'غريبة حلقوم', price: 30, image: '' },
      { name: 'كعك قرفك', price: 30, image: '' },
    ],
  },
  'الحلويات الشرقية': {
    unit: 'kg',
    products: [
      { name: 'خاتم فستق', price: 80, image: '' },
      { name: 'خاتم لوز', price: 60, image: '' },
      { name: 'رول لوز', price: 60, image: '' },
      { name: 'رول فستق', price: 80, image: '' },
      { name: 'أساور كاجو', price: 68, image: '' },
      { name: 'أساور فستق', price: 75, image: '' },
      { name: 'أساور لوز', price: 65, image: '' },
      { name: 'أصابع لوز كبيرة فردية', price: 60, image: '' },
      { name: 'أصابع فستق كبيرة فردية', price: 80, image: '' },
      { name: 'أصابع لوز زوجية', price: 60, image: '' },
      { name: 'أصابع لوز', price: 60, image: '' },
      { name: 'أصابع فستق', price: 80, image: '' },
      { name: 'بقلاوة طرابلسية', price: 100, image: '' },
      { name: 'بقلاوة شرقية', price: 75, image: '' },
      { name: 'بقلاوة كاكاوية', price: 45, image: '' },
      { name: 'عمبر لوز طرابلسي', price: 55, image: '' },
      { name: 'عمبر مخلط لوز وكاكاوية', price: 40, image: '' },
      { name: 'عمبر جوز هند', price: 40, image: '' },
      { name: 'عمبر لوز معسل', price: 60, image: '' },
      { name: 'عمبر بندق معسل', price: 63, image: '' },
    ],
  },
  'حلويات بالقطعة': {
    unit: 'piece',
    products: [
      { name: 'صدفة لوز', price: 5, image: '' },
      { name: 'جزرة فستق', price: 6, image: '' },
      { name: 'كنافة شوكولاتة', price: 4, image: '' },
    ],
  },
  'الحافظات': {
    unit: 'box',
    products: [
      { name: 'مقروض طبيعي', price: 20, image: '' },
      { name: 'مقروض عادي', price: 17, image: '' },
      { name: 'لويزة شوكولاتة', price: 14, image: '' },
      { name: 'لويزة لوز', price: 18, image: '' },
      { name: 'لويزة لوتس', price: 16, image: '' },
      { name: 'لويزة فستق', price: 19, image: '' },
      { name: 'قرينات كورن فلكس', price: 16, image: '' },
      { name: 'قرينات كاكاوية', price: 16, image: '' },
      { name: 'قرينات لوتس', price: 17, image: '' },
      { name: 'قرينات لوز', price: 20, image: '' },
      { name: 'أصابع بريستيج', price: 16, image: '' },
      { name: 'سابلي بستاشيو', price: 19, image: '' },
      { name: 'كعك فيريرو', price: 17, image: '' },
      { name: 'حذوة لوز', price: 17, image: '' },
      { name: 'كعك شوش ورد', price: 16, image: '' },
      { name: 'قرينات شوش الورد', price: 17, image: '' },
      { name: 'ميلحة فرارة', price: 15, image: '' },
      { name: 'كعك ملبس شوكولاتة', price: 16, image: '' },
      { name: 'قرينات جوز الهند', price: 16, image: '' },
      { name: 'سابلي مربى', price: 16, image: '' },
      { name: 'غريبة زبيب', price: 15, image: '' },
      { name: 'كوكيز شوكولاتة', price: 17, image: '' },
      { name: 'كوكيز لوز', price: 18, image: '' },
      { name: 'برازق', price: 18, image: '' },
      { name: 'غريبة حمص', price: 15, image: '' },
      { name: 'كوكو برنج', price: 17, image: '' },
      { name: 'مميلحة خزايني', price: 18, image: '' },
      { name: 'كعك ملون', price: 15, image: '' },
      { name: 'ميلحة شجرة بالزهر', price: 17, image: '' },
      { name: 'غريبة حلقوم', price: 14, image: '' },
      { name: 'بيتيفور', price: 16, image: '' },
      { name: 'سابلي خزايني', price: 17, image: '' },
      { name: 'قرينات نسكافيه', price: 14, image: '' },
      { name: 'أصابع لوتس', price: 18, image: '' },
      { name: 'غريبة شوكولاتة', price: 15, image: '' },
      { name: 'أصابع شوكولاتة', price: 19, image: '' },
      { name: 'كعك لوز شوكولاتة', price: 15, image: '' },
      { name: 'كعك لوز', price: 14, image: '' },
      { name: 'مميلحة عصفورة', price: 15, image: '' },
      { name: 'مميلحة فرارة بالتمر', price: 15, image: '' },
      { name: 'مبرومة', price: 14, image: '' },
      { name: 'قرينات شوكولاتة', price: 17, image: '' },
      { name: 'أصابع كورن فلكس', price: 17, image: '' },
      { name: 'معمول تمر', price: 16, image: '' },
      { name: 'حافظة سلة لوز', price: 22, image: '' },
      { name: 'حافظة مشكل بقلاوة', price: 60, image: '' },
    ],
  },
};

const FAMILY_ORDER = {
  غريبات: 1,
  كعك: 2,
  مملحات: 3,
  قرينات: 4,
  أصابع: 5,
  مقروض: 6,
  خاتم: 1,
  رول: 2,
  أساور: 3,
  بقلاوة: 5,
  عمبر: 6,
  لويزة: 2,
  سابلي: 4,
  كوكيز: 6,
  حافظات: 9,
  'أصناف متنوعة': 99,
};

const CATEGORY_ORDER = {
  النواشف: 1,
  'الحلويات الشرقية': 2,
  'حلويات بالقطعة': 3,
  الحافظات: 4,
};

function getProductFamily(category, name) {
  if (category === 'الحلويات بالقطعة') return 'حلويات بالقطعة';
  if (category === 'الحلويات الشرقية') {
    if (name.startsWith('خاتم')) return 'خاتم';
    if (name.startsWith('رول')) return 'رول';
    if (name.startsWith('أساور')) return 'أساور';
    if (name.startsWith('أصابع')) return 'أصابع';
    if (name.startsWith('بقلاوة')) return 'بقلاوة';
    if (name.startsWith('عمبر')) return 'عمبر';
  }

  if (name.startsWith('غريبة')) return 'غريبات';
  if (name.startsWith('كعك')) return 'كعك';
  if (name.startsWith('مميلحة') || name.startsWith('ميلحة')) return 'مملحات';
  if (name.startsWith('قرينات')) return 'قرينات';
  if (name.startsWith('أصابع')) return 'أصابع';
  if (name.startsWith('مقروض')) return 'مقروض';
  if (name.startsWith('لويزة')) return 'لويزة';
  if (name.startsWith('سابلي')) return 'سابلي';
  if (name.startsWith('كوكيز')) return 'كوكيز';
  if (name.startsWith('حافظة')) return 'حافظات';
  return 'أصناف متنوعة';
}

function sortMenuItems(items) {
  return [...items].sort((first, second) => {
    const categoryDifference = (CATEGORY_ORDER[first.category] || 99) - (CATEGORY_ORDER[second.category] || 99);
    if (categoryDifference) return categoryDifference;
    const familyDifference = (FAMILY_ORDER[first.family] || 50) - (FAMILY_ORDER[second.family] || 50);
    if (familyDifference) return familyDifference;
    return first.name.localeCompare(second.name, 'ar');
  });
}

// يحوّل قائمة المنتجات المختصرة أعلاه إلى كائنات جاهزة للموقع.
function createMenuItems() {
  return Object.entries(PRODUCT_DATA).flatMap(([category, data]) =>
    data.products.map(product => ({
      id: `${category}-${product.name}`,
      name: product.name,
      category,
      price: product.price,
      unit: product.unit || data.unit,
      image: product.image,
      family: getProductFamily(category, product.name),
    })),
  );
}

const menuItems = createMenuItems();

// ---------------------------------------------------------------------------
// عناصر الصفحة وحالة التطبيق
// ---------------------------------------------------------------------------

const elements = {
  grid: document.querySelector('#menu-grid'),
  loadMore: document.querySelector('#load-more'),
  categories: document.querySelector('#categories'),
  search: document.querySelector('#search'),
  empty: document.querySelector('#empty'),
  cartToggle: document.querySelector('#cart-toggle'),
  cartPanel: document.querySelector('#cart-panel'),
  cartClose: document.querySelector('#cart-close'),
  backdrop: document.querySelector('#cart-backdrop'),
  cartItems: document.querySelector('#cart-items'),
  cartEmpty: document.querySelector('#cart-empty'),
  cartCount: document.querySelector('#cart-count'),
  cartTotal: document.querySelector('#cart-total'),
  checkoutButton: document.querySelector('#checkout-button'),
  checkoutForm: document.querySelector('#checkout-form'),
  locationField: document.querySelector('#location-field'),
  location: document.querySelector('#customer-location'),
  toast: document.querySelector('#cart-toast'),
};

const state = {
  activeCategory: 'الكل',
  searchTerm: '',
  cart: [],
  visibleLimit: MENU_PAGE_SIZE,
};

let toastTimer;

// ---------------------------------------------------------------------------
// دوال مساعدة
// ---------------------------------------------------------------------------

function formatMoney(value) {
  return `${Number(value).toLocaleString('ar-LY')} د.ل`;
}

function applySiteSettings() {
  document.querySelectorAll('[data-phone-link]').forEach(link => {
    link.href = `tel:${SITE_SETTINGS.phoneTel}`;
  });
  document.querySelectorAll('[data-phone-display]').forEach(element => {
    element.textContent = SITE_SETTINGS.phoneDisplay;
  });

  const businessSchema = document.querySelector('#business-schema');
  if (businessSchema) {
    try {
      const schema = JSON.parse(businessSchema.textContent);
      schema.telephone = SITE_SETTINGS.phoneTel;
      businessSchema.textContent = JSON.stringify(schema);
    } catch {
      // لا نمنع الموقع من العمل إذا عُدّل ترميز البيانات المنظمة يدويًا بشكل غير صحيح.
    }
  }
}

function escapeHtml(value) {
  const characters = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(value).replace(/[&<>"']/g, character => characters[character]);
}

function getUnitLabel(unit) {
  if (unit === 'kg') return 'سعر الكيلو';
  if (unit === 'piece') return 'سعر القطعة';
  return 'سعر الحافظة';
}

function getQuantityLabel(unit) {
  return unit === 'piece' ? 'قطعة' : 'حافظة';
}

function getItemById(id) {
  return menuItems.find(item => item.id === id);
}

function getCategories() {
  return ['الكل', ...new Set(menuItems.map(item => item.category))];
}

function getVisibleItems() {
  const query = state.searchTerm.trim().toLocaleLowerCase('ar');

  const matchingItems = menuItems.filter(item => {
    const categoryMatches =
      state.activeCategory === 'الكل' || item.category === state.activeCategory;
    const textMatches = `${item.name} ${item.category}`
      .toLocaleLowerCase('ar')
      .includes(query);

    return categoryMatches && textMatches;
  });

  return sortMenuItems(matchingItems);
}

function getSelectedValue(output) {
  return Number(output.value.replace(/[^0-9.]/g, ''));
}

function getCartLineDescription(line) {
  if (line.unit === 'kg') {
    const approximateWeight = (line.selectedValue / line.price).toFixed(2);
    return `تعبئة بقيمة ${formatMoney(line.selectedValue)} (تقريبًا ${approximateWeight} كغ)`;
  }

  return `${line.selectedValue} ${getQuantityLabel(line.unit)}`;
}

// ---------------------------------------------------------------------------
// عرض المنيو
// ---------------------------------------------------------------------------

function createImageMarkup(item) {
  if (!item.image) {
    return '<span class="image-placeholder">صورة المنتج قريبًا</span>';
  }

  const imagePath = item.image.includes('/') ? item.image : `images/${item.image}`;
  return `<img data-product-image src="${escapeHtml(imagePath)}" alt="${escapeHtml(item.name)}" width="640" height="640" loading="lazy" decoding="async" fetchpriority="low">`;
}

function createQuantityControl(item) {
  const initialValue = item.unit === 'kg' ? `${INITIAL_PACKING_VALUE} د.ل` : '1';
  const controlClass = item.unit === 'kg' ? 'pack-control' : 'quantity-control';
  const prefix = item.unit === 'kg' ? '<span>التعبئة</span>' : '';
  const suffix = item.unit === 'kg' ? '' : `<span>${getQuantityLabel(item.unit)}</span>`;

  return `
    <div class="${controlClass}">
      ${prefix}
      <button type="button" data-action="decrease" data-id="${escapeHtml(item.id)}">−</button>
      <output data-value="${escapeHtml(item.id)}">${initialValue}</output>
      <button type="button" data-action="increase" data-id="${escapeHtml(item.id)}">+</button>
      ${suffix}
    </div>
  `;
}

function createMenuCard(item) {
  return `
    <article class="item">
      <div class="item-photo">${createImageMarkup(item)}</div>
      <div class="item-body">
        <span class="item-category">${escapeHtml(item.category)}</span>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="item-price">${getUnitLabel(item.unit)}: <strong>${formatMoney(item.price)}</strong></p>
        ${createQuantityControl(item)}
        <button class="item-order" type="button" data-action="add" data-id="${escapeHtml(item.id)}">
          أضف إلى السلة <span>←</span>
        </button>
      </div>
    </article>
  `;
}

function renderCategories() {
  elements.categories.innerHTML = getCategories()
    .map(category => `
      <button class="category${category === state.activeCategory ? ' active' : ''}" type="button" data-category="${escapeHtml(category)}">
        ${escapeHtml(category)}
      </button>
    `)
    .join('');
}

function renderMenu() {
  const items = getVisibleItems();
  const visibleItems = items.slice(0, state.visibleLimit);
  let currentFamily = '';
  let currentCategory = '';
  elements.grid.innerHTML = visibleItems.map(item => {
    const categoryHeading = state.activeCategory === 'الكل' && item.category !== currentCategory
      ? `<div class="menu-category-title">${escapeHtml(item.category)}</div>`
      : '';
    if (item.category !== currentCategory) currentFamily = '';
    currentCategory = item.category;
    const familyHeading = item.family === currentFamily
      ? ''
      : `<div class="menu-family-title">${escapeHtml(item.family)}</div>`;
    currentFamily = item.family;
    return `${categoryHeading}${familyHeading}${createMenuCard(item)}`;
  }).join('');
  elements.empty.hidden = items.length > 0;
  elements.loadMore.hidden = visibleItems.length >= items.length;
  elements.loadMore.textContent = `عرض المزيد (${items.length - visibleItems.length} صنف)`;
}

function renderCart() {
  const itemCount = state.cart.reduce((total, line) => total + line.count, 0);
  const totalPrice = state.cart.reduce(
    (total, line) => total + line.selectedValue * line.count,
    0,
  );

  elements.cartCount.textContent = itemCount;
  elements.cartTotal.textContent = formatMoney(totalPrice);
  elements.cartEmpty.hidden = state.cart.length > 0;
  elements.checkoutButton.disabled = state.cart.length === 0;

  elements.cartItems.innerHTML = state.cart.map((line, index) => `
    <div class="cart-line">
      <div>
        <strong>${escapeHtml(line.name)}</strong>
        <small>${getCartLineDescription(line)}</small>
      </div>
      <div class="cart-line-actions">
        <button type="button" data-cart-action="increase" data-index="${index}">+</button>
        <b>${line.count}</b>
        <button type="button" data-cart-action="decrease" data-index="${index}">−</button>
      </div>
    </div>
  `).join('');
}

function renderPage() {
  renderCategories();
  renderMenu();
  renderCart();
}

// ---------------------------------------------------------------------------
// السلة والطلب
// ---------------------------------------------------------------------------

function updateControlValue(item, output, action) {
  const currentValue = getSelectedValue(output);
  const step = item.unit === 'kg' ? PACKING_STEP : 1;
  const newValue = action === 'increase'
    ? currentValue + step
    : Math.max(step, currentValue - step);

  output.value = item.unit === 'kg' ? `${newValue} د.ل` : newValue;
}

function addToCart(item, selectedValue) {
  const sameLine = state.cart.find(line =>
    line.id === item.id && line.selectedValue === selectedValue,
  );

  if (sameLine) {
    sameLine.count += 1;
  } else {
    state.cart.push({ ...item, selectedValue, count: 1 });
  }

  renderCart();
  showToast();
}

function updateCartLine(index, action) {
  const line = state.cart[index];
  if (!line) return;

  if (action === 'increase') {
    line.count += 1;
  } else {
    line.count -= 1;
    if (line.count === 0) state.cart.splice(index, 1);
  }

  renderCart();
}

function openCart() {
  elements.cartPanel.classList.add('open');
  elements.cartPanel.setAttribute('aria-hidden', 'false');
  elements.cartToggle.setAttribute('aria-expanded', 'true');
  elements.backdrop.hidden = false;
  elements.cartClose.focus();
}

function closeCart() {
  elements.cartPanel.classList.remove('open');
  elements.cartPanel.setAttribute('aria-hidden', 'true');
  elements.cartToggle.setAttribute('aria-expanded', 'false');
  elements.backdrop.hidden = true;
  elements.cartToggle.focus();
}

function showToast(message = 'تمت إضافة الصنف إلى السلة') {
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    elements.toast.hidden = true;
  }, 2500);
}

function setDeliveryFields(deliverySelected) {
  elements.locationField.hidden = !deliverySelected;
  elements.location.required = deliverySelected;
}

function createWhatsappMessage(formData) {
  const isDelivery = formData.get('fulfillment') === 'delivery';
  const lines = state.cart.map(line =>
    `• ${line.name} — ${getCartLineDescription(line)} × ${line.count}`,
  ).join('\n');
  const total = state.cart.reduce(
    (sum, line) => sum + line.selectedValue * line.count,
    0,
  );

  return [
    `طلب جديد من موقع ${SITE_SETTINGS.orderBusinessName}`,
    '',
    lines,
    '',
    `الإجمالي: ${formatMoney(total)}`,
    `طريقة الاستلام: ${isDelivery ? 'توصيل' : 'استلام شخصي'}`,
    `الاسم: ${formData.get('name')}`,
    `رقم التواصل: ${formData.get('phone')}`,
    isDelivery ? `الموقع: ${formData.get('location')}` : '',
  ].filter(Boolean).join('\n');
}

function completeOrder(event) {
  event.preventDefault();
  if (!state.cart.length) {
    showToast('أضف صنفًا واحدًا على الأقل قبل إرسال الطلب');
    return;
  }

  const formData = new FormData(elements.checkoutForm);
  const message = createWhatsappMessage(formData);
  const whatsappUrl = `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank', 'noopener');

  state.cart = [];
  elements.checkoutForm.reset();
  setDeliveryFields(true);
  renderCart();
  closeCart();
}

// ---------------------------------------------------------------------------
// أحداث الصفحة
// ---------------------------------------------------------------------------

elements.categories.addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;

  state.activeCategory = button.dataset.category;
  state.visibleLimit = MENU_PAGE_SIZE;
  renderCategories();
  renderMenu();
});

elements.search.addEventListener('input', event => {
  state.searchTerm = event.target.value;
  state.visibleLimit = MENU_PAGE_SIZE;
  renderMenu();
});

elements.loadMore.addEventListener('click', () => {
  state.visibleLimit += MENU_PAGE_SIZE;
  renderMenu();
});

elements.grid.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;

  const item = getItemById(button.dataset.id);
  if (!item) return;

  const output = elements.grid.querySelector(
    `[data-value="${CSS.escape(item.id)}"]`,
  );

  if (button.dataset.action === 'increase' || button.dataset.action === 'decrease') {
    updateControlValue(item, output, button.dataset.action);
    return;
  }

  if (button.dataset.action === 'add') {
    const selectedValue = getSelectedValue(output);
    if (selectedValue > 0) addToCart(item, selectedValue);
  }
});

elements.grid.addEventListener('error', event => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || !image.matches('[data-product-image]')) return;

  image.replaceWith(Object.assign(document.createElement('span'), {
    className: 'image-placeholder',
    textContent: 'تعذر تحميل الصورة',
  }));
}, true);

elements.grid.addEventListener('load', event => {
  if (event.target instanceof HTMLImageElement && event.target.matches('[data-product-image]')) {
    event.target.classList.add('is-loaded');
  }
}, true);

elements.cartItems.addEventListener('click', event => {
  const button = event.target.closest('[data-cart-action]');
  if (!button) return;

  updateCartLine(Number(button.dataset.index), button.dataset.cartAction);
});

elements.cartToggle.addEventListener('click', openCart);
elements.cartClose.addEventListener('click', closeCart);
elements.backdrop.addEventListener('click', closeCart);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && elements.cartPanel.classList.contains('open')) closeCart();
});

elements.checkoutForm.addEventListener('change', event => {
  if (event.target.name === 'fulfillment') {
    setDeliveryFields(event.target.value === 'delivery');
  }
});

elements.checkoutForm.addEventListener('submit', completeOrder);

// التشغيل الأولي عند فتح الموقع.
applySiteSettings();
renderPage();
