document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#gallery img');
    const lightbox = document.createElement('div');
    const lightboxImg = document.createElement('img');
    const lightboxCaption = document.createElement('p');
    const closeBtn = document.createElement('span');
    
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightboxImg.className = 'lightbox-img';
    lightboxCaption.className = 'lightbox-caption';
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    
    lightbox.appendChild(closeBtn);
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(lightboxCaption);
    document.body.appendChild(lightbox);
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src.replace('-thumb', '');
            lightboxCaption.textContent = image.alt;
        });
    });
    
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});