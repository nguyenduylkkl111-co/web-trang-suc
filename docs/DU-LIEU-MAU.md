# Dữ liệu mẫu dùng chung

> **Mọi trang phải dùng đúng số liệu trong file này** (mã, tên, giá, tồn kho, đơn hàng...). Giảng viên bấm qua lại giữa các trang; nếu cùng một sản phẩm mà mỗi trang một giá thì sẽ bị trừ điểm.

Ngày "hôm nay" trong đồ án: **30/10/2026**. Tiền viết dạng `24.050.000 ₫`.

## 1. Tài khoản đăng nhập mẫu

| Vai trò | Tên đăng nhập | Mật khẩu | Ghi chú |
|---|---|---|---|
| Quản trị | `admin` | `admin123` | Đăng nhập ở `admin/dang-nhap.html` |
| Khách hàng | `lannguyen` | `123456` | Nguyễn Thị Lan — tài khoản dùng trong toàn bộ luồng mua hàng (thư mục `kh/`) |

## 2. Loại sản phẩm

| Mã loại | Tên loại | Mô tả | % lợi nhuận mặc định | Số SP | File danh mục |
|---|---|---|---|---|---|
| NH | Nhẫn | Nhẫn đính hôn, nhẫn cưới, nhẫn thời trang | 30% | 6 | `danh-muc/nhan.html`, `danh-muc/nhan-2.html` |
| DC | Dây chuyền | Dây chuyền và mặt dây chuyền | 25% | 6 | `danh-muc/day-chuyen.html`, `danh-muc/day-chuyen-2.html` |
| BT | Bông tai | Bông tai nụ, bông tai dáng dài, khoen tròn | 35% | 6 | `danh-muc/bong-tai.html`, `danh-muc/bong-tai-2.html` |
| VT | Vòng tay | Lắc tay, vòng tay, vòng kiềng | 28% | 6 | `danh-muc/vong-tay.html`, `danh-muc/vong-tay-2.html` |

## 3. Sản phẩm

Giá bán = giá vốn × (1 + % lợi nhuận), **làm tròn đến hàng chục nghìn**. % lợi nhuận lấy theo loại, trừ các sản phẩm có % riêng (cột *% riêng*). Ảnh: `images/products/<mã viết thường>.svg`.

| Mã | Tên sản phẩm | Loại | Chất liệu | Đá | Trọng lượng | Giá vốn | % riêng | % áp dụng | Giá bán | Tồn (30/10) |
|---|---|---|---|---|---|---|---|---|---|---|
| NH01 | Nhẫn kim cương Solitaire vàng trắng 18K | Nhẫn | Vàng trắng 18K | Kim cương thiên nhiên | 3.2 g | 18.500.000 ₫ | — | 30% | **24.050.000 ₫** | 2 ⚠ |
| NH02 | Nhẫn vàng 18K đính đá Ruby | Nhẫn | Vàng 18K | Ruby | 2.9 g | 7.200.000 ₫ | — | 30% | **9.360.000 ₫** | 7 |
| NH03 | Nhẫn cưới trơn vàng 18K | Nhẫn | Vàng 18K | Không đính đá | 3.5 g | 5.400.000 ₫ | — | 30% | **7.020.000 ₫** | 14 |
| NH04 | Nhẫn vàng hồng 14K đính Sapphire | Nhẫn | Vàng hồng 14K | Sapphire | 2.6 g | 6.800.000 ₫ | — | 30% | **8.840.000 ₫** | 6 |
| NH05 | Nhẫn bạc 925 đính đá CZ | Nhẫn | Bạc 925 | Đá CZ | 2.4 g | 450.000 ₫ | 50% | 50% | **680.000 ₫** | 25 |
| NH06 | Nhẫn Emerald vàng 18K viền kim cương tấm | Nhẫn | Vàng 18K | Emerald (ngọc lục bảo) | 3.8 g | 12.600.000 ₫ | — | 30% | **16.380.000 ₫** | 4 |
| DC01 | Dây chuyền vàng 18K mặt kim cương giọt nước | Dây chuyền | Vàng 18K | Kim cương thiên nhiên | 4.1 g | 15.800.000 ₫ | — | 25% | **19.750.000 ₫** | 5 |
| DC02 | Dây chuyền ngọc trai Akoya vàng trắng 14K | Dây chuyền | Vàng trắng 14K | Ngọc trai | 18.5 g | 8.900.000 ₫ | — | 25% | **11.120.000 ₫** | 6 |
| DC03 | Dây chuyền vàng hồng 14K mặt Sapphire | Dây chuyền | Vàng hồng 14K | Sapphire | 3.4 g | 6.300.000 ₫ | — | 25% | **7.880.000 ₫** | 9 |
| DC04 | Dây chuyền bạc 925 mặt trăng đính CZ | Dây chuyền | Bạc 925 | Đá CZ | 4.8 g | 520.000 ₫ | 45% | 45% | **750.000 ₫** | 30 |
| DC05 | Dây chuyền vàng 24K kiểu Ý | Dây chuyền | Vàng 24K | Không đính đá | 7.5 g | 11.200.000 ₫ | 12% | 12% | **12.540.000 ₫** | 1 ⚠ |
| DC06 | Dây chuyền Ruby vàng trắng 18K | Dây chuyền | Vàng trắng 18K | Ruby | 3.9 g | 9.700.000 ₫ | — | 25% | **12.120.000 ₫** | 5 |
| BT01 | Bông tai kim cương nụ vàng trắng 18K | Bông tai | Vàng trắng 18K | Kim cương thiên nhiên | 1.8 g | 9.800.000 ₫ | — | 35% | **13.230.000 ₫** | 6 |
| BT02 | Bông tai ngọc trai nước ngọt bạc 925 | Bông tai | Bạc 925 | Ngọc trai | 2.2 g | 680.000 ₫ | — | 35% | **920.000 ₫** | 22 |
| BT03 | Bông tai vàng 18K giọt Ruby | Bông tai | Vàng 18K | Ruby | 2.4 g | 5.900.000 ₫ | — | 35% | **7.960.000 ₫** | 8 |
| BT04 | Bông tai vàng hồng 14K tròn Topaz | Bông tai | Vàng hồng 14K | Topaz xanh | 1.9 g | 3.400.000 ₫ | — | 35% | **4.590.000 ₫** | 10 |
| BT05 | Bông tai Emerald vàng 18K dáng dài | Bông tai | Vàng 18K | Emerald (ngọc lục bảo) | 3.1 g | 8.200.000 ₫ | — | 35% | **11.070.000 ₫** | 3 ⚠ |
| BT06 | Bông tai bạc 925 khoen tròn | Bông tai | Bạc 925 | Không đính đá | 3.0 g | 390.000 ₫ | 55% | 55% | **600.000 ₫** | 35 |
| VT01 | Lắc tay Tennis vàng 18K đính kim cương tấm | Vòng tay | Vàng 18K | Kim cương thiên nhiên | 9.6 g | 24.500.000 ₫ | — | 28% | **31.360.000 ₫** | 2 ⚠ |
| VT02 | Vòng kiềng vàng 24K trơn | Vòng tay | Vàng 24K | Không đính đá | 15.0 g | 16.800.000 ₫ | 10% | 10% | **18.480.000 ₫** | 4 |
| VT03 | Lắc tay bạc 925 charm trái tim | Vòng tay | Bạc 925 | Đá CZ | 6.2 g | 760.000 ₫ | 45% | 45% | **1.100.000 ₫** | 18 |
| VT04 | Vòng tay vàng hồng 14K đính Sapphire | Vòng tay | Vàng hồng 14K | Sapphire | 7.8 g | 7.400.000 ₫ | — | 28% | **9.470.000 ₫** | 6 |
| VT05 | Lắc tay ngọc trai vàng trắng 14K | Vòng tay | Vàng trắng 14K | Ngọc trai | 8.4 g | 6.100.000 ₫ | — | 28% | **7.810.000 ₫** | 7 |
| VT06 | Vòng tay Ruby vàng 18K | Vòng tay | Vàng 18K | Ruby | 10.2 g | 10.900.000 ₫ | — | 28% | **13.950.000 ₫** | 5 |

⚠ = sắp hết hàng (tồn ≤ 3).

## 4. Khách hàng

| Mã | Tên đăng nhập | Họ tên | Email | SĐT | Địa chỉ | Ngày tạo | Trạng thái |
|---|---|---|---|---|---|---|---|
| KH01 | lannguyen | Nguyễn Thị Lan | lan.nguyen@example.com | 0901 234 567 | 45 Trần Hưng Đạo, Phường Cầu Ông Lãnh, Quận 1, TP. Hồ Chí Minh | 12/08/2026 | Hoạt động |
| KH02 | khoatran | Trần Minh Khoa | khoa.tran@example.com | 0912 345 678 | 18 Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh | 20/08/2026 | Hoạt động |
| KH03 | yenle | Lê Hoàng Yến | yen.le@example.com | 0938 112 233 | 102 Nguyễn Trãi, Phường 2, Quận 5, TP. Hồ Chí Minh | 02/09/2026 | Hoạt động |
| KH04 | baopham | Phạm Quốc Bảo | bao.pham@example.com | 0977 556 677 | 27 Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh | 15/09/2026 | **Bị khóa** |
| KH05 | trucvo | Võ Thanh Trúc | truc.vo@example.com | 0909 887 766 | 9 Phạm Văn Đồng, Phường Linh Tây, TP. Thủ Đức, TP. Hồ Chí Minh | 03/10/2026 | Hoạt động |
| KH06 | huydang | Đặng Gia Huy | huy.dang@example.com | 0983 224 466 | 61 Võ Văn Tần, Phường 6, Quận 3, TP. Hồ Chí Minh | 19/10/2026 | Hoạt động |

Mật khẩu mẫu của mọi khách hàng: `123456`.

## 5. Đơn hàng

| Mã đơn | Khách hàng | Ngày đặt | Sản phẩm (mã × SL) | Tổng tiền | Thanh toán | Tình trạng |
|---|---|---|---|---|---|---|
| DH0001 | KH01 - Nguyễn Thị Lan | 02/10/2026 | NH03 × 1, BT02 × 1 | 7.940.000 ₫ | Tiền mặt khi nhận hàng | Đã giao |
| DH0002 | KH02 - Trần Minh Khoa | 08/10/2026 | DC03 × 1 | 7.880.000 ₫ | Chuyển khoản | Đã giao |
| DH0003 | KH03 - Lê Hoàng Yến | 15/10/2026 | BT01 × 1, NH05 × 2 | 14.590.000 ₫ | Thanh toán trực tuyến | Đã xử lý |
| DH0004 | KH01 - Nguyễn Thị Lan | 21/10/2026 | DC04 × 1, VT03 × 1 | 1.850.000 ₫ | Tiền mặt khi nhận hàng | Đã xử lý |
| DH0005 | KH05 - Võ Thanh Trúc | 25/10/2026 | VT04 × 1 | 9.470.000 ₫ | Chuyển khoản | Mới đặt |
| DH0006 | KH06 - Đặng Gia Huy | 27/10/2026 | NH06 × 1 | 16.380.000 ₫ | Tiền mặt khi nhận hàng | Hủy |
| DH0007 | KH02 - Trần Minh Khoa | 28/10/2026 | BT06 × 2, NH05 × 1 | 1.880.000 ₫ | Tiền mặt khi nhận hàng | Mới đặt |
| DH0008 | KH01 - Nguyễn Thị Lan | 30/10/2026 | NH01 × 1, BT02 × 2 | 25.890.000 ₫ | Tiền mặt khi nhận hàng | Mới đặt |

Địa chỉ giao hàng mặc định = địa chỉ của khách trong bảng 4. Phí giao hàng: miễn phí.

**Giỏ hàng mẫu của Nguyễn Thị Lan** (trang `kh/gio-hang.html`): NH01 × 1, BT02 × 2 → tạm tính 25.890.000 ₫. Sau khi đặt hàng sẽ trở thành đơn **DH0008**.

## 6. Phiếu nhập hàng

Giá nhập = giá vốn của sản phẩm. Không quản lý nhà cung cấp.

| Mã phiếu | Ngày nhập | Chi tiết (mã × SL × giá nhập) | Tổng SL | Tổng tiền | Trạng thái |
|---|---|---|---|---|---|
| PN001 | 05/09/2026 | NH01 × 3 × 18.500.000 ₫<br>NH02 × 5 × 7.200.000 ₫<br>NH03 × 10 × 5.400.000 ₫<br>DC01 × 4 × 15.800.000 ₫<br>BT01 × 5 × 9.800.000 ₫ | 27 | 257.700.000 ₫ | Hoàn thành |
| PN002 | 20/09/2026 | NH05 × 20 × 450.000 ₫<br>DC04 × 25 × 520.000 ₫<br>BT02 × 20 × 680.000 ₫<br>BT06 × 30 × 390.000 ₫<br>VT03 × 15 × 760.000 ₫ | 110 | 58.700.000 ₫ | Hoàn thành |
| PN003 | 05/10/2026 | NH04 × 6 × 6.800.000 ₫<br>NH06 × 4 × 12.600.000 ₫<br>DC02 × 6 × 8.900.000 ₫<br>DC03 × 8 × 6.300.000 ₫<br>VT01 × 2 × 24.500.000 ₫ | 26 | 244.000.000 ₫ | Hoàn thành |
| PN004 | 18/10/2026 | DC05 × 2 × 11.200.000 ₫<br>DC06 × 5 × 9.700.000 ₫<br>BT03 × 8 × 5.900.000 ₫<br>BT04 × 10 × 3.400.000 ₫<br>VT02 × 4 × 16.800.000 ₫ | 29 | 219.300.000 ₫ | Hoàn thành |
| PN005 | 29/10/2026 | BT05 × 4 × 8.200.000 ₫<br>VT04 × 6 × 7.400.000 ₫<br>VT05 × 7 × 6.100.000 ₫<br>VT06 × 5 × 10.900.000 ₫<br>NH01 × 2 × 18.500.000 ₫ | 24 | 211.400.000 ₫ | **Chưa hoàn thành** (được sửa) |

## 7. Nhập – xuất – tồn tháng 10/2026 (01/10 – 30/10)

Nhập = phiếu nhập đã hoàn thành trong tháng 10 (PN003, PN004; PN005 chưa hoàn thành nên chưa tính). Xuất = hàng đã bán (gồm các đơn ở bảng 5 không bị hủy và bán tại cửa hàng). Tồn cuối = Tồn đầu + Nhập − Xuất.

| Mã | Tồn đầu 01/10 | Nhập | Xuất | Tồn cuối 30/10 |
|---|---|---|---|---|
| NH01 | 3 | 0 | 1 | 2 |
| NH02 | 8 | 0 | 1 | 7 |
| NH03 | 17 | 0 | 3 | 14 |
| NH04 | 0 | 6 | 0 | 6 |
| NH05 | 29 | 0 | 4 | 25 |
| NH06 | 2 | 4 | 2 | 4 |
| DC01 | 5 | 0 | 0 | 5 |
| DC02 | 1 | 6 | 1 | 6 |
| DC03 | 4 | 8 | 3 | 9 |
| DC04 | 31 | 0 | 1 | 30 |
| DC05 | 0 | 2 | 1 | 1 |
| DC06 | 2 | 5 | 2 | 5 |
| BT01 | 7 | 0 | 1 | 6 |
| BT02 | 26 | 0 | 4 | 22 |
| BT03 | 2 | 8 | 2 | 8 |
| BT04 | 0 | 10 | 0 | 10 |
| BT05 | 4 | 0 | 1 | 3 |
| BT06 | 39 | 0 | 4 | 35 |
| VT01 | 0 | 2 | 0 | 2 |
| VT02 | 1 | 4 | 1 | 4 |
| VT03 | 21 | 0 | 3 | 18 |
| VT04 | 7 | 0 | 1 | 6 |
| VT05 | 8 | 0 | 1 | 7 |
| VT06 | 7 | 0 | 2 | 5 |
