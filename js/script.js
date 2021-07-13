// Get the container element
var topheader = document.getElementById("topheader");

// Get all buttons with class="btn" inside the container
var navItem = topheader.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
