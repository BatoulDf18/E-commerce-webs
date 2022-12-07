let username = document.querySelector('#username');
let password = document.querySelector('#password');
let sign_in = document.querySelector('#signin');

let getuser = localStorage.getItem("username");
let getpass =  localStorage.getItem("password");
sign_in.addEventListener("click",
function(e){
e.preventDefault();
    if(username.value===""  || password.value=== ""){
 alert("please write somthing");
    } 
    else{ 
         if (getuser &&
            getuser.trim() === username.value.trim()
            && getpass
            && getpass === password.value.trim())
            {
            setTimeout(() => {
                window.location =" ../Nouveau dossier (3)/index.html";
            }, 1500);}
            else{
                    console.log("username or password is wrong");
                    
          
            }
        } 


}
); 

