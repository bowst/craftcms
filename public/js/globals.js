(function($) {
  $("#full-contact")
    .validator()
    .on("submit", function (e) {
      validateForm(this);
    });

  $("#footer-contact")
    .validator()
    .on("submit", function (e) {
      validateForm(this);
    });
  
  function validateForm(form) {
    form = $(form);
    var validator = form.data("bs.validator");
    
    if (validator.isIncomplete || validator.hasErrors) {
      $target = $($(".has-error input", form)[0]);
      $("body").scrollTo($target, 250, { offset: -50 });
      $target.focus();
      return false;
    }
    
    return true;
  }
})(jQuery);

(function($) {
  var $toggle = $("#header .toggle");
  var $nav = $($toggle.data("nav"));
  var $body = $("body");
  var NAV_CLASSNAME = "nav-displayed";
  
  $toggle.click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    
    $body.toggleClass(NAV_CLASSNAME);
  });
  
  $nav.click(function (e) {
    e.stopPropagation();
  });
  
  $body.click(function (e) {
    if ($body.hasClass(NAV_CLASSNAME)) {
      $body.removeClass(NAV_CLASSNAME);
    }
  });
})(jQuery);
(function ($) {
   $.localScroll({
      target: 'body', 
      queue: true,
      duration: 250,
      hash: true
   });
})(jQuery);