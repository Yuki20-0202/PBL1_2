const keyword = localStorage.getItem("searchKeyword");
const pages = [
  { title: "京都ガイド", url: "../20/20html.html", keywords: ["京都", "文化", "観光"] },
  { title: "情報サイト", url: "../7/7html.html", keywords: ["運行", "災害", "情報"] },
  { title: "日本語翻訳", url: "../2/2html.html", keywords: ["翻訳", "あいさつ", "言葉"] },
  { title: "求人情報", url: "../jobs1/jobs1.html", keywords: ["仕事", "観光地", "バイト"] }
];

const results = pages.filter(page =>
  page.keywords.some(k => k.includes(keyword))
);

const container = document.getElementById("results-container");
if (results.length > 0) {
  container.innerHTML = "<ul>" + results.map(r =>
    `<li><a href="${r.url}">${r.title}</a></li>`
  ).join("") + "</ul>";
} else {
  container.innerHTML = "<p>一致する情報が見つかりませんでした。</p>";
}
