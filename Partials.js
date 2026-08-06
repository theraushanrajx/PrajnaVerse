// ============================================================
// PrajñaVerse — shared nav + footer
// Injects identical header/footer markup into every page from
// one place, so pages can never drift out of sync with each
// other. Runs immediately (not on DOMContentLoaded) because the
// <div id="site-header">/<div id="site-footer"> placeholders
// are already parsed by the time this script tag is reached —
// it's loaded at the end of <body>, right before main.js.
// ============================================================
(function () {
  const NAV_LINKS = [
    { href: "index.html#about", label: "About", match: "index.html" },
    { href: "index.html#skills", label: "Skills", match: "index.html" },
    { href: "index.html#work", label: "Work", match: "index.html" },
    { href: "products.html", label: "Products", match: "products.html" },
    { href: "blog.html", label: "Blog", match: "blog.html" },
    { href: "index.html#resume", label: "Resume", match: "index.html" },
    { href: "contact.html", label: "Contact", match: "contact.html" },
  ];

  const currentPage = (location.pathname.split("/").pop() || "index.html");
  // blog-post.html should highlight "Blog" as active, same as blog.html
  const activePage = currentPage === "blog-post.html" ? "blog.html" : currentPage;

  const navHtml = `
    <div class="container">
      <a href="index.html#top" class="brand">Prajña<span>Verse</span></a>
      <ul class="nav-links">
        ${NAV_LINKS.map(
          (l) => `<li><a href="${l.href}"${l.match === activePage ? ' class="active"' : ""}>${l.label}</a></li>`
        ).join("")}
      </ul>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>
    </div>
  `;

  const footerHtml = `
    <div class="container">
      <p>© <span id="year"></span> Raushan Raj · PrajñaVerse. All rights reserved.</p>
      <div class="social-row">
        <a href="mailto:theraushanrajx@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/raushanraj02">LinkedIn</a>
        <a href="https://github.com/theraushanrajx">GitHub</a>
      </div>
    </div>
  `;

  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = navHtml;
  if (footerEl) footerEl.innerHTML = footerHtml;
})();
