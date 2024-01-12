/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
/*===== Resume =====*/
document.getElementById('preview-button').addEventListener('click', function () {
                        document.getElementById('preview-container').style.display = 'block';
                        document.getElementById('pdf-preview').src = 'assets/doc/Resume .pdf';
                    });
            
                    document.getElementById('close-button').addEventListener('click', function () {
                        document.getElementById('preview-container').style.display = 'none';
                        document.getElementById('pdf-preview').src = 'assets/doc/Resume .pdf';
                    });
/*===== COPY TO clipboard =====*/
      function copyToClipboard() {
        var tempInput = document.createElement("input");
        tempInput.setAttribute("value", "vvbhise@outlook.com");
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        showCustomAlert("Email id copied to clipboard: (vvbhise@outlook.com)");
      }

      function showCustomAlert(message) {
        var modal = document.getElementById("myModal");
        var modalContent = document.getElementById("myModalContent");
        var closeBtn = document.getElementsByClassName("close")[0];

        modal.style.display = "block";
        modalContent.innerHTML = message;

        closeBtn.onclick = function () {
          modal.style.display = "none";
        };

        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      }
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});
sr.reveal('.home__data, .about__img, .skills__subtitle, .education__subtitle, .work__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .work__container2, .about__text,.education__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
