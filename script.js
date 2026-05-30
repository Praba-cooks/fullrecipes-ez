// --- Simple Senior-Friendly Category Selector ---

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Clear active design states from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Set the newly selected button to high-contrast blue state
            button.classList.add('active');

            // 3. Match the data-filter label code
            const targetCategory = button.getAttribute('data-filter');

            // 4. Update display visibility states immediately
            recipeCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (cardCategory === targetCategory) {
                    card.style.display = "block";
                    // Brief delay ensures smooth fade appearance 
                    setTimeout(() => card.style.opacity = "1", 10);
                } else {
                    card.style.display = "none";
                    card.style.opacity = "0";
                }
            });
        });
    });
});
