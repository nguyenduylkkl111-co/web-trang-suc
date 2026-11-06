/* =====================================================
   demo-data.js - dữ liệu mẫu và trang thử nghiệm (index.html)
   Khi ghép nhóm, dữ liệu thật do TV1 (tài khoản), TV2 (sản phẩm) cung cấp.
===================================================== */

/* ---------- 1. Dữ liệu mẫu ---------- */

const DEMO_USER = {
    id: "user-001",
    fullName: "Nguyễn Minh Anh",
    email: "tv3@example.com",
    password: "123456",
    phone: "0900000000",
    addresses: [
        {
            id: "addr-001",
            receiver: "Nguyễn Minh Anh",
            phone: "0900000000",
            line: "12 Nguyễn Trãi",
            ward: "Phường Bến Thành",
            district: "Quận 1",
            city: "TP. Hồ Chí Minh"
        },
        {
            id: "addr-002",
            receiver: "Nguyễn Minh Anh",
            phone: "0911111111",
            line: "45 Lê Lợi",
            ward: "Phường Bến Nghé",
            district: "Quận 1",
            city: "TP. Hồ Chí Minh"
        }
    ]
};

const DEMO_PRODUCTS = [
    { id: "ring-001", name: "Nhẫn vàng đính đá", category: "Nhẫn", price: 2500000, image: "images/ring-001.svg" },
    { id: "ring-002", name: "Nhẫn bạc trơn", category: "Nhẫn", price: 850000, image: "images/ring-002.svg" },
    { id: "necklace-001", name: "Dây chuyền vàng 18K", category: "Dây chuyền", price: 3200000, image: "images/necklace-001.svg" },
    { id: "necklace-002", name: "Dây chuyền bạc mặt tim", category: "Dây chuyền", price: 1200000, image: "images/necklace-002.svg" },
    { id: "earring-001", name: "Bông tai ngọc trai", category: "Bông tai", price: 1750000, image: "images/earring-001.svg" },
    { id: "bracelet-001", name: "Lắc tay bạc", category: "Lắc tay", price: 980000, image: "images/bracelet-001.svg" }
];


/* ---------- 2. Nạp / xóa dữ liệu mẫu ---------- */

// force = true: ghi đè dữ liệu cũ; false: chỉ tạo khi chưa có
function seedDemo(force) {
    if (force || localStorage.getItem(KEYS.products) === null) {
        writeData(KEYS.products, DEMO_PRODUCTS);
    }

    if (force || localStorage.getItem(KEYS.users) === null) {
        writeData(KEYS.users, [DEMO_USER]);
    }
}

// Xóa mọi dữ liệu bắt đầu bằng "jewelry_"
function clearAllData() {
    const keysToRemove = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && key.indexOf("jewelry_") === 0) {
            keysToRemove.push(key);
        }
    }

    keysToRemove.forEach(function (key) {
        localStorage.removeItem(key);
    });
}


/* ---------- 3. Hiển thị sản phẩm mẫu ---------- */

function renderProducts() {
    const products = readData(KEYS.products, []);
    const grid = byId("product-grid");

    let html = "";

    products.forEach(function (product) {
        html +=
            '<div class="product-card">' +
            '<img src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + '" ' +
            'onerror="this.onerror=null;this.src=\'' + NO_IMAGE + '\'">' +
            '<div class="product-body">' +
            '<h3>' + escapeHtml(product.name) + '</h3>' +
            '<p class="muted small">' + escapeHtml(product.category) + '</p>' +
            '<p class="product-price">' + formatMoney(product.price) + '</p>' +
            '<button class="button button-full" data-id="' + escapeHtml(product.id) + '">Thêm vào giỏ</button>' +
            '</div>' +
            '</div>';
    });

    grid.innerHTML = html;
}


/* ---------- 4. Xử lý sự kiện ---------- */

function init() {
    seedDemo(false);
    renderProducts();

    // Nút "Nạp dữ liệu mẫu"
    byId("seed-demo").addEventListener("click", function () {
        seedDemo(true);
        renderProducts();
        showMessage("Đã nạp lại tài khoản và sản phẩm mẫu.", "success", "demo-message");
    });

    // Nút "Đăng nhập tài khoản demo"
    byId("login-demo").addEventListener("click", function () {
        seedDemo(false);

        const users = readData(KEYS.users, []);
        const user = users.find(function (u) {
            return u.email === DEMO_USER.email;
        });

        if (!user) {
            showMessage("Không tìm thấy tài khoản demo, hãy bấm Nạp dữ liệu mẫu.", "error", "demo-message");
            return;
        }

        // Không lưu mật khẩu vào người dùng đang đăng nhập
        const currentUser = {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            addresses: user.addresses
        };

        writeData(KEYS.currentUser, currentUser);
        renderAccountArea();
        showMessage("Đã đăng nhập: " + user.fullName + " (" + user.email + ")", "success", "demo-message");
    });

    // Nút "Đặt lại dữ liệu demo"
    byId("reset-demo").addEventListener("click", function () {
        if (!confirm("Xóa toàn bộ giỏ hàng, đơn hàng và dữ liệu demo?")) {
            return;
        }

        clearAllData();
        seedDemo(false);
        renderProducts();
        renderAccountArea();
        showMessage("Đã đặt lại dữ liệu demo.", "success", "demo-message");
    });

    // Bấm "Thêm vào giỏ" trên sản phẩm
    byId("product-grid").addEventListener("click", function (event) {
        const button = event.target.closest("button[data-id]");

        if (!button) {
            return;
        }

        if (!getCurrentUser()) {
            showMessage("Bạn cần đăng nhập trước khi thêm vào giỏ hàng.", "error", "demo-message");
            window.scrollTo(0, 0);
            return;
        }

        const products = readData(KEYS.products, []);
        const product = products.find(function (p) {
            return String(p.id) === button.dataset.id;
        });

        if (product) {
            addToCart(product, 1);
            showMessage("Đã thêm \"" + product.name + "\" vào giỏ hàng.", "success", "demo-message");
            window.scrollTo(0, 0);
        }
    });
}

init();
