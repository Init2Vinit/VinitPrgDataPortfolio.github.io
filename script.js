// Select all project cards
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Collapse any other open cards
    cards.forEach(c => {
      if(c !== card) c.classList.remove('active');
    });
    // Toggle this card
    card.classList.toggle('active');
  });
});
