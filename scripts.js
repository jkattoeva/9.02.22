// let example2Button = document.getElementById("example2");
// example2Button.onclick = function () {
//   alert("Nice to meet you");
// };
// let example3Button = document.getElementById("example3");
// example3Button.onclick = function () {
//   alert("Nice to meet you");
// };

// example3Button.addEventListener("click", function () {
//   alert("Bye!");
// });

// let example4Button = document.getElementById("example4");
// example4Button.addEventListener("click", function () {
//   example4Button.textContent = "bye";
// });

// let example5Div = document.getElementById("example5");
// example5Div.addEventListener("click", function () {
//   alert(example5Div.textContent.length);
// });

// let num = 0;
// let h1 = document.querySelector("h1");
// let resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", function () {
//   h1.textContent = 0;
// });

// let resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", function () {
//   h1.textContent = num;
// });

// let increaseButton = document.querySelector("#increase");
// increaseButton.addEventListener("click", function () {
//   num = num + 1;
//   h1.textContent = num;
// });
// let decreaseButton = document.querySelector("#decrease");
// decreaseButton.addEventListener("click", function () {
//   num = num - 1;
//   h1.textContent = num;
// });





let example6Button = document.querySelector("#example6");
example6Button.addEventListener("click", function () {
  example6Button.style.color = `rgb(${Math.random() * 255} , ${Math.random() * 255}, ${Math.random() * 255})`;
});

let example7Button = document.querySelector("#example7");
example6Button.addEventListener("click", function () {
  example7Button.remove();
});




