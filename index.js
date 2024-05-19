const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("reset");
const CountLabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick= function(){
count++;
CountLabel.textContent = count;
}

decreaseBtn.onclick=function(){
    count--;
    CountLabel.textContent = count;
}

resetBtn.onclick = function(){
    count=0;
    CountLabel.textContent = count;
}