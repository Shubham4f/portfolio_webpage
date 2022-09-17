const navbar = document.querySelector(".navbar");
const mNavButton = document.querySelector(".small_menu");
const logo_btn = document.querySelector("#logo_btn");
const nav_btn = document.querySelectorAll(".navbar_link")
const home = document.querySelector("#home_id");
const skill = document.querySelector("#skills_id");
const achi = document.querySelector("#achi_id");
const gallery = document.querySelector("#gallery_id");
const contact = document.querySelector("#contact_id");

mNavButton.addEventListener('click', () => {
    mNavButton.classList.toggle('m_active');
    navbar.classList.toggle('nav_active');
});

logo_btn.addEventListener('click', () => {
    mNavButton.classList.remove('m_active');
    navbar.classList.remove('nav_active');
});

nav_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        mNavButton.classList.toggle('m_active');
        navbar.classList.toggle('nav_active');
    });
});

const options = {
    threshold: 0.4
};

const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav_btn[0].classList.remove('s_active');
        }
    });
}, options);

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav_btn[0].classList.add('s_active');
            nav_btn[1].classList.remove('s_active');
        }
    });
}, options);

const achiObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav_btn[0].classList.remove('s_active');
            nav_btn[1].classList.add('s_active');
            nav_btn[2].classList.remove('s_active');
        }
    });
}, options);

const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav_btn[1].classList.remove('s_active');
            nav_btn[2].classList.add('s_active');
            nav_btn[3].classList.remove('s_active');
        }
    });
}, options);

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav_btn[2].classList.remove('s_active');
            nav_btn[3].classList.add('s_active');
        }
    });
}, options);

homeObserver.observe(home);
skillObserver.observe(skill);
achiObserver.observe(achi);
galleryObserver.observe(gallery);
contactObserver.observe(contact);