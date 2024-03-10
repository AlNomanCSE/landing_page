var barIcon = document.querySelector(".bar");
var headerButtons = document.querySelector(".HeaderFormbl .HeaderButtons");
// Add a click event listener to the bar icon
barIcon === null || barIcon === void 0 ? void 0 : barIcon.addEventListener("click", function () {
    // Toggle the classes of the bar icon
    barIcon.classList.toggle("fa-bars");
    barIcon.classList.toggle("fa-xmark");
    // Toggle the 'active' class for HeaderButtons container
    headerButtons.classList.toggle("active");
    console.log(headerButtons);
});
