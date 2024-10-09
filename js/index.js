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

/**
 * This function toggles the checked class of the parent element
 * when the input within the checkbox-container is clicked.
 */
(function toggleCheckbox() {
  // Attach a click event listener to the input element within the checkbox-container
  $(".checkbox-container input").click(function () {
    // Use jQuery to select the parent element of the clicked input
    // and toggle the "checked" class on it
    $(this).parent().toggleClass("checked");
  });
})();

(function toggleHide() {
  $("#n-doc").on("click", function () {
    $(".wrapper").toggle("hide");
    $(".new-document-wrapper").toggle("show");
  });
})();

(function toggleShow() {
  $(".new-document-wrapper").hide();
})();

Highcharts.chart("container", {
  chart: {
    height: 1200,
    inverted: false,
  },

  title: {
    text: "Organizational Structure",
  },

  accessibility: {
    point: {
      descriptionFormat:
        "{add index 1}. {toNode.name}" +
        "{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, " +
        "reports to {fromNode.id}",
    },
  },

  series: [
    {
      type: "organization",
      name: "Ejada",
      data: [
        ["CEO", "CTO"],
        ["CTO", "CPO"],
        ["CPO", "CTO"],
        ["CPO", "CPO"],
        ["CPO", "CSO"],
        ["CPO", "HR"],
        ["CPO", "Product"],
        ["CPO", "Web"],
        ["CSO", "Sales"],
        ["HR", "Market"],
        ["CSO", "Market"],
        ["HR", "Market"],
        ["CTO", "Market"],
      ],
      levels: [
        {
          level: 0,
          color: "silver",
          dataLabels: {
            color: "black",
          },
        },
        {
          level: 1,
          color: "silver",
          dataLabels: {
            color: "black",
          },
          height: 25,
        },
        {
          level: 2,
          color: "#980104",
        },
        {
          level: 4,
          color: "#359154",
        },
      ],
      nodes: [
        {
          id: "CEO",
          title: "CEO",
          name: "NAME HERE",
        },
        {
          id: "HR",
          title: "CFO",
          name: "NAME HERE",
          color: "#007ad0",
        },
        {
          id: "CTO",
          title: "CTO",
          name: "NAME HERE",
        },
        {
          id: "CPO",
          title: "CPO",
          name: "NAME HERE",
        },
        {
          id: "CSO",
          title: "CSO",
          name: "NAME HERE",
        },
        {
          id: "Product",
          name: "Product developers",
        },
        {
          id: "Web",
          name: "Web devs, sys admin",
        },
        {
          id: "Sales",
          name: "Sales team",
        },
        {
          id: "Market",
          name: "Marketing team",
          column: 5,
        },
      ],
      colorByPoint: false,
      color: "#007ad0",
      dataLabels: {
        color: "white",
      },
      borderColor: "white",
      nodeWidth: "100",
    },
  ],
  tooltip: {
    outside: false,
  },
  exporting: {
    allowHTML: false,
    sourceWidth: 800,
    sourceHeight: 600,
  },
});
