// Ambil elemen yang diperlukan
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Pastikan elemen ditemukan
if (navbarNav && hamburger) {
  // Tambahkan event listener pada hamburger menu untuk toggle class "active"
  hamburger.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
  });

  // Klik di luar navbar untuk menutup menu
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
}

// Slider Section
let slideIndex = 0;

// Fungsi untuk menampilkan slide berdasarkan indeks saat ini
function showSlides(n) {
  const slides = document.querySelectorAll(".myslider .slide");

  // Pastikan slides ditemukan
  if (slides.length > 0) {
    // Periksa agar indeks tetap berada di dalam rentang
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Sembunyikan semua slide
    slides.forEach((slide) => (slide.style.display = "none"));

    // Tampilkan slide yang sesuai dengan slideIndex
    slides[slideIndex].style.display = "block";
  }
}

// Fungsi untuk mengubah ke slide berikutnya atau sebelumnya
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Tampilkan slide pertama kali
showSlides(slideIndex);

// Otomatis berpindah slide setiap 5 detik
setInterval(() => {
  plusSlides(1);
}, 5000); // Ganti setiap 5 detik

// Fungsi untuk memeriksa apakah elemen terlihat di layar
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Menambahkan kelas 'visible' saat Organisasi section terlihat
window.addEventListener("scroll", function () {
  const organisasiSection = document.querySelector("#organisasi");
  if (isElementInViewport(organisasiSection)) {
    organisasiSection.classList.add("visible");
  }
});
