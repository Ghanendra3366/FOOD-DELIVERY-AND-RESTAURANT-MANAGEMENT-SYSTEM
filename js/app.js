/* THE MARKETS - frontend demo application layer
 * No backend/database. Replace this layer with API calls in the future.
 */
(function () {
  "use strict";

  const USERS = [
    {
      id: "cust-rahul",
      email: "rahul@themarkets.test",
      password: "demo123",
      name: "Rahul Sharma",
      role: "customer",
    },
    {
      id: "cust-priya",
      email: "priya@themarkets.test",
      password: "demo123",
      name: "Priya Verma",
      role: "customer",
    },
    {
      id: "staff-ananya",
      email: "staff@themarkets.test",
      password: "demo123",
      name: "Ananya Manager",
      role: "employee",
    },
    {
      id: "delivery-rohan",
      email: "delivery@themarkets.test",
      password: "demo123",
      name: "Rohan Singh",
      role: "delivery",
    },
    {
      id: "admin-root",
      email: "admin@themarkets.test",
      password: "demo123",
      name: "Root Admin",
      role: "admin",
    },
  ];

  const CART_KEY = "theMarketsCart";

  function getUser() {
    try {
      return JSON.parse(sessionStorage.getItem("theMarketsUser") || "null");
    } catch (_) {
      return null;
    }
  }

  function setUser(user, remember) {
    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    sessionStorage.setItem("theMarketsUser", JSON.stringify(safeUser));
    if (remember)
      localStorage.setItem(
        "theMarketsRememberedUser",
        JSON.stringify(safeUser),
      );
  }

  function clearUser() {
    sessionStorage.removeItem("theMarketsUser");
    localStorage.removeItem("theMarketsRememberedUser");
  }

  function getStoredUser() {
    const current = getUser();
    if (current) return current;
    try {
      const remembered = JSON.parse(
        localStorage.getItem("theMarketsRememberedUser") || "null",
      );
      if (remembered) {
        sessionStorage.setItem("theMarketsUser", JSON.stringify(remembered));
        return remembered;
      }
    } catch (_) {}
    return null;
  }

  function cartKey() {
    const user = getStoredUser();
    return user ? CART_KEY + "_" + user.id : null;
  }

  function getCart() {
    const key = cartKey();
    if (!key) return [];
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (_) {
      return [];
    }
  }

  function saveCart(cart) {
    const key = cartKey();
    if (key) localStorage.setItem(key, JSON.stringify(cart));
  }

  function cartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
  }

  function money(value) {
    return "₹" + Number(value || 0).toLocaleString("en-IN");
  }

  function showMessage(message, type) {
    let box = document.querySelector(".js-app-message");
    if (!box) {
      box = document.createElement("div");
      box.className = "app-message js-app-message";
      document.body.appendChild(box);
    }
    box.textContent = message;
    box.dataset.type = type || "info";
    box.classList.add("is-visible");
    window.setTimeout(() => box.classList.remove("is-visible"), 2600);
  }

  function updateUserUI() {
    const user = getStoredUser();
    document.querySelectorAll("[data-user-name]").forEach((el) => {
      el.textContent = user ? user.name : "Guest";
    });
    document.querySelectorAll("[data-user-email]").forEach((el) => {
      el.textContent = user ? user.email : "";
    });
    document.querySelectorAll("[data-user-role]").forEach((el) => {
      el.textContent = user ? user.role : "guest";
    });

    document.querySelectorAll(".dashboard-topbar h1").forEach((h1) => {
      const original = h1.dataset.originalTitle || h1.textContent;
      h1.dataset.originalTitle = original;
      if (
        user &&
        user.role === "customer" &&
        /good (morning|afternoon|evening)/i.test(original)
      ) {
        const prefix = original.split(",")[0];
        h1.textContent = prefix + ", " + user.name;
      }
    });

    document
      .querySelectorAll(".dashboard-topbar .btn--outline")
      .forEach((el) => {
        if (user) el.textContent = user.name.split(" ")[0];
      });

    document.querySelectorAll(".js-logout").forEach((el) => {
      el.addEventListener(
        "click",
        function () {
          clearUser();
        },
        { once: true },
      );
    });
  }

  function updateCartLinks() {
    const count = cartCount();
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (/cart\.html(?:#.*)?$/.test(href) || /cart\.html\?/.test(href)) {
        if (/cart/i.test(link.textContent)) {
          link.textContent = "Cart (" + count + ")";
        }
      }
    });
  }

  function requiredRoleForPath() {
    const path = window.location.pathname.replace(/\\/g, "/");
    if (path.includes("/pages/admin/")) return "admin";
    if (path.includes("/pages/employee/")) return "employee";
    if (path.includes("/pages/delivery/")) return "delivery";
    if (path.includes("/pages/customer/")) return "customer";
    return null;
  }

  function protectPage() {
    const required = requiredRoleForPath();
    if (!required) return;
    const user = getStoredUser();
    if (!user || user.role !== required) {
      window.location.href =
        "../public/login.html?requiredRole=" + encodeURIComponent(required);
    }
  }

  function setupLogin() {
    const form = document.querySelector("#login-form");
    if (!form) return;

    const roleSelect = form.querySelector("#login-role");
    const emailInput = form.querySelector("#login-email");
    const passwordInput = form.querySelector("#login-password");
    const error = form.querySelector(".form-error");
    const requiredRole = new URLSearchParams(window.location.search).get(
      "requiredRole",
    );
    const roleNotice = document.querySelector("#login-role-notice");
    if (requiredRole && roleNotice) {
      roleNotice.hidden = false;
      if (
        [...roleSelect.options].some((option) => option.value === requiredRole)
      )
        roleSelect.value = requiredRole;
    }

    document.querySelectorAll("[data-demo-login]").forEach((button) => {
      button.addEventListener("click", function () {
        const user = USERS.find((u) => u.id === button.dataset.demoLogin);
        if (!user) return;
        roleSelect.value = user.role;
        emailInput.value = user.email;
        passwordInput.value = user.password;
        emailInput.focus();
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = emailInput.value.trim().toLowerCase();
      const password = passwordInput.value;
      const role = roleSelect.value;
      const user = USERS.find(
        (u) => u.email === email && u.password === password && u.role === role,
      );

      if (!user) {
        if (error) {
          error.textContent =
            "Invalid demo credentials. Select a demo account or use the credentials shown below.";
          error.hidden = false;
        }
        return;
      }

      if (error) error.hidden = true;
      setUser(user, form.querySelector("#remember")?.checked);
      const destinations = {
        customer: "../customer/dashboard.html",
        employee: "../employee/dashboard.html",
        delivery: "../delivery/dashboard.html",
        admin: "../admin/dashboard.html",
      };
      window.location.href = destinations[user.role];
    });
  }

  function setupCartButtons() {
    document.querySelectorAll(".js-add-to-cart").forEach((button) => {
      if (button.dataset.cartBound) return;
      button.dataset.cartBound = "1";
      button.addEventListener("click", function (event) {
        event.preventDefault();
        const user = getStoredUser();
        if (!user || user.role !== "customer") {
          window.location.href = "../public/login.html";
          return;
        }

        const item = {
          id: button.dataset.productId,
          name: button.dataset.foodName,
          price: Number(button.dataset.price),
          restaurant: button.dataset.restaurant || "The Spice Route",
          image: button.dataset.image || "",
          quantity: 1,
        };
        const cart = getCart();
        const existing = cart.find((x) => x.id === item.id);
        if (existing) existing.quantity += 1;
        else cart.push(item);
        saveCart(cart);
        updateCartLinks();
        showMessage(item.name + " added to your cart.", "success");
        const destination = button.dataset.redirect || "cart.html";
        if (button.dataset.stay !== "true") {
          window.setTimeout(() => {
            window.location.href = destination;
          }, 350);
        }
      });
    });
  }

  function setupCartPage() {
    const list = document.querySelector("#cart-items");
    if (!list) return;
    const user = getStoredUser();
    if (!user || user.role !== "customer") return;

    const cart = getCart();
    list.innerHTML = "";

    const empty = document.querySelector("#cart-empty");
    const summary = document.querySelector("#cart-summary");

    if (!cart.length) {
      if (empty) empty.hidden = false;
      if (summary) summary.hidden = true;
      updateCartLinks();
      return;
    }

    if (empty) empty.hidden = true;
    if (summary) summary.hidden = false;

    cart.forEach((item) => {
      const article = document.createElement("article");
      article.className = "surface split cart-item";
      article.innerHTML = `
        <img src="${item.image}" alt="${escapeHtml(item.name)}" width="96" height="72">
        <div class="stack cart-item__details">
          <h2>${escapeHtml(item.name)}</h2>
          <p class="muted">${escapeHtml(item.restaurant)}</p>
          <strong>${money(item.price)}</strong>
          <div class="cluster cart-item__controls">
            <button class="btn btn--ghost btn--sm" type="button" data-cart-action="decrease" data-id="${item.id}" aria-label="Decrease quantity of ${escapeHtml(item.name)}">−</button>
            <span class="quantity" aria-label="Quantity">${item.quantity}</span>
            <button class="btn btn--ghost btn--sm" type="button" data-cart-action="increase" data-id="${item.id}" aria-label="Increase quantity of ${escapeHtml(item.name)}">+</button>
            <button class="btn btn--danger btn--sm" type="button" data-cart-action="remove" data-id="${item.id}">Remove</button>
          </div>
        </div>
        <strong>${money(item.price * item.quantity)}</strong>`;
      list.appendChild(article);
    });

    const subtotal = cart.reduce((sum, x) => sum + x.price * x.quantity, 0);
    const discount = subtotal >= 500 ? 50 : 0;
    const delivery = 29;
    const taxes = Math.round((subtotal - discount) * 0.05);
    const total = subtotal - discount + delivery + taxes;

    const set = (id, value) => {
      const el = document.querySelector(id);
      if (el) el.textContent = money(value);
    };
    set("#cart-subtotal", subtotal);
    set("#cart-discount", discount);
    set("#cart-delivery", delivery);
    set("#cart-taxes", taxes);
    set("#cart-total", total);

    list.querySelectorAll("[data-cart-action]").forEach((button) => {
      button.addEventListener("click", function () {
        const id = button.dataset.id;
        const current = getCart();
        const item = current.find((x) => x.id === id);
        if (!item) return;
        if (button.dataset.cartAction === "increase") item.quantity += 1;
        if (button.dataset.cartAction === "decrease")
          item.quantity = Math.max(1, item.quantity - 1);
        if (button.dataset.cartAction === "remove")
          current.splice(current.indexOf(item), 1);
        saveCart(current);
        setupCartPage();
      });
    });
    updateCartLinks();
  }

  function escapeHtml(value) {
    return String(value).replace(
      /[&<>"']/g,
      (ch) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[ch],
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    protectPage();
    setupLogin();
    setupCartButtons();
    setupCartPage();
    updateUserUI();
    updateCartLinks();
  });
})();
