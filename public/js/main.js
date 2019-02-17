var animate = (ele, anim) => {
  if (ele.classList.contains(anim)) {
    ele.classList.remove(anim);
  } else {
    ele.classList.add(anim);
    ele.classList.add("animated");
  }
};

var animationEnd = (function(el) {
  var animations = {
    animation: "animationend",
    OAnimation: "oAnimationEnd",
    MozAnimation: "mozAnimationEnd",
    WebkitAnimation: "webkitAnimationEnd"
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement("div"));

body = document.getElementById("main-body");
window.addEventListener("load", function() {
  animate(body, "fadeInUp");
});

$(function() {
  $(".slideshow").responsiveSlides({
    pause: true,
    auto: true,
    pager: true
  });
});
