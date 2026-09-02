/**
 * الشيخ للحلويات — ملف المنيو
 * لإضافة منتج جديد: أضف كائنًا جديدًا داخل menuItems.
 * ضع الصورة داخل مجلد images، ثم اكتب اسمها في image.
 */

// ---------------------------------------------------------------------------
// 1) بيانات المنتجات
// ---------------------------------------------------------------------------
const menuItems = [
  {
    name: 'بوكس مشكل',
    category: 'بوكسات وهدايا',
    description: 'تشكيلة مختارة ومتنوعة لضيافة أنيقة.',
    image: 'بوكس مشكل.jpg',
  },
  {
    name: 'حافظة كعك زهر',
    category: 'حلويات شرقية',
    description: 'حافظة كعك بطعم الزهر المميز.',
    image: 'حافظة كعك زهر.jpg',
  },
  {
    name: 'حافظة كعك مالح',
    category: 'مخبوزات مالحة',
    description: 'حافظة كعك مالح مناسبة للضيافة.',
    image: 'حافظة كعك مالح.jpg',
  },
  {
    name: 'حافظة كوكيز',
    category: 'كوكيز وبسكويت',
    description: 'تشكيلة كوكيز مقدمة في حافظة أنيقة.',
    image: 'حافظة كوكيز.jpg',
  },
  {
    name: 'حافظة مقروض عسل طبيعي',
    category: 'حلويات شرقية',
    description: 'مقروض محضّر بعسل طبيعي.',
    image: 'حافظة مقروض عسل طبيعي.jpg',
  },
  {
    name: 'غريبة لوز',
    category: 'حلويات شرقية',
    description: 'غريبة ناعمة بطعم اللوز.',
    image: 'غريبة لوز.jpg',
  },
  {
    name: 'غريبة معسلة',
    category: 'حلويات شرقية',
    description: 'غريبة بطبقة عسل خفيفة ولذيذة.',
    image: 'غريبة معسلة.jpg',
  },
  {
    name: 'كعك مالح',
    category: 'مخبوزات مالحة',
    description: 'كعك مالح مقرمش للضيافة.',
    image: 'كعك مالح.jpg',
  },
  {
    name: 'كنافة شوكلاتة',
    category: 'حلويات مميزة',
    description: 'كنافة بطبقة شوكولاتة غنية.',
    image: 'كنافة شوكلاتة.jpg',
  },
  {
    name: 'كنافة شوكلاتة - حجم آخر',
    category: 'حلويات مميزة',
    description: 'كنافة شوكولاتة بخيار تقديم آخر.',
    image: 'كنافة شوكلاتة1.jpg',
  },
  {
    name: 'كوكيز',
    category: 'كوكيز وبسكويت',
    description: 'كوكيز طازج بقوام محبّب.',
    image: 'كوكيز.jpg',
  },
  {
    name: 'كيكة جافة',
    category: 'كيك ومخبوزات',
    description: 'كيكة جافة خفيفة مناسبة مع القهوة.',
    image: 'كيكة جافة.jpg',
  },
  {
    name: 'كيكة جافة - حجم آخر',
    category: 'كيك ومخبوزات',
    description: 'كيكة جافة بخيار حجم آخر.',
    image: 'كيكة جافة 2.jpg',
  },
  {
    name: 'كيكة حجم صغير',
    category: 'كيك ومخبوزات',
    description: 'كيكة صغيرة للتقديم الفردي.',
    image: 'كيكة حجم صغير.jpg',
  },
  {
    name: 'كيكة كندر',
    category: 'كيك ومخبوزات',
    description: 'كيكة غنية مستوحاة من نكهة كندر.',
    image: 'كيكة كندر.jpg',
  },
  {
    name: 'ماكرون',
    category: 'حلويات مميزة',
    description: 'ماكرون أنيق مناسب للهدايا والمناسبات.',
    image: 'ماكرون.jpg',
  },
  {
    name: 'مشكل بقلاوة',
    category: 'حلويات شرقية',
    description: 'تشكيلة بقلاوة متنوعة بطعم أصيل.',
    image: 'مشكل بقلاوة.jpg',
  },
];

// ---------------------------------------------------------------------------
// 2) عناصر الصفحة وحالة المنيو
// ---------------------------------------------------------------------------
const elements = {
  grid: document.querySelector('#menu-grid'),
  categories: document.querySelector('#categories'),
  search: document.querySelector('#search'),
  emptyMessage: document.querySelector('#empty'),
};

const state = {
  activeCategory: 'الكل',
  searchTerm: '',
};

// ---------------------------------------------------------------------------
// 3) دوال مساعدة
// ---------------------------------------------------------------------------

/** تمنع ظهور رموز HTML داخل النصوص المدخلة في بيانات المنتجات. */
function escapeHtml(value) {
  const replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  };

  return String(value).replace(/[&<>'"]/g, character => replacements[character]);
}

/** تعيد مسار الصورة بصيغة مناسبة حتى عند وجود مسافات أو أحرف عربية في الاسم. */
function getImagePath(imageName) {
  return encodeURI(`images/${imageName}`);
}

/** تعيد قائمة التصنيفات الفريدة، مع خيار "الكل" في البداية. */
function getCategories() {
  const uniqueCategories = new Set(menuItems.map(item => item.category));
  return ['الكل', ...uniqueCategories];
}

/** تعيد المنتجات المطابقة للتصنيف وكلمة البحث الحاليين. */
function getVisibleItems() {
  const normalizedSearch = state.searchTerm.trim().toLocaleLowerCase('ar');

  return menuItems.filter(item => {
    const matchesCategory =
      state.activeCategory === 'الكل' || item.category === state.activeCategory;

    const searchableText = `${item.name} ${item.category} ${item.description}`
      .toLocaleLowerCase('ar');
    const matchesSearch = searchableText.includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });
}

// ---------------------------------------------------------------------------
// 4) دوال العرض
// ---------------------------------------------------------------------------

function createCategoryButton(category) {
  const isActive = category === state.activeCategory ? ' active' : '';

  return `
    <button
      class="category${isActive}"
      type="button"
      data-category="${escapeHtml(category)}"
    >
      ${escapeHtml(category)}
    </button>
  `;
}

function createMenuCard(item) {
  return `
    <article class="item">
      <div class="item-photo">
        <img
          src="${escapeHtml(getImagePath(item.image))}"
          alt="${escapeHtml(item.name)}"
          loading="lazy"
        >
      </div>
      <div class="item-body">
        <span class="item-category">${escapeHtml(item.category)}</span>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.description)}</p>
        <a href="tel:0919850139" class="item-order">
          استفسر عن الصنف <span>←</span>
        </a>
      </div>
    </article>
  `;
}

function renderCategories() {
  elements.categories.innerHTML = getCategories()
    .map(createCategoryButton)
    .join('');
}

function renderMenu() {
  const visibleItems = getVisibleItems();

  elements.grid.innerHTML = visibleItems.map(createMenuCard).join('');
  elements.emptyMessage.hidden = visibleItems.length > 0;
}

function renderPage() {
  renderCategories();
  renderMenu();
}

// ---------------------------------------------------------------------------
// 5) التفاعلات
// ---------------------------------------------------------------------------

elements.categories.addEventListener('click', event => {
  const clickedButton = event.target.closest('[data-category]');

  if (!clickedButton) {
    return;
  }

  state.activeCategory = clickedButton.dataset.category;
  renderPage();
});

elements.search.addEventListener('input', event => {
  state.searchTerm = event.target.value;
  renderMenu();
});

// أول عرض للمنيو عند فتح الصفحة.
renderPage();
