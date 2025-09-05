/*=============== HOME SPLIT TEXT ===============*/
const text = document.querySelector('.home__split-text');

/*=============== SWIPER PROJECTS ===============*/
const swiper = new Swiper('.projects__container', {
    // Swiper options go here
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]');
/*=============== SERVICES ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.services__accordion-item');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tc => tc.classList.remove('active'));
        tabs.forEach(t => t.classList.remove('active'));

        target.classList.add('active');
        tab.classList.add('active');
    });
});

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
const testimonialCards = document.querySelectorAll('.testimonial__card');
if (testimonialCards.length > 0) {
    testimonialCards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.classList.add('duplicate');
        card.parentNode.appendChild(clone);
    });
}

/*=============== COPY EMAIL IN CONTACT ===============*/
const emailBtn = document.querySelector('.contact__email-btn');
if (emailBtn) {
    emailBtn.addEventListener('click', () => {
        const email = emailBtn.getAttribute('data-email');
        navigator.clipboard.writeText(email).then(() => {
            emailBtn.textContent = 'Copied!';
            setTimeout(() => {
                emailBtn.textContent = 'Copy Email';
            }, 1500);
        });
    });
}

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const yearEl = document.querySelector('.footer__year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
});

/*=============== CUSTOM CURSOR ===============*/

const cursor = document.querySelector('.custom-cursor');
if (cursor) {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));
}
/* Hide custom cursor on links */
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => cursor && cursor.classList.add('hide'));
    link.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hide'));
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
/*=============== SERVICES ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.services__accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.services__accordion-header');
    header.addEventListener('click', () => {
        const openItem = document.querySelector('.services__accordion-item.open');
        if (openItem && openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.services__accordion-content').style.maxHeight = null;
        }
        item.classList.toggle('open');
        const content = item.querySelector('.services__accordion-content');
        if (item.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
const testimonialSwiper = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

/*=============== COPY EMAIL IN CONTACT ===============*/
const emailBtn = document.querySelector('.contact__email-btn');
if (emailBtn) {
    emailBtn.addEventListener('click', () => {
        const email = emailBtn.getAttribute('data-email');
        navigator.clipboard.writeText(email).then(() => {
            emailBtn.textContent = 'Copied!';
            setTimeout(() => {
                emailBtn.textContent = 'Copy Email';
            }, 1500);
        });
    });
}

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const yearEl = document.querySelector('.footer__year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
});

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.custom-cursor');
if (cursor) {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));
}

/* Hide custom cursor on links */
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => cursor && cursor.classList.add('hide'));
    link.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hide'));
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false,
});

sr.reveal('.home__content, .about__content, .services__container, .projects__container, .testimonial__container, .contact__container, .footer__container', {
    interval: 100,
});
