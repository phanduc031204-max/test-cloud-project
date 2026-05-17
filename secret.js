// ==========================================
// 1. MẬT MÃ DÀNH CHO PC (BÀN PHÍM VẬT LÝ)
// ==========================================
const pressed = [];
const secretHacker = 'hack';
const secretLove = 'songtu';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key.toLowerCase());
  pressed.splice(-10, pressed.length - 10); 
  const currentInput = pressed.join('');

  if (currentInput.includes(secretHacker)) {
    activateHackerMode();
    pressed.length = 0; 
  }

  if (currentInput.includes(secretLove)) {
    showSecretMessage();
    pressed.length = 0;
  }
});

// ==========================================
// 2. MẬT MÃ DÀNH CHO ĐIỆN THOẠI (MÀN HÌNH CẢM ỨNG)
// ==========================================
let tapCount = 0;
let tapTimer;

// Tìm phần tử logo trên thanh điều hướng để làm nút bấm bí mật
const secretTapTarget = document.querySelector('.nav-logo');

// Nếu có logo, chúng ta sẽ đếm số lần chạm
if (secretTapTarget) {
  // Đổi con trỏ chuột thành hình bàn tay để gợi ý nhẹ (trên PC)
  secretTapTarget.style.cursor = 'pointer'; 
  
  secretTapTarget.addEventListener('click', () => {
    tapCount++;
    
    // Nếu ngừng chạm quá 1.5 giây thì reset lại từ đầu
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => {
      tapCount = 0;
    }, 1500);

    // Chạm 5 lần liên tục sẽ kích hoạt chế độ Hacker
    if (tapCount === 5) {
      activateHackerMode();
    }
    
    // Chạm 9 lần liên tục sẽ kích hoạt thông điệp ẩn
    if (tapCount === 9) {
      showSecretMessage();
      tapCount = 0; // Kích hoạt xong thì reset
    }
  });
}

// ==========================================
// CÁC HÀM XỬ LÝ GIAO DIỆN
// ==========================================

function activateHackerMode() {
  console.log("Hacker mode activated!");
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = '#00ff00';
  document.documentElement.style.setProperty('--bg', '#000000');
  document.documentElement.style.setProperty('--panel', '#000000');
  document.documentElement.style.setProperty('--ink', '#00ff00');
  document.documentElement.style.setProperty('--muted', '#009900');
  document.documentElement.style.setProperty('--accent2', '#00ff00');
  document.documentElement.style.setProperty('--rule', '#004400');
}

function showSecretMessage() {
  console.log("Secret message unlocked!");
  alert("🔓 MỞ KHÓA THÔNG ĐIỆP BÍ MẬT:\n\nCode web này tuy có thể còn vài cái bug, nhưng được gặp Duyên chắc chắn là tính năng hoàn hảo nhất của anh rồi! 😉");
}
