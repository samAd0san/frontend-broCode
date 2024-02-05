const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const increase = document.getElementById("incrementbtn");

const counterLayout = document.getElementById("counter");
let count = 0;

increase.onclick = function() {
    count++;
    counterLayout.textContent = count;
}

decrease.onclick = function() {
    count--;
    counterLayout.textContent = count;
}

reset.onclick = function() {
    count = 0;
    counterLayout.textContent = count;
}