# Sơ đồ trang & luồng bấm theo barem

Dùng file này để **demo cho giảng viên** theo đúng thứ tự barem, và để kiểm tra không thiếu chức năng nào.

## I. Admin (5.0đ)

| Barem | Điểm | Trang | Luồng bấm | TV |
|---|---|---|---|---|
| I.1 Đăng nhập admin riêng + danh mục chức năng | 0.5 | `admin/dang-nhap.html` → `admin/index.html` | Nhập admin/admin123 → Bảng điều khiển, menu trái đủ chức năng | TV4 |
| I.2 Danh sách khách hàng | 0.25 | `admin/khach-hang.html` | Menu → Khách hàng | TV4 |
| I.2 Reset mật khẩu | 0.25 | `admin/khach-hang-reset-mk.html` | Nút Reset mật khẩu ở dòng KH02 | TV4 |
| I.2 Khóa / mở khóa | 0.25 | trang kết quả do TV4 thêm | Nút Khóa (KH02) / Mở khóa (KH04) | TV4 |
| I.3 Loại sản phẩm thêm/sửa/xóa-ẩn | 0.5 | `admin/loai-san-pham*.html` | Danh sách → Thêm / Sửa / Ẩn | TV4 |
| I.4 Thêm sản phẩm | 0.25 | `admin/san-pham-them.html` | Danh mục SP → Thêm | TV4 |
| I.4 Sửa sản phẩm (hiện đúng thông tin cũ) | 0.25 | `admin/san-pham-sua.html` | Nút Sửa ở dòng NH01 | TV4 |
| I.4 Xóa / ẩn sản phẩm | 0.25 | `admin/san-pham-xoa.html` | Nút Xóa/Ẩn | TV4 |
| I.5 Hiển thị & tìm phiếu nhập | 0.25 | `admin/nhap-hang.html` | Menu → Phiếu nhập hàng | TV5 |
| I.5 Thêm phiếu nhập | 0.25 | `admin/nhap-hang-them.html` | Nút Thêm phiếu | TV5 |
| I.5 Sửa & hoàn thành phiếu (chỉ khi chưa hoàn thành) | 0.25 | `admin/nhap-hang-sua.html`, `nhap-hang-chi-tiet.html` | Sửa PN005 → Hoàn thành; PN001 chỉ xem | TV5 |
| I.6 % lợi nhuận theo loại / theo SP | 0.25 | `admin/gia-ban.html`, `gia-ban-sua.html` | Menu → Giá bán → Sửa | TV5 |
| I.6 Tra cứu giá vốn, %, giá bán | 0.25 | `admin/gia-ban.html` | Ô tra cứu | TV5 |
| I.7 Lọc đơn theo khoảng ngày, theo tình trạng | 0.25 + 0.25 | `admin/don-hang.html` (+ trang kết quả lọc) | Chọn ngày + tình trạng → Lọc | TV5 |
| I.7 Chi tiết đơn + cập nhật tình trạng | 0.25 | `admin/don-hang-chi-tiet.html` | Nút Xem ở DH0005 | TV5 |
| I.8 Tồn theo loại tại thời điểm | 0.25 | `admin/ton-kho.html` | Chọn loại + ngày → Tra cứu | TV5 |
| I.8 Cảnh báo sắp hết | 0.25 | `admin/ton-kho.html`, `admin/index.html` | Hộp cảnh báo NH01, DC05, BT05, VT01 | TV5 |
| I.8 Nhập–xuất–tồn 1 SP theo khoảng thời gian | 0.25 | `admin/nhap-xuat-ton.html` | Chọn SP + từ ngày – đến ngày | TV5 |

## II. Khách hàng (5.0đ)

| Barem | Điểm | Trang | Luồng bấm | TV |
|---|---|---|---|---|
| II.1 Đăng ký | 0.25 | `dang-ky.html` | Header → Đăng ký → Đăng ký xong về Đăng nhập | TV1 |
| II.1 Đăng nhập / đăng xuất, hiện tài khoản | 0.25 | `dang-nhap.html` → `kh/index.html` | Đăng nhập → header "Xin chào, Nguyễn Thị Lan" → Đăng xuất về `index.html` | TV1 |
| II.1 Xem / sửa thông tin cá nhân | 0.5 | `kh/tai-khoan.html`, `kh/tai-khoan-sua.html` | Header → Tài khoản của tôi → Sửa | TV1 |
| II.2 Hiển thị theo loại, có phân trang | 0.5 | `danh-muc/*.html` | Menu Nhẫn → trang 2 | TV2 |
| II.2 Chi tiết sản phẩm | 0.5 | `san-pham/*.html` | Bấm vào sản phẩm | TV2 |
| II.2 Tìm cơ bản (có phân trang) | 0.5 | `tim-kiem.html`, `tim-kiem-2.html` | Ô tìm trên header "vàng 18K" | TV2 |
| II.2 Tìm nâng cao (tên + loại + giá, có phân trang) | 0.5 | `tim-kiem-nang-cao*.html` | Menu Tìm nâng cao | TV2 |
| II.3 Chọn mua từ trang loại & chi tiết; thêm bớt trong giỏ | 0.5 | `kh/danh-muc/*`, `kh/san-pham/*`, `kh/gio-hang.html` | Thêm vào giỏ → đổi số lượng / xóa | TV3 |
| II.3 Địa chỉ từ tài khoản hoặc nhập mới | 0.5 | `kh/thanh-toan.html` | Giỏ hàng → Đặt hàng | TV3 |
| II.3 Thanh toán tiền mặt (mặc định) / chuyển khoản / trực tuyến | 0.5 | `kh/thanh-toan.html` | | TV3 |
| II.3 Xem lại đơn khi đặt xong | 0.25 | `kh/dat-hang-thanh-cong.html` | Bấm Đặt hàng | TV3 |
| II.4 Xem lại đơn đã mua | 0.25 | `kh/don-hang.html`, `kh/don-hang-dh*.html` | Header → Đơn hàng đã mua | TV3 |

Khách **chưa đăng nhập** bấm "Thêm vào giỏ" hoặc "Giỏ hàng" → `dang-nhap.html` (barem: phải đăng nhập mới dùng giỏ hàng).

## Cộng điểm

| Nội dung | Điểm | Ai |
|---|---|---|
| Thiết kế layout bằng công cụ đồ họa (Figma) | 1.0 (chia đều) | Mỗi người vẽ trang mình, TV1 tổng hợp |
| Triển khai trên Internet (GitHub Pages) | 1.0 (chia đều) | TV1 |
