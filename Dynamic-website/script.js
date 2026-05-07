// ==============================
// NOVASHOP SCRIPT
// ==============================

// PRODUCTS DATA

const products = [
  {
    id: 1,
    title: "Premium Sneakers",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Smart Watch",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "iPhone Premium",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Wireless Headphones",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "Gaming Keyboard",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title: "Modern Backpack",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
  },
];

// ==============================
// DOM ELEMENTS
// ==============================

const productsGrid = document.querySelector(".products-grid");

const searchInput = document.getElementById("searchInput");

const cartBadge = document.querySelector(".badge");

const themeButton = document.querySelectorAll(".icon-button")[2];

// ==============================
// CART
// ==============================

let cart = [];

// ==============================
// DISPLAY PRODUCTS
// ==============================

function displayProducts(productArray) {
  productsGrid.innerHTML = "";

  productArray.forEach((product) => {
    const productCard = document.createElement("div");

    productCard.classList.add("product-card");

    productCard.innerHTML = `
    
      <img src="${product.image}" alt="${product.title}">

      <div class="product-details">

        <h3 class="product-title">
          ${product.title}
        </h3>

        <span class="product-price">
          $${product.price}
        </span>

        <div class="product-footer">

          <button class="btn btn-primary add-cart-btn">
            Add Cart
          </button>

          <button class="btn btn-secondary details-btn">
            Details
          </button>

        </div>

      </div>
    
    `;

    const addCartButton =
      productCard.querySelector(".add-cart-btn");

    addCartButton.addEventListener("click", () => {
      addToCart(product);
    });

    const detailsButton =
      productCard.querySelector(".details-btn");

    detailsButton.addEventListener("click", () => {
      showProductDetails(product);
    });

    productsGrid.appendChild(productCard);
  });
}

// ==============================
// ADD TO CART
// ==============================

function addToCart(product) {
  cart.push(product);

  updateCartCount();

  showToast(`${product.title} added to cart`);
}

// ==============================
// UPDATE CART COUNT
// ==============================

function updateCartCount() {
  cartBadge.textContent = cart.length;
}

// ==============================
// SEARCH PRODUCTS
// ==============================

searchInput.addEventListener("input", (e) => {
  const searchValue =
    e.target.value.toLowerCase();

  const filteredProducts =
    products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(searchValue)
    );

  displayProducts(filteredProducts);
});

// ==============================
// DARK MODE
// ==============================

let darkMode = false;

themeButton.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.background = "#0f172a";
    document.body.style.color = "#ffffff";

    themeButton.innerHTML = "☀️";
  } else {
    document.body.style.background = "#f8fafc";
    document.body.style.color = "#111827";

    themeButton.innerHTML = "🌙";
  }
});

// ==============================
// PRODUCT DETAILS
// ==============================

function showProductDetails(product) {
  showToast(
    `${product.title} - Price: $${product.price}`
  );
}

// ==============================
// TOAST MESSAGE
// ==============================

function showToast(message) {
  const toast = document.createElement("div");

  toast.innerText = message;

  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";

  toast.style.background = "#111827";
  toast.style.color = "#ffffff";

  toast.style.padding = "14px 22px";

  toast.style.borderRadius = "14px";

  toast.style.boxShadow =
    "0 10px 30px rgba(0,0,0,0.15)";

  toast.style.zIndex = "999";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}

// ==============================
// INITIAL LOAD
// ==============================

displayProducts(products);