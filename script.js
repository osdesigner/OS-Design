// الحصول على عناصر HTML
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// عند الضغط على زر القائمة
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // إضافة أو إزالة الكلاس "active"
});

window.addEventListener('load', function() {
    const content = document.querySelector('.content');
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
});






  