document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('mouseover', () => {
        photo.querySelector('.overlay').style.opacity = 1;
    });

    photo.addEventListener('mouseout', () => {
        photo.querySelector('.overlay').style.opacity = 0;
    });
});
