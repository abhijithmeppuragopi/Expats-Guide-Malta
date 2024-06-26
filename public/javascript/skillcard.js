document.addEventListener('DOMContentLoaded', () => {
    const skillcardLinks = document.querySelectorAll('.left-column a');
    const contentSections = document.querySelectorAll('.content-section');

    skillcardLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            // Remove active class from all content sections
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Get the target content section and display it
            const targetId = link.getAttribute('data-content');
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Display the first content section by default
    if (contentSections.length > 0) {
        contentSections[0].style.display = 'block';
    }
});
// <..........hamburger........>
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

