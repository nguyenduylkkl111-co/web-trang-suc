// Các hàm dùng chung cho những trang thuộc module TV3.
(function () {
  "use strict";

  const KEYS = {
    currentUser: "jewelry_current_user",
    users: "jewelry_users",
    products: "jewelry_products",
    cart: "jewelry_cart",
    orders: "jewelry_orders",
    lastOrder: "jewelry_last_order"
  };

  function read(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      console.error("Không thể đọc localStorage:", key, error);
      return fallback;
    }
  }

  function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function currentUser() {
    return read(KEYS.currentUser, null);
  }

  function getCart() {
    const cart = read(KEYS.cart, []);
    return Array.isArray(cart) ? cart : [];
  }

  function saveCart(cart) {
    write(KEYS.cart, cart);
  }

  function getOrders() {
    const orders = read(KEYS.orders, []);
    return Array.isArray(orders) ? orders : [];
  }

  function saveOrders(orders) {
    write(KEYS.orders, orders);
  }

  function money(value) {
    return Number(value || 0).toLocaleString("vi-VN") + " ₫";
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));
  }

  function requireLogin() {
    if (currentUser()) return true;
    const returnTo = encodeURIComponent(location.pathname.split("/").pop() || "index.html");
    alert("Bạn cần đăng nhập để sử dụng chức năng này. Hãy đăng nhập tài khoản demo tại trang chủ.");
    location.href = "index.html?return=" + returnTo;
    return false;
  }

  function setMessage(id, message, type = "info") {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = message;
    element.className = "notice " + type;
  }

  function updateAccountArea() {
    const area = document.getElementById("account-area");
    if (!area) return;
    const user = currentUser();

    if (!user) {
      area.innerHTML = '<a class="text-link" href="index.html">Đăng nhập</a>';
      return;
    }

    area.innerHTML = '<span class="account-name">Xin chào, ' +
      escapeHTML(user.fullName || user.email) +
      '</span> <button class="link-button" id="logout-button" type="button">Đăng xuất</button>';

    const logout = document.getElementById("logout-button");
    logout?.addEventListener("click", () => {
      localStorage.removeItem(KEYS.currentUser);
      location.href = "index.html";
    });
  }

  function findOrder(orderId) {
    return getOrders().find(order => String(order.id) === String(orderId));
  }

  window.Shop = {
    KEYS, read, write, currentUser, getCart, saveCart, getOrders, saveOrders,
    money, escapeHTML, requireLogin, setMessage, updateAccountArea, findOrder
  };

  document.addEventListener("DOMContentLoaded", updateAccountArea);
})();
