document.querySelectorAll(".feature").forEach((feature) => {
  feature.addEventListener("click", (event) => {
    // Prevent event propagation to avoid triggering the document click event
    event.stopPropagation();

    // Hide all cards
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = "none";
    });

    feature.querySelector(".card").style.display = "block";
  });
});

// Add a click event listener to the document
document.addEventListener("click", () => {
  // Hide all cards when clicking on an empty space
  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = "none";
  });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});
