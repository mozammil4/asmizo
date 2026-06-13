window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// CSS mein ye transition add kar dein (style.css mein):
// .card { opacity: 0; transform: translateY(50px); transition: all 0.6s ease-out; }