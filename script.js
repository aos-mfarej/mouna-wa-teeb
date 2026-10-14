// ===== بيانات المنتجات =====

const products = {
  baladiSumac: {
    name: "سماق بلدي",
    available: true,
    category: "sumac",
    image: "assets/baladi-sumac.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي للسماق البلدي بمرطبان بلاستيك دائري مفتوح",

    sizes: {
      250: { label: "250 غرام", priceFils: 3000 }
    }
  },

  figJam: {
    name: "مربّى التين",
    available: false,
    category: "jam",
    image: "assets/fig-jam.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي لمربّى التين بمرطبان مفتوح، مع تين وبستان وقت الغروب",

    sizes: {
      250: { label: "250 غرام", priceFils: 2500 },
      500: { label: "500 غرام", priceFils: 4500 },
      1000: { label: "1 كيلوغرام", priceFils: 8000 }
    }
  },
  appleVinegar: {
    name: "خل التفاح",
    available: true,
    category: "vinegar",
    image: "assets/apple-vinegar.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي لخل التفاح بقنينة زجاج، مع تفاح وبستان وقت الغروب",

    sizes: {
      1000: { label: "1 لتر", priceFils: 4000 }
    }
  },

  grapeMolasses: {
    name: "دبس العنب",
    available: true,
    category: "molasses",
    image: "assets/grape-molasses.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي لدبس العنب بمرطبان مفتوح، مع عنب وكروم خضراء وقت الغروب",

    sizes: {
      250: { label: "250 غرام", priceFils: 3000 },
      500: { label: "500 غرام", priceFils: 5500 },
      1000: { label: "1 كيلوغرام", priceFils: 10000 }
    }
  },

  dateMolasses: {
    name: "دبس التمر",
    available: true,
    category: "molasses",
    image: "assets/date-molasses.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي لدبس التمر بمرطبان مفتوح، مع تمر ونخيل وقت الغروب",

    sizes: {
      250: { label: "250 غرام", priceFils: 3000 },
      500: { label: "500 غرام", priceFils: 5500 },
      1000: { label: "1 كيلوغرام", priceFils: 10000 }
    }
  },

  appleJam: {
    name: "مربّى التفاح",
    available: true,
    category: "jam",
    image: "assets/apple-jam.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي لمربّى التفاح بمرطبان مفتوح، مع تفاح وبستان وقت الغروب",

    sizes: {
      250: { label: "250 غرام", priceFils: 2500 },
      500: { label: "500 غرام", priceFils: 4500 },
      1000: { label: "1 كيلوغرام", priceFils: 8000 }
    }
  },

  apricotJam: {
    name: "مربّى المشمش",
    available: true,
    category: "jam",
    image: "assets/apricot-jam.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي لمربّى المشمش بمرطبان مفتوح، مع حبات المشمش وبستان وقت الغروب",

    sizes: {
      250: { label: "250 غرام", priceFils: 2500 },
      500: { label: "500 غرام", priceFils: 4500 },
      1000: { label: "1 كيلوغرام", priceFils: 8000 }
    }
  },

  grapeJam: {
    name: "مربّى العنب",
    available: true,
    category: "jam",
    image: "assets/grape-jam.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي لمربّى العنب بمرطبان مفتوح، مع العنب وكروم خضراء وقت الغروب",

    sizes: {
      250: { label: "250 غرام", priceFils: 2500 },
      500: { label: "500 غرام", priceFils: 4500 },
      1000: { label: "1 كيلوغرام", priceFils: 8000 }
    }
  },

  carob: {
    name: "دبس خروب",
    available: true,
    category: "molasses",
    image: "assets/carob-molasses-right-lid.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي لدبس الخروب بمرطبان مفتوح، مع قرون الخروب وضوء الغروب",

    sizes: {
      250: { label: "250 غرام", priceFils: 3000 },
      500: { label: "500 غرام", priceFils: 5500 },
      1000: { label: "1 كيلوغرام", priceFils: 10000 }
    }
  },

  honey: {
    name: "عسل طبيعي",
    available: true,
    category: "honey",
    size: "500 غرام",
    priceFils: 10000,
    image: "assets/honey-soft-sunset.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي للعسل مع الشمع وحبوب اللقاح",

    sizes: {
      250: { label: "250 غرام", priceFils: 5000 },
      500: { label: "500 غرام", priceFils: 10000 },
      1000: { label: "1 كيلوغرام", priceFils: 19000 }
    }
  },

  pomegranate: {
    name: "دبس رمان",
    available: true,
    category: "molasses",
    size: "250 غرام",
    priceFils: 4500,
    image: "assets/pomegranate-molasses.png",
    imageAlt:
    "صورة توضيحية مولّدة بالذكاء الاصطناعي لدبس الرمان بين أشجار الرمان",

    sizes: {
      250: { label: "250 غرام", priceFils: 4500 },
      500: { label: "500 غرام", priceFils: 8000 },
      1000: { label: "1 كيلوغرام", priceFils: 15000 }
    }
  }
};

const CART_STORAGE_KEY = "mouna-wa-teeb-cart";
const MAX_QUANTITY = 99;
const WHATSAPP_NUMBER = "962779693874";

const paymentLabels = {
  cash: "الدفع عند الاستلام",
  wallet: "تحويل إلى المحفظة بعد تأكيد بيانات الدفع"
};

// ===== عناصر الصفحة =====

const cartCount = document.querySelector("#cart-count");
const productGrid = document.querySelector(".product-grid");

const openCartButton = document.querySelector("#open-cart");
const closeCartButton = document.querySelector("#close-cart");
const cartDialog = document.querySelector("#cart-dialog");

const cartItems = document.querySelector("#cart-items");
const cartSummary = document.querySelector("#cart-summary");
const cartTotal = document.querySelector("#cart-total");
const clearCartButton = document.querySelector("#clear-cart");

const checkoutForm = document.querySelector("#checkout-form");
const orderPreview = document.querySelector("#order-preview");
const orderText = document.querySelector("#order-text");
const whatsappLink = document.querySelector("#send-whatsapp");

const sizesDialog = document.querySelector("#sizes-dialog");
const sizesForm = document.querySelector("#sizes-form");
const sizesTotal = document.querySelector("#sizes-total");
const sizesMessage = document.querySelector("#sizes-message");
const addSelectedSizes = document.querySelector("#add-selected-sizes");

// ===== حفظ السلة واسترجاعها =====

function loadCart() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(CART_STORAGE_KEY) ?? "{}"
    );

    if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
      return {};
    }

    const validCart = {};

    for (const [productId, product] of Object.entries(products)) {
      let savedSizes = saved[productId];

      // تحويل السلة القديمة إلى نظام الأحجام.
      if (Number.isInteger(savedSizes)) {
        const oldSizeId = Object.keys(product.sizes).find(
          (sizeId) => product.sizes[sizeId].label === product.size
        );

        if (!oldSizeId) continue;

        savedSizes = { [oldSizeId]: savedSizes };
      }

      if (
        !savedSizes ||
        typeof savedSizes !== "object" ||
        Array.isArray(savedSizes)
      ) {
        continue;
      }

      const validSizes = {};

      for (const sizeId of Object.keys(product.sizes)) {
        const quantity = savedSizes[sizeId];

        if (
          Number.isInteger(quantity) &&
          quantity > 0 &&
          quantity <= MAX_QUANTITY
        ) {
          validSizes[sizeId] = quantity;
        }
      }

      if (Object.keys(validSizes).length > 0) {
        validCart[productId] = validSizes;
      }
    }

    return validCart;
  } catch {
    return {};
  }
}

const cart = loadCart();

function saveCart() {
  try {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );
  } catch {
    console.warn("تعذر حفظ السلة في هذا المتصفح.");
  }
}

// ===== الحسابات المشتركة =====

function formatPrice(fils) {
  return `${(fils / 1000).toFixed(3)} د.أ`;
}

function getCartLines() {
  const lines = [];

  for (const [productId, savedValue] of Object.entries(cart)) {
    const product = products[productId];

    if (!product) continue;

    const quantitiesBySize = savedValue;

    if (
      !quantitiesBySize ||
      typeof quantitiesBySize !== "object" ||
      Array.isArray(quantitiesBySize)
    ) {
      continue;
    }

    for (const [sizeId, quantity] of Object.entries(quantitiesBySize)) {
      if (!Object.hasOwn(product.sizes, sizeId)) continue;

      if (
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > MAX_QUANTITY
      ) {
        continue;
      }

      lines.push({
          productId,
          sizeId,
          product,
          size: product.sizes[sizeId],
          quantity
      });
    }
  }

  return lines;
}

function getTotalQuantity() {
  return getCartLines().reduce(
    (total, line) => total + line.quantity,
    0
  );
}

function getTotalFils() {
  return getCartLines().reduce(
    (total, line) => {
      return total + line.size.priceFils * line.quantity;
    },
    0
  );
}

function updateCartCount() {
  cartCount.textContent = getTotalQuantity();
}

function invalidateOrderPreview() {
  orderPreview.hidden = true;
  orderText.value = "";
  whatsappLink.removeAttribute("href");
}

// ===== عرض المنتجات داخل السلة =====

function createCartItem(line) {
  const { productId, sizeId, product, size, quantity } = line;

  const item = document.createElement("div");
  item.className = "cart-item";
  item.dataset.productId = productId;
  item.dataset.sizeId = sizeId;

  item.innerHTML = `
    <div class="cart-item-details">
      <p class="cart-size-name"></p>

      <div class="quantity-controls" role="group">
        <button
          class="quantity-button"
          type="button"
          data-action="decrease"
        >−</button>

        <span class="quantity-value"></span>

        <button
          class="quantity-button"
          type="button"
          data-action="increase"
        >+</button>
      </div>
    </div>

    <div class="cart-item-pricing">
      <strong class="cart-line-price"></strong>
      <span class="cart-price-caption">مجموع هذا الحجم</span>

      <button
        class="remove-item"
        type="button"
        data-action="remove"
      >حذف</button>
    </div>
  `;

  item.querySelector(".cart-size-name").textContent = size.label;
  item.querySelector(".quantity-value").textContent = quantity;

  item.querySelector(".cart-line-price").textContent =
  formatPrice(size.priceFils * quantity);

  const description = `${product.name}، ${size.label}`;

  item.querySelector(".quantity-controls").setAttribute(
    "aria-label",
    `كمية ${description}`
  );

  const decrease = item.querySelector('[data-action="decrease"]');
  const increase = item.querySelector('[data-action="increase"]');
  const remove = item.querySelector('[data-action="remove"]');

  decrease.setAttribute("aria-label", `تقليل كمية ${description}`);
  increase.setAttribute("aria-label", `زيادة كمية ${description}`);
  remove.setAttribute("aria-label", `حذف ${description} من السلة`);

  increase.disabled = quantity >= MAX_QUANTITY;

  return item;
}

function renderCart() {
  const lines = getCartLines();
  const totalQuantity = getTotalQuantity();

  cartItems.replaceChildren();
  invalidateOrderPreview();

  checkoutForm.hidden = totalQuantity === 0;
  clearCartButton.disabled = totalQuantity === 0;
  cartTotal.textContent = formatPrice(getTotalFils());

  cartSummary.textContent =
  totalQuantity === 0
  ? "سلتك فارغة حاليًا."
  : `عدد القطع في سلتك: ${totalQuantity}`;

  for (const [productId, product] of Object.entries(products)) {
    const productLines = lines.filter(
      (line) => line.productId === productId
    );

    if (productLines.length === 0) continue;

    const group = document.createElement("section");
    group.className = "cart-product-group";

    const heading = document.createElement("h3");
    heading.id = `cart-product-${productId}`;
    heading.textContent = product.name;

    group.setAttribute("aria-labelledby", heading.id);
    group.append(heading);

    for (const line of productLines) {
      group.append(createCartItem(line));
    }

    cartItems.append(group);
  }
}

function handleCartChange() {
  saveCart();
  updateCartCount();
  renderCart();
}

// ===== فتح السلة وإغلاقها =====

openCartButton.addEventListener("click", () => {
    renderCart();
    cartDialog.showModal();
});

closeCartButton.addEventListener("click", () => {
    cartDialog.close();
});

// ===== تعديل الكمية والحذف =====

cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");

    if (!button || !cartItems.contains(button) || button.disabled) {
      return;
    }

    const item = button.closest(".cart-item");
    if (!item) return;

    const { productId, sizeId } = item.dataset;
    const action = button.dataset.action;
    const quantity = cart[productId]?.[sizeId] ?? 0;

    if (quantity === 0) return;

    if (action === "increase") {
      if (quantity >= MAX_QUANTITY) return;

      cart[productId][sizeId] = quantity + 1;
    } else if (action === "decrease") {
      if (quantity === 1) {
        delete cart[productId][sizeId];
      } else {
        cart[productId][sizeId] = quantity - 1;
      }
    } else if (action === "remove") {
      delete cart[productId][sizeId];
    } else {
      return;
    }

    // نحذف مجموعة المنتج إذا حُذفت كل أحجامه.
    if (Object.keys(cart[productId]).length === 0) {
      delete cart[productId];
    }

    handleCartChange();

    const updatedItem = Array.from(
      cartItems.querySelectorAll(".cart-item")
    ).find(
      (element) =>
      element.dataset.productId === productId &&
      element.dataset.sizeId === sizeId
    );

    const nextButton = updatedItem?.querySelector(
      `button[data-action="${action}"]`
    );

    if (nextButton && !nextButton.disabled) {
      nextButton.focus();
    } else {
      closeCartButton.focus();
    }
});

// ===== تجهيز الطلب وواتساب =====
const customerPhoneInput = document.querySelector("#customer-phone");
const customerPhoneError = document.querySelector("#customer-phone-error");

function normalizePhone(value) {
  return value
    .trim()
    .replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit))
    .replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
    .replace(/[\s()\-]/g, "")
    .replace(/^(?:\+962|00962|962)/, "0");
}

function clearPhoneError() {
  customerPhoneInput.removeAttribute("aria-invalid");
  customerPhoneError.textContent = "";
}

// بعد ظهور الخطأ، نخفيه بمجرد تصحيح الرقم.
customerPhoneInput.addEventListener("input", () => {
  const phone = normalizePhone(customerPhoneInput.value);

  if (/^07[789]\d{7}$/.test(phone)) {
    clearPhoneError();
  }
});
checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    invalidateOrderPreview();

    if (getTotalQuantity() === 0) return;

    const formData = new FormData(checkoutForm);

    const name = String(
      formData.get("customerName") ?? ""
    ).trim();

    const phone = normalizePhone(
  String(formData.get("customerPhone") ?? "")
);

if (!/^07[789]\d{7}$/.test(phone)) {
  customerPhoneInput.setAttribute("aria-invalid", "true");

  customerPhoneError.textContent =
    "أدخل رقم موبايل أردني صحيح، مثل \u20660779693874\u2069.";

  customerPhoneInput.focus();
  return;
}

clearPhoneError();

    const address = String(
      formData.get("customerAddress") ?? ""
    ).trim();

    const notes = String(
      formData.get("customerNotes") ?? ""
    ).trim();

    const paymentMethod = formData.get("paymentMethod");

    if (!name || !phone || !address) {
      window.alert("يرجى تعبئة الاسم والهاتف والعنوان.");
      return;
    }

    if (!Object.hasOwn(paymentLabels, paymentMethod)) {
      window.alert("يرجى اختيار طريقة الدفع.");
      return;
    }

    const productLines = [];
    const selectedLines = getCartLines();

    for (const [productId, product] of Object.entries(products)) {
      const sizes = selectedLines.filter(
        (line) => line.productId === productId
      );

      if (sizes.length === 0) continue;

      productLines.push(`• ${product.name}`);

      for (const line of sizes) {
        const subtotal = line.size.priceFils * line.quantity;

        productLines.push(
          `  ${line.size.label} × ${line.quantity} — ${formatPrice(subtotal)}`
        );
      }
    }

    const message = [
      "طلب من متجر مونة وطيب",
      "",
      ...productLines,
      "",
      `مجموع المنتجات: ${formatPrice(getTotalFils())}`,
      "رسوم التوصيل: تُحدّد عند تأكيد الطلب.",
      `طريقة الدفع: ${paymentLabels[paymentMethod]}`,
      "",
      `الاسم: ${name}`,
      `الهاتف: ${phone}`,
      `العنوان: ${address}`,
      `ملاحظات: ${notes || "لا توجد"}`,
      "",
      "يرجى تأكيد توفر المنتجات وإجمالي المبلغ مع التوصيل قبل التحويل."
    ].join("\n");

    orderText.value = message;

    whatsappLink.href =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(message)}`;

    orderPreview.hidden = false;
    whatsappLink.focus();
});

checkoutForm.addEventListener(
  "input",
  invalidateOrderPreview
);

checkoutForm.addEventListener(
  "change",
  invalidateOrderPreview
);

function updateSizesSelection() {
  const dialog = sizesDialog;
  const product = products[dialog.dataset.productId];

  if (!product) return;

  let totalFils = 0;
  let selectedQuantity = 0;
  let hasInvalidQuantity = false;

  for (const row of dialog.querySelectorAll(".size-row")) {
    const size = product.sizes[row.dataset.size];

    if (!size) continue;

    const input = row.querySelector("input");
    const decrease = row.querySelector('[data-step="-1"]');
    const increase = row.querySelector('[data-step="1"]');

    const quantity = input.valueAsNumber;

    const isValid =
    input.validity.valid &&
    Number.isInteger(quantity) &&
    quantity >= 0 &&
    quantity <= MAX_QUANTITY;

    decrease.disabled = !isValid || quantity === 0;
    increase.disabled = !isValid || quantity === MAX_QUANTITY;

    if (!isValid) {
      hasInvalidQuantity = true;
      continue;
    }
    selectedQuantity += quantity;
    totalFils += size.priceFils * quantity;
  }

  sizesTotal.textContent =
  hasInvalidQuantity ? "—" : formatPrice(totalFils);

  sizesMessage.textContent =
  hasInvalidQuantity
  ? `أدخل عددًا صحيحًا من 0 إلى ${MAX_QUANTITY} لكل حجم.`
  : "";

  addSelectedSizes.disabled =
  hasInvalidQuantity || selectedQuantity === 0;
}

sizesForm.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-step]");

    if (!button || button.disabled) return;

    const row = button.closest(".size-row");
    const input = row.querySelector("input");
    const quantity = input.valueAsNumber;
    const step = Number(button.dataset.step);

    if (!input.validity.valid || !Number.isInteger(quantity)) return;

    input.value = String(
      Math.max(0, Math.min(MAX_QUANTITY, quantity + step))
    );

    updateSizesSelection();
});

sizesForm.addEventListener("input", (event) => {
    if (event.target.matches('input[type="number"]')) {
      updateSizesSelection();
    }
});

sizesForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const dialog = sizesDialog;
    const message = sizesMessage;
    const productId = dialog.dataset.productId;

    if (!Object.hasOwn(products, productId)) return;

    const product = products[productId];

    if (!form.reportValidity()) return;

    const additions = {};

    // نتحقق من جميع الأحجام قبل تغيير السلة.
    for (const row of form.querySelectorAll(".size-row")) {
      const sizeId = row.dataset.size;

      if (!Object.hasOwn(product.sizes, sizeId)) continue;

      const input = row.querySelector("input");
      const quantity = input.valueAsNumber;

      if (
        !Number.isInteger(quantity) ||
        quantity < 0 ||
        quantity > MAX_QUANTITY
      ) {
        message.textContent =
        `أدخل عددًا صحيحًا من 0 إلى ${MAX_QUANTITY}.`;
        input.focus();
        return;
      }

      if (quantity === 0) continue;

      const existingQuantity = cart[productId]?.[sizeId] ?? 0;

      if (existingQuantity + quantity > MAX_QUANTITY) {
        message.textContent =
        `حجم ${product.sizes[sizeId].label}: ` +
        `في السلة ${existingQuantity} قطعة. ` +
        `يمكنك إضافة ${MAX_QUANTITY - existingQuantity} قطعة كحد أقصى.`;

        input.focus();
        return;
      }

      additions[sizeId] = quantity;
    }

    if (Object.keys(additions).length === 0) {
      message.textContent = "اختر كمية من حجم واحد على الأقل.";
      return;
    }

    if (!cart[productId]) {
      cart[productId] = {};
    }

    for (const [sizeId, quantity] of Object.entries(additions)) {
      cart[productId][sizeId] =
      (cart[productId][sizeId] ?? 0) + quantity;
    }

    handleCartChange();
    dialog.close();

});

function openSizesDialog(productId) {
  const product = products[productId];
  const dialog = sizesDialog;
  const form = sizesForm;

  const hasOneSize = Object.keys(product.sizes).length === 1;

  dialog.dataset.productId = productId;

  document.querySelector("#sizes-title").textContent =
  hasOneSize
  ? `اختر كمية ${product.name}`
  : `اختر أحجام ${product.name}`;

  document.querySelector("#sizes-description").textContent =
  hasOneSize
  ? "حدّد عدد العبوات المطلوبة."
  : "حدّد الكمية المطلوبة من كل حجم. اترك الكمية صفرًا للحجم الذي لا تريده.";

  form.reset();

  for (const row of dialog.querySelectorAll(".size-row")) {
    const selectedSize = product.sizes[row.dataset.size];
    const input = row.querySelector("input");
    const decrease = row.querySelector('[data-step="-1"]');
    const increase = row.querySelector('[data-step="1"]');

    row.hidden = !selectedSize;
    input.disabled = !selectedSize;
    input.value = "0";

    decrease.disabled = true;
    increase.disabled = !selectedSize;

    if (!selectedSize) continue;

    row.querySelector("label").textContent = selectedSize.label;

    row.querySelector(".size-price").textContent =
    `سعر الوحدة: ${formatPrice(selectedSize.priceFils)}`;

    decrease.setAttribute(
      "aria-label",
      `تقليل كمية ${product.name}، ${selectedSize.label}`
    );

    increase.setAttribute(
      "aria-label",
      `زيادة كمية ${product.name}، ${selectedSize.label}`
    );
  }

  sizesTotal.textContent = formatPrice(0);
  sizesMessage.textContent = "";
  addSelectedSizes.disabled = true;

  if (!dialog.open) {
    dialog.showModal();
  }
}

document.querySelector("#close-sizes").addEventListener("click", () => {
    sizesDialog.close();
});
// ===== بناء بطاقات المنتجات =====

function renderProducts() {
  const fragment = document.createDocumentFragment();

  for (const [productId, product] of Object.entries(products)) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.category = product.category;

    card.innerHTML = `
      <button class="product-image-button" type="button">
        <img
          class="product-image"
          loading="lazy"
          decoding="async"
        >
      </button>

      <div class="product-content">
    <h3></h3>

<p class="product-availability"></p>

<p class="product-size"></p>
        <div class="product-purchase">
          <p class="product-price">
            <span>ابتداءً من </span>
            <span class="product-price-value"></span>
            <span class="product-currency">د.أ</span>
          </p>

          <button class="choose-sizes" type="button">
            اختر الأحجام
          </button>
        </div>
      </div>
    `;

    const imageButton = card.querySelector(".product-image-button");
    const image = card.querySelector(".product-image");
    const title = card.querySelector("h3");
    const size = card.querySelector(".product-size");
    const price = card.querySelector(".product-price-value");
    const chooseButton = card.querySelector(".choose-sizes");
    const availability = card.querySelector(".product-availability");
const isAvailable = product.available !== false;

availability.textContent = isAvailable ? "متوفر" : "نفدت الكمية";
availability.classList.toggle("is-unavailable", !isAvailable);

imageButton.disabled = !isAvailable;
chooseButton.disabled = !isAvailable;

    image.src = product.image;
    image.alt = product.imageAlt;

    title.id = `product-title-${productId}`;
    title.textContent = product.name;
    card.setAttribute("aria-labelledby", title.id);

    const availableSizes = Object.values(product.sizes);
    const selectionLabel =
    availableSizes.length === 1 ? "اختر الكمية" : "اختر الأحجام";

    chooseButton.textContent = isAvailable
  ? selectionLabel
  : "غير متوفر";

    size.textContent = availableSizes
    .map((item) => item.label)
    .join(" · ");

    const startingPrice = Math.min(
      ...availableSizes.map((item) => item.priceFils)
    );

    price.textContent = (startingPrice / 1000).toFixed(3);

    for (const button of [imageButton, chooseButton]) {
      button.setAttribute(
        "aria-label",
        `${selectionLabel} من ${product.name}`
      );

      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute("aria-controls", "sizes-dialog");

      button.addEventListener("click", () => {
          openSizesDialog(productId);
      });
    }

    fragment.append(card);
  }

  productGrid.replaceChildren(fragment);
}

const productFilters = document.querySelector(".product-filters");
const filterStatus = document.querySelector("#filter-status");

productFilters.addEventListener("click", (event) => {
    const selectedButton = event.target.closest("button[data-category]");

    if (!selectedButton || !productFilters.contains(selectedButton)) {
      return;
    }

    const selectedCategory = selectedButton.dataset.category;
    let visibleCount = 0;

    for (const button of productFilters.querySelectorAll("button")) {
      button.setAttribute(
        "aria-pressed",
        String(button === selectedButton)
      );
    }

    for (const card of productGrid.querySelectorAll(".product-card")) {
      const matches =
      selectedCategory === "all" ||
      card.dataset.category === selectedCategory;

      card.hidden = !matches;

      if (matches) {
        visibleCount += 1;
      }
    }

    const categoryName = selectedButton.textContent.trim();

    filterStatus.textContent =
    visibleCount === 0
    ? "لا توجد منتجات ضمن هذا التصنيف حاليًا."
    : `${categoryName} — عدد المنتجات: ${visibleCount}`;
});
clearCartButton.addEventListener("click", () => {
  if (getTotalQuantity() === 0) return;

  const confirmed = window.confirm(
    "بدك تحذف كل المنتجات من السلة؟"
  );

  if (!confirmed) return;

  for (const productId of Object.keys(cart)) {
    delete cart[productId];
  }

  handleCartChange();
  closeCartButton.focus();
});
// ===== الحالة الأولية للصفحة =====

renderProducts();
updateCartCount();
renderCart();

