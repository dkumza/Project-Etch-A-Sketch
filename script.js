// create n x n grid layout
const grid_cont = document.querySelector('#grid-cont');
function createGrid(n) {
  let grid_n = n * n;
  for (let i = 1; i <= grid_n; i++) {
    let grid_item = document.createElement('div');
    grid_item.classList.add('grid-item');
    grid_cont.appendChild(grid_item);
    grid_cont.style.cssText = `
    grid-template-columns: repeat(${n}, auto);
    grid-template-rows: repeat(${n}, auto)
  `;
  }
}
createGrid(64);

// change background color of grid item on "hover"
const grid_items = document.querySelectorAll('div.grid-item');
grid_items.forEach((grid_items) =>
  grid_items.addEventListener('mouseover', (e) => {
    grid_items.style.cssText = `background-color: purple;`;
  })
);
