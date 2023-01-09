const grid_cont = document.querySelector('#grid-cont');

// create n x n grid layout
function createGrid(n) {
  let grid_n = n * n;
  for (let i = 1; i <= grid_n; i++) {
    let grid_item = document.createElement('div');
    grid_item.classList.add('grid-item');
    grid_cont.appendChild(grid_item);
    grid_cont.style.cssText = `grid-template-columns: repeat(${n}, auto);`;
  }
}

createGrid(16);
