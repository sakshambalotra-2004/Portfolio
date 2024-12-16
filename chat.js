function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("show");
}
function toggleDropdown1(event) {
  // event.preventDefault(); // Prevent default link behavior
  const dropdownMenu = document.getElementById("dropdownMenu");
  const burger = document.getElementById("burger");
  burger.checked = burger.defaultChecked;
  dropdownMenu.classList.remove("show");
}

const codeDisplay = document.getElementById('code-display');
const cursor = document.querySelector('.cursor');
const code = `-Code.Create.Inspire`;
let index = 0;

function typeCode() {
  if (index < code.length) {
    codeDisplay.textContent += code.charAt(index);
    index++;
    cursor.style.left = `${codeDisplay.offsetWidth}px`;
    setTimeout(typeCode, 100); 
  } else {
    cursor.style.animation = "blink 1s step-start infinite";
  }
}
typeCode();
// Initialize variables
const carouselContainer = document.getElementById("carousel");
const carouselItems = carouselContainer.children; // Get all child elements of the carousel
let currentIndex = 0; // Tracks the current visible child
const totalItems = carouselItems.length;

// Function to show the current child and hide others
function updateCarousel() {
  for (let i = 0; i < totalItems; i++) {
    carouselItems[i].style.display = i === currentIndex ? "block" : "none"; // Show current, hide others
  }
}

// Function to handle navigation
function toggleCarousel(direction) {
  // Update the currentIndex based on the direction
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  updateCarousel(); // Update the carousel
}

// Initialize the carousel by showing the first child
updateCarousel();

// Example buttons for navigation
document.getElementById("prevBtn").addEventListener("click", () => toggleCarousel(-1));
document.getElementById("nextBtn").addEventListener("click", () => toggleCarousel(1));
