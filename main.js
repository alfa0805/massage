let adviseid =document.getElementById('adviseid');
let message =document.getElementById('advise');
let btn =document.getElementById('btn');

btn.addEventListener('click',function(){
    fetch('https://api.adviceslip.com/advice').then(res=>res.json())
    .then(res=>{
        adviseid.textContent = res.slip.id;
        message.textContent = res.slip.advice;
    })
})