(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    if (!Shop.requireLogin()) return;
    const params = new URLSearchParams(location.search);
    const order = Shop.findOrder(params.get("id"));
    const target = document.getElementById("order-detail-content");

    if (!order || order.userId !== Shop.currentUser().id) {
      target.innerHTML = '<div class="panel empty-state"><h2>Không tìm thấy đơn hàng</h2><p class="muted">Đơn hàng không tồn tại hoặc không thuộc tài khoản hiện tại.</p></div>';
      return;
    }

    const rows = (order.items || []).map(item => `
      <tr>
        <td>${Shop.escapeHTML(item.name)}</td>
        <td>${Shop.money(item.price)}</td>
        <td>${item.quantity}</td>
        <td>${Shop.money(item.price * item.quantity)}</td>
      </tr>
    `).join("");

    const a = order.address || {};
    target.innerHTML = `
      <div class="detail-grid">
        <section class="panel form-panel">
          <h2>Thông tin đơn hàng</h2>
          <p class="detail-line"><span>Mã đơn</span><strong>${Shop.escapeHTML(order.id)}</strong></p>
          <p class="detail-line"><span>Ngày đặt</span><strong>${new Date(order.createdAt).toLocaleString("vi-VN")}</strong></p>
          <p class="detail-line"><span>Trạng thái</span><strong>${Shop.escapeHTML(order.status)}</strong></p>
          <p class="detail-line"><span>Thanh toán</span><strong>${Shop.escapeHTML(order.paymentLabel)}</strong></p>
        </section>
        <section class="panel form-panel">
          <h2>Địa chỉ nhận hàng</h2>
          <p><strong>${Shop.escapeHTML(a.receiver)}</strong></p>
          <p>${Shop.escapeHTML(a.phone)}</p>
          <p>${Shop.escapeHTML([a.line, a.ward, a.district, a.city].filter(Boolean).join(", "))}</p>
          ${order.note ? `<p class="muted">Ghi chú: ${Shop.escapeHTML(order.note)}</p>` : ""}
        </section>
      </div>
      <section class="panel form-panel detail-products">
        <h2>Sản phẩm đã đặt</h2>
        <div class="table-scroll"><table class="data-table">
          <thead><tr><th>Sản phẩm</th><th>Đơn giá</th><th>Số lượng</th><th>Thành tiền</th></tr></thead>
          <tbody>${rows}</tbody>
        </table></div>
        <div class="detail-totals">
          <p><span>Tạm tính</span><strong>${Shop.money(order.subtotal)}</strong></p>
          <p><span>Phí vận chuyển</span><strong>${Shop.money(order.shipping)}</strong></p>
          <p class="total-line"><span>Tổng thanh toán</span><strong>${Shop.money(order.total)}</strong></p>
        </div>
      </section>
    `;
  });
})();
