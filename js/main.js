(function ($) {
  $(window).on("load", function () {
    var masonryGrid = $(".grid");
    masonryGrid.imagesLoaded(function () {
      masonryGrid.masonry({
        itemSelector: ".grid-item",
        //columnWidth: ".gutter-sizer",
        gutter: 5,
        percentPosition: true
      });
    });
  });
  $(document).on("click", ".burger", function () {
    $(".burger").toggleClass("close");
    $("#menu").toggleClass("show");
  });
})(jQuery);

(function ($) {
  $(window).on("load", function () {
    var masonryGrid = $(".grid__blog");
    masonryGrid.imagesLoaded(function () {
      masonryGrid.masonry({
        itemSelector: ".grid-item__blog",
        //columnWidth: ".gutter-sizer",
        gutter: 5,
        percentPosition: true,
        
      });
    });
  });
})(jQuery);
