const startButton = document.getElementById("startButton");
const courseContainer = document.getElementById("courseContainer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentPage = 0;
const totalPages = document.querySelectorAll(".course-page").length;

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    courseContainer.style.display = "block";
});

function showPage(pageNumber) {
    document.querySelectorAll(".course-page").forEach((page, index) => {
        page.style.display = index === pageNumber ? "block" : "none";
    });

    currentPage = pageNumber;
    updateButtons();
}

function updateButtons() {
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === totalPages - 1;
}

prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
        showPage(currentPage + 1);
    }
});

// Show the first page initially
showPage(currentPage);
const courseContainerr = document.getElementById('courseContainer');
const nDiv = document.createElement('div');
nDiv.innerHTML = `
<div class="course-page">
            <h2>Day 2: Basic Syntax</h2>
            <ul>
                <li>Structure of a C program.</li>
                <li>Comments.</li>
                <li>Variables and data types.</li>
                <li>Constants.</li>
            </ul>
            <button id="prevButton" disabled>Previous</button>
            <button id="nextButton">Next</button>
        </div>
`;
courseContainerr.appendChild(nDiv);