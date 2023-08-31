const colorText = document.querySelector("#color-text");
const btn = document.querySelector("#btn");

const colors = ["red", "blue", "green", "pink", "gray"];
let counter = 0;
let intervalId = null;

function changeContent() {
  colorText.style.color = colors[counter];
  counter++;
  if (counter >= colors.length) {
    counter = 0;
  }
  colorText.innerText = counter
}

btn.addEventListener("click", function () {
  if (intervalId === null) {
    intervalId = setInterval(changeContent, 2000);
  } else {
    clearInterval(intervalId);
    intervalId = null;
  }
  changeContent();

  
});

setTimeout(function () {
  clearInterval(intervalId);
  intervalId = null;
}, 10000);
