var scripts = {
  init: function () {
    scripts.setHeroHeight();
    scripts.attachEventListeners();
    scripts.getJobsList();
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
    var headerLogoEl = document.getElementsByClassName('g-header__brand')[0];
    var rootEl = document.documentElement;
    if (mobileMenuBtn){
      mobileMenuBtn.addEventListener('click', function () {
        mobileMenuBtn.classList.toggle("on");
        mobileMenu.classList.toggle("on");
        headerLogoEl.classList.toggle("mobileOpen");
        rootEl.classList.toggle("mobileOpen");
        console.log(headerLogoEl)
        console.log('button clicked');
      })
    }
  },
  getJobsList: function () {
    var jobsListEl = document.getElementsByClassName('gamalon-jobs-list');
    if (jobsListEl) {
      var Http = new XMLHttpRequest();
      var url = 'https://hire.withgoogle.com/v2/api/t/gamaloncom/public/jobs';
      Http.open("GET", url);
      Http.send();
      Http.onreadystatechange = function(e) {
        var posts = Http.responseText;
        console.log(posts);
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", function(event) { 
  scripts.init();
});