function openMap() {
  // غير الإحداثيات حسب موقع الورشة الحقيقي
  window.open("https://maps.app.goo.gl/YTXgK5eKN7Ls5zzj6", "_blank");
}
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