let bookmarks = JSON.parse(window.localStorage.getItem("bookmarks"));
let rows = bookmarks.map((b) => ({ title: b.title, url: b.url }));
let container = document.querySelector(".bookmark-page-container");
console.log(rows);
container.innerHTML = `
<main class="bookmarks">
  <hr class="bookmarks__info-row-separator" />
  <section class="bookmarks__container">
    ${rows
      .map(
        (item) => `
          <section class="bookmarks__info-row">
            <a class="bookmarks__info-row-title" href="${item.url}">${item.title}</a>
          </section>
          <hr class="bookmarks__info-row-separator"/>`
      )
      .join(" ")}
  </section>
</main>;
`;
