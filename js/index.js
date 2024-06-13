// Function to toggle the active state of the current active nav
(function toggleCurrentActiveNav() {
  // Attach a click event listener to each nav-item
  const navItems = $(".nav-item");
  navItems.has(".nav-link:not(:has(img))").on("click", function () {
    // Remove the active class from all nav-items
    navItems.removeClass("active");

    // Add the active class to the clicked nav-item
    $(this).addClass("active");
  });
})();

// Function to toggle the active state of the categories in the partners-categories list
(function toggleCategoriesActive() {
  // Attach a click event listener to each list-item in the partners-categories list
  $(".partners-categories .list-item").on("click", function () {
    // Remove the active class from all list-items in the partners-categories list
    $(".partners-categories .list-item").removeClass("active");

    // Add the active class to the clicked list-item
    $(this).addClass("active");

    // Remove the active class from all inactive-rounded elements in the partners-categories list
    $(".partners-categories .list-item .inactive-rounded").removeClass(
      "active"
    );

    // Add the active class to the inactive-rounded element within the clicked list-item
    $(this).find(".active-rounded").addClass("active");

    // Add the active class to all inactive-rounded elements in the partners-categories list
    $(".partners-categories .list-item .inactive-rounded").addClass("active");
  });
})();

/**
 * This function toggles the animation of the block element
 * The block moves from left to right and vice versa
 */
(function toggleSlideAnimation() {
  // Attach a click event listener to the wrapper element
  let state = false;
  $(document).ready(function () {
    $(".slide-arrow").on("click", (e) => {
      const $parent = $(e.currentTarget)?.closest(".certificate-wrapper");
      if ($parent) {
        state = !state;
        const $target = [$parent.find(".certificate")];
        const tl = gsap.timeline();
        // If the state is true, animate the block element to move from right to left
        if (state) {
          tl.to($target, {
            x: "0%",
            duration: 1,
            ease: "expo.out",
          });
        } else {
          // If the state is false, animate the block element to move from left to right
          tl.to($target, {
            x: "-100%",
            duration: 1,
            ease: "expo.out",
          });
        }
      }
    });
  });
})();
