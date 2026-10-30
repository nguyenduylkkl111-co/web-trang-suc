# AURELIA Jewelry — Website bán trang sức

Đồ án cuối kỳ học phần **Lập trình web và ứng dụng** — Khoa CNTT, Trường Đại học Sài Gòn.
Giao diện website bán trang sức dạng *clickable prototype*: các trang HTML/CSS liên kết với nhau, gồm phần khách hàng và phần quản trị.

- **Xem online:** `https://<tai-khoan-TV1>.github.io/do-an-web-trang-suc/` *(TV1 cập nhật sau khi bật GitHub Pages)*
- **Xem trên máy:** mở trực tiếp file `index.html` bằng Google Chrome (không cần cài server).
- **Trang quản trị:** mở `admin/dang-nhap.html` — tài khoản mẫu `admin` / `admin123`.
- **Khách hàng mẫu:** `lannguyen` / `123456`.

## Thành viên

Xem bảng phân công chi tiết theo barem trong **[PHAN-CONG.md](PHAN-CONG.md)**.

| TV | Họ tên | MSSV | Phụ trách |
|---|---|---|---|
| TV1 | | | Nhóm trưởng — Nền tảng, Tài khoản khách hàng, Deploy |
| TV2 | | | Sản phẩm & Tìm kiếm |
| TV3 | | | Giỏ hàng, Thanh toán, Đơn hàng |
| TV4 | | | Admin: Đăng nhập, Khách hàng, Loại SP, Sản phẩm |
| TV5 | | | Admin: Nhập hàng, Giá bán, Đơn hàng, Tồn kho |

## Cấu trúc thư mục

```
do-an-web-trang-suc/
├── index.html                 Trang chủ (khách chưa đăng nhập)
├── dang-nhap.html, dang-ky.html
├── danh-muc/                  Sản phẩm theo loại, có phân trang (nhan.html, nhan-2.html, ...)
├── san-pham/                  Chi tiết từng sản phẩm (nh01.html ... vt06.html)
├── tim-kiem*.html             Tìm cơ bản / nâng cao
├── kh/                        Các trang KHI ĐÃ ĐĂNG NHẬP (header "Xin chào, ...")
│   ├── index.html, danh-muc/, san-pham/, tim-kiem*.html
│   ├── gio-hang.html, thanh-toan.html, dat-hang-thanh-cong.html
│   ├── don-hang.html, don-hang-dhxxxx.html
│   └── tai-khoan.html, tai-khoan-sua.html
├── admin/                     Trang quản trị (đăng nhập riêng)
├── css/
│   ├── common.css             Nút, form, bảng, nhãn, thông báo, phân trang (dùng chung)
│   ├── style.css              Bố cục trang khách hàng
│   └── admin.css              Bố cục trang quản trị
├── images/                    banner, favicon, ảnh sản phẩm (products/)
├── mau-giao-dien/thanh-phan.html   Mẫu thành phần + code để sao chép
└── docs/
    ├── DU-LIEU-MAU.md         Dữ liệu dùng chung: sản phẩm, giá, khách, đơn, phiếu nhập, tồn kho
    ├── QUY-UOC.md             Quy ước code (chỉ HTML + CSS đã học)
    ├── HUONG-DAN-GIT.md       Cách dùng Git/GitHub cho nhóm
    └── SO-DO-TRANG.md         Sơ đồ trang + luồng bấm theo barem
```

## Bắt đầu

1. Đọc `PHAN-CONG.md` → biết mình làm file nào.
2. Đọc `docs/QUY-UOC.md` và mở `mau-giao-dien/thanh-phan.html` để xem các thành phần có sẵn.
3. Làm theo `docs/HUONG-DAN-GIT.md` để clone repo và tạo nhánh riêng.
4. Mở trang mình phụ trách: khung viền vàng ghi rõ cần làm gì. Làm xong thì xóa khung.

## Công nghệ

HTML + CSS thuần, theo đúng phạm vi tài liệu môn học (bố cục bằng `float`/`clear`, `display`, `position`; không JavaScript, không thư viện ngoài, không font tải từ Internet). Ảnh sản phẩm hiện là hình minh họa SVG, có thể thay bằng ảnh thật cùng tên.
