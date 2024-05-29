const form=document.querySelector("form");
const username=document.querySelector("#username");
const password=document.querySelector("#password")
form.addEventListener("submit",function (event){
    console.dir(form)
    event.preventDefault();
    const user=this.elements[0];
    const pass=this.elements[1]
    console.log(`${user.value}`);
    console.log(`${pass.value}`);
    username.innerText=`username :${user.value}`;
    password.innerText=`password :${pass.value}`
})