# Data contract – TV3 (Giỏ hàng, Thanh toán, Đơn hàng)

Dữ liệu được lưu trong `localStorage` của trình duyệt (không có backend).
Các thành viên khác chỉ cần theo đúng cấu trúc dưới đây là ghép được.

## 1. Các key

| Key | Nội dung | Ai ghi |
|---|---|---|
| `jewelry_current_user` | Người đang đăng nhập (object) | TV1 |
| `jewelry_users` | Danh sách tài khoản | TV1 |
| `jewelry_products` | Danh sách sản phẩm | TV2 / TV4 |
| `jewelry_cart_<id người dùng>` | Giỏ hàng của từng người dùng (mảng) | TV3 (TV2 gọi `addToCart`) |
| `jewelry_orders` | Danh sách tất cả đơn hàng (mảng) | TV3 ghi, TV5 đọc và cập nhật trạng thái |
| `jewelry_last_order` | Mã đơn vừa đặt (chuỗi thường, không phải JSON) | TV3 |

Mỗi người dùng có giỏ riêng, ví dụ `jewelry_cart_user-001`.

## 2. Người dùng đang đăng nhập (`jewelry_current_user`)

```js
{
  id: "user-001",
  fullName: "Nguyễn Minh Anh",
  email: "tv3@example.com",
  phone: "0900000000",
  addresses: [
    {
      id: "addr-001",
      receiver: "Nguyễn Minh Anh",
      phone: "0900000000",
      line: "12 Nguyễn Trãi",        // số nhà, tên đường
      ward: "Phường Bến Thành",
      district: "Quận 1",
      city: "TP. Hồ Chí Minh"
    }
  ]
}
```

## 3. Sản phẩm (`jewelry_products`)

TV3 chỉ cần 4 trường này khi thêm vào giỏ:

```js
{ id: "ring-001", name: "Nhẫn vàng đính đá", price: 2500000, image: "images/ring-001.svg" }
```

Ảnh dùng đường dẫn tương đối trong thư mục `images/` (không dùng link internet).

## 4. Sản phẩm trong giỏ hàng

```js
{ id: "ring-001", name: "Nhẫn vàng đính đá", price: 2500000, image: "images/ring-001.svg", quantity: 1 }
```

## 5. Đơn hàng (`jewelry_orders`)

```js
{
  id: "DH12345678",
  userId: "user-001",
  customerName: "Nguyễn Minh Anh",
  createdAt: "2026-11-06T07:30:00.000Z",   // ngày giờ đặt (ISO), TV5 dùng để lọc theo khoảng ngày
  items: [ { id, name, price, image, quantity } ],   // lưu bản sao tại thời điểm đặt
  address: { receiver, phone, line, ward, district, city },
  note: "",
  payment: "COD",                // "COD" | "BANK" | "ONLINE"
  paymentDetail: "",             // ví dụ "Ví MoMo" khi thanh toán trực tuyến
  subtotal: 2500000,
  shipping: 30000,
  total: 2530000,
  status: "Mới đặt"
}
```

Đơn hàng lưu bản sao sản phẩm và địa chỉ lúc đặt, nên sau này sửa sản phẩm không làm thay đổi đơn cũ.

## 6. Trạng thái đơn hàng (theo đề)

`Mới đặt` → `Đã xử lý` → `Đã giao`, hoặc `Đã hủy`.

TV3 luôn tạo đơn với trạng thái `Mới đặt`. TV5 đổi trạng thái ngay trong `jewelry_orders`.
Gợi ý cho báo cáo nhập – xuất – tồn của TV5: tính số lượng xuất từ các đơn có trạng thái khác `Đã hủy`.

## 7. Lưu ý

`localStorage` và đăng nhập bằng JavaScript không bảo mật. Đây chỉ là mô hình để trình diễn giao diện.
Hệ thống thật cần backend, xác thực phía máy chủ và cơ sở dữ liệu.
