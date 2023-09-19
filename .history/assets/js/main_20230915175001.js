
// 点击联系
const contactLink = document.querySelector('#contact')
const phoneElement = document.querySelector('.phone')

contactLink.addEventListener('click', (event) => {
  event.preventDefault()
  phoneElement.style.opacity = '.8'
})

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

// 点击微信图标显示微信二维码
const wechat = document.getElementById('wechat')
const homeCode = document.querySelector('.home__code')
wechat.addEventListener('mouseenter', () => {
  homeCode.style.animation = 'fadeIn 0.5s ease-in-out forwards'
  console.log('mouseenter')
})

wechat.addEventListener('mouseleave', () => {
  homeCode.style.animation = 'fadeOut 1s ease-in-out forwards'
})



// active and remove menu
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
  // active link
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  // // remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// JavaScript
function isElementInViewport(el) {
  if (!el) {
    return false;
  }

  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isElements(element, index) {

  if (isElementInViewport(element)) {
    // setTimeout(() => {
    //   element.classList.add('animate');
    // }, index * 200)
    element.classList.add('animate');

  } else {
    element.classList.remove('animate');
  }
}

function handleLoad(el) {
  var element = document.querySelector(el);
  if (isElementInViewport(element)) {
    element.classList.add('animate');
  } else {
    if(element){
      element.classList.remove('animate');
    }
    
  }

  if (el === '.project__data' || el === '.work__data') {
    var elements = document.querySelectorAll(el);
    elements.forEach((element, index) => {
      isElements(element, index)
    })
  }

}

window.addEventListener('scroll', function () {
  handleLoad('.home__title')
  handleLoad('.about__container')
  handleLoad('.button')
  handleLoad('.home__social')
  handleLoad('.project__data')
  handleLoad('.work__data')
  handleLoad('.skills__line90')
  handleLoad('.skills__line85')
  handleLoad('.skills__line80')
  handleLoad('.skills__line70')
  handleLoad('.skills__line75')
  handleLoad('.skills__line65')
});

window.addEventListener('load', function () {
  handleLoad('.home__title')
  handleLoad('.about__container')
  handleLoad('.button')
  handleLoad('.home__social')
  handleLoad('.project__data')
  handleLoad('.work__data')
  handleLoad('.skills__line90')
  handleLoad('.skills__line85')
  handleLoad('.skills__line80')
  handleLoad('.skills__line70')
  handleLoad('.skills__line75')
  handleLoad('.skills__line65')
});



const navtt = document.getElementById('nav-menu');
// const navLink = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  navLink.forEach(link => {
    const section = document.querySelector(link.hash);

    // if (section.offsetTop <= scrollPosition + windowHeight / 2 && section.offsetTop + section.offsetHeight > scrollPosition + windowHeight / 2) {
      
    //   navLink.forEach((link,index) => {
    //     link.classList.remove('active');
    //   })
    //   link.classList.add('active');
      
    // }

    if (section && section.offsetTop <= scrollPosition + windowHeight / 2 && section.offsetTop + section.offsetHeight > scrollPosition + windowHeight / 2) {
      navLink.forEach((link,index) => {
        link.classList.remove('active');
      })
      link.classList.add('active');
    }

  });
});