document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.querySelector(".scroll-to-post");
  const postSection = document.getElementById("post-request");

  if (scrollButton && postSection) {
    scrollButton.addEventListener("click", () => {
      postSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px"; // 閉じる
  } else {
    menu.style.left = "0px"; // 開く
  }
}
function goToPage(path) {
  window.location.href = path;
}