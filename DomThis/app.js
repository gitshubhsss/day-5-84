const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const h2 = document.querySelector("h2");
btn.changeProp;

function changeColor() {
  console.log(this.innerText);
  this.style.backgroundColor = "blue";
}

btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h2.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
