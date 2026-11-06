(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    if (!Shop.requireLogin()) return;

    const list = document.getElementById("cart-list");
    const subtotalEl = document.getElementById("subtotal");
    const shippingEl = document.getElementById("shipping");
    const totalEl = document.getElementById("total");
    const checkoutLink = document.getElementById("checkout-link");
    const SHIPPING_FEE = 30000;

    function render() {
      const cart = Shop.getCart();
      list.innerHTML = "";

      if (cart.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 5;
        cell.className = "empty-cell";
        cell.textContent = "Giỏ hàng của bạn đang trống.";
        row.appendChild(cell);
        list.appendChild(row);
      }

      let subtotal = 0;
      cart.forEach(item => {
        const price = Number(item.price) || 0;
        const quantity = Math.max(1, Number(item.quantity) || 1);
        const lineTotal = price * quantity;
        subtotal += lineTotal;

        const row = document.createElement("tr");
        const productCell = document.createElement("td");
        productCell.className = "cart-product";
        const img = document.createElement("img");
        img.src = item.image || "";
        img.alt = item.name || "Sản phẩm";
        const name = document.createElement("strong");
        name.textContent = item.name || "Sản phẩm";
        productCell.append(img, name);

        const priceCell = document.createElement("td");
        priceCell.textContent = Shop.money(price);

        const quantityCell = document.createElement("td");
        const controls = document.createElement("div");
        controls.className = "quantity-control";
        const minus = document.createElement("button");
        minus.type = "button"; minus.textContent = "−";
        minus.setAttribute("aria-label", "Giảm số lượng");
        minus.dataset.action = "decrease"; minus.dataset.id = item.id;
        const count = document.createElement("span");
        count.textContent = quantity;
        const plus = document.createElement("button");
        plus.type = "button"; plus.textContent = "+";
        plus.setAttribute("aria-label", "Tăng số lượng");
        plus.dataset.action = "increase"; plus.dataset.id = item.id;
        controls.append(minus, count, plus);
        quantityCell.appendChild(controls);

        const totalCell = document.createElement("td");
        totalCell.textContent = Shop.money(lineTotal);

        const removeCell = document.createElement("td");
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "remove-button";
        remove.textContent = "Xóa";
        remove.dataset.action = "remove"; remove.dataset.id = item.id;
        removeCell.appendChild(remove);

        row.append(productCell, priceCell, quantityCell, totalCell, removeCell);
        list.appendChild(row);
      });

      const shipping = subtotal > 0 ? SHIPPING_FEE : 0;
      subtotalEl.textContent = Shop.money(subtotal);
      shippingEl.textContent = Shop.money(shipping);
      totalEl.textContent = Shop.money(subtotal + shipping);
      checkoutLink.classList.toggle("disabled", cart.length === 0);
      checkoutLink.setAttribute("aria-disabled", cart.length === 0 ? "true" : "false");
    }

    list.addEventListener("click", event => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const cart = Shop.getCart();
      const item = cart.find(product => String(product.id) === String(button.dataset.id));
      if (!item) return;

      if (button.dataset.action === "increase") item.quantity = (Number(item.quantity) || 1) + 1;
      if (button.dataset.action === "decrease") {
        item.quantity = Math.max(1, (Number(item.quantity) || 1) - 1);
      }
      if (button.dataset.action === "remove") {
        Shop.saveCart(cart.filter(product => String(product.id) !== String(button.dataset.id)));
        render();
        return;
      }
      Shop.saveCart(cart);
      render();
    });

    checkoutLink.addEventListener("click", event => {
      if (Shop.getCart().length === 0) {
        event.preventDefault();
        Shop.setMessage("page-message", "Bạn cần có ít nhất một sản phẩm trong giỏ hàng.", "error");
      }
    });

    render();
  });
})();
