window.addEventListener("resize", function () {
  adjustFooter();
});

window.addEventListener("load", function () {
  // Наблюдение за мутацией DOM
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      setTimeout(adjustFooter, 100);
    });
  });

  var config = { attributes: true, childList: true, subtree: true };

  observer.observe(document.body, config);
});

function adjustFooter() {
  var body = document.body;

  var windowHeight = window.innerHeight;

  var footer = document.querySelector("footer");

  if (footer.style.position === "fixed") {
    var bodyHeight = body.offsetHeight + footer.offsetHeight;
  } else {
    var bodyHeight = body.offsetHeight;
  }

  if (bodyHeight < windowHeight) {
    footer.style.position = "fixed";
    footer.style.bottom = "0.8%";
  } else {
    footer.style.position = "unset";
  }
}
