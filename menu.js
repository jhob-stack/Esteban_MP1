const pages = [
  document.getElementById('page1'),
  document.getElementById('page2'),
  document.getElementById('page3')
];

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicator = document.getElementById('pageIndicator');

let currentPage = 0;

function updateBook() {
  pages.forEach((page, index) => {
    if (index < currentPage) {
      page.classList.add('flipped');
    } else {
      page.classList.remove('flipped');
    }

    page.scrollTop = 0;
  });

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
  indicator.textContent = `Page ${currentPage + 1} of ${pages.length}`;
}

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateBook();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateBook();
  }
});