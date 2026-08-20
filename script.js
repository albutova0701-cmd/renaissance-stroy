// Плавное появление секций при прокрутке.
// Если пользователь отключил анимации в системе, ничего дополнительно не делаем.
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about, .services, .contacts');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    sections.forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
});
