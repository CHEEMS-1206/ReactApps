const email = document.getElementById("mail");
const emailInput = document.getElementById("email");

const pass = document.getElementById("pass");
const passInput = document.getElementById("password");


email.addEventListener("click", emailChange);
emailInput.addEventListener("click", emailChange);


function emailChange(){
  email.classList.remove("focusin");
  email.classList.add("focusout");

  console.log(email);
  pass.classList.remove("focusout");
  pass.classList.add("focusin");
}

pass.addEventListener("click", passChnage);
passInput.addEventListener("click", passChnage);


function passChnage() {
  pass.classList.remove("focusin");
  pass.classList.add("focusout");

  console.log(email);
  email.classList.remove("focusout");
  email.classList.add("focusin");
}
