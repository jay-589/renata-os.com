const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const demoForm = document.querySelector('#demo-access-form');
const demoStatus = document.querySelector('#demo-status');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(form).get('name').trim();
  status.textContent = `Thanks, ${name}. Your message is ready to send.`;
  form.reset();
});

demoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  demoStatus.textContent = 'Connect this form to your secure authentication provider to verify passwords and unlock the private demo.';
  demoForm.reset();
});
