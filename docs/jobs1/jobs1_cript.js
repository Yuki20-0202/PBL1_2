document.querySelector('.scroll-to-post').addEventListener('click', () => {
  document.getElementById('post-request').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.querySelector(".scroll-to-post");
  const postSection = document.getElementById("post-request");

  if (scrollButton && postSection) {
    scrollButton.addEventListener("click", () => {
      postSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.querySelector(".scroll-to-post");
  const postSection = document.getElementById("post-request");
  const topButton = document.querySelector(".scroll-to-top");
  const header = document.querySelector("header");

  // 求人掲載依頼へスクロール
  if (scrollButton && postSection) {
    scrollButton.addEventListener("click", () => {
      postSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ページ最上部（観光地求人情報）へ戻る
  if (topButton && header) {
    topButton.addEventListener("click", () => {
      header.scrollIntoView({ behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 400) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    });
  }
});
