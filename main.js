// 表單送出提示
// 表單送出提示
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();
    formMessage.textContent = "您的訊息已送出，我們會盡快與您聯絡！";
    form.reset();
});

function goTeamZone() {
  const isLogin = localStorage.getItem("auth") === "true";

  if (isLogin) {
    window.location.href = "group.html";
  } else {
    alert("團隊專區僅限夥伴，請先登入");
    window.location.href = "login.html";
  }
}

function login() {
  const pwd = document.getElementById("password").value;

  if (pwd === "123") {
    localStorage.setItem("auth", "true");
    alert("登入成功");
    window.location.href = "group.html";
  } else {
    alert("密碼錯誤");
  }
}

function goTeamZone() {
  if (localStorage.getItem("auth") === "true") {
    window.location.href = "group.html";
  } else {
    window.location.href = "login.html";
  }
}

// 漢堡選單切換
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


