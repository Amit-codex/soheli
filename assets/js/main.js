/*=============== SHOW MENU ===============*/
function allWork()
{
const navMenu =  document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

    //   Menu show----------------------------->
    // validate if constant exixt-------------->
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    // Menu hidden--------------------->
    // validate if constant exixt-------------->
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('head')
    this.scrollY >= 50 ?header.classList.add('shadow-header')
                       :header.classList.remove('shadow-header') 
}
window.addEventListener('scroll', shadowHeader)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmails = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zir1zdl', 'template_sg33x37', '#contact-form', '38N8daVSJwWhPRQcU')
    .then(() => {
        // show sent message
        contactMessage.textContent = ' Message sent successfully ✅';

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset();
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';
    });
}

contactForm.addEventListener('submit', sendEmails);

// /*=============== SHOW SCROLL UP ===============*/ 
// const scrollUp = () =>{
//     const scrollUp = document.getElementById('scroll-up')
//     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
//                         : scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
     const sectionHeight = currrent.offseteight,
        sectionTop = current.offseTop -58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

        if(scrollDwon > sectionTop && scrollDown <= sectiontop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
}

allWork()

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon =  localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user previously choose a topic
if(selectedTheme){
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactive the dark
    document.body.classList[selectedTheme === 'dark'  ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line'  ? 'add' : 'remove'](iconTheme)
}

// activate/deactivate the the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme()) // Fix typo here
    localStorage.setItem('selected-icon', getCurrentIcon())  // Fix typo here
})



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home_perfil, .about_image, .contact_mail`, {origin: 'right'})
sr.reveal(`.home_name, .home_info,
           .about_container .section_title-1, .about-info,
           .contact_social, .contact_data`,{origin: 'left'})
sr.reveal(`.projects_card`, {interval:100})


function loader(){
    var tl = gsap.timeline()
    
    tl.from(".loader h3",{
      x:60,
      opacity:0,
      duration:2,
      stagger:0.3
    })
    tl.to(".loader h3",{
      opacity:0,
      x:-50,
      duration:2,
      stagger:0.4
    })
    tl.to(".loader",{
      opacity:0
    });
    tl.to(".loader",{
      display: "none",
      onComplete: allWork,
    });
    tl.from(".page1-content h1 span",{
      y:100,
      opacity:0,
      duration:2,
      stagger:0.3
    })
    }
    
    loader()