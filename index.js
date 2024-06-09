(function toggleCurrentActiveNav() {
  $(".nav-item").on("click", function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
})();

(function toggleCategoriesActive() {
  $(".partners-categories .list-item").on("click", function () {
    $(".partners-categories .list-item").removeClass("active");
    $(this).addClass("active");
    $(".partners-categories .list-item .active-rounded").removeClass("active");
    $(this).find(".active-rounded").addClass("active");
    $(".partners-categories .list-item .inactive-rounded").addClass("active");
  });

})();
