# Hướng dẫn Git / GitHub cho nhóm

## A. Nhóm trưởng (TV1) — làm 1 lần

1. Giải nén thư mục `do-an-web-trang-suc`, mở bằng VS Code.
2. Tạo repo trống trên GitHub tên `do-an-web-trang-suc` (**không** tick "Add a README").
3. Mở Terminal trong thư mục dự án (đã có sẵn commit đầu tiên):

   ```bash
   git remote add origin https://github.com/<tai-khoan-TV1>/do-an-web-trang-suc.git
   git branch -M main
   git push -u origin main
   ```

   > Nếu thư mục giải nén không có `.git` (bị ẩn hoặc mất), chạy trước: `git init`, `git add .`, `git commit -m "Khoi tao du an"`.

4. GitHub → **Settings → Collaborators** → mời 4 bạn còn lại.
5. **Settings → Branches** → thêm luật bảo vệ nhánh `main`: bắt buộc Pull Request (không ai push thẳng lên `main`).
6. Bật web: **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, thư mục `/ (root)` → Save.
   Sau 1–2 phút web chạy tại `https://<tai-khoan-TV1>.github.io/do-an-web-trang-suc/` → ghi link này vào README (điểm cộng triển khai Internet).

## B. Mỗi thành viên

Lần đầu:

```bash
git clone https://github.com/<tai-khoan-TV1>/do-an-web-trang-suc.git
cd do-an-web-trang-suc
git checkout -b tv2-san-pham        # đổi theo tên mình: tv1-tai-khoan, tv3-gio-hang, tv4-admin, tv5-admin-kho
```

Mỗi lần làm việc:

```bash
git checkout main
git pull                            # lấy code mới nhất của cả nhóm
git checkout tv2-san-pham
git merge main                      # đưa code mới vào nhánh của mình
# ... sửa file ...
git add .
git commit -m "TV2: hoan thanh trang danh muc Nhan"
git push -u origin tv2-san-pham
```

Sau đó lên GitHub bấm **Compare & pull request** → TV1 xem và bấm **Merge**.

## C. Quy tắc tránh xung đột (conflict)

- Chỉ sửa **file mình phụ trách** (xem `PHAN-CONG.md`).
- `css/common.css`, header, footer: chỉ TV1 sửa. `css/admin.css` phần chung: chỉ TV4 sửa.
- CSS riêng viết đúng khu vực tên mình ở cuối file CSS.
- Commit nhỏ, thường xuyên; tin nhắn commit ghi rõ `TVx: làm gì`.
- Bị conflict: mở file, giữ phần đúng, xóa các dòng `<<<<<<<`, `=======`, `>>>>>>>`, rồi `git add` + `git commit`. Không chắc thì hỏi TV1 trước khi bấm Merge.

Lịch sử commit của từng người trên GitHub cũng là bằng chứng phân chia khối lượng công việc khi báo cáo.
