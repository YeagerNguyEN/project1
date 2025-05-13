// script.js

const products = [
  {
    name: "Cá Koi Nhật",
    price: 120000,
    image: "https://source.unsplash.com/400x300/?koi",
  },
  {
    name: "Cá Vàng",
    price: 40000,
    image: "https://source.unsplash.com/400x300/?goldfish",
  },
  {
    name: "Cá Betta",
    price: 55000,
    image: "https://source.unsplash.com/400x300/?betta",
  },
  {
    name: "Cá Neon",
    price: 25000,
    image: "https://source.unsplash.com/400x300/?neon-fish",
  },
  {
    name: "Cá Dĩa",
    price: 90000,
    image: "https://source.unsplash.com/400x300/?discus-fish",
  },
  {
    name: "Cá Ali",
    price: 60000,
    image: "https://source.unsplash.com/400x300/?cichlid",
  },
];

const productGrid = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const cartCount = document.getElementById("cart-count");
let cart = [];

function renderProducts() {
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Giá: ${product.price.toLocaleString()}₫</p>
      <button onclick="addToCart(${index})">Thêm vào giỏ</button>
    `;
    productGrid.appendChild(card);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${
      item.name
    } - ${item.price.toLocaleString()}₫ <button onclick="removeFromCart(${i})">X</button>`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalDisplay.textContent = `Tổng: ${total.toLocaleString()}₫`;
  cartCount.textContent = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  alert("Cảm ơn bạn đã mua hàng!");
  cart = [];
  updateCart();
}

renderProducts();
