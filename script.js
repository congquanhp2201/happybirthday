const images = [
    // Add your image paths here. For example:
    // 'images/image1.jpg',
    // 'images/image2.jpg',
    // 'images/image3.jpg'
];

let slideIndex = 0;
const slideshowContainer = document.querySelector('.slideshow-container');

function createSlides() {
    if (images.length === 0) {
        slideshowContainer.innerHTML = '<p>Please add images to the "images" folder and update script.js</p>';
        return;
    }

    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (index === 0) {
            slide.style.display = "block";
        }
        const img = document.createElement('img');
        img.src = src;
        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
    });
}

function showSlides() {
    if (images.length === 0) return;

    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

createSlides();
showSlides(); 