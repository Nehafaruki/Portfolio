// Dark Mode Toggle
const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});


// Contact form (just a dummy handler)
let contactForm = prompt('Enter your email details:');
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for reaching out! ');
  this.reset();
});


