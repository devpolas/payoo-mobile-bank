const login = document.getElementById("login");
const register = document.getElementById("register");
const goLogin = document.getElementById("go-login");
const goRegister = document.getElementById("go-register");
const loginSection = document.getElementById("login-section");
const registerSection = document.getElementById("register-section");
const registerValidation = document.getElementById("registerValidation");
const loginValidation = document.getElementById("loginValidation");

register.addEventListener("click", function (e) {
  e.preventDefault();
  const userInfo = [];
  const registerInfo = document.querySelectorAll("#register-section input");
  for (const info of registerInfo) {
    if (info.value === "") {
      registerValidation.classList.remove("hidden");
      return;
    }
    userInfo.push(info.value);
  }
  if (
    userInfo[0].length !== 11 ||
    userInfo[1].length !== 4 ||
    userInfo[2].length !== 4 ||
    userInfo[1] !== userInfo[2]
  ) {
    registerValidation.classList.remove("hidden");
    return;
  }

  // delete the last item of array or passwordConfirm delete from userInfo
  userInfo.pop();

  // item set on local storage
  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  // got to login page
  loginSection.classList.remove("hidden");
  registerSection.classList.add("hidden");
});

// go to login page
goLogin.addEventListener("click", function (e) {
  e.preventDefault();
  loginSection.classList.remove("hidden");
  registerSection.classList.add("hidden");
});

// got to register page
goRegister.addEventListener("click", function (e) {
  e.preventDefault();
  loginSection.classList.add("hidden");
  registerSection.classList.remove("hidden");
});

// handel login info
login.addEventListener("click", function (e) {
  e.preventDefault();
  // get item from local storage
  const registeredValue = JSON.parse(localStorage.getItem("userInfo"));
  const userInfo = [];
  const loginInfo = document.querySelectorAll("#login-section input");
  for (const info of loginInfo) {
    if (info.value === "") {
      loginValidation.classList.remove("hidden");
      return;
    }
    userInfo.push(info.value);
  }

  //check user info
  if (userInfo[0].length !== 11 || userInfo[1].length !== 4) {
    loginValidation.classList.remove("hidden");
    return;
  }

  // check info with registered value
  if (
    userInfo[0] !== registeredValue[0] ||
    userInfo[1] !== registeredValue[1]
  ) {
    loginValidation.classList.remove("hidden");
    return;
  }

  window.location.href = "./home.html";
});
