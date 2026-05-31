// --- Dual-Action Search & Category Controller for Elders ---

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('recipeSearch');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');

    // Consolidated filter function managing both category tabs and text search
    function performFiltering() {
        const queryText = searchInput.value.toLowerCase().trim();
        const activeFilter = document.querySelector('.tab-btn.active').getAttribute('data-filter');

        recipeCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardContent = card.textContent.toLowerCase();

            // Match structural category values
            const matchesTab = (activeFilter === 'all' || cardCategory === activeFilter);
            // Match textual content parameters
            const matchesSearch = (queryText === '' || cardContent.includes(queryText));

            if (matchesTab && matchesSearch) {
                card.style.display = "block";
                card.style.opacity = "1";
            } else {
                card.style.display = "none";
                card.style.opacity = "0";
            }
        });
    }

    // Capture search text inputs instantly
    searchInput.addEventListener('input', performFiltering);

    // Capture category button selections
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            performFiltering();
        });
    });
});
