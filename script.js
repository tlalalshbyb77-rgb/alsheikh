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
const LOGO_IMAGE = 'images/logo-al-sheikh.jpg';
const CART_STORAGE_KEY = 'alsheikh-cart-v1';

// ترتيب العرض: غيّر order للمجموعة أو للصنف؛ الرقم الأصغر يظهر أولاً.
// عند توفر صورة جديدة، اكتب اسمها وامتدادها داخل image، مثال: image: 'images/اسم الصنف.webp'.
// الحقل الفارغ يعرض شعار الشيخ تلقائيًا إلى أن تُضاف الصورة.
const PRODUCT_DATA = {
  'النواشف': {
    order: 1,
    unit: 'kg',
    products: [
      { order: 1, name: 'عبمبر لوز طرابلسي', price: 55, image: 'images/نواشف/عبمبر لوز طرابلسي.webp' },
      { order: 2, name: 'عبمبر مخلط لوز وكاكاوية', price: 40, image: 'images/نواشف/عبمبر لوز طرابلسي.webp' },
      { order: 3, name: 'عبمبر جوز الهند', price: 40, image: 'images/نواشف/عبمبر جوز الهند.webp' },
      { order: 4, name: 'عبمبر لوز معسل', price: 60, image: '' },
      { order: 5, name: 'عبمبر بندق معسل', price: 63, image: '' },
      { order: 6, name: 'غريبة بندق', price: 40, image: '' },
      { order: 7, name: 'كعك زهر', price: 30, image: '' },
      { order: 8, name: 'مميلحة عادية', price: 30, image: '' },
      { order: 9, name: 'مميلحة تمر', price: 30, image: '' },
      { order: 10, name: 'غريبة لوز', price: 35, image: '' },
      { order: 11, name: 'غريبة طحينية', price: 45, image: '' },
      { order: 12, name: 'سمسمية', price: 2.5, unit: 'piece', image: '' },
      { order: 13, name: 'غريبة معسلة', price: 35, image: 'images/نواشف/غريبة معسلة.webp' },
      { order: 14, name: 'كعك ملون', price: 30, image: '' },
      { order: 15, name: 'مرسيدس', price: 40, image: '' },
      { order: 16, name: 'قرينات لوتس', price: 30, image: '' },
      { order: 17, name: 'قرينات كورنفلكس', price: 30, image: '' },
      { order: 18, name: 'كعك لوز كاكاو', price: 30, image: '' },
      { order: 19, name: 'كعك لوز أبيض', price: 30, image: '' },
      { order: 20, name: 'كعك معسل', price: 30, image: '' },
      { order: 21, name: 'مقروض طبيعي', price: 1.75, unit: 'piece', image: '' },
      { order: 22, name: 'مقروض عادي', price: 1.5, unit: 'piece', image: '' },
      { order: 23, name: 'قرينات شوكولاتة', price: 30, image: '' },
      { order: 24, name: 'قرينات سكر', price: 30, image: '' },
      { order: 25, name: 'قرينات لوز', price: 45, image: '' },
      { order: 26, name: 'أصابع كورنفلكس', price: 30, image: '' },
      { order: 27, name: 'غريبة حلقوم', price: 30, image: '' },
      { order: 28, name: 'كعك قرفة', price: 30, image: '' },
    ],
  },
  'شرقي': {
    order: 2,
    unit: 'kg',
    products: [
      { order: 1, name: 'خاتم فستق', price: 80, image: 'images/شرقي/خاتم فستق.webp' },
      { order: 2, name: 'خاتم لوز', price: 60, image: '' },
      { order: 3, name: 'رول لوز', price: 60, image: 'images/شرقي/رول لوز.webp' },
      { order: 4, name: 'رول فستق', price: 80, image: '' },
      { order: 5, name: 'أساور كاجو', price: 68, image: '' },
      { order: 6, name: 'أساور فستق', price: 75, image: '' },
      { order: 7, name: 'أساور لوز', price: 65, image: '' },
      { order: 8, name: 'أصابع لوز', price: 60, image: 'images/شرقي/أصابع لوز فردية.webp' },
      { order: 9, name: 'أصابع فستق', price: 80, image: '' },
      { order: 10, name: 'أصابع لوز زوجية', price: 60, image: 'images/شرقي/أصابع لوز زوجية.webp' },
      { order: 11, name: 'أصابع لوز', price: 60, image: '' },
      { order: 12, name: 'أصابع فستق', price: 80, image: '' },
      { order: 13, name: 'بقلاوة طرابلسية', price: 100, image: 'images/شرقي/بقلاوة لوز.webp' },
      { order: 14, name: 'بقلاوة شرقية', price: 75, image: 'images/شرقي/بقلاوة لوز.webp' },
      { order: 15, name: 'بقلاوة كاكاوية', price: 45, image: 'images/شرقي/بقلاوة كاكاوية.webp' },
      { order: 16, name: 'صدفة لوز', price: 5, unit: 'piece', image: 'images/شرقي/صدفة لوز.webp' },
      { order: 17, name: 'جزرة فستق', price: 6, unit: 'piece', image: '' },
      
    ],
  },
  'كيكات': {
    order: 3,
    unit: 'piece',
    products: [
      { order: 1, name: 'كنافة شوكولاتة', price: 4, image: 'images/كيكات/كنافة شوكولاتة.webp' },
      { order: 2, name: 'كيكة جيلاطي', price: 7, image: 'images/كيكات/كيكة جيلاطي.webp' },
      { order: 3, name: 'كيكة أوريو', price: 7, image: 'images/كيكات/كيكة أوريو.webp' },
      { order: 4, name: 'كيكة تشيز فستق', price: 7, image: 'images/كيكات/كيكة تشيز فستق.webp' },
      { order: 5, name: 'كيكة تشيز توت', price: 7, image: 'images/كيكات/كيكة تشيز كيك توت.webp' },
      { order: 6, name: 'كيكة بلريش', price: 25, image: 'images/كيكات/كيكة بلريش.webp' },
      { order: 7, name: 'كيكة جافا', price: 7, image: 'images/كيكات/كيكة جافا.webp' },
      { order: 8, name: 'باسطي', price: 1.5, image: 'images/كيكات/باسطي.webp' },
      { order: 9, name: 'كيكة سنيكرز', price: 7, image: 'images/كيكات/كيكة سنيكرز.webp' },
      { order: 10, name: 'كيكة شوكلاتة', price: 65, image: 'images/كيكات/كيكة شوكلاتة.webp' },
      { order: 11, name: 'كيكة كراميل ولوز', price: 7, image: 'images/كيكات/كيكة كراميل ولوز.webp' },
      { order: 12, name: 'كيكة كرز', price: 6, image: 'images/كيكات/كيكة كرز.webp' },
      { order: 13, name: 'كيكة كريمة', price: 60, image: 'images/كيكات/كيكة كريمة.webp' },
      { order: 14, name: 'كيكة لوتس', price: 7, image: 'images/كيكات/كيكة لوتس.webp' },
      { order: 15, name: 'كيكة نوقا كاكاوية', price: 7, image: 'images/كيكات/كيكة نوقا كاكاوية.webp' },
      { order: 16, name: 'مالفي', price: 1.5, image: 'images/كيكات/مالفي.webp' },
      { order: 17, name: 'مالفي شوكلاتة', price: 2, image: 'images/كيكات/مالفي شوكلاتة.webp' },
      { order: 18, name: 'ميني كيك بندق', price: 6, image: 'images/كيكات/ميني كيك بندق.webp' },
    ],
  },
  'حوافظ': {
    order: 4,
    unit: 'box',
    products: [
      { order: 1, name: 'مقروض طبيعي', price: 20, image: '' },
      { order: 2, name: 'مقروض عادي', price: 17, image: '' },
      { order: 3, name: 'لويزة شوكولاتة', price: 14, image: '' },
      { order: 4, name: 'لويزة لوز', price: 18, image: '' },
      { order: 5, name: 'لويزة لوتس', price: 16, image: '' },
      { order: 6, name: 'لويزة فستق', price: 19, image: '' },
      { order: 7, name: 'قرينات كورن فلكس', price: 16, image: '' },
      { order: 8, name: 'قرينات كاكاوية', price: 16, image: '' },
      { order: 9, name: 'قرينات لوتس', price: 17, image: '' },
      { order: 10, name: 'قرينات لوز', price: 20, image: '' },
      { order: 11, name: 'أصابع بريستيج', price: 16, image: '' },
      { order: 12, name: 'سابلي بستاشيو', price: 19, image: '' },
      { order: 13, name: 'كعك فيريرو', price: 17, image: '' },
      { order: 14, name: 'حذوة لوز', price: 17, image: '' },
      { order: 15, name: 'كعك شوش ورد', price: 16, image: '' },
      { order: 16, name: 'قرينات شوش الورد', price: 17, image: '' },
      { order: 17, name: 'ميلحة فرارة', price: 15, image: '' },
      { order: 18, name: 'كعك ملبس شوكولاتة', price: 16, image: '' },
      { order: 19, name: 'قرينات جوز الهند', price: 16, image: '' },
      { order: 20, name: 'سابلي مربى', price: 16, image: '' },
      { order: 21, name: 'غريبة زبيب', price: 15, image: '' },
      { order: 22, name: 'كوكيز شوكولاتة', price: 17, image: '' },
      { order: 23, name: 'كوكيز لوز', price: 18, image: '' },
      { order: 24, name: 'برازق', price: 18, image: '' },
      { order: 25, name: 'غريبة حمص', price: 15, image: '' },
      { order: 26, name: 'كوكو برنج', price: 17, image: '' },
      { order: 27, name: 'مميلحة خزايني', price: 18, image: '' },
      { order: 28, name: 'كعك ملون', price: 15, image: '' },
      { order: 29, name: 'ميلحة شجرة بالزهر', price: 17, image: '' },
      { order: 30, name: 'غريبة حلقوم', price: 14, image: '' },
      { order: 31, name: 'بيتيفور', price: 16, image: '' },
      { order: 32, name: 'سابلي خزايني', price: 17, image: '' },
      { order: 33, name: 'قرينات نسكافيه', price: 14, image: '' },
      { order: 34, name: 'أصابع لوتس', price: 18, image: '' },
      { order: 35, name: 'غريبة شوكولاتة', price: 15, image: '' },
      { order: 36, name: 'أصابع شوكولاتة', price: 19, image: '' },
      { order: 37, name: 'كعك لوز شوكولاتة', price: 15, image: '' },
      { order: 38, name: 'كعك لوز', price: 14, image: '' },
      { order: 39, name: 'مميلحة عصفورة', price: 15, image: '' },
      { order: 40, name: 'مميلحة فرارة بالتمر', price: 15, image: '' },
      { order: 41, name: 'مبرومة', price: 14, image: '' },
      { order: 42, name: 'قرينات شوكولاتة', price: 17, image: '' },
      { order: 43, name: 'أصابع كورن فلكس', price: 17, image: '' },
      { order: 44, name: 'معمول تمر', price: 16, image: '' },
      { order: 45, name: 'حافظة سلة لوز', price: 22, image: '' },
      { order: 46, name: 'حافظة مشكل بقلاوة', price: 60, image: '' },
    ],
  },
};

// ترتيب العائلات داخل كل قسم: الأصناف المتشابهة تظهر بجانب بعضها تلقائيًا.
const FAMILY_ORDER = {
  النواشف: { عبمبر: 1, غريبات: 2, كعك: 3, مملحات: 4, قرينات: 5, أصابع: 6, مقروض: 7, 'أصناف متنوعة': 99 },
  شرقي: { خاتم: 1, رول: 2, أساور: 3, أصابع: 4, بقلاوة: 5, 'حلويات متنوعة': 6 },
  كيكات: { كيكات: 1, كنافة: 2, مالفي: 3, 'ميني كيك': 4, باسطي: 5 },
  حوافظ: { لويزة: 1, سابلي: 2, كوكيز: 3, قرينات: 4, أصابع: 5, كعك: 6, غريبات: 7, مملحات: 8, حافظات: 9, مقروض: 10, 'أصناف متنوعة': 99 },
};

function getProductFamily(category, name) {
  if (category === 'كيكات') {
    if (name.startsWith('كيكة')) return 'كيكات';
    if (name.startsWith('كنافة')) return 'كنافة';
    if (name.startsWith('مالفي')) return 'مالفي';
    if (name.startsWith('ميني كيك')) return 'ميني كيك';
    if (name.startsWith('باسطي')) return 'باسطي';
  }
  if (category === 'شرقي') {
    if (name.startsWith('خاتم')) return 'خاتم';
    if (name.startsWith('رول')) return 'رول';
    if (name.startsWith('أساور')) return 'أساور';
    if (name.startsWith('أصابع')) return 'أصابع';
    if (name.startsWith('بقلاوة')) return 'بقلاوة';
    if (name.startsWith('عمبر') || name.startsWith('عبمبر')) return 'عبمبر';
  }

  if (name.startsWith('عمبر') || name.startsWith('عبمبر')) return 'عبمبر';
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
  return category === 'شرقي' ? 'حلويات متنوعة' : 'أصناف متنوعة';
}

function sortMenuItems(items) {
  return [...items].sort((first, second) => {
    const categoryDifference = (first.categoryOrder || 999) - (second.categoryOrder || 999);
    if (categoryDifference) return categoryDifference;
    const firstFamilyOrder = FAMILY_ORDER[first.category]?.[first.family] || 99;
    const secondFamilyOrder = FAMILY_ORDER[second.category]?.[second.family] || 99;
    const familyDifference = firstFamilyOrder - secondFamilyOrder;
    if (familyDifference) return familyDifference;
    const productDifference = (first.order || 999) - (second.order || 999);
    if (productDifference) return productDifference;
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
      categoryOrder: data.order,
      order: product.order,
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
  cartTotalLabel: document.querySelector('#cart-total-label'),
  cartNote: document.querySelector('#cart-note'),
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
  document.querySelectorAll('[data-whatsapp-link]').forEach(link => {
    link.href = `https://wa.me/${SITE_SETTINGS.whatsappNumber}`;
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

function hasKnownPrice(item) {
  return Number.isFinite(item.price) && item.price >= 0;
}

function getQuantityLabel(unit) {
  return unit === 'piece' ? 'قطعة' : 'حافظة';
}

function getItemById(id) {
  return menuItems.find(item => item.id === id);
}

function getCategories() {
  return [
    'الكل',
    ...Object.entries(PRODUCT_DATA)
      .sort(([, first], [, second]) => first.order - second.order)
      .map(([category]) => category),
  ];
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

function calculateCartTotal() {
  return state.cart.reduce(
    (total, line) => total + getCartLineTotal(line),
    0,
  );
}

function getCartLineTotal(line) {
  // الكيلو يُختار بقيمة مالية، أما الحافظة والقطعة فيُحسبان بالسعر × الكمية.
  if (line.unit === 'kg') return line.selectedValue * line.count;
  return line.price * line.selectedValue * line.count;
}

function isDeliverySelected() {
  return document.querySelector('input[name="fulfillment"]:checked')?.value === 'delivery';
}

function getCartLineDescription(line) {
  if (line.unit === 'kg') {
    return `القيمة: ${formatMoney(getCartLineTotal(line))}`;
  }

  const quantity = line.selectedValue * line.count;
  return `${quantity} ${getQuantityLabel(line.unit)} — القيمة: ${formatMoney(getCartLineTotal(line))}`;
}

function getCartMessageLine(line) {
  return `• ${line.name} — ${getCartLineDescription(line)}`;
}

// ---------------------------------------------------------------------------
// عرض المنيو
// ---------------------------------------------------------------------------

function createImageMarkup(item) {
  const imageSource = String(item.image || '').trim();
  const imagePath = imageSource.includes('/') ? imageSource : `images/${imageSource}`;
  const fallbackClass = imageSource ? '' : ' is-logo-fallback';
  const fallbackAlt = imageSource ? item.name : 'شعار الشيخ للحلويات';
  return `<img class="${fallbackClass.trim()}" data-product-image src="${escapeHtml(imagePath || LOGO_IMAGE)}" alt="${escapeHtml(fallbackAlt)}" width="640" height="640" loading="lazy" decoding="async" fetchpriority="low">`;
}

function createQuantityControl(item) {
  const initialValue = item.unit === 'kg' ? `${INITIAL_PACKING_VALUE} د.ل` : '1';
  const controlClass = item.unit === 'kg' ? 'pack-control' : 'quantity-control';
  const label = item.unit === 'kg' ? 'اختر قيمة الطلب' : 'اختر الكمية';
  const suffix = item.unit === 'kg' ? '' : `<span class="unit-label">${getQuantityLabel(item.unit)}</span>`;

  return `
    <div class="${controlClass}" aria-label="${label}">
      <span class="control-label">${label}</span>
      <div class="control-buttons">
      <button type="button" aria-label="تقليل ${escapeHtml(item.name)}" data-action="decrease" data-id="${escapeHtml(item.id)}">−</button>
      <output data-value="${escapeHtml(item.id)}">${initialValue}</output>
      <button type="button" aria-label="زيادة ${escapeHtml(item.name)}" data-action="increase" data-id="${escapeHtml(item.id)}">+</button>
      </div>
      ${suffix}
    </div>
  `;
}

function createMenuCard(item) {
  const knownPrice = hasKnownPrice(item);
  const priceMarkup = knownPrice
    ? `${getUnitLabel(item.unit)}: <strong>${formatMoney(item.price)}</strong>`
    : `السعر: <strong class="price-on-request">عند الطلب</strong>`;
  const action = knownPrice ? 'add' : 'inquire';
  const actionIcon = knownPrice ? '🛒' : '💬';
  const actionLabel = knownPrice ? 'أضف إلى السلة' : 'اسأل عن السعر';

  return `
    <article class="item">
      <div class="item-photo">${createImageMarkup(item)}</div>
      <div class="item-body">
        <span class="item-category">${escapeHtml(item.category)}</span>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="item-price">${priceMarkup}</p>
        ${knownPrice ? createQuantityControl(item) : '<p class="item-help">تواصل معنا لتأكيد السعر والطلب</p>'}
        <button class="item-order" type="button" data-action="${action}" data-id="${escapeHtml(item.id)}">
          <span class="item-order-icon" aria-hidden="true">${actionIcon}</span>
          <span>${actionLabel}</span>
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
  const totalPrice = calculateCartTotal();
  const deliverySelected = isDeliverySelected();

  elements.cartCount.textContent = itemCount;
  elements.cartTotal.textContent = formatMoney(totalPrice);
  elements.cartTotalLabel.textContent = deliverySelected ? 'إجمالي المنتجات' : 'إجمالي الطلب';
  elements.cartNote.textContent = deliverySelected
    ? 'السعر المعروض غير شامل التوصيل؛ يتم تأكيد رسومه عبر واتساب.'
    : 'هذا هو إجمالي طلب الاستلام الشخصي.';
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
  saveCart();
  showToast(`${item.name} أُضيف إلى السلة ✓`);
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
  saveCart();
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  } catch {
    // يبقى الطلب صالحًا خلال الجلسة حتى لو منع المتصفح التخزين المحلي.
  }
}

function restoreCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    if (!Array.isArray(savedCart)) return;

    state.cart = savedCart.filter(line =>
      typeof line?.id === 'string'
      && Number.isFinite(Number(line.selectedValue))
      && Number(line.selectedValue) > 0
      && Number.isFinite(Number(line.count))
      && Number(line.count) > 0
      && getItemById(line.id),
    ).map(line => ({
      ...getItemById(line.id),
      selectedValue: Number(line.selectedValue),
      count: Math.floor(Number(line.count)),
    }));
  } catch {
    // نتجاهل بيانات قديمة أو تالفة بدلاً من تعطيل المتجر.
  }
}

function openCart() {
  elements.cartPanel.classList.add('open');
  elements.cartPanel.setAttribute('aria-hidden', 'false');
  elements.cartToggle.setAttribute('aria-expanded', 'true');
  elements.backdrop.hidden = false;
  document.body.classList.add('cart-open');
  elements.cartClose.focus();
}

function closeCart() {
  elements.cartPanel.classList.remove('open');
  elements.cartPanel.setAttribute('aria-hidden', 'true');
  elements.cartToggle.setAttribute('aria-expanded', 'false');
  elements.backdrop.hidden = true;
  document.body.classList.remove('cart-open');
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
  elements.location.disabled = !deliverySelected;
  if (!deliverySelected) elements.location.value = '';
  renderCart();
}

function createWhatsappMessage(formData) {
  const isDelivery = formData.get('fulfillment') === 'delivery';
  const lines = state.cart.map(getCartMessageLine).join('\n');
  const total = calculateCartTotal();
  const totalLine = isDelivery
    ? `إجمالي المنتجات: ${formatMoney(total)} (غير شامل التوصيل)`
    : `إجمالي الطلب: ${formatMoney(total)}`;

  return [
    `طلب جديد من موقع ${SITE_SETTINGS.orderBusinessName}`,
    '',
    lines,
    '',
    totalLine,
    `طريقة الاستلام: ${isDelivery ? 'توصيل' : 'استلام شخصي'}`,
    `الاسم: ${formData.get('name')}`,
    `رقم التواصل: ${formData.get('phone')}`,
    isDelivery ? `الموقع: ${formData.get('location')}` : '',
    formData.get('note') ? `ملاحظات العميل: ${formData.get('note')}` : '',
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
  showToast('تم فتح واتساب لإرسال طلبك. ستبقى السلة محفوظة حتى تتأكد من الإرسال.');
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

  if (button.dataset.action === 'inquire') {
    const message = `مرحبًا، أريد معرفة سعر صنف ${item.name} من ${SITE_SETTINGS.orderBusinessName}.`;
    window.open(
      `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener',
    );
    showToast('تم فتح واتساب للاستفسار عن السعر');
    return;
  }

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

  if (image.dataset.fallbackApplied !== 'true') {
    image.dataset.fallbackApplied = 'true';
    image.src = LOGO_IMAGE;
    image.alt = 'شعار الشيخ للحلويات';
    image.classList.add('is-logo-fallback');
    image.closest('.item-photo')?.classList.add('has-image-fallback');
    return;
  }

  image.replaceWith(Object.assign(document.createElement('span'), {
    className: 'image-placeholder',
    textContent: 'شعار الشيخ للحلويات',
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
restoreCart();
renderPage();
