// Dữ liệu giả lập để TV3 có thể chạy độc lập khi chưa tích hợp TV1/TV2.
(function () {
  "use strict";

  const products = [
    { id: "ring-001", name: "Nhẫn vàng đính đá", price: 2500000, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600", description: "Thiết kế thanh lịch, phù hợp sử dụng hằng ngày." },
    { id: "necklace-001", name: "Dây chuyền ánh vàng", price: 3200000, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600", description: "Dây chuyền phong cách tối giản." },
    { id: "earring-001", name: "Bông tai ngọc trai", price: 1800000, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600", description: "Điểm nhấn tinh tế cho trang phục." },
    { id: "bracelet-001", name: "Vòng tay bạc", price: 950000, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600", description: "Vòng tay bạc kiểu dáng hiện đại." }
  ];

  const demoUser = {
    id: "user-001",
    fullName: "Nguyễn Minh Anh",
    email: "tv3@example.com",
    phone: "0900000000",
    addresses: [{
      id: "addr-001",
      receiver: "Nguyễn Minh Anh",
      phone: "0900000000",
      line: "12 Nguyễn Trãi",
      ward: "Phường Bến Thành",
      district: "Quận 1",
      city: "TP. Hồ Chí Minh"
    }]
  };

  function seed() {
    localStorage.setItem("jewelry_products", JSON.stringify(products));
    localStorage.setItem("jewelry_users", JSON.stringify([demoUser]));
    localStorage.setItem("jewelry_current_user", JSON.stringify(demoUser));
    if (!localStorage.getItem("jewelry_cart")) {
      localStorage.setItem("jewelry_cart", JSON.stringify([
        { ...products[0], quantity: 1 },
        { ...products[2], quantity: 2 }
      ]));
    }
    renderProducts();
    Shop.updateAccountArea();
    Shop.setMessage("demo-message", "Đã nạp dữ liệu mẫu và đăng nhập tài khoản demo.", "success");
  }

  function reset() {
    Object.values(Shop.KEYS).forEach(key => localStorage.removeItem(key));
    seed();
    localStorage.setItem("jewelry_cart", "[]");
    Shop.setMessage("demo-message", "Đã đặt lại dữ liệu demo. Giỏ hàng hiện đang trống.", "success");
  }

  function renderProducts() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;
    grid.innerHTML = "";
    products.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      const body = document.createElement("div");
      body.className = "product-card-body";
      const title = document.createElement("h3");
      title.textContent = product.name;
      const price = document.createElement("p");
      price.className = "product-price";
      price.textContent = Shop.money(product.price);
      const desc = document.createElement("p");
      desc.className = "muted";
      desc.textContent = product.description;
      const button = document.createElement("button");
      button.className = "button button-full";
      button.textContent = "Thêm vào giỏ";
      button.addEventListener("click", () => addToCart(product));
      body.append(title, price, desc, button);
      card.append(image, body);
      grid.appendChild(card);
    });
  }

  function addToCart(product) {
    if (!Shop.currentUser()) {
      alert("Vui lòng đăng nhập trước khi thêm sản phẩm vào giỏ hàng.");
      location.href = "index.html";
      return;
    }
    const cart = Shop.getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    Shop.saveCart(cart);
    Shop.setMessage("demo-message", product.name + " đã được thêm vào giỏ hàng.", "success");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    document.getElementById("seed-demo")?.addEventListener("click", seed);
    document.getElementById("login-demo")?.addEventListener("click", () => {
      const users = Shop.read(Shop.KEYS.users, []);
      const user = users.find(item => item.email === "tv3@example.com");
      if (!user) {
        seed();
      } else {
        Shop.write(Shop.KEYS.currentUser, user);
        Shop.updateAccountArea();
        Shop.setMessage("demo-message", "Đã đăng nhập: tv3@example.com (mật khẩu demo: 123456).", "success");
      }
    });
    document.getElementById("reset-demo")?.addEventListener("click", reset);
  });
})();
