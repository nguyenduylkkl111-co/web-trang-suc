# Quy ước code chung

Mục tiêu: 5 người code mà website trông như **một người làm**, và **không vượt ra ngoài kiến thức đã học** trong tài liệu môn (thư mục HTML-CSS: HTML Full, HDSD HTML, CSS Bài 1–10, Tài liệu CSS cơ bản).

## 1. Chỉ dùng HTML + CSS (không JavaScript)

Barem yêu cầu "giao diện website… liên kết với nhau thành một **clickable prototype**". Mọi tương tác được giả lập bằng **liên kết giữa các trang**:

| Muốn thể hiện | Cách làm bằng HTML |
|---|---|
| Bấm Đăng nhập | `<form action="kh/index.html" method="get">` → sang trang đã đăng nhập |
| Phân trang | Mỗi trang là 1 file: `nhan.html`, `nhan-2.html` |
| Lọc / tìm kiếm | Form `action` trỏ tới trang kết quả mẫu đã làm sẵn |
| Khóa tài khoản, cập nhật đơn… | Nút trỏ tới trang kết quả có hộp `.alert-success` |
| Trạng thái đã đăng nhập | Các trang trong thư mục `kh/` dùng header "Xin chào, Nguyễn Thị Lan" |

## 2. Kiến thức CSS được dùng

**Được dùng** (có trong tài liệu): bộ chọn thẻ / class / id, `background-*`, `font-*`, `color`, `text-align`, `text-indent`, `text-decoration`, `text-transform`, `letter-spacing`, `word-spacing`, `line-height`, `a:link / :visited / :hover / :active`, `margin`, `padding`, `border`, `width`, `height`, `min-/max-width`, `float`, `clear`, `display: block / inline / inline-block`, `position: relative / absolute / fixed`, `top/right/bottom/left`, `z-index`.
Bổ sung nhỏ đã dùng trong file chung: `list-style`, `vertical-align`, `border-collapse`, `cursor`.

**Không dùng:** `display: flex`, `grid`, `@media`, `transition`, `animation`, `transform`, `border-radius`, `box-shadow`, `calc()`, `box-sizing`, thư viện Bootstrap/Tailwind, font tải từ Google Fonts.

> Lý do không dùng font ngoài: giảng viên chấm bằng file local, "mất font tiếng Việt" bị tính lỗi. Dùng `Arial`, `Tahoma` (nội dung) và `"Times New Roman"` (tiêu đề) — có sẵn trên mọi máy Windows và đủ dấu tiếng Việt.

**Tính độ rộng (box model):** độ rộng thật = `width + padding trái/phải + border trái/phải`. Ví dụ ô nhập `.w-full` có `width: 378px` + padding 2×10 + viền 2×1 = **400px**.

## 3. Đường dẫn & tên file

- Tên file/thư mục: **chữ thường, không dấu, nối bằng gạch ngang**: `gio-hang.html`, `nhap-xuat-ton.html`. (GitHub Pages phân biệt hoa/thường.)
- **Luôn dùng đường dẫn tương đối**: `../css/style.css`, `../images/products/nh01.svg`. Không dùng `C:\...`, không dùng `/css/...`.
- Link tới thư mục phải ghi rõ file: `admin/index.html` ✔ — `admin/` ✘ (mở bằng file local sẽ không vào được).
- Ảnh đặt trong `images/`; ảnh sản phẩm `images/products/<mã>.svg|jpg`. Muốn thay ảnh thật thì giữ tên theo mã sản phẩm, ảnh vuông, ≤ 300 KB.

## 4. Cấu trúc 1 trang

```html
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8" />
<title>Tên trang | AURELIA Jewelry</title>
<link rel="stylesheet" type="text/css" href="../css/common.css" />
<link rel="stylesheet" type="text/css" href="../css/style.css" />
</head>
<body>
<!-- HEADER: sao chép nguyên khối từ trang cùng thư mục, KHÔNG tự sửa -->
<div class="container">
    ... nội dung trang ...
</div>
<!-- FOOTER: sao chép nguyên khối -->
</body>
</html>
```

- File lưu **UTF-8** (VS Code mặc định đã là UTF-8).
- Thụt lề 4 dấu cách. Thẻ không đóng viết dạng `<br />`, `<img ... />`.
- Mọi `<img>` có `alt` và `title` (tài liệu HTML Bài 3 yêu cầu).
- Bảng luôn có `cellspacing="0" cellpadding="0"`.
- Header/footer: **chỉ TV1 được sửa**. Cần đổi thì báo TV1 sửa đồng loạt.

## 5. CSS

- Ưu tiên dùng class có sẵn — xem trang **`mau-giao-dien/thanh-phan.html`** (có code để sao chép).
- Cần class mới: viết vào **khu vực của mình** ở cuối `css/style.css` (TV1–TV3) hoặc `css/admin.css` (TV4–TV5), đặt tên có tiền tố trang, ví dụ `.cart-total`, `.import-row`.
- Không dùng CSS nội tuyến `style="..."` trừ khi thật cần.

Bảng màu:

| Tên | Mã | Dùng cho |
|---|---|---|
| Đen ấm | `#1f1b18` | Nút chính, header trên, footer |
| Vàng đồng | `#a27b3f` | Điểm nhấn, hover, giá |
| Kem | `#faf7f2` | Nền trang |
| Be | `#f1e9dd` | Nền tiêu đề bảng, dải cam kết |
| Viền | `#e6dccb` | Viền khung |

## 6. Dữ liệu

Mọi tên, mã, giá, tồn kho, đơn hàng phải khớp **`docs/DU-LIEU-MAU.md`**. Cần thêm dữ liệu (ví dụ khách hàng mới) thì thêm vào file đó trước rồi mới dùng.
