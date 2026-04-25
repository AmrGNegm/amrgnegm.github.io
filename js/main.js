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

  var forms = document.querySelectorAll('[data-lead-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.btn');
      var originalText = btn.textContent;
      btn.textContent = 'Thanks! Check your email.';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  });

  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('.btn');
      var originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }
})();