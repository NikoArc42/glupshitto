const loginButton = document.querySelector("#loginButton");

function loginForm() {
    event.preventDefault();
    console.log ("button clicke");
    
    const inputEmail = document.querySelector("#inputEmail").value;
    console.log(inputEmail);
    const inputPassword = document.querySelector("#inputPassword").value;
    console.log(inputPassword);
    const inputShowPassword = document.querySelector("#inputShowPassword").value;
    console.log(inputShowPassword);

    const displayVerification = document.querySelector("displayVerification");
    console.log(displayVerification);

    const displayInputEmail = document.createElement("p");
    const displayInputPassword = document.createElement("p");
    const successfullLogIn = document.createElement("p");
    const failedLogIn = document.createElement("p");

    displayInputEmail.textContent = inputEmail;
    displayInputPassword.textContent = inputPassword;
    successfullLogIn.textContent = "you win"; + inputEmail;
    failedLogIn.textContent = "YOU SUCK, LOOSER!!"

    if (inputEmail !== "great heavens" && inputPassword !== "buttlord") {
        displayVerification.appendChild(successfullLogIn);
    } else {
        displayVerification.appendChild(failedLogIn);
    }

    displayVerification.appendChild(displayInputEmail);
    displayVerification.appendChild(displayInputPassword);
}

loginButton.addEventListener("click", loginForm);

