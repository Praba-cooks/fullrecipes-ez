document.addEventListener('DOMContentLoaded', () => {
    // 1. Selector Assignments
    const searchInput = document.getElementById('recipeSearch');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');

    // 2. State Engine Tracking
    let currentFilter = 'all';
    let searchQuery = '';

    // 3. Combined Filter/Search Function
    function filterRecipes() {
        recipeCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category') || '';
            const cardText = card.textContent.toLowerCase();

            const matchesTab = (currentFilter === 'all' || cardCategory === currentFilter);
            const matchesSearch = cardText.includes(searchQuery);

            if (matchesTab && matchesSearch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // 4. Tab Click Listeners
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Fixed assignment to get the correct filter token values
            currentFilter = button.getAttribute('data-filter');
            filterRecipes();
        });
    });

    // 5. Live Search Sorter
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            filterRecipes();
        });
    }
});
