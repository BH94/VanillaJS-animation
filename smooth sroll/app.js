function smoothScroll(target, duration) {
  var targetSection = document.querySelector(target);
  var targetPosition = targetSection.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var startTime = null;
  var distance = targetPosition - startPosition;

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function animation(now) {
    if (startTime === null) startTime = now;
    var timeElapsed = now - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

var section1 = document.querySelector(".section1");

section1.addEventListener("click", function () {
  smoothScroll(".section2", 1000);
});

var section2 = document.querySelector(".section2");

section2.addEventListener("click", function () {
  smoothScroll(".section1", 1000);
});
