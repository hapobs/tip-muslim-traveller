// Smooth Scrolling functionality
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Rate Us functionality
const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-text');

stars.forEach(star => {
    star.addEventListener('click', function () {
        // Remove 'selected' class from all stars
        stars.forEach(s => s.classList.remove('selected'));
        
        // Add 'selected' class to the clicked star and all previous stars
        let ratingValue = star.getAttribute('data-value');
        star.classList.add('selected');

        // Highlight all previous stars
        let previousStars = Array.from(stars).slice(0, parseInt(ratingValue));
        previousStars.forEach(prevStar => prevStar.classList.add('selected'));

        // Update the rating text to reflect the selected number of stars
        ratingText.innerText = `You rated us ${ratingValue} out of 5 stars. Thank you!`;
    });
});
