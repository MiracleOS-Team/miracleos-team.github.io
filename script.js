document.getElementById("desk-download-btn").onclick = function () {
  location.href = "download/index.html";
};
document.getElementById("desk-lrnmr-btn").onclick = function () {
  location.href = "features/index.html";
};
document.getElementById("home-mobile-btn").onclick = function () {
  location.href = "index.html";
};
document.getElementById("mobile-dropdown").addEventListener("click", function () {
  const element = document.getElementById("home-mobile-dropdown");
  element.classList.toggle("dropdown-hide");
});
const dropdownButton = document.getElementById('mobile-dropdown');
const dropdownMenu = document.getElementById('home-mobile-dropdown');
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});
