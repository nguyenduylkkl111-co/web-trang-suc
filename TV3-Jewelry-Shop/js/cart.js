/* =====================================================
   cart.js - trang giỏ hàng (cart.html)
===================================================== */

/* ---------- 1. Hiển thị giỏ hàng ---------- */

function renderCart() {
    const list = byId("cart-list");
    const cart = getCart();

    if (cart.length === 0) {
        list.innerHTML = '<tr><td colspan="5" class="empty-cell">Giỏ hàng của bạn đang trống.</td></tr>';
    } else {
        let html = "";

        cart.forEach(function (item) {
            const id = escapeHtml(item.id);

            html +=
                '<tr>' +
                '<td class="product-cell">' +
                '<img src="' + escapeHtml(item.image || NO_IMAGE) + '" alt="" ' +
                'onerror="this.onerror=null;this.src=\'' + NO_IMAGE + '\'">' +
                '<span>' + escapeHtml(item.name) + '</span></td>' +
                '<td>' + formatMoney(item.price) + '</td>' +
                '<td>' +
                '<button class="qty-btn" data-action="decrease" data-id="' + id + '">-</button>' +
                '<span class="qty">' + item.quantity + '</span>' +
                '<button class="qty-btn" data-action="increase" data-id="' + id + '">+</button>' +
                '</td>' +
                '<td>' + formatMoney(item.price * item.quantity) + '</td>' +
                '<td><button class="remove-btn" data-action="remove" data-id="' + id + '">Xóa</button></td>' +
                '</tr>';
        });

        list.innerHTML = html;
    }

    // Cập nhật phần tóm tắt
    const totals = calcTotals(cart);

    byId("subtotal").textContent = formatMoney(totals.subtotal);
    byId("shipping").textContent = formatMoney(totals.shipping);
    byId("total").textContent = formatMoney(totals.total);
}


/* ---------- 2. Thêm bớt / xóa sản phẩm ---------- */

function changeQuantity(productId, amount) {
    const cart = getCart();
    const item = cart.find(function (p) {
        return String(p.id) === String(productId);
    });

    if (!item) {
        return;
    }

    const newQuantity = Number(item.quantity) + amount;

    // Số lượng từ 1 đến 99
    if (newQuantity < 1 || newQuantity > 99) {
        return;
    }

    item.quantity = newQuantity;
    saveCart(cart);
    renderCart();
}

function removeItem(productId) {
    if (!confirm("Xóa sản phẩm này khỏi giỏ hàng?")) {
        return;
    }

    const cart = getCart().filter(function (p) {
        return String(p.id) !== String(productId);
    });

    saveCart(cart);
    renderCart();
}


/* ---------- 3. Khởi chạy ---------- */

function init() {
    // Phải đăng nhập mới dùng được giỏ hàng
    if (!requireLogin()) {
        return;
    }

    renderCart();

    // Bấm các nút trong bảng giỏ hàng
    byId("cart-list").addEventListener("click", function (event) {
        const button = event.target.closest("button[data-action]");

        if (!button) {
            return;
        }

        const action = button.dataset.action;
        const id = button.dataset.id;

        if (action === "increase") {
            changeQuantity(id, 1);
        } else if (action === "decrease") {
            changeQuantity(id, -1);
        } else if (action === "remove") {
            removeItem(id);
        }
    });

    // Giỏ trống thì không cho sang trang thanh toán
    byId("checkout-link").addEventListener("click", function (event) {
        if (getCart().length === 0) {
            event.preventDefault();
            showMessage("Giỏ hàng đang trống, hãy chọn sản phẩm trước khi thanh toán.", "error");
        }
    });
}

init();
