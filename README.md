# Star Wars Açılış Animasyonu

Bu proje, Star Wars filmlerindeki ünlü açılış animasyonunu taklit eden bir web sayfasıdır. Metin, ekranda yukarıdan aşağıya doğru 3D perspektifle kayar.

## Özellikler

- ⭐ Gerçekçi Star Wars açılış animasyonu
- 🌟 Arka planda hareketli yıldız efekti
- 📱 Responsive tasarım (mobil uyumlu)
- ⌨️ Klavye kontrolleri
- 🔧 Dinamik metin değiştirme

## Kullanım

1. `index.html` dosyasını bir web tarayıcısında açın
2. Animasyon otomatik olarak başlayacaktır

## Klavye Kontrolleri

- **Boşluk tuşu**: Animasyonu durdur/başlat
- **R tuşu**: Animasyonu sıfırla

## JavaScript Fonksiyonları

Tarayıcının konsol panelinde (F12) aşağıdaki fonksiyonları kullanabilirsiniz:

### Metni Değiştirme
```javascript
changeText("Yeni metninizi buraya yazın.\n\nİkinci paragraf.\n\nÜçüncü paragraf.");
```

### Başlıkları Değiştirme
```javascript
changeTitle("FİLM ADI", "Bölüm I", "ALT BAŞLIK");
```

### Animasyon Hızını Değiştirme
```javascript
changeSpeed(45); // 45 saniyede tamamlanır
```

## Dosya Yapısı

- `index.html` - Ana HTML dosyası
- `style.css` - CSS stilleri ve animasyonlar
- `script.js` - JavaScript fonksiyonları ve kontroller

## Özelleştirme

Metni değiştirmek için `index.html` dosyasındaki `.text` div'inin içeriğini düzenleyebilir veya JavaScript fonksiyonlarını kullanabilirsiniz.

## Teknik Detaylar

- CSS 3D transform kullanılarak perspektif efekti oluşturuldu
- CSS keyframe animasyonları ile yumuşak geçişler sağlandı
- Responsive tasarım için media query'ler kullanıldı
- Vanilla JavaScript ile interaktif kontroller eklendi

## Tarayıcı Desteği

Modern tarayıcılarda (Chrome, Firefox, Safari, Edge) çalışır. CSS 3D transform desteği gereklidir. 