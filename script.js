// Boundless hikayesi bölümleri
const boundlessEpisodes = [
    {
        episode: "EPISODE I",
        title: "THE AGE OF SHADOWS",
        showMainTitle: true,
        text: `A long time ago, in a blockchain far, far away…

Across the galaxy, mighty chains had risen.
The ancient citadels of Ethereum, the lightning lanes of Solana, the polygonal legions of Polygon…
All were competing to become the ultimate center of power.

But behind this dazzling brilliance of chains lurked a deep darkness.
Every transaction was visible to all; secrets lay naked for the world to see.
Who did what, which wallet held which fortune, which contract authorized what — all of it etched onto the chain.

And the chain was crawling under the claws of greedy miners and validator barons.
Gas fees were sky-high.
Privacy was extinct.
On-chain computations shackled the chain with massive transaction blocks, turning it into a lumbering beast.`
    },
    {
        episode: "EPISODE II",
        title: "THE FORBIDDEN KNOWLEDGE",
        showMainTitle: false,
        text: `Some engineers, digging through dark libraries, stumbled upon ancient secrets.
The Zero-Knowledge spells:
• SNARKs,
• STARKs,
• Groth16 incantations.

These cryptographic arcana could prove correctness while preserving secrecy.
But…
These spells were so complex:
Elliptic curves, constraint systems, circuit DSLs…
Only a handful of cryptographers could speak this arcane tongue.
Ordinary developers stood outside the temple gates, never allowed to enter the sacred halls of zk.`
    },
    {
        episode: "EPISODE III",
        title: "THE DAWN OF BOUNDLESS",
        showMainTitle: false,
        text: `And in this age of darkness, a call echoed from distant star systems:

"Boundless is coming…"

Boundless forged a mighty virtual machine, called zkVM.
This machine was trained to understand Rust and Solidity.
Now even a simple developer could write a program in Rust;
and Boundless, with its magical hands, would turn it into zk-proofs.

No longer:
• Millions of lines of zk circuits,
• Days of parameter crunching.

Instead, the chain offloaded heavy computations off-chain; only a succinct, verifiable proof reached the chain.

Gas costs fell.
Speeds soared.
Privacy was sanctified.`
    },
    {
        episode: "EPISODE IV",
        title: "THE AGE OF PROVERS",
        showMainTitle: false,
        text: `Boundless built an army.
This legion spread across every corner of the chain, made up of thousands of prover nodes.

Each node:
• Executed your program,
• Captured the execution trace step by step,
• Sealed it with STARK polynomials,
• Then compressed these colossal proofs into tiny Groth16 SNARKs.

And only this little proof traveled to the chain.
It was etched into the ancient ledgers,
but no one could ever see your transaction's details.
They could only see that it was "done correctly."`
    },
    {
        episode: "EPISODE V",
        title: "THE WAR FOR PRIVACY",
        showMainTitle: false,
        text: `Boundless began to transform the chains.
Now on-chain there were:
• Private voting protocols,
• Financial apps where who sent what to whom remained hidden,
• Games with zk ensuring zero cheating.

The old lords of the chains — soaring gas fees and data-leaking auditors — were driven back.
Privacy became the standard, verifiability an everyday feature.

And most importantly, from tiny villages to the grand metaverse cities, everyone could wield this technology.
With Boundless, even a young coder knowing only Rust could perform massive zk computations and submit proofs to the chain.`
    },
    {
        episode: "EPISODE VI",
        title: "THE BOUNDLESS FUTURE",
        showMainTitle: false,
        text: `Today the galaxy is still expanding.
Boundless has erased the borders of chains.
Multi-chain corridors, cross-rollup portals have opened under the light of zkVM.

Now, beyond the chains, lies an even greater horizon:
• Verifiable compute,
• Privacy by default,
• Infinite scalability.

And all this was made possible by developers chasing a dream called Boundless.

THE FORCE OF ZERO-KNOWLEDGE WILL BE WITH YOU.
ALWAYS.`
    }
];

let currentEpisode = 0;

// Fonksiyonları önce tanımla
function changeText(newText) {
    const textDiv = document.querySelector('.text');
    if (newText && typeof newText === 'string') {
        // Metni paragraflara böl
        const paragraphs = newText.split('\n').filter(p => p.trim());
        textDiv.innerHTML = paragraphs.map(p => {
            if (p.startsWith('•')) {
                return `<p style="margin-left: 20px;">${p}</p>`;
            }
            return `<p>${p}</p>`;
        }).join('');
    }
}

function changeTitle(newTitle, newSubtitle, newEpisode, showMainTitle = false) {
    const title = document.querySelector('.title h1');
    const subtitle = document.querySelector('.subtitle h2');
    const episode = document.querySelector('.subtitle h3');
    
    if (newTitle) title.textContent = newTitle.toUpperCase();
    if (newSubtitle) subtitle.textContent = newSubtitle;
    if (newEpisode) episode.textContent = newEpisode.toUpperCase();
    
    // BOUNDLESS başlığını sadece showMainTitle true olduğunda göster
    if (showMainTitle) {
        title.style.display = 'block';
        title.style.opacity = '1';
    } else {
        // Diğer tüm bölümlerde direkt gizle (animasyon yok)
        title.style.display = 'none';
        title.style.opacity = '0';
        // Transition'ı geçici olarak kaldır
        title.style.transition = 'none';
        // Kısa bir süre sonra transition'ı geri ekle
        setTimeout(() => {
            title.style.transition = 'opacity 0.5s ease';
        }, 10);
    }
}

function resetAnimation() {
    const crawl = document.querySelector('.crawl');
    
    // Animasyonu durdur ama pozisyonu koru
    crawl.style.animationPlayState = 'paused';
    
    // Animasyonu yeniden başlat ama pozisyonu sıfırlama
    crawl.style.animation = 'crawl 35s linear infinite';
    
    // Animasyonu hemen çalıştır
    crawl.style.animationPlayState = 'running';
}

function loadEpisode(episodeIndex) {
    const episode = boundlessEpisodes[episodeIndex];
    changeTitle("BOUNDLESS", episode.episode, episode.title, episode.showMainTitle);
    changeText(episode.text);
    
    // Animasyon süresini bölüm içeriğine göre ayarla
    const textLength = episode.text.length;
    const animationDuration = Math.max(25, Math.min(45, textLength / 10)); // 25-45 saniye arası
    
    const crawl = document.querySelector('.crawl');
    crawl.style.animationDuration = animationDuration + 's';
    
    console.log(`Bölüm ${episodeIndex + 1} süresi: ${animationDuration}s`);
}

function nextEpisode() {
    currentEpisode = (currentEpisode + 1) % boundlessEpisodes.length;
    loadEpisode(currentEpisode);
}

function previousEpisode() {
    currentEpisode = (currentEpisode - 1 + boundlessEpisodes.length) % boundlessEpisodes.length;
    loadEpisode(currentEpisode);
}

// Global fonksiyonları window objesine ekle
window.changeText = changeText;
window.changeTitle = changeTitle;
window.changeSpeed = function(seconds) {
    const crawl = document.querySelector('.crawl');
    crawl.style.animationDuration = seconds + 's';
};
window.nextEpisode = nextEpisode;
window.previousEpisode = previousEpisode;
window.loadEpisode = loadEpisode;
window.resetAnimation = resetAnimation;

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    // İlk chapter'ı yükle
    loadEpisode(0);
    
    // Animasyonu başlat
    const crawl = document.querySelector('.crawl');
    crawl.style.animationPlayState = 'running';

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

        // Sağ ok tuşu ile sonraki bölüm
        if (e.code === 'ArrowRight') {
            e.preventDefault();
            nextEpisode();
        }

        // Sol ok tuşu ile önceki bölüm
        if (e.code === 'ArrowLeft') {
            e.preventDefault();
            previousEpisode();
        }
        
        // M tuşu ile müziği aç/kapat
        if (e.code === 'KeyM') {
            e.preventDefault();
            musicToggle.click();
        }
    });

    // Animasyon bittiğinde otomatik olarak sonraki bölüme geç
    crawl.addEventListener('animationiteration', function() {
        // Animasyon bittiğinde hemen sonraki bölüme geç
        setTimeout(() => {
            nextEpisode();
        }, 100); // Sadece 100ms bekle
    });

    // Kullanım talimatlarını konsola yazdır
    console.log('Boundless Star Wars Kontrolleri:');
    console.log('- Boşluk tuşu: Animasyonu durdur/başlat');
    console.log('- R tuşu: Animasyonu sıfırla');
    console.log('- Sağ ok: Sonraki bölüm');
    console.log('- Sol ok: Önceki bölüm');
    console.log('- M tuşu: Müziği aç/kapat');
    console.log('- nextEpisode(): Sonraki bölüme geç');
    console.log('- previousEpisode(): Önceki bölüme geç');
    console.log('- loadEpisode(0-5): Belirli bölümü yükle');
    console.log('🎵 Müzik dosyasını assets/star-wars-theme.mp3 olarak ekleyin!');
}); 