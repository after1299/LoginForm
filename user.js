let mdForm = document.querySelector("#mdForm");
let mdNickName = document.querySelector("#mdNickName");
let mdSub = document.querySelector("#mdSub");
let mdClose = document.querySelector("#close");
let orgNickName = mdNickName.value;

function userInfoUpdate() {
  if (orgNickName == mdNickName.value) {
    mdClose.click();
  } else {
    let  userInfo = {};
    userInfo.userName = document.querySelector("#mdUserName").value;
    userInfo.nickName = mdNickName.value;
    console.log(userInfo);
    alert('更新成功!');
    location.reload();
  }
}

function closeModal() {
    mdNickName.value = orgNickName;
}

mdSub.addEventListener("click", userInfoUpdate);
mdClose.addEventListener("click", closeModal)
