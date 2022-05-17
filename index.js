$(function () {
  $("#pls-btn").on("click", function () {
    setTimeout(function () {
      $(".card").addClass("paused");
    }, 350);
    //remove old event classes
    $(".explore").removeClass("fadeIn");
    $(".card-title").removeClass("fadeOut");
    $(".card-text").removeClass("fadeOut");
    $(".card-btn").removeClass("fadeOut");
    $(".card-title").removeClass("hidden");
    $(".card-text").removeClass("hidden");
    $(".card-btn").removeClass("hidden");
    $(".u-div").removeClass("hidden");
    $(".card").removeClass("hidden");
    $(".m-close").removeClass("hidden");

    //add new event classes
    $(".explore").addClass("fadeOut");
    $(".card-title").addClass("fadeIn");
    $(".card-text").addClass("fadeIn");
    $(".card-btn").addClass("fadeIn");
    $(".u-div").addClass("fadeIn");
    $(".more").addClass("hidden");
    $(".m-close").addClass("fadeIn");
    $(".card").addClass("transform-active");
    $("#pls-btn").addClass("hidden");

    //close events
    $(".m-close").on("click", function () {
      $(".more").removeClass("hidden");
      $(".card-title").removeClass("fadeIn");
      $(".card-text").removeClass("fadeIn");
      $(".card-btn").removeClass("fadeIn");
      $(".u-div").removeClass("fadeIn");
      $(".explore").addClass("fadeIn");
      $(".card-title").addClass("hidden");
      $(".card-text").addClass("hidden");
      $(".card-btn").addClass("hidden");
      $(".u-div").addClass("hidden");
      $(".m-close").addClass("hidden");
      $("#pls-btn").removeClass("hidden");
      $(".card").removeClass("paused");

      // reset element containing animation
      setTimeout(function () {
        $(".card").removeClass("transform-active");
        $(".card").addClass("hidden");
        void $(".card").offsetWidth;
      }, 350);
    });
  });
});
