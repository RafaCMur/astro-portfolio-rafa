export function setupMobileMenu() {
  const toggleButton = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu a");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("active");
      toggleButton.textContent = menu.classList.contains("active")
        ? "✖"
        : "☰";
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        toggleButton.textContent = "☰";
      });
    });
  } else {
    console.error("Mobile menu elements not found");
  }
}
