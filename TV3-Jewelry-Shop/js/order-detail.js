/* =====================================================
   order-detail.js - chi tiết một đơn hàng (order-detail.html?id=...)
===================================================== */

function init() {
    if (!requireLogin()) {
        return;
    }

    const user = getCurrentUser();

    // Lấy mã đơn từ địa chỉ trang: order-detail.html?id=DH12345678
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("id");

    // Chỉ xem được đơn của chính mình
    const order = getOrders().find(function (o) {
        return o.id === orderId && o.userId === user.id;
    });

    const box = byId("order-detail-content");

    if (!order) {
        box.innerHTML = '<div class="panel">Không tìm thấy đơn hàng này.</div>';
        return;
    }

    box.innerHTML = orderDetailHtml(order);
}

init();
