// Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Student","Web Designer"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: ["Student","Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
});

// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }

    })
})

//Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})
document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.getElementById('modeSwitch');
    const themeMode = document.getElementById('themeMode');

    // Check user's preferred mode from localStorage (if set)
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
        themeMode.setAttribute('data-theme', savedMode);
        modeSwitch.checked = savedMode === 'dark';
    }

    // Event listener for the mode switch
    modeSwitch.addEventListener('change', function () {
        if (modeSwitch.checked) {
            themeMode.setAttribute('data-theme', 'dark');
            localStorage.setItem('themeMode', 'dark');
        } else {
            themeMode.setAttribute('data-theme', 'light');
            localStorage.setItem('themeMode', 'light');
        }
    });
});
