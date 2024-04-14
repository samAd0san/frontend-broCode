// checked = It determines the checked state of the HTML checkbox or radio button element

const myCheckBox = document.getElementById('myCheckBox');

const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const paypalBtn = document.getElementById('paypalBtn');

const submitBtn = document.getElementById('submitBtn');

const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

submitBtn.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed`;
        paymentMethod();
    }else{
        subResult.textContent = `You are Not Subscribed`;
    }

    function paymentMethod() {
        if(visaBtn.checked){
            paymentResult.textContent = `You are paying with Visa`;
        }
        else if(masterCardBtn.checked){
            paymentResult.textContent = `You are paying with Master Card`;
        }
        else if(paypalBtn.checked){
            paymentResult.textContent = `You are paying with PayPal`;
        }
        else{
            paymentResult.textContent = `Please select the payment method`;
        }
    }
}