var scripts = {
  init: function () {
    scripts.setHeroHeight();
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
  }
};

document.addEventListener("DOMContentLoaded", function(event) { 
  scripts.init();
});