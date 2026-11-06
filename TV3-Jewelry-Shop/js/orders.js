/* =====================================================
   orders.js - lịch sử đơn hàng của khách (orders.html)
===================================================== */

function init() {
    if (!requireLogin()) {
        return;
    }

    const user = getCurrentUser();

    // Chỉ lấy đơn của người đang đăng nhập, đơn mới nhất lên đầu
    const myOrders = getOrders()
        .filter(function (order) {
            return order.userId === user.id;
        })
        .sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

    const list = byId("orders-list");

    if (myOrders.length === 0) {
        list.innerHTML =
            '<div class="panel">Bạn chưa có đơn hàng nào. ' +
            '<a class="text-link" href="index.html">Mua sắm ngay →</a></div>';
        return;
    }

    let html = "";

    myOrders.forEach(function (order) {
        let totalQuantity = 0;

        order.items.forEach(function (item) {
            totalQuantity += Number(item.quantity);
        });

        html +=
            '<div class="panel order-card">' +
            '<div>' +
            '<p><strong>Mã đơn: ' + escapeHtml(order.id) + '</strong></p>' +
            '<p>Ngày đặt: ' + formatDate(order.createdAt) + '</p>' +
            '<p>' + totalQuantity + ' sản phẩm · Tổng tiền: <strong>' + formatMoney(order.total) + '</strong></p>' +
            '</div>' +
            '<div>' + statusBadge(order.status) + '</div>' +
            '<a class="button button-outline" href="order-detail.html?id=' + encodeURIComponent(order.id) + '">Xem chi tiết</a>' +
            '</div>';
    });

    list.innerHTML = html;
}

init();
