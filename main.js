// 表單送出提示
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (!form) return;

  form.addEventListener("submit", function () {
    formMessage.textContent = "已送出，我們會盡快與您聯絡 🙌";
  });
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

// banner
const texts = [
  "整合行銷",
  "品牌策略",
  "數據驅動成長",
  "長期價值經營"
];

let index = 0;
const heroText = document.getElementById("hero-text");

setInterval(() => {
  index = (index + 1) % texts.length;
  heroText.style.opacity = 0;

  setTimeout(() => {
    heroText.textContent = texts[index];
    heroText.style.opacity = 1;
  }, 400);
}, 3000);


// parallax效果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bg = document.getElementById('parallax-bg');
    
    if (scrolled < window.innerHeight) {
        // 1. 圖片緩慢下沉 (速度 0.3)
        bg.style.transform = `translateY(${scrolled * 0.3}px)`;
        
        // 2. 圖片緩慢變暗 (視覺引導到下方的白色內容區)
        bg.style.filter = `brightness(${1 - scrolled / 1000})`;
    }
});


// Swiper 初始化
// main.js (參考 Frontend Joe 的邏輯優化版)
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.team-swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        speed: 1000,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        on: {
            resize: function () {
                if (window.innerWidth < 768) {
                    this.params.coverflowEffect.modifier = 2;
                } else {
                    this.params.coverflowEffect.modifier = 2.5;
                }
                this.update();
            },
        }
    });
});


// navbar 效果
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.dropdown-trigger');
    const dropdown = document.querySelector('.dropdown');

    trigger.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            e.preventDefault(); // 阻止 <a> 連結跳轉
            e.stopPropagation(); // 阻止事件冒泡到 header 或 body
            dropdown.classList.toggle('active');
        }
    });
});