const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

// showMenu('nav-toggle', 'nav-menu')

// // ==========REMOVE MOBILE==========
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show-menu')
// }

// navLink.forEach(n => n.addEventListener('click', linkAction))

showMenu('nav-toggle', 'nav-menu')

// ==========REMOVE MOBILE==========
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeoght = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })


}

window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)



function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scroTop.classList.add('show-scroll'); else header.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)




 // Select filter buttons and portfolio items
  const filterButtons = document.querySelectorAll(".portfolio__item");
  const portfolioItems = document.querySelectorAll(".portfolio__content");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      // Add 'active' to clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      portfolioItems.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block"; // Show
        } else {
          item.style.display = "none"; // Hide
        }
      });
    });  
  });


  const testimonials = document.querySelectorAll(".testimonial__content");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let index = 0;

  function showTestimonial(i) {
    testimonials.forEach((testimonial, idx) => {
      testimonial.classList.remove("active");
      if (idx === i) testimonial.classList.add("active");
    });
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  });

  // Auto-play every 5 seconds
  setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }, 5000);

  gsap.from('.home__img', {opacity: 2, duration: 2, delay:.5, x:60})



