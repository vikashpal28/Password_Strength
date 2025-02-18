let password = document.getElementById('password');
let message = document.getElementById('message');
let str = document.getElementById('strength');

password.addEventListener('input', ()=>{
   if(password.value.length>0){
    message.style.display = 'block';
   }
   else{
    message.style.display = 'none';
   }
   if(password.value.length<4){
    str.innerHTML = 'Weak';
    str.style.color = 'red';
    password.style.borderColor = 'red';
   }
   if(password.value.length>=4&&password.value.length<8){
    str.innerHTML = 'Medium';
    str.style.color = 'yellow'
    password.style.borderColor = 'yellow';
   }
   if(password.value.length>8){
    str.innerHTML = 'Strong';
    str.style.color = 'green';
    password.style.borderColor = 'green';
   }
})