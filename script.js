const images = [
    'images/475762120_1275352130393514_6433111691050069407_n.jpg',
    'images/476345683_1280302359898491_1569470329658807606_n.jpg',
    'images/480487143_1286967382565322_995397818570624097_n.jpg',
    'images/502442683_1360689785193081_9048257800532530986_n.jpg',
    'images/505782752_1366951274566932_791414178215842100_n.jpg',
    'images/511331338_1376127396982653_3067860492689008629_n.jpg'
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

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.fireworks-container');
    const fireworks = new Fireworks.default(container, {
        rocketsPoint: {
            min: 50,
            max: 50
        },
        hue: {
            min: 0,
            max: 360
        },
        delay: {
            min: 0.015,
            max: 0.03
        },
        speed: 2,
        acceleration: 1.05,
        friction: 0.95,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        flickering: 50,
        opacity: 0.5,
        explosion: 5,
        intensity: 5,
        lineWidth: {
            explosion: {
                min: 1,
                max: 3
            },
            trace: {
                min: 0.1,
                max: 1
            }
        },
        mouse: {
            click: false,
            move: false,
            max: 1
        }
    });

    fireworks.start();
    setTimeout(() => {
        fireworks.stop();
    }, 8000); // Stop fireworks after 8 seconds
}); 