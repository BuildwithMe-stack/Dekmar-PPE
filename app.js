const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const assets = {
  head: "assets/hospital-head.jpg",
  face: "assets/hospital-face.jpg",
  eye: "assets/hospital-eye.jpg",
  hand: "assets/hospital-hand.jpg",
  gown: "assets/hospital-gown.jpg",
  respirator: "assets/hospital-respirator.jpg",
  foot: "assets/hospital-foot.jpg",
  body: "assets/hospital-body.jpg",
  patient: "assets/hospital-patient.jpg",
  disposables: "assets/hospital-disposables.jpg",
  infection: "assets/hospital-infection.jpg",
  waste: "assets/hospital-waste.jpg"
};

const rates = {
  KSH: 129,
  USD: 1,
  EUR: 0.92
};

const state = {
  currency: "KSH",
  view: "grid",
  cart: []
};

const categories = [
  ["Head Protection", "Bouffant caps, surgical caps, head covers", assets.head],
  ["Face Protection", "Face shields, masks, procedure masks", assets.face],
  ["Eye Protection", "Safety goggles, protective glasses, visors", assets.eye],
  ["Hand Protection", "Latex, nitrile, vinyl, and sterile gloves", assets.hand],
  ["Gowns & Aprons", "Surgical gowns, isolation gowns, aprons", assets.gown],
  ["Respiratory Protection", "N95 respirators, masks, cartridges", assets.respirator],
  ["Foot Protection", "Shoe covers, boot covers, non-slip shoes", assets.foot],
  ["Waste Management", "Biohazard bags, sharps bins, waste bins", assets.waste]
];

const departments = [
  ["Wards", "Daily masks, gloves, patient gowns, bed sheets"],
  ["Surgery & Theatre", "Sterile gowns, drapes, masks, face shields"],
  ["ICU & Critical Care", "Respirators, suction kits, critical-care PPE"],
  ["Laboratory", "Lab coats, gloves, goggles, sleeve protectors"],
  ["Dental", "Dental masks, face shields, gloves, bibs"],
  ["Maternity & NICU", "Delivery kits, baby wraps, maternity pads"],
  ["Infection Control", "Sanitizers, disinfectants, wipes, sprayers"],
  ["Admin & Visitors", "Visitor coats, ID holders, general supplies"]
];

const products = [
  {
    id: "DKM-HEAD-100",
    name: "Disposable Bouffant Caps",
    category: "Head Protection",
    department: "Wards",
    image: assets.head,
    price: 18,
    rating: 4.7,
    popularity: 92,
    newest: 6,
    inventory: 1200,
    availability: "In stock",
    protection: "Hair containment",
    sizes: ["Universal"],
    pack: "100 caps per pack",
    standards: ["Hospital hygiene"],
    summary: "Lightweight blue bouffant caps for wards, theatre preparation, labs, and visitors.",
    uses: ["Wards", "Theatre prep", "Laboratory", "Visitors"],
    features: ["Soft elastic edge", "Breathable material", "Single-use hygiene"],
    guidance: "Use when hair coverage is required before entering clinical or clean areas."
  },
  {
    id: "DKM-FACE-210",
    name: "Clear Medical Face Shield",
    category: "Face Protection",
    department: "Surgery & Theatre",
    image: assets.face,
    price: 24,
    rating: 4.8,
    popularity: 95,
    newest: 7,
    inventory: 460,
    availability: "In stock",
    protection: "Splash protection",
    sizes: ["Universal"],
    pack: "10 shields per pack",
    standards: ["EN 166 guidance"],
    summary: "Clear face shield for splash protection during clinical procedures and cleaning work.",
    uses: ["Surgery", "Dental", "Infection Control", "Emergency"],
    features: ["Wide visor", "Foam brow pad", "Adjustable head band"],
    guidance: "Use with a mask when fluid splash or close patient contact is expected."
  },
  {
    id: "DKM-EYE-220",
    name: "Protective Safety Goggles",
    category: "Eye Protection",
    department: "Laboratory",
    image: assets.eye,
    price: 16,
    rating: 4.6,
    popularity: 84,
    newest: 4,
    inventory: 680,
    availability: "In stock",
    protection: "Eye splash",
    sizes: ["Universal"],
    pack: "1 pair",
    standards: ["EN 166 guidance"],
    summary: "Comfortable clear goggles for labs, infection control, theatre support, and cleaning teams.",
    uses: ["Laboratory", "Infection Control", "Surgery", "Dental"],
    features: ["Clear lens", "Indirect vent feel", "Reusable frame"],
    guidance: "Use when eyes may be exposed to splash, aerosols, or cleaning chemicals."
  },
  {
    id: "DKM-HAND-310",
    name: "Nitrile Examination Gloves",
    category: "Hand Protection",
    department: "Wards",
    image: assets.hand,
    price: 32,
    rating: 4.9,
    popularity: 99,
    newest: 8,
    inventory: 2400,
    availability: "In stock",
    protection: "Exam glove",
    sizes: ["S", "M", "L", "XL"],
    pack: "100 gloves per box",
    standards: ["Medical exam use"],
    summary: "Powder-free nitrile exam gloves for everyday patient care and cleaning tasks.",
    uses: ["Wards", "Dental", "Laboratory", "Maternity"],
    features: ["Powder-free", "Latex-free", "Textured fingertips"],
    guidance: "Choose nitrile when latex sensitivity, durability, and everyday clinical use matter."
  },
  {
    id: "DKM-GOWN-410",
    name: "Isolation Gown",
    category: "Gowns & Aprons",
    department: "Infection Control",
    image: assets.gown,
    price: 68,
    rating: 4.7,
    popularity: 90,
    newest: 9,
    inventory: 340,
    availability: "In stock",
    protection: "Body barrier",
    sizes: ["M", "L", "XL", "2XL"],
    pack: "10 gowns per pack",
    standards: ["Healthcare barrier use"],
    summary: "Blue isolation gown for infection control, ward procedures, and patient-care areas.",
    uses: ["Isolation rooms", "Wards", "Emergency", "Maternity"],
    features: ["Tie back", "Elastic cuffs", "Fluid-resistant feel"],
    guidance: "Use when clothing protection and simple body coverage are needed."
  },
  {
    id: "DKM-RESP-520",
    name: "N95 Respirator Mask",
    category: "Respiratory Protection",
    department: "ICU & Critical Care",
    image: assets.respirator,
    price: 42,
    rating: 4.8,
    popularity: 96,
    newest: 10,
    inventory: 520,
    availability: "In stock",
    protection: "Respiratory filtration",
    sizes: ["Universal"],
    pack: "20 masks per box",
    standards: ["N95 guidance"],
    summary: "N95-style respirator mask for high-risk clinical areas and respiratory precautions.",
    uses: ["ICU", "Emergency", "Isolation", "Respiratory clinics"],
    features: ["Moulded mask body", "Nose clip", "Secure head bands"],
    guidance: "Use where respirator protection is required and follow local fit-check guidance."
  },
  {
    id: "DKM-FOOT-610",
    name: "Disposable Shoe Covers",
    category: "Foot Protection",
    department: "Surgery & Theatre",
    image: assets.foot,
    price: 20,
    rating: 4.5,
    popularity: 80,
    newest: 5,
    inventory: 900,
    availability: "In stock",
    protection: "Floor hygiene",
    sizes: ["Universal"],
    pack: "100 covers per pack",
    standards: ["Hospital hygiene"],
    summary: "Disposable shoe covers for theatres, clean rooms, labs, and visitor control.",
    uses: ["Surgery", "Laboratory", "Visitors", "Clean rooms"],
    features: ["Elastic opening", "Lightweight", "Single-use"],
    guidance: "Use in areas where footwear contamination control is required."
  },
  {
    id: "DKM-BODY-710",
    name: "Protective Coverall Suit",
    category: "Body Protection",
    department: "Infection Control",
    image: assets.body,
    price: 74,
    rating: 4.6,
    popularity: 78,
    newest: 6,
    inventory: 160,
    availability: "Low stock",
    protection: "Full body cover",
    sizes: ["M", "L", "XL", "2XL"],
    pack: "1 suit",
    standards: ["Healthcare coverall use"],
    summary: "White coverall suit for enhanced body protection in cleaning and infection-control tasks.",
    uses: ["Infection Control", "Cleaning", "Isolation support", "Emergency"],
    features: ["Hooded cover", "Elastic cuffs", "Zip front"],
    guidance: "Use when full clothing coverage is required for higher-risk support tasks."
  },
  {
    id: "DKM-PAT-810",
    name: "Patient Gown",
    category: "Patient Care PPE",
    department: "Wards",
    image: assets.patient,
    price: 26,
    rating: 4.4,
    popularity: 74,
    newest: 3,
    inventory: 360,
    availability: "In stock",
    protection: "Patient modesty",
    sizes: ["M", "L", "XL"],
    pack: "10 gowns per pack",
    standards: ["Patient-care textile"],
    summary: "Simple patient gown for wards, examination rooms, maternity, and day procedures.",
    uses: ["Wards", "Maternity", "Outpatient", "Rehabilitation"],
    features: ["Light fabric", "Easy patient access", "Bulk pack"],
    guidance: "Use for patient comfort and modesty during care, transfer, or procedures."
  },
  {
    id: "DKM-DISP-910",
    name: "Disposable Bed Sheet Pack",
    category: "Disposables",
    department: "Wards",
    image: assets.disposables,
    price: 38,
    rating: 4.5,
    popularity: 82,
    newest: 4,
    inventory: 440,
    availability: "In stock",
    protection: "Single-use bedding",
    sizes: ["Standard"],
    pack: "20 sheets per pack",
    standards: ["Single-use patient care"],
    summary: "Disposable sheets for examination beds, wards, outpatient rooms, and emergency areas.",
    uses: ["Wards", "Outpatient", "Emergency", "Maternity"],
    features: ["Soft sheet material", "Easy disposal", "Bulk pack"],
    guidance: "Use where fast bed turnover and simple hygiene control are needed."
  },
  {
    id: "DKM-INF-1010",
    name: "Hand Sanitizer Dispenser Bottle",
    category: "Infection Control",
    department: "Infection Control",
    image: assets.infection,
    price: 14,
    rating: 4.7,
    popularity: 88,
    newest: 7,
    inventory: 700,
    availability: "In stock",
    protection: "Hand hygiene",
    sizes: ["500 ml"],
    pack: "1 bottle",
    standards: ["Hand hygiene support"],
    summary: "Pump bottle sanitizer for wards, reception points, treatment rooms, and visitor areas.",
    uses: ["Wards", "Admin", "Visitors", "Dental"],
    features: ["Pump dispenser", "Desk-friendly size", "Quick issue"],
    guidance: "Place at entrances, nurse stations, treatment rooms, and shared work areas."
  },
  {
    id: "DKM-WASTE-1110",
    name: "Biohazard Waste Bin",
    category: "Waste Management",
    department: "Infection Control",
    image: assets.waste,
    price: 86,
    rating: 4.6,
    popularity: 77,
    newest: 5,
    inventory: 90,
    availability: "Low stock",
    protection: "Clinical waste",
    sizes: ["Medium", "Large"],
    pack: "1 bin",
    standards: ["Clinical waste handling"],
    summary: "Clearly marked biohazard bin for clinical waste collection and controlled disposal areas.",
    uses: ["Infection Control", "Laboratory", "Wards", "Theatre"],
    features: ["Biohazard marking", "Lidded design", "Easy-clean surface"],
    guidance: "Use for designated clinical waste points according to facility waste procedures."
  }
];

function formatMoney(value) {
  const amount = value * rates[state.currency];
  if (state.currency === "KSH") {
    return `KSh ${new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(amount)}`;
  }
  return new Intl.NumberFormat(state.currency === "EUR" ? "en-IE" : "en-US", {
    style: "currency",
    currency: state.currency,
    maximumFractionDigits: 2
  }).format(amount);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function unique(values) {
  return [...new Set(values.flat().filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function findProduct(id) {
  return products.find((product) => product.id === id);
}

function productText(product) {
  return [
    product.id,
    product.name,
    product.category,
    product.department,
    product.summary,
    product.protection,
    product.pack,
    ...product.sizes,
    ...product.standards,
    ...product.uses,
    ...product.features
  ].join(" ").toLowerCase();
}

function renderStars(rating) {
  return `<span class="rating" aria-label="${rating} out of 5 stars"><svg><use href="#icon-star"></use></svg>${rating}</span>`;
}

function stockClass(product) {
  return product.availability === "Low stock" ? "low" : "";
}

function populateSelect(select, values, label) {
  select.innerHTML = `<option value="">${label}</option>${values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}`;
}

function initFilters() {
  populateSelect($("#filterCategory"), unique(products.map((p) => p.category)), "All categories");
  populateSelect($("#filterDepartment"), unique(products.map((p) => p.department)), "All departments");
  populateSelect($("#filterProtection"), unique(products.map((p) => p.protection)), "All protection needs");
  populateSelect($("#filterSize"), unique(products.map((p) => p.sizes)), "All sizes");
  populateSelect($("#filterAvailability"), unique(products.map((p) => p.availability)), "All availability");
}

function getFilters() {
  return {
    category: $("#filterCategory").value,
    department: $("#filterDepartment").value,
    protection: $("#filterProtection").value,
    size: $("#filterSize").value,
    availability: $("#filterAvailability").value,
    price: Number($("#filterPrice").value),
    search: `${$("#catalogueSearch").value} ${$("#globalSearch").value}`.trim().toLowerCase()
  };
}

function filteredProducts() {
  const filters = getFilters();
  const result = products.filter((product) => {
    return (
      product.price <= filters.price &&
      (!filters.search || productText(product).includes(filters.search)) &&
      (!filters.category || product.category === filters.category) &&
      (!filters.department || product.department === filters.department) &&
      (!filters.protection || product.protection === filters.protection) &&
      (!filters.size || product.sizes.includes(filters.size)) &&
      (!filters.availability || product.availability === filters.availability)
    );
  });

  const sort = $("#sortProducts").value;
  return result.sort((a, b) => {
    if (sort === "newest") return b.newest - a.newest;
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "popular") return b.popularity - a.popularity;
    if (sort === "rating") return b.rating - a.rating;
    return b.popularity + b.rating - (a.popularity + a.rating);
  });
}

function renderCategoryGrid() {
  $("#categoryGrid").innerHTML = categories.map(([name, description, image]) => `
    <a class="category-card hospital-category-card" href="#shop" data-shop-category="${escapeHtml(name)}">
      <img src="${image}" alt="${escapeHtml(name)}" loading="lazy">
      <div>
        <h3>${escapeHtml(name)}</h3>
        <span>${escapeHtml(description)}</span>
      </div>
    </a>
  `).join("");
}

function renderDepartments() {
  $("#departmentGrid").innerHTML = departments.map(([name, description]) => `
    <a class="department-card" href="#shop" data-shop-department="${escapeHtml(name)}">
      <strong>${escapeHtml(name)}</strong>
      <span>${escapeHtml(description)}</span>
    </a>
  `).join("");
}

function productCard(product) {
  return `
    <article class="product-card" data-id="${product.id}">
      <button class="product-image" type="button" data-action="detail" data-id="${product.id}" aria-label="Open ${escapeHtml(product.name)} details">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
        <span class="product-badge">${escapeHtml(product.department)}</span>
        <span class="stock-badge ${stockClass(product)}">${escapeHtml(product.availability)}</span>
      </button>
      <div class="product-content">
        <div class="product-kicker"><span>${escapeHtml(product.category)}</span><span>${escapeHtml(product.id)}</span></div>
        <h3>${escapeHtml(product.name)}</h3>
        <p class="product-summary">${escapeHtml(product.summary)}</p>
        <div class="product-tags">
          <span class="tag">${escapeHtml(product.protection)}</span>
          <span class="tag">${escapeHtml(product.pack)}</span>
        </div>
        <div class="price-row">
          <span class="price">${formatMoney(product.price)}</span>
          ${renderStars(product.rating)}
        </div>
        <div class="product-card-actions">
          <button class="button primary" type="button" data-action="add" data-id="${product.id}"><svg><use href="#icon-cart"></use></svg> Add</button>
          <button class="button ghost" type="button" data-action="detail" data-id="${product.id}">Details</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const results = filteredProducts();
  const grid = $("#productGrid");
  grid.classList.toggle("list", state.view === "list");
  grid.innerHTML = results.length
    ? results.map(productCard).join("")
    : `<div class="detail-panel"><h3>No products found</h3><p>Try a different category, department, or search term.</p></div>`;
  $("#resultCount").textContent = `${results.length} product${results.length === 1 ? "" : "s"}`;
  $("#priceValue").textContent = $("#filterPrice").value;
}

function renderProductDetail(product) {
  $("#productDetail").innerHTML = `
    <article class="product-detail simple-product-detail">
      <div class="detail-hero">
        <div class="detail-gallery">
          <div class="gallery-main">
            <img src="${product.image}" alt="${escapeHtml(product.name)}">
          </div>
        </div>
        <div class="detail-summary">
          <p class="eyebrow">${escapeHtml(product.category)}</p>
          <h2>${escapeHtml(product.name)}</h2>
          <p>${escapeHtml(product.summary)}</p>
          <div class="detail-meta">
            <span>${escapeHtml(product.department)}</span>
            <span>${escapeHtml(product.id)}</span>
            <span>${product.inventory} available</span>
            <span>${escapeHtml(product.pack)}</span>
          </div>
          <div class="detail-price">
            <strong>${formatMoney(product.price)}</strong>
            ${renderStars(product.rating)}
          </div>
          <div class="drawer-actions">
            <button class="button primary" type="button" data-action="add" data-id="${product.id}"><svg><use href="#icon-cart"></use></svg> Add to cart</button>
            <a class="button secondary" href="#quote" id="detailQuoteButton">Request quote</a>
          </div>
        </div>
      </div>
      <div class="detail-sections simple-detail-sections">
        <section class="detail-panel">
          <h3>Plain details</h3>
          <table class="spec-table">
            <tbody>
              <tr><th>Category</th><td>${escapeHtml(product.category)}</td></tr>
              <tr><th>Department</th><td>${escapeHtml(product.department)}</td></tr>
              <tr><th>Protection need</th><td>${escapeHtml(product.protection)}</td></tr>
              <tr><th>Sizes</th><td>${escapeHtml(product.sizes.join(", "))}</td></tr>
              <tr><th>Pack</th><td>${escapeHtml(product.pack)}</td></tr>
              <tr><th>Standards</th><td>${escapeHtml(product.standards.join(", "))}</td></tr>
            </tbody>
          </table>
        </section>
        <section class="detail-panel">
          <h3>Best used for</h3>
          <div class="compliance-list">${product.uses.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          <h3>Features</h3>
          <ul class="feature-list">${product.features.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
        <section class="assistant-panel">
          <div class="assistant-title"><svg><use href="#icon-bot"></use></svg> Quick guidance</div>
          <p class="assistant-answer">${escapeHtml(product.guidance)}</p>
        </section>
      </div>
    </article>
  `;

  $("#detailQuoteButton").addEventListener("click", () => closeDrawer("#productDrawer"));
}

function openProduct(id) {
  const product = findProduct(id);
  if (!product) return;
  renderProductDetail(product);
  openDrawer("#productDrawer");
}

function openDrawer(selector) {
  const drawer = $(selector);
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDrawer(selector) {
  const drawer = $(selector);
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  if (!$(".drawer.open")) document.body.style.overflow = "";
}

function addToCart(id, qty = 1) {
  const item = state.cart.find((line) => line.id === id);
  if (item) item.qty += qty;
  else state.cart.push({ id, qty });
  renderCart();
  showToast("Added to cart.");
}

function updateCartQty(id, delta) {
  const item = state.cart.find((line) => line.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter((line) => line.id !== id);
  renderCart();
}

function renderCart() {
  const count = state.cart.reduce((total, line) => total + line.qty, 0);
  $("#cartCount").textContent = count;
  $("#cartItems").innerHTML = state.cart.length
    ? state.cart.map((line) => {
      const product = findProduct(line.id);
      return `
        <article class="cart-line">
          <img src="${product.image}" alt="${escapeHtml(product.name)}">
          <div>
            <h3>${escapeHtml(product.name)}</h3>
            <div class="cart-line-meta">
              <span>${formatMoney(product.price)} each</span>
              <div class="quantity-control">
                <button type="button" data-cart-delta="-1" data-id="${product.id}" aria-label="Decrease ${escapeHtml(product.name)}"><svg><use href="#icon-minus"></use></svg></button>
                <strong>${line.qty}</strong>
                <button type="button" data-cart-delta="1" data-id="${product.id}" aria-label="Increase ${escapeHtml(product.name)}"><svg><use href="#icon-plus"></use></svg></button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("")
    : `<p>Your cart is empty.</p>`;

  const subtotal = state.cart.reduce((total, line) => total + findProduct(line.id).price * line.qty, 0);
  const shipping = subtotal === 0 ? 0 : subtotal > 400 ? 0 : 18;
  $("#cartSubtotal").textContent = formatMoney(subtotal);
  $("#shippingEstimate").textContent = formatMoney(shipping);
  $("#cartTotal").textContent = formatMoney(subtotal + shipping);
}

function handleAction(target) {
  const button = target.closest("[data-action]");
  if (!button) return;
  const { action, id } = button.dataset;
  if (action === "detail") openProduct(id);
  if (action === "add") addToCart(id);
}

function applyCategory(category) {
  $("#filterCategory").value = category;
  $("#catalogueSearch").value = "";
  renderProducts();
}

function applyDepartment(department) {
  $("#filterDepartment").value = department;
  $("#catalogueSearch").value = "";
  renderProducts();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function injectStructuredData() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DEKMER SPACES LTD Hospital PPE Catalogue",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        sku: product.id,
        brand: { "@type": "Brand", name: "DEKMER SPACES LTD" },
        image: product.image,
        description: product.summary,
        category: product.category,
        offers: {
          "@type": "Offer",
          priceCurrency: "KES",
          price: Math.round(product.price * rates.KSH),
          availability: product.availability === "Low stock" ? "https://schema.org/LimitedAvailability" : "https://schema.org/InStock"
        }
      }
    }))
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(itemList);
  document.head.appendChild(script);
}

function bindEvents() {
  $("#productGrid").addEventListener("click", (event) => handleAction(event.target));
  $("#productDetail").addEventListener("click", (event) => handleAction(event.target));
  $("#cartItems").addEventListener("click", (event) => {
    const button = event.target.closest("[data-cart-delta]");
    if (!button) return;
    updateCartQty(button.dataset.id, Number(button.dataset.cartDelta));
  });

  [
    "#filterCategory",
    "#filterDepartment",
    "#filterProtection",
    "#filterSize",
    "#filterAvailability",
    "#filterPrice",
    "#sortProducts",
    "#catalogueSearch",
    "#globalSearch"
  ].forEach((selector) => $(selector).addEventListener("input", renderProducts));

  $("#clearFilters").addEventListener("click", () => {
    $$(".filter-panel select").forEach((select) => { select.value = ""; });
    $("#filterPrice").value = "500";
    $("#catalogueSearch").value = "";
    $("#globalSearch").value = "";
    renderProducts();
  });

  $("#gridView").addEventListener("click", () => {
    state.view = "grid";
    $("#gridView").classList.add("active");
    $("#listView").classList.remove("active");
    renderProducts();
  });

  $("#listView").addEventListener("click", () => {
    state.view = "list";
    $("#listView").classList.add("active");
    $("#gridView").classList.remove("active");
    renderProducts();
  });

  $("#currencySelect").addEventListener("change", (event) => {
    state.currency = event.target.value;
    renderProducts();
    renderCart();
  });

  document.addEventListener("click", (event) => {
    const categoryLink = event.target.closest("[data-shop-category]");
    if (categoryLink) applyCategory(categoryLink.dataset.shopCategory);

    const departmentLink = event.target.closest("[data-shop-department]");
    if (departmentLink) applyDepartment(departmentLink.dataset.shopDepartment);
  });

  $("#cartButton").addEventListener("click", () => openDrawer("#cartDrawer"));
  $("#closeCartDrawer").addEventListener("click", () => closeDrawer("#cartDrawer"));
  $("#closeProductDrawer").addEventListener("click", () => closeDrawer("#productDrawer"));
  $$(".drawer").forEach((drawer) => {
    drawer.addEventListener("click", (event) => {
      if (event.target === drawer) closeDrawer(`#${drawer.id}`);
    });
  });

  $("#mobileMenuButton").addEventListener("click", () => {
    $("#mobilePanel").classList.add("open");
    $("#mobilePanel").setAttribute("aria-hidden", "false");
  });
  $("#mobileCloseButton").addEventListener("click", () => {
    $("#mobilePanel").classList.remove("open");
    $("#mobilePanel").setAttribute("aria-hidden", "true");
  });
  $$("#mobilePanel a").forEach((link) => {
    link.addEventListener("click", () => {
      $("#mobilePanel").classList.remove("open");
      $("#mobilePanel").setAttribute("aria-hidden", "true");
    });
  });

  $("#quoteShortcut").addEventListener("click", () => $("#quote").scrollIntoView({ behavior: "smooth" }));
  $("#bulkOrderButton").addEventListener("click", () => {
    $("#quote").scrollIntoView({ behavior: "smooth" });
    showToast("Add your bulk quantities in the quote form.");
  });
  $("#portalButton").addEventListener("click", () => $("#contact").scrollIntoView({ behavior: "smooth" }));

  ["#quoteForm", "#checkoutForm"].forEach((selector) => {
    $(selector).addEventListener("submit", (event) => {
      event.preventDefault();
      event.currentTarget.reset();
      showToast("Request captured for the DEKMER SPACES LTD prototype.");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    $$(".drawer.open").forEach((drawer) => closeDrawer(`#${drawer.id}`));
    $("#mobilePanel").classList.remove("open");
  });
}

function init() {
  renderCategoryGrid();
  renderDepartments();
  initFilters();
  bindEvents();
  renderProducts();
  renderCart();
  injectStructuredData();
}

document.addEventListener("DOMContentLoaded", init);
