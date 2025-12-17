// 表單送出提示
// 表單送出提示
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if(form && formMessage){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            formMessage.textContent = "您的訊息已送出，我們會盡快與您聯絡！";
            form.reset();
        });
    }
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
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function(){
        navLinks.classList.toggle("active");
    });
}

// 登出功能
document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById("logoutBtn");

    if(logoutBtn){
        // 根據登入狀態決定是否顯示
        if(localStorage.getItem("auth") === "true"){
            logoutBtn.style.display = "inline-block";
        } else {
            logoutBtn.style.display = "none";
        }

        // 登出功能
        logoutBtn.addEventListener("click", function(){
            localStorage.removeItem("auth");       // 移除登入狀態
            logoutBtn.style.display = "none";      // 登出後隱藏按鈕
            window.location.href = "index.html";   // 導回首頁
        });
    }
});






