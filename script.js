let slideshowInterval = null;
let isSlideshowActive = false;

document.getElementById('monitorizare-resurse').addEventListener('dblclick', function () {
    const images = document.querySelectorAll('.images img');
    const modal = document.createElement('div');
    const modalImage = document.createElement('img');
    const stopButton = document.createElement('button');

    // Check if slideshow is already active
    if (isSlideshowActive) return;

    isSlideshowActive = true;

    // Configure modal styles
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    // Configure image styles
    modalImage.style.maxWidth = '80%';
    modalImage.style.maxHeight = '80%';
    modalImage.style.border = '5px solid #fff';
    modalImage.src = images[0].src;

    // Configure stop button
    stopButton.textContent = 'Oprește slideshow';
    stopButton.style.position = 'absolute';
    stopButton.style.bottom = '20px';
    stopButton.style.padding = '10px 20px';
    stopButton.style.fontSize = '16px';
    stopButton.style.color = '#fff';
    stopButton.style.backgroundColor = '#ff5555';
    stopButton.style.border = 'none';
    stopButton.style.cursor = 'pointer';

    // Append elements to modal
    modal.appendChild(modalImage);
    modal.appendChild(stopButton);
    document.body.appendChild(modal);

    let index = 0;

    function showSlide() {
        modalImage.src = images[index].src;
        index = (index + 1) % images.length;
    }

    slideshowInterval = setInterval(showSlide, 3000);

    // Stop slideshow and close modal
    stopButton.addEventListener('click', function () {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        isSlideshowActive = false;
        modal.remove();
    });

    // Close modal on click outside the image
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
            isSlideshowActive = false;
            modal.remove();
        }
    });
});
