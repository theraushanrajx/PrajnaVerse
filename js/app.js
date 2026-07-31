/**
 * PRAJÑA VERSE V2 — Core Application Dispatcher
 */

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
});

/**
 * Renders featured artifacts on the index page
 */
function renderFeaturedProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid || typeof PRAJNA_DATA === 'undefined') return;

  grid.innerHTML = PRAJNA_DATA.products.map(p => `
    <div class="col-md-4 animate-fade-in">
      <div class="pv-card p-4 h-100 d-flex flex-column justify-content-between">
        <div>
          <span class="badge bg-warning text-dark mb-2">${p.category}</span>
          <h3 class="h5 text-light fw-bold">${p.title}</h3>
          <p class="text-secondary small">${p.description}</p>
        </div>
        <div class="pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center mt-3">
          <span class="text-gold fw-bold h5 mb-0">${p.price}</span>
          <a href="products.html" class="btn btn-outline-warning btn-sm">View Details</a>
        </div>
      </div>
    </div>
  `).join('');
}
