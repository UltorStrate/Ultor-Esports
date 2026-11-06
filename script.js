const cart = [];
const cartOverlay = document.getElementById('cart-overlay');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartEmpty = document.getElementById('cart-empty');
const cartTotal = document.getElementById('cart-total');

document.getElementById('year').textContent = new Date().getFullYear();

function openCart() {
  cartOverlay.classList.add('open');
  cartOverlay.setAttribute('aria-hidden', 'false');
}
function closeCart() {
  cartOverlay.classList.remove('open');
  cartOverlay.setAttribute('aria-hidden', 'true');
}
document.getElementById('open-cart').addEventListener('click', openCart);
document.getElementById('close-cart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', (event) => {
  if (event.target === cartOverlay) closeCart();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeCart();
});

document.getElementById('mobile-menu').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('open');
});
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => document.querySelector('.main-nav').classList.remove('open'));
});

// Der Warenkorb ist aktuell eine lokale Demo. Preise und Checkout werden erst
// nach Festlegung von Hersteller, Verkaufspreis und Zahlungsanbieter aktiviert.
function renderCart() {
  cartCount.textContent = cart.length;
  cartEmpty.hidden = cart.length > 0;
  cartItems.innerHTML = '';
  cart.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.textContent = item.product;
    const detail = document.createElement('small');
    detail.textContent = `Größe: ${item.size} · Name: ${item.name || 'ohne Personalisierung'}`;
    row.appendChild(detail);
    cartItems.appendChild(row);
  });
  cartTotal.textContent = 'Preis folgt';
}
renderCart();
