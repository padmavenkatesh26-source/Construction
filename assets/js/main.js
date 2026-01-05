// Mobile menu toggle
(() => {
  const toggle = document.querySelector('.navToggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

// Footer year
(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

// Gallery modal (projects page)
(() => {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  if (!modal || !modalImg) return;

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || "Project preview";
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-modal');
      const alt = btn.getAttribute('data-alt') || "Project preview";
      if (src) openModal(src, alt);
    });
  });
  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
})();