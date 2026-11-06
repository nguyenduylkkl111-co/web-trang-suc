/* =====================================================
   order-success.js - trang đặt hàng thành công (order-success.html)
   Hiển thị lại đầy đủ đơn hàng vừa đặt.
===================================================== */

function init() {
    if (!requireLogin()) {
        return;
    }

    const user = getCurrentUser();
    const lastOrderId = localStorage.getItem(KEYS.lastOrder);

    // Tìm đơn vừa đặt (phải là đơn của người đang đăng nhập)
    const order = getOrders().find(function (o) {
        return o.id === lastOrderId && o.userId === user.id;
    });

    const box = byId("success-info");

    if (!order) {
        box.innerHTML = '<p class="muted">Không tìm thấy đơn hàng vừa đặt.</p>';
        return;
    }

    box.innerHTML =
        '<p style="text-align:center; margin-bottom:20px;">Mã đơn hàng của bạn: <strong>' +
        escapeHtml(order.id) + '</strong></p>' +
        orderDetailHtml(order);
}

init();
