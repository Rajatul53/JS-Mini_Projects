var count =0;

const counter = document.querySelector(".count");
const Inc = document.getElementById("btn-I");
const Dec = document.getElementById("btn-D");
const Res = document.getElementById("btn-R");

Inc.addEventListener("click",function(){
    count+=1;
    counter.textContent = count;
    console.log(count);
})

Dec.addEventListener("click",function(){
    count-=1;
    counter.textContent = count;
    console.log(count);
})

Res.addEventListener("click",function(){
    count=0;
    counter.textContent = count;
    console.log(count);
})