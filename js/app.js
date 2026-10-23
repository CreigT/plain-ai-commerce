// Load config from API and populate pages
async function loadConfig() {
  try {
    const res = await fetch('/api/config');
    const config = await res.json();

    // Update app name everywhere
    document.querySelectorAll('#app-name').forEach(el => {
      el.textContent = config.appName || 'Plain AI Commerce';
    });
    document.title = (config.appName || 'Plain AI Commerce') + document.title.replace('Plain AI Commerce', '');

    // Support email
    const support = document.getElementById('support');
    if (support && config.supportEmail) {
      support.textContent = 'Support: ' + config.supportEmail;
    }

    // Products on shop page
    const productsEl = document.getElementById('products');
    if (productsEl && config.products) {
      productsEl.innerHTML = config.products.map(p => `
        <div class="card">
          <h3>${p.name}</h3>
          <p class="price">$${p.price}</p>
          <p>Instant digital access.</p>
          <a href="${p.link || '#'}" class="cta" target="_blank">Buy Now</a>
        </div>
      `).join('');
    }

    // Membership
    if (config.member) {
      const nameEl = document.getElementById('member-name');
      const priceEl = document.getElementById('member-price');
      const linkEl = document.getElementById('member-link');
      if (nameEl) nameEl.textContent = config.member.name;
      if (priceEl) priceEl.textContent = '$' + config.member.price + ' / month';
      if (linkEl) linkEl.href = config.member.link || '#';
    }
  } catch (e) {
    console.log('Config load failed (demo mode)', e);
  }
}

// Check access cookie for simple paywall
function hasAccess() {
  return document.cookie.includes('access=granted');
}

document.addEventListener('DOMContentLoaded', loadConfig);
