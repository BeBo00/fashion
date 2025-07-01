

const images = document.querySelectorAll(".gallery img");
  const popup = document.getElementById("image-popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.getElementById("close-popup");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let currentIndex = 0;

  function showPopup(index) {
    popup.style.display = "flex";
    popupImg.src = images[index].src;
    currentIndex = index;
  }

  images.forEach((img, i) => {
    img.addEventListener("click", () => showPopup(i));
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    popupImg.src = images[currentIndex].src;
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    popupImg.src = images[currentIndex].src;
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });
function openMap() {
  // غير الإحداثيات حسب موقع الورشة الحقيقي
  window.open("https://maps.app.goo.gl/YTXgK5eKN7Ls5zzj6", "_blank");
}
  document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = 0;

    cart.forEach(item => {
      totalItems += item.quantity || 1;
    });

    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
      cartCountEl.textContent = totalItems;
    }
  });



  // كود تحديث عداد السلة
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = 0;
    cart.forEach(item => {
      totalItems += item.quantity || 1;
    });
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
      cartCountEl.textContent = totalItems;
    }
  }
//نهايته

  // إضافة منتج للسلة
  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  // عند تحميل الصفحة
  document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();

    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const card = this.closest('.product-card');
        const product = {
          name: card.querySelector('.product-name').textContent,
          price: card.querySelector('.product-price').textContent,
          image: card.querySelector('img').getAttribute('src'),
        };
        addToCart(product);
        alert('تمت إضافة المنتج للسلة');
      });
    });
  });
