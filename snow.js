if (location.href.indexOf("ile:") < 0) {
  if (location.href.indexOf("boot") < 0) {
  }
}
(function ($) {
  $.fn.snow = function (options) {
    var $flake = $('<div id="flake"/>')
        .css({
          position: "absolute",
          top: "50px",
        })
        .html("&#10052;"),
      documentHeigth = $(document).height(),
      documentWidth = $(document).width(),
      defaults = {
        minSize: 10,
        maxSize: 20,
        newOn: 500,
        flakeColor: "FFFFFF",
      },
      options = $.extend({}, defaults, options);
    var interval = setInterval(function () {
      var startPositionLeft = Math.random() * documentWidth - 100,
        startOpacity = 0.5 + Math.random(),
        sizeFlake = options.minSize + Math.random() * options.maxSize,
        endPositionTop = documentHeigth - 40,
        endPositionLeft = startPositionLeft - 100 + Math.random() * 200,
        durationFall = documentHeigth * 10 + Math.random() * 5000;
      $flake
        .clone()
        .appendTo("body")
        .css({
          left: startPositionLeft,
          opacity: startOpacity,
          "font-size": sizeFlake,
          color: options.flakeColor,
        })
        .animate(
          {
            top: endPositionTop,
            left: endPositionLeft,
            opacity: 0.2,
          },
          durationFall,
          "linear",
          function () {
            $(this).remove();
          }
        );
    }, options.newOn);
  };
})(jQuery);
