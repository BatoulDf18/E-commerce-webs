
/******register user **********************************************************************/
let username = document.getElementById("username");
let email =document.getElementById("email");
let password =document.getElementById("password");
let register_btn =document.getElementById("sign up");
register_btn.addEventListener('click',register);
function register(e){
    e.preventDefault();
    if(username.value==="" || email.value=== "" || password.value=== ""){
 alert("please write somthing");
    } else{
        localStorage.setItem('username',username.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);
        setTimeout(() => {
            window.location ="../Nouveau dossier/login.html";
        }, 1500);
    }}
