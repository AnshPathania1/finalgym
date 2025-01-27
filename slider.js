const leftArrow = document.getElementById("left_arrow");
const rightArrow = document.getElementById("right_arrow");

const leftBoxes = document.querySelectorAll(".left .text_box"); // Images
const rightBoxes = document.querySelectorAll(".right .text_box"); // Text

let currentIndex = 0; // Tracks the current slide
const totalSlides = leftBoxes.length; // Total number of slides

// Function to update the position of slides
function updateSlides() {
  // Update left (images) section
  leftBoxes.forEach((box, index) => {
    box.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
  });

  // Update right (texts) section
  rightBoxes.forEach((box, index) => {
    box.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
  });
}

// Initial positioning of slides
updateSlides();

// Right arrow click (next slide)
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides; // Increment index and loop
  updateSlides();
});

// Left arrow click (previous slide)
leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Decrement index and loop
  updateSlides();
});
