// --- Minimalist Portfolio Interactive Scripting Controller ---

document.addEventListener('DOMContentLoaded', () => {

    // 1. Cross-out Checking System Component Logic
    const listRows = document.querySelectorAll('.list-row');

    listRows.forEach(row => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        const label = row.querySelector('label');

        row.addEventListener('click', (e) => {
            if (e.target !== checkbox && e.target !== label) {
                checkbox.checked = !checkbox.checked;
            }
            updateCheckState(row, checkbox.checked);
        });

        checkbox.addEventListener('change', () => {
            updateCheckState(row, checkbox.checked);
        });
    });

    function updateCheckState(element, isChecked) {
        if (isChecked) {
            element.classList.add('line-through-fade');
        } else {
            element.classList.remove('line-through-fade');
        }
    }

    // 2. Comprehensive Search and Tab Categorization Filters
    const searchBar = document.getElementById('recipeSearch');
    const filterButtons = document.querySelectorAll('.nav-filter-btn');
    const recipes = document.querySelectorAll('.clean-recipe-card');

    function applyUnifiedFilters() {
        const textQuery = searchBar.value.toLowerCase().trim();
        const targetedCategory = document.querySelector('.nav-filter-btn.active').getAttribute('data-filter');

        recipes.forEach(recipe => {
            const recipeCategory = recipe.getAttribute('data-category');
            const dataDump = recipe.textContent.toLowerCase();

            const isMatchedTab = (targetedCategory === 'all' || recipeCategory === targetedCategory);
            const isMatchedSearch = (textQuery === '' || dataDump.includes(textQuery));

            if (isMatchedTab && isMatchedSearch) {
                recipe.style.display = "block";
                recipe.style.opacity = "1";
            } else {
                recipe.style.display = "none";
                recipe.style.opacity = "0";
            }
        });
    }

    // Interactive Core Triggers
    searchBar.addEventListener('input', applyUnifiedFilters);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyUnifiedFilters();
        });
    });
});
