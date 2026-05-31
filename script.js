// --- Accessible Portfolio Scripting Controller ---

document.addEventListener('DOMContentLoaded', () => {

    // 1. Large Target Row Click Handler for Checkboxes
    const listRows = document.querySelectorAll('.list-row');

    listRows.forEach(row => {
        const checkbox = row.querySelector('.accessible-checkbox');
        const label = row.querySelector('label');

        row.addEventListener('click', (e) => {
            if (e.target !== checkbox && e.target !== label) {
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        });

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                row.classList.add('line-through-fade');
            } else {
                row.classList.remove('line-through-fade');
            }
        });
    });

    // 2. High-Readability Filter Engine
    const filterButtons = document.querySelectorAll('.nav-filter-btn');
    const recipes = document.querySelectorAll('.clean-recipe-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetedCategory = button.getAttribute('data-filter');

            recipes.forEach(recipe => {
                const recipeCategory = recipe.getAttribute('data-category');
                if (targetedCategory === 'all' || recipeCategory === targetedCategory) {
                    recipe.style.display = "block";
                } else {
                    recipe.style.display = "none";
                }
            });
        });
    });
});
