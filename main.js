// 表單送出提示
// 表單送出提示
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();
    formMessage.textContent = "您的訊息已送出，我們會盡快與您聯絡！";
    form.reset();
});
