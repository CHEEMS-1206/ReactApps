const form = document.querySelector("form");
let statusText = form.querySelector(".buttonContainer span");

console.log(statusText.innerText);

form.onsubmit = (e) => {
  let Name = $("#NAME").value;
  let email = $("#EMAIL").innerText;
  let phone = $("#PHONE").innerText;
  let message = $("#MESSAGE").innerText;

  switch (true) {
    case !Name :
      statusText.innerHTML = "Please enter a valid name";
      e.preventDefault();
      break;

    case !email:
      statusText.innerHTML = "Please enter a valid E-mail";
      e.preventDefault();
      break;

    case !phone:
      statusText.innerHTML = "Please enter a valid number";
      e.preventDefault();
      break;

    case !message:
      statusText.innerHTML = "write your message please.";
      e.preventDefault();
      break;
  }
  statusText.style.display = "inline-block";
  setTimeout(function () {
    statusText.style.display = "none";
  }, 3000);
};
