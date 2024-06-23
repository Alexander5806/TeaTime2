document.addEventListener('DOMContentLoaded', (event) => {
    const filters = document.querySelectorAll('.filter');
    const teaItems = document.querySelectorAll('.tea-item');
    const teaGrid = document.querySelector('.tea-grid');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function updateTeaDisplay(filterType) {
        let count = 0;
        let itemsArray = Array.from(teaItems);

        if (filterType === 'all') {
            itemsArray = shuffleArray(itemsArray);
        }

        itemsArray.forEach(item => {
            if (filterType === 'all' || item.getAttribute('data-type') === filterType) {
                if (count < 4) {
                    item.style.display = 'block';
                    count++;
                } else {
                    item.style.display = 'none';
                }
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Show only the first 4 tea items initially
    updateTeaDisplay('all');

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();

            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const filterType = filter.getAttribute('data-filter');
            updateTeaDisplay(filterType);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});

// Get the modal window and the button to open it
var modal = document.querySelector('.modal');
var openModalButton = document.querySelector('.open-modal');

// Add an event listener to the button to open the modal window
openModalButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Add an event listener to the close button to close the modal window
document.querySelector('.close').addEventListener('click', function() {
  modal.style.display = 'none';
});

// Add an event listener to the modal window to close it when the user clicks outside of it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
