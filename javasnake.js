const loginForm = document.getElementById("login-form"); //dabuu lietas ar ko stradas
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => { // event listener ar e parametru
    e.preventDefault(); // sis ir lai js tikai apstiprina info nevis to iesniedz    
    const username = loginForm.username.value; // dabu info kas tiek ievadita
    const password = loginForm.password.value;

    if (username === "1" && password === "2") { //aizvietot 1 un 2 ar stringiem no makeshift db vai db sis tikai testam
        document.location.href = 'html2.html' ;
    } else if (username === "2" && password === "3") {
        document.location.href = 'dashboard.html' ;
    } 
    else {
        loginErrorMsg.style.opacity = 1; // nomaina opacity no 0 uz 1 ja ir nepareiza info ievade
    }
})

//makeshift db

const users = ["user, janis, admin"];
const passw = ["pass1", "pass2", "pass3"];