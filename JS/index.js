var userArr = [];
var nameup = document.getElementById("nameup");
var emailup = document.getElementById("emailup");
var passwordup = document.getElementById("passwordup");

var email = document.getElementById("email");
var password = document.getElementById("password");

var mainIndex = 0;

if (localStorage.getItem("USER-DB") != null) {
  userArr = JSON.parse(localStorage.getItem("USER-DB"));
  console.log("there is data");
}

function signup() {
  var USER_DB = {
    Name: nameup.value,
    Email: emailup.value,
    Password: passwordup.value,
    index: 0,
  };

  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].Email == emailup.value) {
      showAlertUserEx("Email ID is already exist");
      return;
    }
  }

  if (nameup.value.trim().length < 3) {
    showAlert("Your name must contain at least 3 characters.");
    return;
  }

  if (passwordup.value.trim().length < 3) {
    showAlert("Your password must be at least 3 characters.");
    return;
  }

  var validEmail = isValidEmail(emailup.value);

  if (validEmail) {
    userArr.push(USER_DB);
    localStorage.setItem("USER-DB", JSON.stringify(userArr));
    clearInputs();
    window.open("index.html", "_self");
  } else {
    showAlert("Email format is not correct");
    return;
  }
}

function login() {

if (localStorage.getItem("USER-DB") = null) {
    console.log("there is data");
    showAlert("You Have to Sign-Up First");
}

  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].Email == email.value) {
      console.log("User exisit");
      if (userArr[i].Password == password.value) {
        console.log("password is correct");
        console.log("welcome");
        userArr[i].index = 1;
        // mainIndex = i;
        localStorage.setItem("USER-DB", JSON.stringify(userArr));
        console.log(i);
        window.open("home.html", "_self");
        break;
      } else {
        console.log("in correct password");
        showAlertLoginPassword("In Correct Password");
        break;
      }
    } else if (i == userArr.length - 1) {
      showAlertLoginUser("User not exsist, Please Sign-Up");
    }
  }
}

function clearInputs() {
  nameup.value = "";
  emailup.value = "";
  passwordup.value = "";
}

function isValidEmail(email) {
  var pattern =
    /^[a-zA-Z][a-zA-Z0-9_-]{3,20}@[a-zA-Z0-9_-]{1,15}\.[a-zA-Z]{2,5}$/;
  var isValid = pattern.test(email);
  console.log(email);
  return isValid;
}

function showAlert(msg) {
  Swal.fire({
    icon: "error",
    title: msg,
    html: `
      <p class="text-danger-emphasis fw-bold fs-4 py-2">Please follow the rules below:</p>
      <p class="text-bg-danger text-start">➤ You Name must be at least 3 characters</p>
      <p class="text-bg-danger text-start">➤ You Password must be at least 3 characters</p>
      <p class="text-bg-danger text-start">➤ Email Format shoud be least 3 characters before the @ and 1 after the @</p>
    `,
  });
}

function showAlertUserEx(msg) {
  Swal.fire({
    icon: "error",
    title: msg,
    html: `
      <p class="text-danger-emphasis fw-bold fs-4 py-2">Please Login</p>
    `,
  });
}

function showAlertLoginUser(msg) {
  Swal.fire({
    icon: "error",
    title: msg,
    html: `
      <p class="text-danger-emphasis fw-bold fs-4 py-2">Please Sign-Up First Then Try Again</p>     
    `,
  });
}

function showAlertLoginPassword(msg) {
  Swal.fire({
    icon: "error",
    title: msg,
    html: `
      <p class="text-danger-emphasis fw-bold fs-4 py-2">Please Enter the Correct Password</p>
      
    `,
  });
}

var logout = document.querySelector(".logout");
logout.addEventListener("click", function () {
  userArr = JSON.parse(localStorage.getItem("USER-DB"));
  for (let i = 0; i < userArr.length; i++) {
    userArr[i].index = 0;
  }
    localStorage.setItem("USER-DB", JSON.stringify(userArr));
  window.open("index.html", "_self");
});

var welcome = document.querySelector(".welcome");
userArr = JSON.parse(localStorage.getItem("USER-DB"));
for (let i = 0; i < userArr.length; i++) {
  if (userArr[i].index == 1) {
    welcome.textContent = userArr[i].Name;
  }
}

// end of js
