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

// Отдельная настройка для встроенных браузеров мессенджеров.
// В обычном Safari/Chrome этот класс не добавляется, поэтому их верстка не меняется.
document.addEventListener('DOMContentLoaded', function() {
    const ua = navigator.userAgent || '';
    const isMessengerWebView = /MAX|Telegram|WebView|; wv\)/i.test(ua);
    if (isMessengerWebView) {
        document.body.classList.add('messenger-webview');
    }
});
