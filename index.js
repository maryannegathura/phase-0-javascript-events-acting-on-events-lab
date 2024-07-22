// Your code here
// helpers.js

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let leftPosition = parseInt(dodger.style.left) || 0;
    leftPosition -= 1;
    dodger.style.left = `${leftPosition}px`;
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let leftPosition = parseInt(dodger.style.left) || 0;
    leftPosition += 1;
    dodger.style.left = `${leftPosition}px`;
  }
  
  module.exports = {
    moveDodgerLeft,
    moveDodgerRight
  };
  