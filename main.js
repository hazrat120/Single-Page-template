document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    const dropdown = item.querySelector(".dropdown-menu");

    if (dropdown) {
      item.addEventListener("mouseenter", () => {
        dropdown.style.display = "block";
      });

      item.addEventListener("mouseleave", () => {
        dropdown.style.display = "none";
      });
    }
  });
});
