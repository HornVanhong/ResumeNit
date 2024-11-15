$(document).ready(function () {
  // Load the home page content by default
  $("#content").load("home.html", function () {
    window.scrollTo(0, 0); // Scroll to the top after page load
  });

  // Navigation link event handlers
  $("#homelink").click(function (e) {
    e.preventDefault();
    $("#content").load("home.html", function () {
      window.scrollTo(0, 0);
    });
    setActiveLink("#homelink");
  });

  $("#aboutlink").click(function (e) {
    e.preventDefault();
    $("#content").load("about.html", function () {
      window.scrollTo(0, 0);
    });
    setActiveLink("#aboutlink");
  });

  $("#skilllink").click(function (e) {
    e.preventDefault();
    $("#content").load("skill.html", function () {
      window.scrollTo(0, 0);
      // Update progress bars
      setProgressBar("word-progress", 80);
      setProgressBar("excel-progress", 90);
      setProgressBar("powerpoint-progress", 75);
      setProgressBar("communication-progress", 85);
      setProgressBar("teamwork-progress", 90);
      setProgressBar("problem-solving-progress", 80);
      setProgressBar("khmer-progress", 90);
      setProgressBar("english-progress", 85);
    });
    setActiveLink("#skilllink");
  });

  $("#exlink").click(function (e) {
    e.preventDefault();
    $("#content").load("experience.html", function () {
      window.scrollTo(0, 0);
    });
    setActiveLink("#exlink");
  });

  $("#edlink").click(function (e) {
    e.preventDefault();
    $("#content").load("education.html", function () {
      window.scrollTo(0, 0);
    });
    setActiveLink("#edlink");
  });

  $("#worklink").click(function (e) {
    e.preventDefault();
    $("#content").load("work.html", function () {
      window.scrollTo(0, 0);
    });
    setActiveLink("#worklink");
  });

  $("#bloglink").click(function (e) {
    e.preventDefault();
    $("#content").load("blog.html", function () {
      window.scrollTo(0, 0);
    });
    setActiveLink("#bloglink");
  });

  $("#contactlink").click(function (e) {
    e.preventDefault();
    $("#content").load("contact.html", function () {
      window.scrollTo(0, 0);
    });
    setActiveLink("#contactlink");
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

  // Set active class for clicked link
  function setActiveLink(linkId) {
    // Remove the 'active' class from all navigation links
    $(".nav-list li").removeClass("active");
    // Add 'active' class to the clicked link
    $(linkId).addClass("active");
  }

  // Function to update progress dynamically
  function setProgressBar(id, progress) {
    const progressBar = document.getElementById(id);
    if (progressBar) {
      progressBar.style.width = "0%"; // Initially set the width to 0% (this will be the starting point for animation)

      // Allow the page to render with width set to 0%, then set the final progress
      setTimeout(() => {
        progressBar.style.width = progress + "%"; // Animate to the target progress value
        progressBar.innerText = progress + "%"; // Update the text to show progress
      }, 100); // Timeout to ensure smooth transition after 0% is rendered
    } else {
      console.error(`Element with id ${id} not found!`);
    }
  }

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

  // Call the loadFooter function when the page loads
  window.onload = function () {
    loadFooter();
  };
});
