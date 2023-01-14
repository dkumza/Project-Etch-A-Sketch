// buttons to create 4x4,8x8... grid layout
const btn_4x4 = document.querySelector('#btn-4x4');
const btn_8x8 = document.querySelector('#btn-8x8');
const btn_16x16 = document.querySelector('#btn-16x16');
const btn_32x32 = document.querySelector('#btn-32x32');
const btn_custom = document.querySelector('#btn-custom');

// 4x4
btn_4x4.addEventListener('click', () => {
  createGrid(4);
  const grid_items = document.querySelectorAll('div.grid-item');
  grid_items.forEach((grid_items) =>
    grid_items.addEventListener('mouseover', () => {
      grid_items.style.cssText = `background-color: #A3BE8C;`;
    })
  );
});

// 8x8
btn_8x8.addEventListener('click', () => {
  createGrid(8);
  const grid_items = document.querySelectorAll('div.grid-item');
  grid_items.forEach((grid_items) =>
    grid_items.addEventListener('mouseover', () => {
      grid_items.style.cssText = `background-color: #EBCB8B;`;
    })
  );
});

// 16x16
btn_16x16.addEventListener('click', () => {
  createGrid(16);
  const grid_items = document.querySelectorAll('div.grid-item');
  grid_items.forEach((grid_items) =>
    grid_items.addEventListener('mouseover', () => {
      grid_items.style.cssText = `background-color: #D08770;`;
    })
  );
});

// 32x32
btn_32x32.addEventListener('click', () => {
  createGrid(32);
  const grid_items = document.querySelectorAll('div.grid-item');
  grid_items.forEach((grid_items) =>
    grid_items.addEventListener('mouseover', () => {
      grid_items.style.cssText = `background-color: #BF616A;`;
    })
  );
});

// custom grid layout, entered by user
btn_custom.addEventListener('click', () => {
  let nValue = prompt(
    `enter value (n (max value of n <= 100)) of squares per side for new grid*: `
  );
  if (nValue <= 100) {
    createGrid(nValue);
  } else {
    alert(`n value is too big (n > 100), please try again!`);
  }
  const grid_items = document.querySelectorAll('div.grid-item');
  grid_items.forEach((grid_items) =>
    grid_items.addEventListener('mouseover', () => {
      grid_items.style.cssText = `background-color: ${randomCssRgba()};`;
    })
  );
});

// function - create n x n grid layout
const grid_cont = document.querySelector('#grid-cont');
function createGrid(n) {
  removeChildItems();
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

// remove all child items from created grid...
function removeChildItems() {
  while (grid_cont.firstChild) {
    grid_cont.removeChild(grid_cont.firstChild);
  }
}

// create random color
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomByte = () => randomNumber(0, 255);
const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2);
const randomCssRgba = () =>
  `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(
    ','
  )})`;
