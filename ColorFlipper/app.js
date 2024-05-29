let btn=document.querySelector("button");
let body=document.querySelector("body");
btn.innerText="Color"
btn.addEventListener("click",function(){
    if(this.style.backgroundColor=="orange"){
        this.style.backgroundColor="green";
        this.style.color="orange";
        console.log(this.style.color);
        btn.innerText=`${this.style.color}`;
        body.style.backgroundColor="orange"; 
    }
    else{
        this.style.backgroundColor="orange";
        this.style.color="green"
        btn.innerText=`${this.style.color}`;
        body.style.backgroundColor="green";
        console.log(this.style.color);
    }
})

