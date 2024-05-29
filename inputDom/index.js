let p = document.querySelector("p");
let inp = document.querySelector("input");

inp.addEventListener("keyup", function (event) {
  if (event.keyCode <= 90 && event.keyCode >= 65) {
    p.innerText = `${inp.value}`;
  }
});
