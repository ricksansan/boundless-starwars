// Boundless hikayesi bölümleri
const boundlessEpisodes = [
    {
        episode: "EPISODE I",
        title: "THE AGE OF SHADOWS",
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

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    // Animasyon başlangıcında kısa bir bekleme
    setTimeout(() => {
        const crawl = document.querySelector('.crawl');
        crawl.style.animationPlayState = 'running';
    }, 1000);

    // Klavye kontrolleri
    document.addEventListener('keydown', function(e) {
        const crawl = document.querySelector('.crawl');
        
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
    });

    // Animasyon bittiğinde otomatik olarak sonraki bölüme geç
    const crawl = document.querySelector('.crawl');
    crawl.addEventListener('animationiteration', function() {
        setTimeout(() => {
            nextEpisode();
        }, 2000); // 2 saniye bekle
    });

    // Metin değiştirme fonksiyonu (global olarak erişilebilir)
    window.changeText = function(newText) {
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
    };

    // Başlık değiştirme fonksiyonu
    window.changeTitle = function(newTitle, newSubtitle, newEpisode) {
        const title = document.querySelector('.title h1');
        const subtitle = document.querySelector('.subtitle h2');
        const episode = document.querySelector('.subtitle h3');
        
        if (newTitle) title.textContent = newTitle.toUpperCase();
        if (newSubtitle) subtitle.textContent = newSubtitle;
        if (newEpisode) episode.textContent = newEpisode.toUpperCase();
    };

    // Animasyon hızını değiştirme fonksiyonu
    window.changeSpeed = function(seconds) {
        const crawl = document.querySelector('.crawl');
        crawl.style.animationDuration = seconds + 's';
    };

    // Bölüm değiştirme fonksiyonları
    window.nextEpisode = function() {
        currentEpisode = (currentEpisode + 1) % boundlessEpisodes.length;
        loadEpisode(currentEpisode);
    };

    window.previousEpisode = function() {
        currentEpisode = (currentEpisode - 1 + boundlessEpisodes.length) % boundlessEpisodes.length;
        loadEpisode(currentEpisode);
    };

    window.loadEpisode = function(episodeIndex) {
        const episode = boundlessEpisodes[episodeIndex];
        changeTitle("BOUNDLESS", episode.episode, episode.title);
        changeText(episode.text);
        resetAnimation();
    };

    window.resetAnimation = function() {
        const crawl = document.querySelector('.crawl');
        crawl.style.animation = 'none';
        setTimeout(() => {
            crawl.style.animation = 'crawl 35s linear infinite';
        }, 10);
    };

    // Kullanım talimatlarını konsola yazdır
    console.log('Boundless Star Wars Kontrolleri:');
    console.log('- Boşluk tuşu: Animasyonu durdur/başlat');
    console.log('- R tuşu: Animasyonu sıfırla');
    console.log('- Sağ ok: Sonraki bölüm');
    console.log('- Sol ok: Önceki bölüm');
    console.log('- nextEpisode(): Sonraki bölüme geç');
    console.log('- previousEpisode(): Önceki bölüme geç');
    console.log('- loadEpisode(0-5): Belirli bölümü yükle');
}); 