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