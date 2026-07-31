/**
 * PRAJÑA VERSE V2 — Authentication & Session Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const userDisplayName = document.getElementById('userDisplayName');

  // Handle Signup
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = document.getElementById('regName').value;
      const userEmail = document.getElementById('regEmail').value;

      const user = { name: userName, email: userEmail };
      localStorage.setItem('pv_user', JSON.stringify(user));
      window.location.href = 'dashboard.html';
    });
  }

  // Handle Login
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userEmail = document.getElementById('loginEmail').value;

      const user = { name: userEmail.split('@')[0], email: userEmail };
      localStorage.setItem('pv_user', JSON.stringify(user));
      window.location.href = 'dashboard.html';
    });
  }

  // Display User on Dashboard
  if (userDisplayName) {
    const activeUser = JSON.parse(localStorage.getItem('pv_user') || '{}');
    if (!activeUser.name) {
      window.location.href = 'login.html';
    } else {
      userDisplayName.textContent = activeUser.name;
      renderUserBookmarks();
    }
  }
});

/**
 * Renders bookmarked artifacts on the Dashboard
 */
function renderUserBookmarks() {
  const container = document.getElementById('savedItemsContainer');
  if (!container) return;

  const savedIds = JSON.parse(localStorage.getItem('pv_wishlist') || '[]');
  
  if (savedIds.length === 0) {
    container.innerHTML = `<p class="text-secondary small m-0">No artifacts bookmarked yet.</p>`;
    return;
  }

  const savedProducts = PRAJNA_DATA.products.filter(p => savedIds.includes(p.id));
  
  container.innerHTML = savedProducts.map(p => `
    <div class="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary border-opacity-25">
      <div>
        <h4 class="h6 text-light m-0">${p.title}</h4>
        <small class="text-secondary">${p.category}</small>
      </div>
      <span class="text-gold fw-bold">${p.price}</span>
    </div>
  `).join('');
}

/**
 * Log out user session
 */
function logoutUser() {
  localStorage.removeItem('pv_user');
  window.location.href = 'login.html';
}
