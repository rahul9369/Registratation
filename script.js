document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropbtn");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const dropdown = this.parentElement;
      dropdown.classList.toggle("show");

      // Close other open dropdowns
      const otherDropdowns = document.querySelectorAll(".dropdown");
      otherDropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove("show");
        }
      });
    });
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
  });
});
