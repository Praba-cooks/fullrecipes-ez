// --- Simple Senior-Friendly Category Selector ---

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove active color state from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Add high-contrast active color to the clicked button
            button.classList.add('active');

            // 3. Find out which category they want to view
            const targetCategory = button.getAttribute('data-filter');

            // 4. Show or Hide recipe blocks smoothly
            recipeCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (targetCategory === 'all' || cardCategory === targetCategory) {
                    card.style.display = "block";
                    card.style.opacity = "1";
                } else {
                    card.style.display = "none";
                    card.style.opacity = "0";
                }
            });
        });
    });
});
