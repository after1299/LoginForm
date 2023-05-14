let registerBtn = document.querySelector("#registerBtn");
let userName = document.querySelector("#userName");
let pwd = document.querySelector("#pwd");
let confirmPwd = document.querySelector("#confirmPwd");
let val,
  userVal,
  pwdVal,
  confirmVal = false;
const userNameRule = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{6,}$/i;
const pwdRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

/*userName.addEventListener("blur", () => {
  if (userNameRule.test(userName.value) == true) {
    userVal = true;
  } else {
    userVal = false;
  }
});

pwd.addEventListener("blur", () => {
  if (pwdRule.test(pwd.value) == true) {
    pwdVal = true;
  } else {
    pwdVal = false;
  }
});

confirmPwd.addEventListener("blur", () => {
  if (confirmPwd.value == pwd.value) {
    confirmVal = true;
  } else {
    confirmVal = false;
  }
});*/

function validator() {
  if (userNameRule.test(userName.value) && pwdRule.test(pwd.value) && (confirmPwd.value == pwd.value)) {
    console.log("true");
    document.querySelector("#userName+label").innerHTML = "Username";
    document.querySelector("#pwd+label").innerHTML = "Password";
    document.querySelector("#confirmPwd+label").innerHTML = "Confirm Password";
    userName.style.border = "1px solid #DADCE0";
    pwd.style.border = "1px solid #DADCE0";
    confirmPwd.style.border = "1px solid #DADCE0";
    let size = document.querySelectorAll(".formLabel").length;
    for (let i = 0; i < size; i++) {
        document.querySelectorAll(".formLabel")[i].style.color = "#007bff";
    }
  } else {
    if (!userNameRule.test(userName.value)) {
      userName.style.border = "2px solid red";
      document.querySelector("#userName+label").innerHTML =
        "必須介於6~12碼，且包含英文及數字";
      document.querySelector("#userName+label").style.color = "red";
    } else {
      userName.style.border = "1px solid #DADCE0";
      document.querySelector("#userName+label").innerHTML = "Username";
      document.querySelector("#userName+label").style.color = "#007bff";
    }
    if (!pwdRule.test(pwd.value)) {
      pwd.style.border = "2px solid red";
      document.querySelector("#pwd+label").innerHTML =
        "必須介於8~16碼，且包含英文大小寫及數字";
      document.querySelector("#pwd+label").style.color = "red";
    } else {
      pwd.style.border = "1px solid #DADCE0";
      document.querySelector("#pwd+label").innerHTML = "Password";
      document.querySelector("#pwd+label").style.color = "#007bff";
    }
    if (!(confirmPwd.value == pwd.value)) {
      confirmPwd.style.border = "2px solid red";
      document.querySelector("#confirmPwd+label").innerHTML = "必須與密碼相符";
      document.querySelector("#confirmPwd+label").style.color = "red";
    } else {
      confirmPwd.style.border = "1px solid #DADCE0";
      confirmPwd.style.border = "1px solid #DADCE0";
      document.querySelector("#confirmPwd+label").innerHTML =
        "Confirm Password";
      document.querySelector("#confirmPwd+label").style.color = "#007bff";
    }
  }
}

registerBtn.addEventListener("click", (e) => {
  e.preventDefault;
  validator();
});
