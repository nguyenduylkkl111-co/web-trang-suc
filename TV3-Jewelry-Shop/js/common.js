/* =====================================================
   common.js - các hàm dùng chung cho mọi trang của TV3
   (phải được nạp TRƯỚC các file js của từng trang)
===================================================== */

/* ---------- 1. Hằng số ---------- */

// Tên các key lưu trong localStorage
const KEYS = {
    currentUser: "jewelry_current_user",
    users: "jewelry_users",
    products: "jewelry_products",
    cart: "jewelry_cart",          // thực tế là "jewelry_cart_" + id người dùng
    orders: "jewelry_orders",
    lastOrder: "jewelry_last_order"
};

// Trang đăng nhập (khi ghép nhóm đổi thành trang đăng nhập của TV1)
const LOGIN_PAGE = "index.html";

// Phí vận chuyển cố định
const SHIPPING_FEE = 30000;

// Ảnh thay thế khi sản phẩm không có ảnh / ảnh lỗi
const NO_IMAGE = "images/no-image.svg";

// Thông tin chuyển khoản (dữ liệu mẫu)
const BANK_INFO = {
    bank: "Vietcombank",
    number: "0123456789",
    owner: "CONG TY JEWELRY SHOP"
};


/* ---------- 2. Đọc / ghi localStorage ---------- */

function byId(id) {
    return document.getElementById(id);
}

function readData(key, defaultValue) {
    try {
        const text = localStorage.getItem(key);

        if (text === null) {
            return defaultValue;
        }

        return JSON.parse(text);
    } catch (error) {
        return defaultValue;
    }
}

function writeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


/* ---------- 3. Định dạng dữ liệu ---------- */

function formatMoney(amount) {
    return Number(amount || 0).toLocaleString("vi-VN") + " ₫";
}

function formatDate(isoText) {
    const date = new Date(isoText);

    if (isNaN(date.getTime())) {
        return "";
    }

    return date.toLocaleString("vi-VN");
}

// Chống lỗi hiển thị khi dữ liệu có ký tự đặc biệt như < > "
function escapeHtml(text) {
    return String(text === undefined || text === null ? "" : text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Hiện thông báo trong ô có id="page-message" (hoặc id khác)
function showMessage(text, type, boxId) {
    const box = byId(boxId || "page-message");

    if (!box) {
        return;
    }

    box.textContent = text;
    box.className = "notice show" + (type === "error" ? " error" : "");
}


/* ---------- 4. Người dùng đăng nhập ---------- */

function getCurrentUser() {
    return readData(KEYS.currentUser, null);
}

// Trả về true nếu đã đăng nhập, ngược lại báo và chuyển sang trang đăng nhập
function requireLogin() {
    if (getCurrentUser()) {
        return true;
    }

    alert("Vui lòng đăng nhập để sử dụng chức năng này.");
    window.location.href = LOGIN_PAGE;
    return false;
}

function logout() {
    localStorage.removeItem(KEYS.currentUser);
    window.location.href = LOGIN_PAGE;
}

// Hiển thị tên tài khoản (hoặc link Đăng nhập) ở góc phải header
function renderAccountArea() {
    const area = byId("account-area");

    if (!area) {
        return;
    }

    const user = getCurrentUser();

    if (user) {
        area.innerHTML =
            '<span>Xin chào, <strong>' + escapeHtml(user.fullName) + '</strong></span>' +
            '<a href="#" id="logout-link">Đăng xuất</a>';

        byId("logout-link").addEventListener("click", function (event) {
            event.preventDefault();
            logout();
        });
    } else {
        area.innerHTML = '<a href="' + LOGIN_PAGE + '">Đăng nhập</a>';
    }
}


/* ---------- 5. Giỏ hàng (mỗi tài khoản một giỏ riêng) ---------- */

function getCartKey() {
    const user = getCurrentUser();
    return KEYS.cart + "_" + (user ? user.id : "guest");
}

function getCart() {
    const cart = readData(getCartKey(), []);
    return Array.isArray(cart) ? cart : [];
}

function saveCart(cart) {
    writeData(getCartKey(), cart);
}

// Các trang của TV2 gọi hàm này khi bấm "Thêm vào giỏ"
// product cần có: id, name, price, image
function addToCart(product, quantity) {
    quantity = quantity || 1;

    const cart = getCart();
    const found = cart.find(function (item) {
        return String(item.id) === String(product.id);
    });

    if (found) {
        found.quantity = Number(found.quantity) + quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: Number(product.price),
            image: product.image,
            quantity: quantity
        });
    }

    saveCart(cart);
}

// Tính tạm tính, phí vận chuyển và tổng tiền
function calcTotals(cart) {
    let subtotal = 0;

    cart.forEach(function (item) {
        subtotal += Number(item.price) * Number(item.quantity);
    });

    const shipping = subtotal > 0 ? SHIPPING_FEE : 0;

    return {
        subtotal: subtotal,
        shipping: shipping,
        total: subtotal + shipping
    };
}


/* ---------- 6. Đơn hàng ---------- */

function getOrders() {
    const orders = readData(KEYS.orders, []);
    return Array.isArray(orders) ? orders : [];
}

function saveOrders(orders) {
    writeData(KEYS.orders, orders);
}

function paymentName(code) {
    if (code === "BANK") {
        return "Chuyển khoản ngân hàng";
    }

    if (code === "ONLINE") {
        return "Thanh toán trực tuyến";
    }

    return "Thanh toán tiền mặt khi nhận hàng";
}

function addressText(address) {
    return [address.line, address.ward, address.district, address.city]
        .filter(function (part) { return part; })
        .join(", ");
}

// Nhãn màu cho trạng thái đơn hàng
// (các trạng thái theo đề: Mới đặt, Đã xử lý, Đã giao, Đã hủy)
function statusBadge(status) {
    let cssClass = "st-new";

    if (status === "Đã xử lý") {
        cssClass = "st-processed";
    } else if (status === "Đã giao") {
        cssClass = "st-done";
    } else if (status === "Đã hủy") {
        cssClass = "st-cancel";
    }

    return '<span class="badge ' + cssClass + '">' + escapeHtml(status) + '</span>';
}

// Khung thông tin chuyển khoản
function bankInfoHtml(orderId) {
    const content = orderId ? "Mã đơn " + orderId : "Mã đơn hàng + số điện thoại";

    return '<strong>Thông tin chuyển khoản (dữ liệu mẫu)</strong><br>' +
        'Ngân hàng: ' + BANK_INFO.bank + '<br>' +
        'Số tài khoản: ' + BANK_INFO.number + '<br>' +
        'Chủ tài khoản: ' + BANK_INFO.owner + '<br>' +
        'Nội dung: ' + escapeHtml(content);
}

// HTML hiển thị đầy đủ một đơn hàng (dùng cho trang thành công và chi tiết đơn)
function orderDetailHtml(order) {
    const address = order.address || {};
    const items = order.items || [];

    let rows = "";

    items.forEach(function (item) {
        rows +=
            '<tr>' +
            '<td class="product-cell">' +
            '<img src="' + escapeHtml(item.image || NO_IMAGE) + '" alt="" ' +
            'onerror="this.onerror=null;this.src=\'' + NO_IMAGE + '\'">' +
            '<span>' + escapeHtml(item.name) + '</span></td>' +
            '<td>' + formatMoney(item.price) + '</td>' +
            '<td>' + item.quantity + '</td>' +
            '<td>' + formatMoney(item.price * item.quantity) + '</td>' +
            '</tr>';
    });

    let paymentText = paymentName(order.payment);

    if (order.paymentDetail) {
        paymentText += " (" + order.paymentDetail + ")";
    }

    let bankBox = "";

    if (order.payment === "BANK") {
        bankBox = '<div class="info-box" style="margin-left:0">' + bankInfoHtml(order.id) + '</div>';
    }

    let noteHtml = "";

    if (order.note) {
        noteHtml = '<p><strong>Ghi chú:</strong> ' + escapeHtml(order.note) + '</p>';
    }

    return '<div class="order-view">' +
        '<div class="detail-grid">' +
        '<div class="panel">' +
        '<h3>Thông tin đơn hàng</h3>' +
        '<p><strong>Mã đơn:</strong> ' + escapeHtml(order.id) + '</p>' +
        '<p><strong>Ngày đặt:</strong> ' + formatDate(order.createdAt) + '</p>' +
        '<p><strong>Trạng thái:</strong> ' + statusBadge(order.status) + '</p>' +
        '<p><strong>Thanh toán:</strong> ' + escapeHtml(paymentText) + '</p>' +
        '</div>' +
        '<div class="panel">' +
        '<h3>Địa chỉ nhận hàng</h3>' +
        '<p><strong>' + escapeHtml(address.receiver) + '</strong> - ' + escapeHtml(address.phone) + '</p>' +
        '<p>' + escapeHtml(addressText(address)) + '</p>' +
        noteHtml +
        '</div>' +
        '</div>' +
        bankBox +
        '<div class="panel"><div class="table-scroll">' +
        '<table class="data-table">' +
        '<thead><tr><th>Sản phẩm</th><th>Đơn giá</th><th>Số lượng</th><th>Thành tiền</th></tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
        '</table></div></div>' +
        '<div class="panel totals">' +
        '<div class="summary-line"><span>Tạm tính</span><strong>' + formatMoney(order.subtotal) + '</strong></div>' +
        '<div class="summary-line"><span>Phí vận chuyển</span><strong>' + formatMoney(order.shipping) + '</strong></div>' +
        '<div class="summary-line total-line"><span>Tổng thanh toán</span><strong>' + formatMoney(order.total) + '</strong></div>' +
        '</div>' +
        '</div>';
}


/* ---------- 7. Chạy khi trang tải xong ---------- */
renderAccountArea();
