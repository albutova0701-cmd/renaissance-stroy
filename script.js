// Плавное появление блоков при скролле (Intersection Observer)
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about, .services, .contacts');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s, transform 0.8s';
        observer.observe(section);
    });
});

// Определяем встроенный браузер мессенджера.
// На iOS некоторые WebView не указывают название приложения в User-Agent,
// поэтому дополнительно проверяем признаки WKWebView.
document.addEventListener('DOMContentLoaded', function() {
    const ua = navigator.userAgent || '';
    const isKnownMessenger = /MAX|Telegram|WebView|; wv\)|VK[Ii]?|Instagram|FBAN|FBAV/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isIOSWebView = isIOS && /AppleWebKit/i.test(ua) &&
        !/(Version\/[\d.]+.*Safari|CriOS|FxiOS|EdgiOS|OPiOS)/i.test(ua);

    if (isKnownMessenger || isIOSWebView) {
        document.body.classList.add('messenger-webview');
    }
});
