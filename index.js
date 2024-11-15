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
    e.preventDefault();
    $("#content").load("skill.html", function () {
      window.scrollTo(0, 0);
      // Set progress bars after the page is loaded
      setProgressBar("word-progress", 80);
      setProgressBar("excel-progress", 90);
      setProgressBar("powerpoint-progress", 75);
      setProgressBar("communication-progress", 85);
      setProgressBar("teamwork-progress", 90);
      setProgressBar("problem-solving-progress", 80);
      setProgressBar("khmer-progress", 100);
      setProgressBar("english-progress", 50);
    });
    updateActiveLink("#skilllink");
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
// Function to load the footer content
function loadFooter() {
  fetch("/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Footer content could not be loaded");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
}
// Function to update progress dynamically
function setProgressBar(id, progress) {
  const progressBar = document.getElementById(id);
  if (progressBar) {
    // Initially set the width to 0% (this will be the starting point for animation)
    progressBar.style.width = "0%";

    // Allow the page to render with width set to 0%, then set the final progress
    setTimeout(() => {
      progressBar.style.width = progress + "%"; // Animate to the target progress value
      progressBar.innerText = progress + "%"; // Update the text to show progress
    }, 100); // Timeout to ensure smooth transition after 0% is rendered
  } else {
    console.error(`Element with id ${id} not found!`);
  }
}

// Function to update active link (highlight the current page in the nav)
function updateActiveLink(activeLink) {
  $(".nav-list li").removeClass("active");
  $(activeLink).addClass("active");
}
// Call the loadFooter function when the page loads
window.onload = function () {
  loadFooter();
};
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-list li");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all links
      navItems.forEach((link) => link.classList.remove("active"));

      // Add active class to the clicked link
      item.classList.add("active");
    });
  });
});
// Function to show the popup
function showPopup() {
  document.getElementById("hire-popup").style.display = "flex"; // Show the popup as flex to center it
}

// Function to close the popup
function closePopup() {
  document.getElementById("hire-popup").style.display = "none"; // Hide the popup
}

// Close the popup when clicking anywhere outside the popup content
window.onclick = function (event) {
  var modal = document.getElementById("hire-popup");
  // Close if clicking outside the modal content
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Form submission (Optional - Prevent actual submission for testing)
document
  .getElementById("hire-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for testing
    alert("Form submitted!");
  });
