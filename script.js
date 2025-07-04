const images = [
    'images/475762120_1275352130393514_6433111691050069407_n.jpg',
    'images/476345683_1280302359898491_1569470329658807606_n.jpg',
    'images/480487143_1286967382565322_995397818570624097_n.jpg',
    'images/502442683_1360689785193081_9048257800532530986_n.jpg',
    'images/505782752_1366951274566932_791414178215842100_n.jpg',
    'images/511331338_1376127396982653_3067860492689008629_n.jpg'
];

// --- Stage Slideshow Logic ---
const stageImage = document.getElementById('stage-image');
const animations = [
    'fade-in',
    'zoom-in',
    'rotate-in',
    'slide-in-left',
    'slide-in-right'
];
let currentIndex = 0;

function showStageImage(index, animation) {
    if (!stageImage) return;
    stageImage.className = '';
    stageImage.style.opacity = 0;
    setTimeout(() => {
        stageImage.src = images[index];
        stageImage.classList.add(animation);
        stageImage.style.opacity = 1;
    }, 100);
}

function nextImage() {
    const anim = animations[Math.floor(Math.random() * animations.length)];
    currentIndex = (currentIndex + 1) % images.length;
    showStageImage(currentIndex, anim);
}

// Show the first image with an animation on load
showStageImage(currentIndex, 'fade-in');

// Auto-advance every 3 seconds
setInterval(nextImage, 3000);

// --- Door Open Logic ---
const doorOverlay = document.getElementById('door-overlay');
const door = document.getElementById('door');
const doorPanel = door ? door.querySelector('.door-panel') : null;
const mainContent = document.querySelector('.main-content');
const birthdayAudio = document.getElementById('birthday-audio');
const wishesSection = document.querySelector('.wishes-animated');
const container = document.querySelector('.fireworks-container');

if (door) {
    const openAction = () => {
        door.classList.add('open');
        setTimeout(() => {
            if (doorOverlay) doorOverlay.style.opacity = 0;
            setTimeout(() => {
                if (doorOverlay) doorOverlay.style.display = 'none';
                if (mainContent) mainContent.style.display = 'block';
                if (wishesSection) wishesSection.classList.add('show');
                if (container && typeof Fireworks !== 'undefined') {
                    const fireworks = new Fireworks.default(container, {
                        rocketsPoint: { min: 50, max: 50 },
                        hue: { min: 0, max: 360 },
                        delay: { min: 0.015, max: 0.03 },
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
                            explosion: { min: 1, max: 3 },
                            trace: { min: 0.1, max: 1 }
                        },
                        mouse: { click: false, move: false, max: 1 }
                    });
                    fireworks.start();
                    setTimeout(() => { fireworks.stop(); }, 8000);
                }
                if (birthdayAudio) {
                    birthdayAudio.currentTime = 0;
                    birthdayAudio.play().catch(() => {});
                    birthdayAudio.loop = true;
                }
            }, 900);
        }, 1200); // Wait for door animation
    };
    door.addEventListener('click', openAction);
    door.addEventListener('touchend', openAction);
}

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
    }, 10000); // Stop fireworks after 8 seconds
}); 