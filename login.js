let loginBtn = document.querySelector("#loginBtn");
let userName = document.querySelector("#userName");
let pwd = document.querySelector("#pwd");

function getFormValue() {
    let data = {};
    data.userName = userName.value;
    data.pwd = pwd.value;
    console.log(data);
}

// 註冊事件
loginBtn.addEventListener("click", (e) => {
    e.preventDefault;
    getFormValue();
});