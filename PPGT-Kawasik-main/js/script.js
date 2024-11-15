// Ambil elemen navbar dan hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.getElementById("hamburger-menu");

// Fungsi untuk toggle menu navbar pada mobile
hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// Fungsi untuk menutup navbar saat klik di luar area navbar
document.addEventListener("click", (event) => {
  if (
    !navbarNav.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    navbarNav.classList.remove("active");
  }
});

// Dropdown functionality tetap sama
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Event listener untuk toggle dropdown
dropdownToggle.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah link agar tidak berpindah
  dropdownMenu.classList.toggle("show");
});

// Menutup dropdown jika klik di luar elemen dropdown
document.addEventListener("click", function (e) {
  if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});
