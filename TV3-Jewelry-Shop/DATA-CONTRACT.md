# Data contract – TV3 standalone

Các key hiện dùng trong `localStorage`:

| Key | Nội dung |
|---|---|
| `jewelry_current_user` | Người dùng đang đăng nhập |
| `jewelry_users` | Danh sách người dùng demo |
| `jewelry_products` | Danh sách sản phẩm demo |
| `jewelry_cart` | Giỏ hàng của người dùng hiện tại |
| `jewelry_orders` | Danh sách đơn hàng |
| `jewelry_last_order` | Mã đơn vừa tạo |

## Cart item

```js
{
  id: "ring-001",
  name: "Nhẫn vàng đính đá",
  price: 2500000,
  image: "https://...",
  quantity: 1
}
```

## Current user

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
      line: "12 Nguyễn Trãi",
      ward: "Phường Bến Thành",
      district: "Quận 1",
      city: "TP. Hồ Chí Minh"
    }
  ]
}
```

## Order

Đơn hàng lưu snapshot thông tin sản phẩm và địa chỉ tại thời điểm đặt hàng, tránh việc dữ liệu sản phẩm thay đổi làm thay đổi đơn cũ.

Các trạng thái demo: `Chờ xác nhận`, `Đang xử lý`, `Đang giao`, `Đã giao`, `Đã hủy`.

## Security note

`localStorage` và xác thực bằng JavaScript phía trình duyệt không bảo mật. Đây là mô hình học tập để trình diễn luồng giao diện; hệ thống thật cần backend, xác thực phía máy chủ và lưu trữ dữ liệu phù hợp.
