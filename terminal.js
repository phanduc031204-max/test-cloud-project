const inputElement = document.getElementById('cmd-input');
const historyArea = document.getElementById('term-history');

// Tự động focus vào ô nhập lệnh khi click vào bất kỳ đâu trong terminal
document.querySelector('.terminal').addEventListener('click', () => {
  inputElement.focus();
});

inputElement.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const rawCmd = this.value.trim();
    const cmd = rawCmd.toLowerCase();
    this.value = ''; // Xóa trắng ô input sau khi enter

    if (rawCmd === '') return; // Không làm gì nếu ấn enter rỗng

    // 1. In lại dòng lệnh người dùng vừa gõ lên lịch sử
    const echoLine = document.createElement('div');
    echoLine.innerHTML = `<div style="margin-top:0.5rem"><span class="t-prompt">aduc@huflit</span><span style="color:var(--muted)">:</span><span class="t-path">~/profile</span><span style="color:var(--muted)">$</span> <span class="t-cmd">${rawCmd}</span></div>`;
    historyArea.appendChild(echoLine);

    // 2. Xử lý logic các lệnh
    if (cmd === 'clear') {
      historyArea.innerHTML = '';
      return;
    }

    const responseLine = document.createElement('div');
    responseLine.className = 't-out';

    switch (cmd) {
     case 'help':
        responseLine.innerHTML = "Available commands: <span class='t-ok'>whoami, skills, projects, exploit, hire, coffee, ping, hack, date, clear</span>";
        break;
        
      case 'whoami':
        responseLine.innerHTML = "System Admin: Phan Trần Anh Đức<br>Access Level: ROOT (just kidding, you are a guest)";
        break;
        
      case 'skills':
        responseLine.innerHTML = "Loading modules...<br>[+] PenTest<br>[+] Reverse Engineering<br>[+] Network Security<br>[+] Cryptography";
        break;

      case 'gym':
        responseLine.innerHTML = 
          `<span style="color: var(--cyan)">[CHỈ SỐ]</span> Cao 1m85 - Nặng 73.8kg<br>` +
          `<span style="color: var(--cyan)">[MỤC TIÊU]</span> Thâm hụt calo<br>` +
          `<span style="color: var(--cyan)">[ROUTINE]</span> Tập bụng 4 bài (15x4 set) & Đạp xe 1h10p.`;
        break;
        case 'coffee':
        responseLine.innerHTML = 
          `<span style="color: var(--amber)">` +
          `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)))<br>` +
          `&nbsp;&nbsp;&nbsp;&nbsp;(((<br>` +
          `&nbsp;&nbsp;+-----+<br>` +
          `&nbsp;&nbsp;|     |]<br>` +
          `&nbsp;&nbsp;\`-----'<br>` +
          `</span>` +
          `Nạp nhiên liệu thành công! Code tiếp thôi. ☕`;
        break;
        case 'ping':
      case 'ping 8.8.8.8':
        responseLine.innerHTML = 
          `PING 8.8.8.8 (8.8.8.8): 56 data bytes<br>` +
          `64 bytes from 8.8.8.8: icmp_seq=0 ttl=115 time=14.2 ms<br>` +
          `64 bytes from 8.8.8.8: icmp_seq=1 ttl=115 time=15.1 ms<br>` +
          `64 bytes from 8.8.8.8: icmp_seq=2 ttl=115 time=13.8 ms<br>` +
          `--- 8.8.8.8 ping statistics ---<br>` +
          `3 packets transmitted, 3 packets received, 0.0% packet loss`;
        break;
        case 'hack':
        responseLine.className = 't-out t-warn';
        responseLine.innerHTML = 
          `Initializing Exploit Framework...<br>` +
          `[+] Targeting visitor's IP address...<br>` +
          `[+] Bypassing firewall... <span style="color: var(--green)">Done</span><br>` +
          `[+] Downloading browser history... <span style="color: var(--green)">Done</span><br>` +
          `[!] Cảnh báo: Lịch sử duyệt web của bạn chứa quá nhiều tài liệu học tập! Đang tiến hành mã hóa... 😈 (Đùa thôi!)`;
        break;
        case 'date':
        const now = new Date();
        responseLine.innerHTML = `System Time: <span style="color: var(--cyan)">${now.toString()}</span>`;
        break;
        
       case 'hire':
        responseLine.className = 't-out t-ok';
        responseLine.innerHTML = 
          `[HỆ THỐNG] Phát hiện tín hiệu từ Nhà tuyển dụng!<br>` +
          `Mức độ phù hợp: 99.9%<br>` +
          `Tình trạng: Đang chờ một lời mời thực tập/part-time.<br>` +
          `Hãy liên hệ ngay qua email: <a href="mailto:phanduc031204@gmail.com" style="color: var(--accent2)">email-cua-ban@gmail.com</a> 🚀`;
        break;

      case 'cat note.txt':
        responseLine.innerHTML = "Trạng thái: Đang ngồi cày code... nhưng mà tâm thì để chỗ cô bé Song Tử tên Duyên mất rồi. Qua lại chiều chuộng nhau thế này thì ai làm lại? 😌";
        break;

      case 'sudo':
      case 'sudo su':
        responseLine.className = 't-out t-warn'; // Đổi màu cảnh báo
        responseLine.innerHTML = "[ERROR] Access Denied. Hành vi truy cập trái phép đã được ghi log và gửi đến admin!";
        break;

      default:
        responseLine.innerHTML = `bash: ${rawCmd}: command not found. Type <span class='t-ok'>help</span> for available commands.`;
    }

    // 3. Hiển thị kết quả
    historyArea.appendChild(responseLine);

    // Tự động cuộn xuống dưới cùng nếu terminal bị đầy
    const terminalBody = document.querySelector('.terminal-body');
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
});
