(function () {
  // Close mobile menu when user clicks a link
  const menu = document.getElementById('navbarMenu');
  if (!menu) return;

  // Bootstrap 5 collapse instance
  const collapseEl = document.getElementById('navbarNav');

  menu.addEventListener('click', function (e) {
    const target = e.target;
    if (!target) return;

    const link = target.closest('a[data-bs-toggle], a.nav-link');
    if (!link) return;

    // Close collapse right away for the "tap one item -> close" feel
    if (collapseEl) {
      try {
        // eslint-disable-next-line no-undef
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl, {
          toggle: false
        });
        bsCollapse.hide();
      } catch (err) {
        // Fallback: close by toggling classes
        collapseEl.classList.remove('show');
      }
    }
  });
})();

