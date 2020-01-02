var scripts = {
  init: function () {
    scripts.setHeroHeight();
    scripts.attachEventListeners();
    window.addEventListener('resize', function () {
      scripts.setHeroHeight();
    });
  },
  setHeroHeight: function () {
    var body = document.getElementsByClassName('g-body')[0];
    var innerBody = document.getElementsByClassName('g-body__inner')[0];
    var hero = document.getElementsByClassName('g-hero')[0];
    var header = document.getElementsByClassName('g-header')[0];
    
    var innerBodyPadding = window.getComputedStyle(innerBody, null).getPropertyValue('padding');
    var innerBodyPaddingValue = Number(innerBodyPadding.split('px')[0]);
    var bodyBorder = window.getComputedStyle(body, null).getPropertyValue('border');
    var bodyBorderValue = Number(bodyBorder.split('px')[0]);
    var heightFromHeroToTop = header.offsetHeight + innerBodyPaddingValue + bodyBorderValue;

    hero.style.height = (window.innerHeight - heightFromHeroToTop) + "px";
  },
  attachEventListeners: function () {
    var mobileMenu = document.getElementsByClassName('g-header__mobilemenu')[0];
    var mobileMenuBtn = document.getElementsByClassName('g-header__mobilemenutrigger-wrap')[0];
    if (mobileMenuBtn){
      mobileMenuBtn.addEventListener('click', function () {
        mobileMenuBtn.classList.toggle("on");
        mobileMenu.classList.toggle("on");
        console.log('button clicked')
      })
    }
  }
};

document.addEventListener("DOMContentLoaded", function(event) { 
  scripts.init();
});