document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.querySelector(".scroll-to-post");
  const postSection = document.getElementById("post-request");

  if (scrollButton && postSection) {
    scrollButton.addEventListener("click", () => {
      postSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", () => {
    const menu = document.getElementById("side-menu");
    if (menu && menu.style.left === "0px") {
      menu.style.left = "-250px";
    }
  });
});

function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if (menu) {
    menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
  }
}

function performSearch() {
  const keyword = document.getElementById("search-input").value.trim();
  if (keyword) {
    localStorage.setItem("searchKeyword", keyword);
    window.location.href = "/docs/20/search/search_results.html";
  }
}
