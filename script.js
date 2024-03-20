$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").toggleClass("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var goToTopBtn = document.querySelector(".go-to-top");

  goToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTop();
  });

  function scrollToTop() {
    var scrollDuration = 500; // Duration of the scrolling animation in milliseconds
    var scrollStep = -window.scrollY / (scrollDuration / 10);

    var scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
});

document.getElementById("style-toggle").addEventListener("click", function () {
  document.body.classList.toggle("alternative-style");
});
