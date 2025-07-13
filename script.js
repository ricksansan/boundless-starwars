// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    const crawl = document.querySelector('.crawl');
    const intro = document.querySelector('.intro-boundless');
    const starWarsIntro = document.querySelector('.star-wars-intro');
    crawl.style.animationPlayState = 'paused';
    starWarsIntro.style.visibility = 'hidden';

    intro.addEventListener('animationend', function() {
        intro.style.display = 'none';
        starWarsIntro.style.visibility = 'visible';
        crawl.style.animationPlayState = 'running';
    });

    // Müzik kontrolleri
    const musicToggle = document.getElementById('musicToggle');
    const volumeSlider = document.getElementById('volumeSlider');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    let isMusicPlaying = false;
    
    // Müzik yükleme kontrolü
    backgroundMusic.addEventListener('loadstart', function() {
        console.log('Müzik yüklenmeye başladı');
    });
    
    backgroundMusic.addEventListener('canplay', function() {
        console.log('Müzik çalmaya hazır');
        musicToggle.textContent = '🔇';
    });
    
    backgroundMusic.addEventListener('error', function(e) {
        console.error('Müzik yükleme hatası:', e);
        musicToggle.textContent = '❌';
    });
    
    // Müzik toggle butonu
    musicToggle.addEventListener('click', function() {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicToggle.textContent = '🔇';
            isMusicPlaying = false;
        } else {
            // Kullanıcı etkileşimi sonrası müziği başlat
            backgroundMusic.play().then(() => {
                musicToggle.textContent = '🔊';
                isMusicPlaying = true;
                console.log('Müzik başlatıldı');
            }).catch(e => {
                console.error('Müzik başlatılamadı:', e);
                musicToggle.textContent = '❌';
            });
        }
    });
    
    // Ses seviyesi kontrolü
    volumeSlider.addEventListener('input', function() {
        backgroundMusic.volume = this.value / 100;
    });
    
    // Hızlandırma kontrolü
    const speedSlider = document.getElementById('speedSlider');
    const speedValue = document.getElementById('speedValue');
    
    speedSlider.addEventListener('input', function() {
        // Slider'ı ters çevir: sağa çekince hız artsın
        const min = parseInt(this.min);
        const max = parseInt(this.max);
        const value = parseInt(this.value);
        const speed = max - (value - min); // ters çevirme
        speedValue.textContent = speed + 's';
        crawl.style.animationDuration = speed + 's';
    });
    
    // Sayfa yüklendiğinde müziği hazırla
    backgroundMusic.load();

    // Klavye kontrolleri
    document.addEventListener('keydown', function(e) {
        // Boşluk tuşu ile animasyonu durdur/başlat
        if (e.code === 'Space') {
            e.preventDefault();
            if (crawl.style.animationPlayState === 'paused') {
                crawl.style.animationPlayState = 'running';
            } else {
                crawl.style.animationPlayState = 'paused';
            }
        }
        
        // R tuşu ile animasyonu sıfırla
        if (e.code === 'KeyR') {
            e.preventDefault();
            resetAnimation();
        }
        
        // M tuşu ile müziği aç/kapat
        if (e.code === 'KeyM') {
            e.preventDefault();
            musicToggle.click();
        }
    });

    // Animasyon sıfırlama fonksiyonu
    function resetAnimation() {
        crawl.style.animationPlayState = 'paused';
        crawl.style.animation = 'none';
        
        setTimeout(() => {
            crawl.style.animation = 'crawl 60s linear forwards';
            crawl.style.animationPlayState = 'running';
        }, 10);
    }

    // Kullanım talimatlarını konsola yazdır
    console.log('Boundless Star Wars Kontrolleri:');
    console.log('- Boşluk tuşu: Animasyonu durdur/başlat');
    console.log('- R tuşu: Animasyonu sıfırla');
    console.log('- M tuşu: Müziği aç/kapat');
    console.log('- Hızlandırma çubuğu: Animasyon hızını ayarla (30-120s)');
    console.log('🎵 Müzik dosyasını assets/star-wars-theme.mp3 olarak ekleyin!');
}); 