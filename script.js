// console.log('wsup');
// console.log('This is me');
// console.log('just added a remote repo');

// window.alert('ahlan wa sahlan');

// document.getElementById("one").textContent = "This is the heading";
// document.getElementById("p1").textContent = "This is the first Paragraph";

/* let name = 'Sohaib Samad';
let age = 20; 
let isStudent = true; 

document.getElementById("one").textContent = `Student Information`;

document.getElementById("p1").textContent = `Name: ${name}`;
document.getElementById("p2").textContent = `Age: ${age}`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`; */

let username;

document.getElementById("button1").onclick = function() {
   username = document.getElementById("input1").value;
   console.log(username);
   document.getElementById("one").textContent = `Hello, ${username}`;
}