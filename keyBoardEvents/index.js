const btn=document.querySelector("button");
const inp=document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     if(event.code=="KeyA" ||event.code=="ArrowUp" ){
//         console.log(`character move in upward direction`);
//     }
//     else if(event.code=="KeyL" || event.code=="ArrowLeft"){
//         console.log(`character moves to left direction`);
//     }
//     else if(event.code=="KeyR" || event.code=="ArrowRight"){
//         console.log(`chatacter moves to right direction`);
//     }
//     else if(event.code=="KeyD"|| event.code=="ArrowDown" ){
//         console.log(`chacter moves downwords`);
//     }
//     else{
//         console.log("wrong key press");
//     }
   
// })

inp.addEventListener("keyup",function (event) {
    console.log(event.code);
})

