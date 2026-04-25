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

  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('sent') === 'true') {
    var toast = document.getElementById('success-toast');
    if (toast) {
      toast.classList.add('toast--visible');
      setTimeout(function () {
        toast.classList.remove('toast--visible');
      }, 5000);
    }
    if (window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
})();