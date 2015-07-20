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
