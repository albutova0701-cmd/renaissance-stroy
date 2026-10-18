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
// Для гарантированного режима в ссылке можно использовать ?view=messenger.
document.addEventListener('DOMContentLoaded', function() {
    const ua = navigator.userAgent || '';
    const params = new URLSearchParams(window.location.search);
    const forcedMessengerView = params.get('view') === 'messenger';
    const knownMessenger = /MAX|Telegram|WebView|; wv\)|VK[Ii]?|Instagram|FBAN|FBAV/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const hasNativeWebViewBridge = Boolean(
        (window.webkit && window.webkit.messageHandlers) ||
        window.ReactNativeWebView || window.AndroidInterface
    );
    // На iOS у встроенных браузеров User-Agent иногда совпадает с Safari.
    // Поэтому учитываем дополнительные признаки WebView, если они доступны.
    const iosWebView = isIOS && /AppleWebKit/i.test(ua) &&
        (!/Safari/i.test(ua) || hasNativeWebViewBridge);

    if (forcedMessengerView || knownMessenger || iosWebView || hasNativeWebViewBridge) {
        document.body.classList.add('messenger-webview');
    }
});
