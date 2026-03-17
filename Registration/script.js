document.getElementById("registerForm").addEventListener("submit", function(e){

let password=document.getElementById("password").value;
let confirmPassword=document.getElementById("confirmPassword").value;
let message=document.getElementById("message");
setTimeout(function(){
message.textContent="";
},10000);


if(password!==confirmPassword){

e.preventDefault();

message.textContent="Passwords do not match!";
message.style.color="red";

}

else{

message.textContent="Registration Successful!";
message.style.color="green";

}

});