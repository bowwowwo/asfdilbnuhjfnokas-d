const loginForm = document.getElementById("login-form"); //dabuu lietas ar ko stradas
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => { // event listener ar e parametru
    e.preventDefault(); // sis ir lai js tikai apstiprina info nevis to iesniedz    
    const username = loginForm.username.value; // dabu info kas tiek ievadita
    const password = loginForm.password.value;

    if (username === "user" && password === "pass") {
        document.location.href = 'html2' ;
    } else {
        loginErrorMsg.style.opacity = 1; // nomaina opacity no 0 uz 1 ja ir nepareiza info ievade
    }
})

//makeshift db

