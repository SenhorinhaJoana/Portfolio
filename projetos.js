document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const projectImage = document.getElementById('project-image');

    projectItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const imageUrl = item.getAttribute('data-image');
            projectImage.src = imageUrl;
            projectImage.classList.add('active');
        });

        item.addEventListener('mouseout', function() {
            projectImage.classList.remove('active');
        });
    });
});
