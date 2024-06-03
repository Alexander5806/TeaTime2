document.addEventListener('DOMContentLoaded', (event) => {
    const filters = document.querySelectorAll('.filter');
    const teaItems = document.querySelectorAll('.tea-item');

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();

            filters.forEach(f => f.classList.remove('active'));

            filter.classList.add('active');
            
            const filterType = filter.getAttribute('data-filter');

            teaItems.forEach(item => {
                if (filterType === 'all' || item.getAttribute('data-type') === filterType) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
