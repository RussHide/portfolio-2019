function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("saleIzquierda")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("saleDerecha")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}
function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".seRevela").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      //markers: {startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20},
      onEnter: function () { animateFrom(elem) },
      onEnterBack: function () { animateFrom(elem, -1) },
      onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
var scrollPosition = window.scrollY;
var arrow = document.getElementById('arrow');

window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    if (scrollPosition >= 340) {
      arrow.classList.add('opacity-100');
    } else {
      arrow.classList.remove('opacity-100');
      arrow.classList.add('opacity-0');
    }

});
new TypeIt("#wemeText", {
  speed: 50,
  waitUntilVisible: true
})
  .type("Welcome!")
  .exec(async () => {
    //-- Return a promise that resolves after something happens.
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve();
      }, 2000);
    });
  })
  .delete(8)
  .type("Hi, I am Cristian, FullStack Dev.")
  .go();


