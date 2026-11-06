(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    if (!Shop.requireLogin()) return;
    const user = Shop.currentUser();
    const target = document.getElementById("orders-list");
    const orders = Shop.getOrders().filter(order => order.userId === user.id);

    if (!orders.length) {
      target.innerHTML = '<div class="panel empty-state"><h2>Bạn chưa có đơn hàng</h2><p class="muted">Các đơn hàng sau khi đặt sẽ xuất hiện tại đây.</p><a class="button" href="index.html">Khám phá sản phẩm</a></div>';
      return;
    }

    orders.forEach(order => {
      const card = document.createElement("article");
      card.className = "panel order-card";
      const top = document.createElement("div");
      top.className = "order-card-top";
      const title = document.createElement("div");
      const id = document.createElement("h2");
      id.textContent = "Đơn hàng #" + order.id;
      const date = document.createElement("p");
      date.className = "muted small";
      date.textContent = new Date(order.createdAt).toLocaleString("vi-VN");
      title.append(id, date);
      const status = document.createElement("span");
      status.className = "status";
      status.textContent = order.status;
      top.append(title, status);

      const info = document.createElement("div");
      info.className = "order-card-bottom";
      const count = (order.items || []).reduce((sum, item) => sum + item.quantity, 0);
      const itemCount = document.createElement("span");
      itemCount.textContent = count + " sản phẩm";
      const total = document.createElement("strong");
      total.textContent = Shop.money(order.total);
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = "order-detail.html?id=" + encodeURIComponent(order.id);
      link.textContent = "Xem chi tiết →";
      info.append(itemCount, total, link);
      card.append(top, info);
      target.appendChild(card);
    });
  });
})();
