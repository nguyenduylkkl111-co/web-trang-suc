(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    if (!Shop.requireLogin()) return;
    const orderId = Shop.read(Shop.KEYS.lastOrder, null);
    const order = orderId ? Shop.findOrder(orderId) : null;
    const target = document.getElementById("success-info");

    if (!order || order.userId !== Shop.currentUser().id) {
      target.textContent = "Không tìm thấy thông tin đơn hàng vừa đặt.";
      return;
    }

    target.innerHTML = `
      <p><span>Mã đơn hàng</span><strong>${Shop.escapeHTML(order.id)}</strong></p>
      <p><span>Ngày đặt</span><strong>${new Date(order.createdAt).toLocaleString("vi-VN")}</strong></p>
      <p><span>Tổng thanh toán</span><strong>${Shop.money(order.total)}</strong></p>
      <p><span>Thanh toán</span><strong>${Shop.escapeHTML(order.paymentLabel)}</strong></p>
    `;
  });
})();
