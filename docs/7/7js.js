function toggleMenu() {
  const menu = document.getElementById("side-menu");
  const currentLeft = getComputedStyle(menu).left;

  if (currentLeft === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  if (menuIcon) {
    menuIcon.addEventListener("click", toggleMenu);
  }

  window.addEventListener("scroll", () => {
    const menu = document.getElementById("side-menu");
    const currentLeft = getComputedStyle(menu).left;

    if (currentLeft === "0px") {
      menu.style.left = "-250px";
    }
  });
});
