(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    if (!Shop.requireLogin()) return;
    const user = Shop.currentUser();
    const cart = Shop.getCart();
    const form = document.getElementById("checkout-form");

    if (!cart.length) {
      Shop.setMessage("page-message", "Giỏ hàng đang trống. Hãy thêm sản phẩm trước khi thanh toán.", "error");
      form.querySelector('button[type="submit"]').disabled = true;
      return;
    }

    const savedSelect = document.getElementById("saved-address");
    const addresses = Array.isArray(user.addresses) ? user.addresses : [];

    addresses.forEach((address, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = [address.receiver, address.line, address.district, address.city].filter(Boolean).join(" – ");
      savedSelect.appendChild(option);
    });

    savedSelect.addEventListener("change", () => {
      const address = addresses[Number(savedSelect.value)];
      if (!address) return;
      document.getElementById("receiver").value = address.receiver || user.fullName || "";
      document.getElementById("phone").value = address.phone || user.phone || "";
      document.getElementById("address-line").value = address.line || "";
      document.getElementById("ward").value = address.ward || "";
      document.getElementById("district").value = address.district || "";
      document.getElementById("city").value = address.city || "";
    });

    if (addresses.length) savedSelect.value = "0", savedSelect.dispatchEvent(new Event("change"));

    const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);
    const shipping = subtotal > 0 ? 30000 : 0;
    document.getElementById("subtotal").textContent = Shop.money(subtotal);
    document.getElementById("shipping").textContent = Shop.money(shipping);
    document.getElementById("total").textContent = Shop.money(subtotal + shipping);

    const itemsWrap = document.getElementById("checkout-items");
    cart.forEach(item => {
      const line = document.createElement("div");
      line.className = "checkout-item";
      const name = document.createElement("span");
      name.textContent = `${item.name} × ${item.quantity}`;
      const price = document.createElement("strong");
      price.textContent = Shop.money((Number(item.price) || 0) * (Number(item.quantity) || 1));
      line.append(name, price);
      itemsWrap.appendChild(line);
    });

    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const receiver = document.getElementById("receiver").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const address = {
        receiver,
        phone,
        line: document.getElementById("address-line").value.trim(),
        ward: document.getElementById("ward").value.trim(),
        district: document.getElementById("district").value.trim(),
        city: document.getElementById("city").value.trim()
      };

      const payment = form.querySelector('input[name="payment"]:checked')?.value || "COD";
      const now = new Date();
      const order = {
        id: "JS" + now.getTime(),
        userId: user.id,
        createdAt: now.toISOString(),
        status: "Chờ xác nhận",
        payment,
        paymentLabel: payment === "COD" ? "Thanh toán khi nhận hàng (COD)" :
          payment === "BANK" ? "Chuyển khoản ngân hàng" : "Thanh toán trực tuyến (mô phỏng)",
        address,
        note: document.getElementById("note").value.trim(),
        items: cart.map(item => ({
          id: item.id, name: item.name, price: Number(item.price) || 0,
          image: item.image || "", quantity: Number(item.quantity) || 1
        })),
        subtotal,
        shipping,
        total: subtotal + shipping
      };

      const orders = Shop.getOrders();
      orders.unshift(order);
      Shop.saveOrders(orders);
      Shop.write(Shop.KEYS.lastOrder, order.id);
      Shop.saveCart([]);
      location.href = "order-success.html";
    });
  });
})();
