// Scroll reveal for skill cards
function reveal() {
  const cards = document.querySelectorAll('.skill-card');
  const trigger = window.innerHeight - 100;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) card.classList.add('visible');
  });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
