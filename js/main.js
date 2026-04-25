(function () {
  'use strict';

  var navbarToggle = document.querySelector('.navbar__toggle');
  var navbarLinks = document.querySelector('.navbar__links');

  if (navbarToggle && navbarLinks) {
    navbarToggle.addEventListener('click', function () {
      navbarToggle.classList.toggle('active');
      navbarLinks.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
      if (!navbarToggle.contains(e.target) && !navbarLinks.contains(e.target)) {
        navbarToggle.classList.remove('active');
        navbarLinks.classList.remove('active');
      }
    });
  }

  var dropdownParents = document.querySelectorAll('.dropdown-parent');
  dropdownParents.forEach(function (parent) {
    parent.querySelector(':scope > a').addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        parent.classList.toggle('open');
      }
    });
  });

  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll('.navbar__links a');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && currentPath.includes(href.replace('../', '').replace('./', '')) && href !== '#') {
      link.classList.add('active');
    }
  });

  document.getElementById('copyright-year').textContent = new Date().getFullYear();

  var forms = document.querySelectorAll('[data-formsubmit]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.btn');
      var originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      var formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (response) {
        if (response.ok) {
          btn.textContent = 'Sent! Thanks!';
          form.reset();
        } else {
          btn.textContent = 'Error. Try again.';
        }
      })
      .catch(function () {
        btn.textContent = 'Error. Try again.';
      })
      .finally(function () {
        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 3000);
      });
    });
  });
})();