$(function () {
    $(".subImg img").on("click", function () {
      img = $(this).attr("src");
      $(".mainImg img").fadeOut(500, function () {
        $(".mainImg img")
          .attr("src", img)
          .on("load", function () {
            $(this).fadeIn(500);
          });
      });
    });
  });