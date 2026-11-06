/* =====================================================
   checkout.js - trang thanh toán (checkout.html)
===================================================== */

/* ---------- 1. Tóm tắt đơn hàng ---------- */

function showSummary(cart) {
    let html = "";

    cart.forEach(function (item) {
        html +=
            '<div class="checkout-item">' +
            '<span>' + escapeHtml(item.name) + ' × ' + item.quantity + '</span>' +
            '<strong>' + formatMoney(item.price * item.quantity) + '</strong>' +
            '</div>';
    });

    byId("checkout-items").innerHTML = html;

    const totals = calcTotals(cart);

    byId("subtotal").textContent = formatMoney(totals.subtotal);
    byId("shipping").textContent = formatMoney(totals.shipping);
    byId("total").textContent = formatMoney(totals.total);
}


/* ---------- 2. Chọn địa chỉ ---------- */

// Hiện phần "địa chỉ trong tài khoản" hoặc phần "nhập địa chỉ mới"
function updateAddressMode() {
    const mode = document.querySelector('input[name="addressMode"]:checked').value;

    byId("saved-box").hidden = (mode !== "saved");
    byId("new-box").hidden = (mode !== "new");

    // fieldset bị disabled thì các ô bên trong không bị kiểm tra bắt buộc
    byId("new-box").disabled = (mode !== "new");
}

function showSavedPreview(user) {
    const address = (user.addresses || [])[Number(byId("saved-address").value)];

    if (!address) {
        byId("saved-preview").textContent = "";
        return;
    }

    byId("saved-preview").innerHTML =
        '<strong>' + escapeHtml(address.receiver) + '</strong> - ' + escapeHtml(address.phone) +
        '<br>' + escapeHtml(addressText(address));
}

function setupAddress(user) {
    const addresses = user.addresses || [];
    const select = byId("saved-address");

    // Đưa các địa chỉ của tài khoản vào danh sách chọn
    let options = "";

    addresses.forEach(function (address, index) {
        options += '<option value="' + index + '">' +
            escapeHtml(address.receiver + " - " + address.line) + '</option>';
    });

    select.innerHTML = options;

    // Tài khoản chưa có địa chỉ: bắt buộc nhập địa chỉ mới
    if (addresses.length === 0) {
        document.querySelector('input[name="addressMode"][value="saved"]').disabled = true;
        document.querySelector('input[name="addressMode"][value="new"]').checked = true;
        showMessage("Tài khoản chưa có địa chỉ, vui lòng nhập địa chỉ giao hàng mới.", "success");
    }

    document.querySelectorAll('input[name="addressMode"]').forEach(function (radio) {
        radio.addEventListener("change", updateAddressMode);
    });

    select.addEventListener("change", function () {
        showSavedPreview(user);
    });

    updateAddressMode();
    showSavedPreview(user);
}

// Lấy địa chỉ giao hàng theo lựa chọn của khách
function getSelectedAddress(user) {
    const mode = document.querySelector('input[name="addressMode"]:checked').value;

    if (mode === "saved") {
        const saved = (user.addresses || [])[Number(byId("saved-address").value)];

        if (!saved) {
            return null;
        }

        return {
            receiver: saved.receiver,
            phone: saved.phone,
            line: saved.line,
            ward: saved.ward,
            district: saved.district,
            city: saved.city
        };
    }

    return {
        receiver: byId("receiver").value.trim(),
        phone: byId("phone").value.trim(),
        line: byId("address-line").value.trim(),
        ward: byId("ward").value.trim(),
        district: byId("district").value.trim(),
        city: byId("city").value.trim()
    };
}


/* ---------- 3. Chọn phương thức thanh toán ---------- */

function updatePaymentBoxes() {
    const payment = document.querySelector('input[name="payment"]:checked').value;

    byId("bank-box").hidden = (payment !== "BANK");
    byId("online-box").hidden = (payment !== "ONLINE");
}

function setupPayment() {
    byId("bank-box").innerHTML = bankInfoHtml("");

    document.querySelectorAll('input[name="payment"]').forEach(function (radio) {
        radio.addEventListener("change", updatePaymentBoxes);
    });

    updatePaymentBoxes();
}


/* ---------- 4. Đặt hàng ---------- */

function placeOrder(user, cart) {
    const address = getSelectedAddress(user);

    // Kiểm tra địa chỉ đủ thông tin (trường hợp chỉ nhập khoảng trắng)
    if (!address || !address.receiver || !address.phone || !address.line ||
        !address.ward || !address.district || !address.city) {
        showMessage("Vui lòng nhập đầy đủ thông tin địa chỉ giao hàng.", "error");
        window.scrollTo(0, 0);
        return;
    }

    const payment = document.querySelector('input[name="payment"]:checked').value;
    const totals = calcTotals(cart);

    // Với thanh toán trực tuyến, ghi lại hình thức đã chọn
    let paymentDetail = "";

    if (payment === "ONLINE") {
        const select = byId("online-method");
        paymentDetail = select.options[select.selectedIndex].text;
    }

    const order = {
        id: "DH" + Date.now().toString().slice(-8),
        userId: user.id,
        customerName: user.fullName,
        createdAt: new Date().toISOString(),
        items: cart.map(function (item) {
            return {
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: item.quantity
            };
        }),
        address: address,
        note: byId("note").value.trim(),
        payment: payment,
        paymentDetail: paymentDetail,
        subtotal: totals.subtotal,
        shipping: totals.shipping,
        total: totals.total,
        status: "Mới đặt"
    };

    // Lưu đơn hàng, xóa giỏ hàng rồi sang trang thành công
    const orders = getOrders();
    orders.push(order);
    saveOrders(orders);

    localStorage.setItem(KEYS.lastOrder, order.id);
    saveCart([]);

    window.location.href = "order-success.html";
}


/* ---------- 5. Khởi chạy ---------- */

function init() {
    if (!requireLogin()) {
        return;
    }

    const user = getCurrentUser();
    const cart = getCart();

    if (cart.length === 0) {
        alert("Giỏ hàng đang trống, hãy chọn sản phẩm trước khi thanh toán.");
        window.location.href = "cart.html";
        return;
    }

    showSummary(cart);
    setupAddress(user);
    setupPayment();

    byId("checkout-form").addEventListener("submit", function (event) {
        event.preventDefault();
        placeOrder(user, cart);
    });
}

init();
