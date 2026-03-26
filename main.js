/* ── NAV SCROLL ── */
(function () {
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  /* ── MOBILE TOGGLE ── */
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      menu.classList.toggle('open');
    });
  }

  /* ── COOKIE CONSENT ── */
  const bar    = document.getElementById('cookie-bar');
  const accept = document.getElementById('cookie-accept');
  const decline= document.getElementById('cookie-decline');

  if (bar) {
    const consented = localStorage.getItem('meridian_cookie');
    if (consented) bar.classList.add('hidden');

    if (accept) {
      accept.addEventListener('click', () => {
        localStorage.setItem('meridian_cookie', 'accepted');
        bar.classList.add('hidden');
      });
    }
    if (decline) {
      decline.addEventListener('click', () => {
        localStorage.setItem('meridian_cookie', 'declined');
        bar.classList.add('hidden');
      });
    }
  }

  /* ── ACTIVE NAV LINK ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── CONTACT FORM ── */
  const cf = document.getElementById('contact-form');
  if (cf) {
    cf.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = cf.querySelector('button[type=submit]');
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#3a7a4e';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.disabled = false;
        cf.reset();
      }, 3500);
    });
  }

  /* ── NEWSLETTER FORM ── */
  const nf = document.getElementById('newsletter-form');
  if (nf) {
    nf.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = nf.querySelector('button[type=submit]');
      btn.textContent = 'Subscribed ✓';
      btn.style.background = '#3a7a4e';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
        btn.disabled = false;
        nf.reset();
      }, 3500);
    });
  }
})();
