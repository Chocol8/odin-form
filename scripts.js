const submitButton = document.querySelector(".submit-button");
const pass = document.querySelector("#password");
const confPass = document.querySelector("#confirm_password");

submitButton.addEventListener("click", function(){
    if(pass.value != confPass.value){
        alert("Passwords do not match");
    }
});