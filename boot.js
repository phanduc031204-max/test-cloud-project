const bootScreen = document.getElementById('boot-screen');
const bootText = document.getElementById('boot-text');

const bootLines = [
  "Mounting root filesystem... [OK]",
  "Loading kernel modules... [OK]",
  "Starting network interface eth0... [OK]",
  "Establishing secure connection... [OK]",
  "Bypassing firewall... [OK]",
  "Decrypting ADucKu_Profile.bin... [OK]",
  "Initializing UI system... DONE.",
  "Welcome back, Root."
];

let i = 0;
// Nếu web vừa load, ẩn scrollbar đi
document.body.style.overflow = 'hidden';

function showNextLine() {
  if (i < bootLines.length) {
    bootText.innerHTML += `<div>${bootLines[i]}</div>`;
    i++;
    // Tốc độ chạy chữ ngẫu nhiên cho chân thực
    setTimeout(showNextLine, Math.random() * 200 + 100); 
  } else {
    // Xong thì mờ dần và biến mất
    setTimeout(() => {
      bootScreen.style.transition = "opacity 0.5s ease";
      bootScreen.style.opacity = "0";
      document.body.style.overflow = 'auto'; // Trả lại scrollbar
      
      setTimeout(() => bootScreen.remove(), 500);
    }, 800);
  }
}

// Bắt đầu chạy khi web vừa load
window.onload = showNextLine;
