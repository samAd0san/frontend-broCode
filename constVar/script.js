const PI = 3.1415;

let radius; 
let circumference;

document.getElementById("btn1").onclick = function() {
    radius = document.getElementById("ip1").value;

    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("two").textContent = circumference;
}