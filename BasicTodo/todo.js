let inp = document.querySelector("input");
let btn = document.querySelector("#add");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
  if (inp.value !== "") {
    let li = document.createElement("li");
    li.innerText = `${inp.value}`;

    let dlBtns = document.createElement("button");
    dlBtns.innerText = "Delete";
    dlBtns.classList.add("deleteBtn");

    li.append(dlBtns);
    ul.appendChild(li);
  }
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let list = event.target.parentElement;
    list.remove();
  } 
});

// let dlBtns=document.querySelectorAll(".deleteBtn");

// for (const delbtn of dlBtns) {
//     delbtn.addEventListener("click",()=>{
//         console.log("btn was click");
//     })
// }
