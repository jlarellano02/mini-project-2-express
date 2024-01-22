const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});

let adminUser = {
  
  username: 'admin',
  password: 'admin123'

};

let user = {
  username: 'user',
  password: 'user123'
};

$(document).ready(function() {
    
    $("#login-form").submit(function (x) {
        x.preventDefault();
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      
      if( username == adminUser.username && password == adminUser.password) {
        alert ("Login successfully");
        window.location.href="Admin-home.html";
    
      } else if ( username == user.username && password == user.password) {
        alert ("Login user successfully"); 
        window.location.href="user.html";
        console.log(window.location.href);
    
      } else {
        alert("Wrong username or password");
      } 
      }
    
    )
});


 


