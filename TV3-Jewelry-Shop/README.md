# TV3 – Giỏ hàng, Thanh toán, Đơn hàng (phía khách hàng)

Viết bằng HTML, CSS và JavaScript thuần. Không cần cài đặt gì, không cần server.

## 1. Cấu trúc thư mục

```text
TV3-Jewelry-Shop/
├── index.html          trang demo (đăng nhập demo, sản phẩm mẫu)
├── cart.html           giỏ hàng
├── checkout.html       chọn địa chỉ, thanh toán
├── order-success.html  xem lại đơn vừa đặt
├── orders.html         lịch sử đơn hàng
├── order-detail.html   chi tiết một đơn hàng
├── README.md
├── DATA-CONTRACT.md    cấu trúc dữ liệu để các thành viên ghép với nhau
├── css/style.css
├── js/
│   ├── common.js       hàm dùng chung (đăng nhập, giỏ hàng, định dạng...)
│   ├── demo-data.js    dữ liệu mẫu cho index.html
│   ├── cart.js
│   ├── checkout.js
│   ├── order-success.js
│   ├── orders.js
│   └── order-detail.js
└── images/             ảnh sản phẩm mẫu (SVG) và ảnh thay thế no-image.svg
```

## 2. Cách chạy thử

Chỉ cần **mở file `index.html` bằng Chrome hoặc Firefox** (bấm đúp vào file). Đây cũng là cách thầy chấm bài, nên hãy thử đúng như vậy, không cần Live Server.

1. Ở `index.html` bấm **Đăng nhập tài khoản demo**.
2. Bấm **Thêm vào giỏ** ở vài sản phẩm.
3. Vào **Giỏ hàng**: tăng, giảm số lượng, xóa sản phẩm.
4. Bấm **Tiến hành thanh toán**: chọn địa chỉ trong tài khoản hoặc nhập địa chỉ mới, chọn phương thức thanh toán, bấm **Xác nhận đặt hàng**.
5. Trang thành công hiện lại đơn hàng. Vào **Đơn hàng** để xem lịch sử và chi tiết.

Tài khoản demo: `tv3@example.com` / mật khẩu `123456`.
Nếu dữ liệu bị lẫn, bấm **Đặt lại dữ liệu demo** ở `index.html`.

## 3. Đối chiếu với đề

| Yêu cầu của đề | Làm ở đâu |
|---|---|
| Chỉ khách đã đăng nhập mới dùng giỏ hàng | `requireLogin()` trong `common.js`, gọi ở đầu mỗi trang |
| Thêm vào giỏ từ trang danh sách và trang chi tiết | hàm `addToCart()` trong `common.js` (TV2 gọi) |
| Thêm bớt sản phẩm trong giỏ | `cart.html`, `cart.js` |
| Chọn địa chỉ từ tài khoản hoặc nhập địa chỉ mới | `checkout.html`, `checkout.js` (hai lựa chọn radio) |
| Thanh toán tiền mặt (mặc định) / chuyển khoản / trực tuyến | `checkout.html` |
| Xem lại đơn khi kết thúc quá trình mua | `order-success.html` |
| Xem lại đơn đã mua của một khách hàng | `orders.html`, `order-detail.html` |

## 4. Cách ghép với các thành viên khác

- **TV1 (đăng nhập):** ghi người đăng nhập vào key `jewelry_current_user` đúng cấu trúc trong `DATA-CONTRACT.md`. Sau đó sửa `LOGIN_PAGE` ở đầu `common.js` thành tên trang đăng nhập thật.
- **TV2 (sản phẩm):** trong trang của TV2 nhúng `js/common.js`, rồi khi bấm "Thêm vào giỏ" gọi:
  `addToCart({ id: "...", name: "...", price: 1000000, image: "images/..." }, 1);`
  (nhớ kiểm tra đã đăng nhập bằng `getCurrentUser()` trước khi gọi).
- **TV5 (quản lý đơn hàng):** đọc và cập nhật danh sách trong key `jewelry_orders`. Trạng thái dùng: `Mới đặt`, `Đã xử lý`, `Đã giao`, `Đã hủy`.
- Khi ghép, `index.html` của nhóm sẽ là trang chủ do TV1/TV2 làm, trang demo của TV3 không còn cần thiết.

## 5. Lưu ý khi nộp

- Ảnh để trong thư mục `images/`, dùng đường dẫn tương đối, không dùng link từ internet.
- Mọi file lưu ở dạng UTF-8 để không lỗi tiếng Việt.
- Nên thử mở bằng cả Chrome và Firefox trước khi nộp.
