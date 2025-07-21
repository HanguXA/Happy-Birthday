function show_date_time() {
    setTimeout(show_date_time, 1000);
    const now = new Date();
    const span_dt_dt = document.getElementById('span_dt_dt');
    if (span_dt_dt) {
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        span_dt_dt.innerHTML = `Bây giờ là ${hours}:${minutes}:${seconds}`;
    }
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    span_dt_dt.innerHTML += ` ${day}/${month}/${year}`;

    const quote = "Thêm một tuổi, thêm trưởng thành. Mong tôi luôn đủ mạnh mẽ để bình yên và đủ dịu dàng để hạnh phúc.";
    const quoteElem = document.getElementById('birthday_quote');
    span_dt_dt.innerHTML += "<br>" + quote;
}
show_date_time();

const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = 'Đại Hưng Xuân An'.split('');
const fontSize = 16;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array(columns).fill(1);

function drawRainBackground() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f584b7';
    ctx.font = fontSize + 'px arial';
    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) drops[i] = 0;
        drops[i]++;
    }
}

// Recalculate columns and drops on resize
window.addEventListener('resize', () => {
    columns = Math.floor(window.innerWidth / fontSize);
    drops = Array(columns).fill(1);
});

setInterval(drawRainBackground, 50);