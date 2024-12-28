// Select modal elements
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("contactModal");

// Open the modal when the "Get in Touch" button is clicked
openModal.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent any default behavior
    modal.style.display = "flex"; // Show the modal
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", function () {
    modal.style.display = "none"; // Hide the modal
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
});

// CV Button Functionality
const viewCV = document.getElementById("viewCV");
viewCV.addEventListener("click", function () {
    // Open CV in a new tab
    window.open('MilanKalcicCV.pdf', '_blank');
});