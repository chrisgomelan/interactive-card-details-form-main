const chName = document.querySelector('.ch-name');
const cardNum = document.querySelector('.cn');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const cvc1 = document.querySelector('.cvc1');
const cvc = document.querySelector('.cvc')
const chName1 = document.querySelector('.ch-name1');
const cardNum1 = document.querySelector('.ch-number')
const submit = document.querySelector('#submit');
const form = document.querySelector('form');
const num = /^[0-9]/;
const error = document.getElementById('error');
const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error3');

const y1 = document.querySelector('.y1');
const m1 = document.querySelector('.m1');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

function validation() {
if(cardNum.value.match(num)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    error.classList.remove("active");
    cardNum.classList.remove("active");
} 
else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    error.classList.add("active");
    cardNum.classList.add("active");
}

}
function errors1() {
    if(month.value == ""){
        error1.classList.add("invalid");
       month.classList.add("active");
    }
    else{
        error1.classList.remove("invalid");
        month.classList.remove("active");
    }
}
function errors2() {
    if(year.value == ""){
        error2.classList.add("invalid");
        year.classList.add("active");
    }
    else{
     
        error2.classList.remove("invalid");
        year.classList.remove("active");
    }
}
function errors3() {
    if(cvc1.value == ""){
        error3.classList.add("invalid");
        cvc1.classList.add("active");
    }
    else{
        error3.classList.remove("invalid");
        cvc1.classList.remove("active");
    }
}

function myFunc(){
     chName1.innerHTML = chName.value;
     cardNum1.innerHTML = cardNum.value;
     cvc.innerHTML = cvc1.value;    
     y1.innerHTML = year.value;
     m1.innerHTML = month.value;
}
submit.addEventListener('click', myFunc);