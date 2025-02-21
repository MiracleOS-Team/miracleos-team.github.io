var dropdownOpen = false

document
    .getElementById("mobile-dropdown")
    .addEventListener("click", function () {
  if (dropdownOpen) {
    closeDropdown()
  } else {
    openDropdown()
  }
})

function openDropdown() {
  document.getElementById("mobile-dropdown-menu").style.width = "100%";
  dropdownOpen = true;
}

function closeDropdown() {
  document.getElementById("mobile-dropdown-menu").style.width = "0";
  dropdownOpen = false;
}
