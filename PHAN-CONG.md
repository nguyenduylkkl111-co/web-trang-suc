# PHÂN CÔNG CÔNG VIỆC — 5 THÀNH VIÊN

> Đồ án: **Website bán trang sức AURELIA** — Học phần Lập trình web và ứng dụng (Khoa CNTT – SGU).
> Điền họ tên + MSSV vào bảng dưới rồi commit lên. Mỗi người **chỉ sửa file của mình** (xem cột "File phụ trách").

| TV | Họ tên | MSSV | Vai trò | Điểm barem phụ trách | Khối lượng |
|---|---|---|---|---|---|
| TV1 | Nguyễn Hoàng Duy | 3124560015 | Nhóm trưởng — Nền tảng & Tài khoản khách hàng + Deploy | II.1 (1.0) + nền tảng chung + cộng điểm deploy | 20% |
| TV2 | Phạm Thành Danh | 3124410034 | Sản phẩm & Tìm kiếm (phía khách) | II.2 (2.0) | 20% |
| TV3 | Bùi Đình Nhật Trường | 3125560071 | Giỏ hàng, Thanh toán, Đơn hàng (phía khách) | II.3 + II.4 (2.0) | 20% |
| TV4 | Nguyễn Trọng Nghĩa | 3125410115 | Admin phần 1: Đăng nhập, Khách hàng, Loại SP, Sản phẩm | I.1 – I.4 (2.5) | 20% |
| TV5 | Nguyễn Trọng Trí | 3125560069 | Admin phần 2: Nhập hàng, Giá bán, Đơn hàng, Tồn kho | I.5 – I.8 (2.5) | 20% |

**Cộng điểm (chia đều):** mỗi người tự thiết kế layout các trang của mình trên **Figma** (TV1 tạo file chung) → +1.0;
TV1 đưa web lên **GitHub Pages** → +1.0.

Mở bất kỳ trang nào chưa xong sẽ thấy **khung viền vàng đứt nét** ghi rõ: ai phụ trách, cần làm gì, số liệu nào. Làm xong trang thì xóa khung đó.

---

## TV1 — Nhóm trưởng: Nền tảng & Tài khoản khách hàng

**Barem II.1 (1.0đ):** Đăng ký (0.25) · Đăng nhập/đăng xuất, hiện tài khoản đang đăng nhập (0.25) · Xem/sửa thông tin cá nhân (0.5)

| File phụ trách | Việc cần làm |
|---|---|
| `css/common.css`, `css/style.css` | Giữ file CSS chung. Ai cần class mới thì nhắn TV1 hoặc viết vào khu vực riêng cuối `style.css` |
| `index.html`, `kh/index.html` | Đã có sẵn bản hoàn chỉnh — chỉnh nội dung/ảnh theo thiết kế Figma |
| `dang-ky.html` | Form đăng ký đầy đủ (họ tên, email, SĐT, tên đăng nhập, mật khẩu, nhập lại, địa chỉ, đồng ý điều khoản) |
| `dang-nhap.html` | Form đăng nhập, `action="kh/index.html"`. Thêm `dang-nhap-loi.html` nếu muốn |
| `kh/tai-khoan.html` | Xem thông tin cá nhân (bố cục 2 cột có menu tài khoản) |
| `kh/tai-khoan-sua.html` | Sửa thông tin + đổi mật khẩu (ô điền sẵn giá trị cũ) |
| GitHub | Tạo repo, mời 4 bạn làm collaborator, duyệt và gộp Pull Request, bật GitHub Pages |
| Figma | Tạo file Figma chung, mỗi người 1 Page; chụp ảnh thiết kế bỏ vào báo cáo |
| Cuối kỳ | Kiểm tra toàn bộ link (không có link hỏng), kiểm tra trên Chrome bằng file local |

**Lưu ý đăng xuất:** link "Đăng xuất" trên header thành viên đã trỏ về `index.html` (trang khách) — giữ nguyên.

---

## TV2 — Sản phẩm & Tìm kiếm (phía khách chưa đăng nhập)

**Barem II.2 (2.0đ):** Hiển thị theo phân loại có phân trang (0.5) · Chi tiết sản phẩm (0.5) · Tìm cơ bản theo tên (0.5) · Tìm nâng cao: tên + loại + khoảng giá trong một lần tìm, có phân trang (0.5)

| File phụ trách | Việc cần làm |
|---|---|
| `danh-muc/*.html` (8 file) | 4 loại × 2 trang, mỗi trang 4 sản phẩm, có thanh phân trang |
| `san-pham/*.html` (24 file) | Chi tiết từng sản phẩm: ảnh, mã, loại, giá, bảng thông số, mô tả, chọn số lượng, sản phẩm cùng loại |
| `tim-kiem.html`, `tim-kiem-2.html` | Kết quả tìm cơ bản cho từ khóa "vàng 18K" (8 kết quả, 2 trang) |
| `tim-kiem-nang-cao.html`, `-2.html` | Form tìm nâng cao + kết quả mẫu (tên "vàng", 5–10 triệu → 7 kết quả, 2 trang) |
| CSS | Viết thêm vào khu vực `TV2` cuối `css/style.css` |

**Thứ tự nên làm:** làm xong `danh-muc/nhan.html` + `san-pham/nh01.html` trước (tuần 1) để TV3 có mẫu sao chép, rồi làm các trang còn lại.
Nút "Thêm vào giỏ" ở phía khách luôn trỏ tới `dang-nhap.html` (vì phải đăng nhập mới được mua).

---

## TV3 — Giỏ hàng, Thanh toán, Đơn hàng (phía khách đã đăng nhập, thư mục `kh/`)

**Barem II.3 + II.4 (2.0đ):** Chọn mua từ trang theo loại và trang chi tiết + thêm bớt trong giỏ (0.5) · Địa chỉ nhận: lấy từ tài khoản hoặc nhập mới (0.5) · Thanh toán tiền mặt/chuyển khoản/trực tuyến, mặc định tiền mặt (0.5) · Xem lại đơn khi đặt xong (0.25) · Xem lại đơn hàng đã mua (0.25)

| File phụ trách | Việc cần làm |
|---|---|
| `kh/gio-hang.html` | Giỏ hàng mẫu NH01 × 1, BT02 × 2: đổi số lượng, xóa, cập nhật, tổng tiền |
| `kh/thanh-toan.html` | Chọn địa chỉ (radio: dùng địa chỉ tài khoản / nhập mới), chọn phương thức thanh toán (tiền mặt `checked`) |
| `kh/dat-hang-thanh-cong.html` | Xem lại đơn DH0008 vừa đặt |
| `kh/don-hang.html` + `kh/don-hang-dh0001/0004/0008.html` | Lịch sử đơn của Nguyễn Thị Lan + chi tiết từng đơn |
| `kh/danh-muc/*`, `kh/san-pham/*`, `kh/tim-kiem*` | **Bản thành viên**: sao chép trang của TV2 khi TV2 xong, giữ header thành viên, nút "Thêm vào giỏ" → `gio-hang.html` |
| CSS | Viết thêm vào khu vực `TV3` cuối `css/style.css` |

**Thứ tự nên làm:** tuần 1–2 làm giỏ hàng, thanh toán, đơn hàng (không phụ thuộc ai). Khi TV2 xong trang nào thì sao chép trang đó sang `kh/`.

---

## TV4 — Admin phần 1

**Barem I.1 – I.4 (2.5đ):** Trang đăng nhập admin riêng + danh mục chức năng (0.5) · Khách hàng: danh sách, reset mật khẩu, khóa/mở khóa (0.75) · Loại sản phẩm: thêm, sửa, xóa/ẩn (0.5) · Sản phẩm: thêm (loại, mã, tên, hình, mô tả), sửa (hiện đúng thông tin cũ), xóa/ẩn (0.75)

| File phụ trách | Việc cần làm |
|---|---|
| `css/admin.css` | Giữ file CSS admin (TV5 viết thêm ở khu vực của TV5) |
| `admin/dang-nhap.html` | Hoàn thiện trang đăng nhập admin (đã có khung) |
| `admin/index.html` | Bảng điều khiển — đã có bản hoàn chỉnh, chỉnh theo Figma |
| `admin/khach-hang.html`, `khach-hang-reset-mk.html` | + tự thêm trang kết quả khóa / mở khóa |
| `admin/loai-san-pham*.html` (3 file) | Danh sách, thêm, sửa |
| `admin/san-pham*.html` (4 file) | Danh sách (có lọc, phân trang), thêm, sửa, xóa/ẩn |

---

## TV5 — Admin phần 2

**Barem I.5 – I.8 (2.5đ):** Nhập hàng: hiển thị & tìm phiếu, thêm phiếu, sửa & hoàn thành phiếu (0.75) · Giá bán: % lợi nhuận theo loại/sản phẩm, tra cứu giá vốn – % – giá bán (0.5) · Đơn hàng: lọc theo khoảng ngày và tình trạng, xem chi tiết, cập nhật tình trạng (0.75) · Tồn kho: tra cứu theo loại tại thời điểm, cảnh báo sắp hết, nhập–xuất–tồn theo khoảng thời gian (0.75)

| File phụ trách | Việc cần làm |
|---|---|
| `admin/nhap-hang*.html` (4 file) | Danh sách + tìm, thêm, sửa PN005 (chưa hoàn thành), xem PN001 (đã hoàn thành) |
| `admin/gia-ban.html`, `gia-ban-sua.html` | Bảng % theo loại, % theo sản phẩm, tra cứu giá |
| `admin/don-hang.html`, `don-hang-chi-tiet.html` | + tự thêm `don-hang-loc.html` (kết quả lọc mẫu) |
| `admin/ton-kho.html`, `nhap-xuat-ton.html` | Tồn theo loại, cảnh báo, bảng nhập–xuất–tồn |
| CSS | Viết thêm vào khu vực `TV5` cuối `css/admin.css` |

---

## Lịch làm việc gợi ý (chỉnh theo hạn nộp của lớp)

| Giai đoạn | Việc chung | Mốc kiểm tra |
|---|---|---|
| Tuần 1 | Mỗi người vẽ layout trang của mình trên Figma; TV1 chốt màu, font, header/footer | Họp nhóm duyệt Figma |
| Tuần 2 | Code các trang chính (TV2 xong `nhan.html` + `nh01.html` sớm cho TV3) | Mỗi người tạo ít nhất 1 Pull Request |
| Tuần 3 | Code các trang còn lại, TV3 sao chép trang thành viên | Mọi trang không còn khung viền vàng |
| Tuần 4 | TV1 kiểm tra link, deploy GitHub Pages; cả nhóm bấm thử theo barem | Tự chấm theo checklist bên dưới |

## Checklist tự chấm trước khi nộp

- [ ] Mở `index.html` bằng **đường dẫn file trên máy** (không cần server) trong Chrome: đủ ảnh, đủ dấu tiếng Việt
- [ ] Mọi link bấm được, không có trang 404 (TV1 chạy kiểm tra cuối)
- [ ] Không còn khung "PHỤ TRÁCH" viền vàng nào
- [ ] Giá, tên, tồn kho giống nhau ở mọi trang (so với `docs/DU-LIEU-MAU.md`)
- [ ] Khách chưa đăng nhập bấm "Thêm vào giỏ" → bị đưa tới trang đăng nhập
- [ ] Sau khi đăng nhập header hiện "Xin chào, Nguyễn Thị Lan"
- [ ] Trang đăng nhập admin tách riêng, không có link từ trang khách
- [ ] Bản deploy GitHub Pages chạy được (link ghi trong README)
