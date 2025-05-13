let currentPage = 1;
const totalPages = 3;

const contentDivs = {
  1: document.getElementById('page1'),
  2: document.getElementById('page2'),
  3: document.getElementById('page3')
};

const pageLinks = document.querySelectorAll('.pagination-box__link');
const prevButton = document.querySelector('.pagination-box__text--prev');
const nextButton = document.querySelector('.pagination-box__text--next');

function updateView() {
  // Hide all pages
  for (let i = 1; i <= totalPages; i++) {
    contentDivs[i].classList.remove('active-page');
  }
  // Show current page
  contentDivs[currentPage].classList.add('active-page');

  // Update pagination highlight
  document.querySelectorAll('.pagination-box__item').forEach(item => {
    item.classList.remove('pagination-box__item--active');
  });

  document.querySelector(`.pagination-box__link[data-page="${currentPage}"]`)?.parentElement.classList.add('pagination-box__item--active');

  // Enable/disable prev/next
  prevButton.classList.toggle('disabled', currentPage === 1);
  nextButton.classList.toggle('disabled', currentPage === totalPages);
}

// Page number click
pageLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = parseInt(link.dataset.page);
    if (!isNaN(page)) {
      currentPage = page;
      updateView();
    }
  });
});

// Prev button
prevButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    updateView();
  }
});

// Next button
nextButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentPage < totalPages) {
    currentPage++;
    updateView();
  }
});

// Initial display
updateView();