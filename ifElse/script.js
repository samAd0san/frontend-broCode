const input = document.getElementById("myinput");
const button = document.getElementById("mybutton");
const result = document.getElementById("result");

let age;

button.onclick = () => {
    age = input.value;
    age = Number(age);

    if(age < 18){
        result.textContent = `You must be 18+ to enter this site`;
    }else if(age >= 18){
        result.textContent = `You are allowed to enter this site`;
    }else{
        result.textContent = `Enter valid argument`;
    }
}