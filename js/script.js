// "use strict";

const faqs = document.querySelectorAll("#faqs h2 a");

faqs.forEach(function(question) {
    question.addEventListener("click", function(event) {
        event.preventDefault();

        const heading = question.parentElement;
        const answer = heading.nextElementSibling;

        // Toggle the answer and the plus/minus image
        heading.classList.toggle("minus");
        answer.classList.toggle("open");
    });
});