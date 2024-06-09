document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('mouseover', () => {
        photo.style.transform = 'scale(1.05)';
    });

    photo.addEventListener('mouseout', () => {
        photo.style.transform = 'scale(1)';
    });
});
