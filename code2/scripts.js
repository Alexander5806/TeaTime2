document.addEventListener('DOMContentLoaded', (event) => {
    const filters = document.querySelectorAll('.filter');
    const teaItems = document.querySelectorAll('.tea-item');
    const blogGrid = document.querySelector('.blog-grid');

    function shuffleBlogPosts() {
        const blogPosts = Array.from(blogGrid.children);
        for (let i = blogPosts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [blogPosts[i], blogPosts[j]] = [blogPosts[j], blogPosts[i]];
        }
        blogGrid.innerHTML = '';
        blogPosts.forEach(post => blogGrid.appendChild(post));
    }

    shuffleBlogPosts();

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
document.querySelector('.cta').addEventListener('click', function(e) {
    // Якщо тут є e.preventDefault(), то це блокує стандартну поведінку посилання
    // e.preventDefault();
});
