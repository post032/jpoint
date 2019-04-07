(function() {
    "use strict";
    var toggles = document.querySelectorAll('.nav-open');
    var open = document.querySelector('#nav');
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener("click", function(e) {
        e.preventDefault();
        open.classList.toggle('nav-hide');
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
      });
    }
  })();

  $('.card__link').click(function(e) {
    e.preventDefault();
    $('.modal__one').show();
  });

  $('.article__button').click(function(e) {
    e.preventDefault();
    $('.modal__two').show();
  });

  $('.modal__close').click(function() {
    $('.modal__one, .modal__two').hide();
  });
