const form=document.querySelector("form");
const inp=document.querySelector("input");
const user=document.querySelector("#user");

user.addEventListener("change",function(){
    console.log(`input change`);
    console.log(`final value "${this.value}"`);
})

user.addEventListener("input",function(){
    console.log(`input change`);
    console.log(`final value "${this.value}"`);
})

form.addEventListener("submit",function(event){
    event.preventDefault();
   const user=this.elements[0];
   const pass=this.elements[1];

   console.log(user.value);
   console.log(pass.value);

})