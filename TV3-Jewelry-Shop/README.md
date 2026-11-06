# TV3 – Cart, Checkout & Orders

Bộ mã nguồn độc lập cho phần khách hàng của website Jewelry Shop, sử dụng HTML, CSS và JavaScript thuần (không cần PHP, MySQL hay framework).

## 1. Cấu trúc thư mục

```text
TV3-Jewelry-Shop/
├── index.html
├── cart.html
├── checkout.html
├── order-success.html
├── orders.html
├── order-detail.html
├── README.md
├── DATA-CONTRACT.md
├── css/
│   └── style.css
└── js/
    ├── common.js
    ├── demo-data.js
    ├── cart.js
    ├── checkout.js
    ├── order-success.js
    ├── orders.js
    └── order-detail.js
```

## 2. Chạy thử

1. Giải nén thư mục.
2. Mở thư mục `TV3-Jewelry-Shop` bằng VS Code.
3. Mở `index.html` bằng trình duyệt (khuyến nghị dùng extension Live Server).
4. Nhấn **Nạp dữ liệu mẫu** để tạo tài khoản demo và một số sản phẩm mẫu.
5. Mở giỏ hàng, thay đổi số lượng, xóa sản phẩm và tiến hành checkout.
6. Đặt hàng để xem trang thành công, sau đó kiểm tra lịch sử đơn hàng và chi tiết đơn.

## 3. Tài khoản demo

- Email: `tv3@example.com`
- Mật khẩu: `123456`

Đây chỉ là dữ liệu mô phỏng ở phía trình duyệt. Không dùng cơ chế này cho website triển khai thật.

## 4. Các chức năng có trong bản độc lập

- Kiểm tra đăng nhập trước khi thao tác với giỏ hàng / checkout / lịch sử đơn.
- Thêm sản phẩm mẫu vào giỏ.
- Tăng, giảm số lượng và xóa sản phẩm.
- Chọn địa chỉ đã lưu hoặc nhập địa chỉ giao hàng mới.
- Phương thức thanh toán: COD (mặc định), chuyển khoản ngân hàng, thanh toán trực tuyến (mô phỏng).
- Tạo đơn hàng và lưu lịch sử đơn trong `localStorage`.
- Xem danh sách đơn hàng và chi tiết từng đơn.

## 5. Lưu ý tích hợp nhóm

Bản này dùng các key và cấu trúc dữ liệu riêng được mô tả trong `DATA-CONTRACT.md`. Khi ghép với TV1/TV2, cần thống nhất:
- Key lưu người dùng hiện tại.
- Cấu trúc sản phẩm và giỏ hàng.
- Cấu trúc địa chỉ tài khoản.
- Cách xác thực đăng nhập.
- Cấu trúc và trạng thái đơn hàng.

Phần đăng nhập ở đây chỉ là mô phỏng để TV3 chạy độc lập. Khi tích hợp, hãy thay bằng cơ chế đăng nhập thực tế của TV1.
