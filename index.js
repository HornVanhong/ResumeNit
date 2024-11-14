$(document).ready(function () {
  // Load the home page content by default
  $("#content").load("home.html");

  // Navigation link event handlers
  $("#homelink").click(function (e) {
    e.preventDefault(); // Corrected typo
    $("#content").load("home.html", function () {
      window.scrollTo(0, 0);
    });
  });

  $("#aboutlink").click(function (e) {
    e.preventDefault(); // Corrected typo
    $("#content").load("about.html", function () {
      window.scrollTo(0, 0);
    });
  });

  $("#skilllink").click(function (e) {
    e.preventDefault(); // Corrected typo
    $("#content").load("skill.html", function () {
      window.scrollTo(0, 0);
    });
  });

  $("#exlink").click(function (e) {
    e.preventDefault(); // Corrected typo
    $("#content").load("experience.html", function () {
      window.scrollTo(0, 0);
    });
  });

  $("#edlink").click(function (e) {
    e.preventDefault(); // Corrected typo
    $("#content").load("education.html", function () {
      window.scrollTo(0, 0);
    });
  });

  $("#worklink").click(function (e) {
    e.preventDefault(); // Corrected typo
    $("#content").load("work.html", function () {
      window.scrollTo(0, 0);
    });
  });

  $("#bloglink").click(function (e) {
    e.preventDefault(); // Corrected typo
    $("#content").load("blog.html", function () {
      window.scrollTo(0, 0);
    });
  });

  $("#contactlink").click(function (e) {
    e.preventDefault(); // Corrected typo
    $("#content").load("contact.html", function () {
      window.scrollTo(0, 0);
    });
  });
});
// Toggle the 'show' class to display or hide the nav menu on mobile
document.getElementById("menu-icon").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.toggle("show");
});

// Close the menu when a navigation link is clicked
const navLinks = document.querySelectorAll(".nav-list li");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".nav-list").classList.remove("show");
  });
});
