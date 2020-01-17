'use strict';

const container = document.querySelector('.container');
const back = document.querySelector('.back');
let backs = [];
var path = "url(img/background/";
var ext = ".png)";

for(var i = 1; i <= 5; i++){
  var fileNum = ('00' + i).substr(-3);
  var fullPath = path + fileNum + ext;
  backs.push(fullPath);
}

window.onload = () => {
  window.setTimeout(bgImg, 500);
  setInterval(bgImg, 28800000);
}

var backgroundFade = [
  {opacity: '0.1'},
  {opacity: '0.3'},
  {opacity: '0.7'},
  {opacity: '1'}
];

let bgImg =  () => {
  var randomImg = Math.floor(Math.random() * backs.length);
    back.style.backgroundImage = (backs[randomImg]);
    back.style.backgroundSize = "cover";
    back.style.backgroundRepeat = "no-repeat";
    back.animate(backgroundFade, {duration: 500})
}

var form = document.querySelector('.LoginForm')
var email = form.querySelector('#email')
var password = form.querySelector('#password')
var fields = form.querySelectorAll('.field')

form.addEventListener('submit', function (event){
    event.preventDefault()
 mailFunc()
 passFunc()   
})


function mailFunc() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
  if (email.value.match(mailformat)) {
    email.style.color = '#3b3b3b'
    email.style.borderColor = "rgb(211, 211, 211)"
    return true;
  } else {
    email.value = 'Enter Login/email'
    email.style.color = 'red'
    email.style.borderColor = "red" 
    };
     email.onfocus = function() {
       if(email.value == "Enter Login/email") {
         email.value = "";
       } 
     }
}

function passFunc() {
  if (!password.value) {
    password.value = 'Enter password'
    password.style.color = 'red'
    password.style.borderColor = "red"
    password.type='text'
         
    password.onfocus = function() {
     if(password.value == 'Enter password') {
       password.value = "";
     } 
   };
  }
 
   if (password.value!=="Enter password") {
  password.type='password'
  password.style.color = '#3b3b3b'
  password.style.borderColor = "rgb(211, 211, 211)"
 }
}

