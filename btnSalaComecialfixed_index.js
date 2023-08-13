window.addEventListener('DOMContentLoaded', function() {
  var stickyDiv = document.querySelector('.menu2');
  var rect = stickyDiv.getBoundingClientRect();
  var offsetTop = rect.top;

  if (offsetTop > -69) {
    stickyDiv.classList.remove('fixed');
  } else {
    stickyDiv.classList.add('fixed');
  }
});
window.addEventListener('DOMContentLoaded', function() {
  var stickyDiv = document.querySelector('.menu2');
  var rect = stickyDiv.getBoundingClientRect();
  var offsetTop = rect.top;
  var isFixed = false; // Variável para controlar o estado da classe "fixed"

  window.addEventListener('scroll', function() {
    var rect = stickyDiv.getBoundingClientRect();
    var offsetTop = rect.top;
    if (offsetTop <= 70 && !isFixed) {
      stickyDiv.classList.add('fixed');
      isFixed = true;
    } else if (offsetTop > 70 && isFixed) {
      stickyDiv.classList.remove('fixed');
      isFixed = false;
    }
  });
  
  if (offsetTop <= 70) {
    stickyDiv.classList.add('fixed');
    isFixed = true;
  }
});