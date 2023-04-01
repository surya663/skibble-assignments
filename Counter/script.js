const counter =document.querySelector(".counter");
const inc =document.getElementById("increment");
const res =document.getElementById("reset");
const dec =document.getElementById("decrement");

let count =0;


inc.addEventListener("click" , () => {
    count++;
    counter.textContent = count;
});

dec.addEventListener("click" , () => {
    count--;
    counter.textContent = count;
});

res.addEventListener("click" , () => {
    count =0;
    counter.textContent = count;
});