// Keep the copyright year consistent across all pages.
document.querySelectorAll('[data-copyright-year]').forEach(function (element) {
  element.textContent = new Date().getFullYear();
});

// Let keyboard users dismiss the shared mobile navigation with Escape.
document.querySelectorAll('.site-mobile-menu').forEach(function (menu) {
  menu.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
});
