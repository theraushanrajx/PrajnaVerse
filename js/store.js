/**
 * PRAJÑA VERSE V2 — Store & Wishlist Engine
 */

/**
 * Renders the full catalog on products.html
 */
function renderFullCatalog() {
  const grid = document.getElementById('full-products-grid');
  if (!grid || typeof PRAJNA_DATA === 'undefined') return;

  grid.innerHTML = PRAJNA_DATA.products.map(p => `
    <div class="col-md-4">
      <div class="pv-card p-4 h-100 d-flex flex-column justify-content-between">
        <div>
          <span class="badge bg-warning text-dark mb-2">${p.category}</span>
          <h3 class="h5 text-light fw-bold">${p.title}</h3>
          <p class="text-secondary small">${p.description}</p>
        </div>
        <div class="pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center mt-3">
          <span class="text-gold fw-bold h5 mb-0">${p.price}</span>
          <button onclick="saveToWishlist('${p.id}')" class="btn btn-gold btn-sm">Bookmark</button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Saves item IDs to localStorage
 */
function saveToWishlist(productId) {
  let savedItems = JSON.parse(localStorage.getItem('pv_wishlist') || '[]');
  if (!savedItems.includes(productId)) {
    savedItems.push(productId);
    localStorage.setItem('pv_wishlist', JSON.stringify(savedItems));
    alert('Artifact bookmarked to your account library!');
  } else {
    alert('This artifact is already in your library.');
  }
}
