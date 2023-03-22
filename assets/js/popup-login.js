// Password User
let username = "admin@gmail.com";
let password = "123456";

// Truy cap phan tu
const user = document.querySelector("#login");
const wrapLogin = document.querySelector(".wrap-login")
const closeLogin = document.querySelector(".wrap-login .close-menu");

// Open
user.addEventListener("click", function () {
  wrapLogin.style.opacity = "1";
  wrapLogin.style.visibility = "visible";
})

// Close
closeLogin.addEventListener("click", function () {
  wrapLogin.style.opacity = "0";
  wrapLogin.style.visibility = "hidden";
})

// Get data input form
const submitLogin = document.querySelector(".submit-login");
const valueUser = document.querySelector(".input-user");
const valuePass = document.querySelector(".input-pass")

submitLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = {
    user: valueUser.value,
    pass: valuePass.value
  }
  checkSubmit(data);
})

// Kiem tra pass nhap vao voi db

let checkAuth = false;
const tbForm = document.querySelector("#tb-form"); // -> hien thi thong bao dang nhap

function checkSubmit(data) {
  if (data.user === username && data.pass === password) {
    // Luu ten nguoi dung vao locaStorage
    localStorage.setItem("USER", data.user);
    localStorage.setItem("checkAuth", "true");

    // Reset o input
    valueUser.value = "";
    valuePass.value = "";
    // In ra thong bao
    tbForm.innerHTML = `Dang nhap thanh cong!`;
    // Sau 3s hidden form login
    setTimeout(function () {
      wrapLogin.style.opacity = "0";
      wrapLogin.style.visibility = "hidden";
      window.location.reload();
    }, 1400)
  } else {
    // Reset o input
    valueUser.value = "";
    valuePass.value = "";
    // In ra thong bao
    tbForm.innerHTML = `Dang nhap that bai!`;
  }
}

// Hien thi thong tin ra front-end
const nameUser = localStorage.getItem("USER" || "");
const isAuth = localStorage.getItem("checkAuth" || "");

//Truy cap phan tu
const inforUser = document.querySelector(".user .content-user");
if (nameUser && nameUser !== " " && isAuth === "true") {
  //An Dang nhap / dang ky khi chua dang nhap
  user.style.opacity = "0";
  user.style.visibility = "hidden";

  //Hien thi dashboard sau khi dang nhap
  inforUser.innerHTML = `
      <span class="title-dashboard">Welcome Admin</span>
      <ul class="dashboard">
        <li>Hi 👋 ${nameUser}!</li>
        <li class="logout">Log Out</li>
      </ul>
    `
}

// Logout
if (isAuth === "true") {
  //truy cap phan tu
  const logOut = document.querySelector(".logout");
  logOut.addEventListener("click", function () {
    localStorage.removeItem("checkAuth");
    localStorage.removeItem("USER");
    window.location.reload();
  })
}