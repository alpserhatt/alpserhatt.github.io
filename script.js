// Geri say�m�n bitece�i zaman� belirle (1 y�l sonra)
const countdownDuration = 31536000000; // 1 y�l (milisaniye cinsinden)

function startCountdown() {
    let endTime = localStorage.getItem('countdownEndTime');

    if (!endTime) {
        endTime = Date.now() + countdownDuration;
        localStorage.setItem('countdownEndTime', endTime);
    } else {
        endTime = parseInt(endTime, 10);
        if (endTime < Date.now()) {
            localStorage.removeItem('countdownEndTime');
            endTime = Date.now() + countdownDuration;
            localStorage.setItem('countdownEndTime', endTime);
        }
    }

    const countdownElement = document.getElementById('countdown');

    const updateCountdown = () => {
        let timeLeft = endTime - Date.now();

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "�imdi Aktif!";
            localStorage.removeItem('countdownEndTime');
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // G�nleri hesapla
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Kalan saatleri hesapla
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = days + " days " + hours + " hours "
            + minutes + " minutes " + seconds + " seconds ";
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

function contactUs() {
    const mailto = 'mailto:hi@thealp.tech';
    window.location.href = mailto;
}

startCountdown();

// ... di�er fonksiyonlar ...

function showAdminPanel() {
  document.getElementById('adminPanel').style.display = 'flex';
}

function closeAdminPanel() {
  document.getElementById('adminPanel').style.display = 'none';
}

function login() {
  const username = document.getElementById('adminUsername').value;
  const password = document.getElementById('adminPassword').value;

  if (username === "admin" && password === "1234") {
    alert("Giri� Ba�ar�l�!");
    // �ste�e ba�l� olarak ba�ka i�lemler eklenebilir
  } else {
    alert("Yanl�� kullan�c� ad� veya �ifre!");
  }
}

function resetTimer() {
    localStorage.removeItem('countdownEndTime');
    alert("Zamanlay�c� s�f�rland�!");
    window.location.reload(); // Sayfay� yenile
}
