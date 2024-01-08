// Run the lightbox plugin:
baguetteBox.run(".gallery");

/*****************************
  MY SEARCH FILTER SOLUTION
*****************************/

// Target the search input
const searchInput = document.querySelector("header input");

// Listen for key events in search input
searchInput.addEventListener("keyup", function (e) {
    // Capture search input value (in lowercase letters)
    let inputValue = e.target.value.toLowerCase();
    console.log(inputValue);
});
