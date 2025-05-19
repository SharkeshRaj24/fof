    // Product data
    const productsData = [
      {
        id: 1,
        name: "Advanced Wireless Earbuds with Clear Bass",
        image:
          "https://images.unsplash.com/photo-1512499617640-c2f99912b5b6?auto=format&fit=crop&w=480&q=80",
        price: 4599,
        rating: 4.7,
        ratingCount: 5300,
      },
      {
        id: 2,
        name: "Smart Fitness Watch with Heart Rate Monitor",
        image:
          "https://images.unsplash.com/photo-1519741491725-5d09a83d764d?auto=format&fit=crop&w=480&q=80",
        price: 6899,
        rating: 4.4,
        ratingCount: 4200,
      },
      {
        id: 3,
        name: "Ultra HD 4K Smart TV with HDR and Alexa",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=480&q=80",
        price: 45999,
        rating: 4.5,
        ratingCount: 3150,
      },
      {
        id: 4,
        name: "Portable Bluetooth Speaker Waterproof & Long Battery",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=480&q=80",
        price: 2699,
        rating: 4.6,
        ratingCount: 8400,
      },
      {
        id: 5,
        name: "Premium Laptop Bag with Multiple Compartments",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=480&q=80",
        price: 1999,
        rating: 4.3,
        ratingCount: 2400,
      },
      {
        id: 6,
        name: "Smart Home Security Camera with Night Vision",
        image:
          "https://images.unsplash.com/photo-1580560573790-d1a5a0d71a7a?auto=format&fit=crop&w=480&q=80",
        price: 9999,
        rating: 4.7,
        ratingCount: 1900,
      },
      {
        id: 7,
        name: "High-Speed Wireless Charger - Fast Power",
        image:
          "https://images.unsplash.com/photo-1510557880182-3eec64bdbf52?auto=format&fit=crop&w=480&q=80",
        price: 1499,
        rating: 4.5,
        ratingCount: 4100,
      },
      {
        id: 8,
        name: "Noise-Canceling Over-Ear Headphones with Mic",
        image:
          "https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&w=480&q=80",
        price: 7499,
        rating: 4.4,
        ratingCount: 3700,
      },
       {
          id: 9,
          name: "Advanced Wireless Earbuds with Clear Bass",
          image:
            "https://images.unsplash.com/photo-1512499617640-c2f99912b5b6?auto=format&fit=crop&w=480&q=80",
          price: 4599,
          rating: 4.7,
          ratingCount: 5300,
        },
        {
          id: 10,
          name: "Smart Fitness Watch with Heart Rate Monitor",
          image:
            "https://images.unsplash.com/photo-1519741491725-5d09a83d764d?auto=format&fit=crop&w=480&q=80",
          price: 6899,
          rating: 4.4,
          ratingCount: 4200,
        },
        {
          id: 11,
          name: "Ultra HD 4K Smart TV with HDR and Alexa",
          image:
            "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=480&q=80",
          price: 45999,
          rating: 4.5,
          ratingCount: 3150,
        },
        {
          id: 12,
          name: "Portable Bluetooth Speaker Waterproof & Long Battery",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=480&q=80",
          price: 2699,
          rating: 4.6,
          ratingCount: 8400,
        },
        {
          id: 13,
          name: "Premium Laptop Bag with Multiple Compartments",
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=480&q=80",
          price: 1999,
          rating: 4.3,
          ratingCount: 2400,
        },
        {
          id: 14,
          name: "Smart Home Security Camera with Night Vision",
          image:
            "https://images.unsplash.com/photo-1580560573790-d1a5a0d71a7a?auto=format&fit=crop&w=480&q=80",
          price: 9999,
          rating: 4.7,
          ratingCount: 1900,
        },
        {
          id: 15,
          name: "High-Speed Wireless Charger - Fast Power",
          image:
            "https://images.unsplash.com/photo-1510557880182-3eec64bdbf52?auto=format&fit=crop&w=480&q=80",
          price: 1499,
          rating: 4.5,
          ratingCount: 4100,
        },
        {
          id: 16,
          name: "Noise-Canceling Over-Ear Headphones with Mic",
          image:
            "https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&w=480&q=80",
          price: 7499,
          rating: 4.4,
          ratingCount: 3700,
        },
      ];

    // Helpers
    function createStarRating(rating) {
  let starsHTML = "";
  const roundedRating = Math.round(rating * 2) / 2;
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      starsHTML += `<span class="text-warning" title="Full star">&#9733;</span>`;
    } else if (i - 0.5 === roundedRating) {
      starsHTML += `<span class="text-warning" title="Half star">&#9734;</span>`;
    } else {
      starsHTML += `<span class="text-muted" title="Empty star">&#9733;</span>`;
    }
  }
  return starsHTML;
}

    function formatPrice(num) {
      return "₹" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Rendering products
    const productsGrid = document.getElementById("productsGrid");

    function renderProducts(products) {
      productsGrid.innerHTML = "";
      products.forEach((p) => {
        const col = document.createElement("div");
        col.classList.add("col-sm-6", "col-md-4", "col-lg-3");

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
          <div class="product-img-container">
            <img src="${p.image}" alt="${p.name}" loading="lazy" />
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <h6 class="product-title">${p.name}</h6>
            <div class="product-price">${formatPrice(p.price)}</div>
            <div class="product-rating">
              ${createStarRating(p.rating)}
              <span class="rating-count">(${p.ratingCount.toLocaleString()})</span>
            </div>
            <button class="btn btn-add-cart mt-auto" aria-label="Add ${p.name} to cart" data-product-id="${p.id}">Add to Cart</button>
          </div>
        `;

        col.appendChild(card);
        productsGrid.appendChild(col);
      });

      // Add event listeners for add to cart buttons
      document.querySelectorAll(".btn-add-cart").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const prodId = parseInt(e.target.getAttribute("data-product-id"));
          addToCart(prodId);
          e.target.innerText = "Added ✓";
          e.target.disabled = true;
          setTimeout(()=>{
            e.target.innerText="Add to Cart";
            e.target.disabled=false;
          }, 1500);
        });
    });
}
// Cart Management
let cart = {};
    const cartCount = document.getElementById("cartCount");
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const emptyCartMsg = document.getElementById("emptyCartMsg");
    const cartTotal = document.getElementById("cartTotal");
    const checkoutBtn = document.getElementById("checkoutBtn");
    function updateCartCount() {
      const count = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
      if (count > 0) {
        cartCount.style.display = "inline-block";
        cartCount.innerText = count;
      } else {
        cartCount.style.display = "none";
        cartCount.innerText = "";
      }
    }
    function addToCart(productId) {
      const product = productsData.find((p) => p.id === productId);
      if (!product) return;
      if (cart[productId]) {
        cart[productId].quantity++;
      } else {
        cart[productId] = { ...product, quantity: 1 };
      }
      updateCartCount();
      renderCart();
    }
    function removeFromCart(productId) {
      if (cart[productId]) {
        delete cart[productId];
        updateCartCount();
        renderCart();
      }
    }
    function changeQuantity(productId, delta) {
      if (cart[productId]) {
        cart[productId].quantity += delta;
        if (cart[productId].quantity <= 0) {
          removeFromCart(productId);
          return;
        }
        updateCartCount();
        renderCart();
    }
}
function renderCart() {
      const items = Object.values(cart);
      cartItemsContainer.innerHTML = "";
      if (items.length === 0) {
        emptyCartMsg.style.display = "block";
        checkoutBtn.disabled = true;
        cartTotal.innerText = "Total: ₹0";
        return;
      } else {
        emptyCartMsg.style.display = "none";
        checkoutBtn.disabled = false;
      }
      items.forEach((item) => {
        const row = document.createElement("div");
        row.classList.add("d-flex", "align-items-center", "mb-3", "border-bottom", "pb-2");
        row.innerHTML = `
          <img src="${item.image}" alt="${item.name}" style="height:60px; width:60px; object-fit: contain; border-radius: 6px; margin-right: 15px" />
          <div class="flex-grow-1">
            <h6 class="mb-1" style="font-size: 1rem;">${item.name}</h6>
            <div class="d-flex align-items-center gap-2">
              <button class="btn btn-sm btn-outline-secondary" aria-label="Decrease quantity of ${item.name}">-</button>
              <span>${item.quantity}</span>
              <button class="btn btn-sm btn-outline-secondary" aria-label="Increase quantity of ${item.name}">+</button>
            </div>
          </div>
          <div class="text-end" style="min-width:90px;">
            <div class="fw-bold fs-6">${formatPrice(item.price * item.quantity)}</div>
            <button class="btn btn-link text-danger p-0 mt-1" aria-label="Remove ${item.name} from cart" title="Remove item">&times;</button>
          </div>
        `;
        const decreaseBtn = row.querySelector("button[aria-label^='Decrease']");
        decreaseBtn.addEventListener("click", () => changeQuantity(item.id, -1));
        const increaseBtn = row.querySelector("button[aria-label^='Increase']");
        increaseBtn.addEventListener("click", () => changeQuantity(item.id, +1));
        const removeBtn = row.querySelector("button[aria-label^='Remove']");
        removeBtn.addEventListener("click", () => removeFromCart(item.id));
        cartItemsContainer.appendChild(row);
      });
      const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      cartTotal.innerText = `Total: ${formatPrice(totalAmount)}`;
    }
    // Search functionality
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    function handleSearch() {
      const query = searchInput.value.toLowerCase().trim();
      if (!query) {
        renderProducts(productsData);
        return;
      }
      const filtered = productsData.filter((p) => p.name.toLowerCase().includes(query));
      renderProducts(filtered);
    }
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleSearch();
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearch();
      }
    });
       // Checkout button alerts and clears cart
       checkoutBtn.addEventListener("click", () => {
      alert("Thank you for shopping with FOF INNOVATION!\nThis is a demo cart.");
      cart = {};
      updateCartCount();
      renderCart();
      const cartModalEl = document.getElementById("cartModal");
      const modalInstance = bootstrap.Modal.getInstance(cartModalEl);
      if (modalInstance) modalInstance.hide();
    });
    // Initial render
    renderProducts(productsData);
    updateCartCount();
    renderCart();
    