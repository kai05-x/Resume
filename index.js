
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar = () =>{
      nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click",()=> toggleNavbar());



// -----canvas-----hndling background

var mouse = {
    x: undefined,
    y: undefined
}
var maxr = 30;
// var minr = 2;
var colorArray = [
    'Lightblue',  // Light Pink
    '#052459',
    'Green',  
    '#560aba',
    '#0f8c8c',
];




window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})
window.addEventListener('resize', function()
    {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    Init();
    }
)
function Circle(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.minr = r;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function () {
        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.r > innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        // inter activity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.r < maxr) {
                this.r += 1;
            }
        } else if (this.r > this.minr) {
            this.r -= 1;
        }
        this.draw();
    }
}
let cirarry = [];

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
for (var i = 0; i < 800; i++) {
    let r = Math.random()*3+1;
    let x = Math.random() * (innerWidth - r * 2) + r;
    let y = Math.random() * (innerHeight - r * 2) + r;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);
    cirarry.push(new Circle(x, y, dx, dy, r))}
function Init(){
    cirarry=[];
    for (var i = 0; i < 1000; i++) {
        let r = Math.random()*3+1;
        let x = Math.random() * (innerWidth - r * 2) + r;
        let y = Math.random() * (innerHeight - r * 2) + r;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);
        cirarry.push(new Circle(x, y, dx, dy, r))
    }
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < cirarry.length; i++) {
        cirarry[i].update();

    }
}
animate();


//text aniamtion in first apge
const text = document.querySelector(".text");
const cursor = document.querySelector("#cursor");

const textContent = [
  " Coder..",
  " Cyber Expert..",
  " Front-End Developer..",
  " Python Devloper.."
];

let charIndex = 0;
let textIndex = 0;
let isDeleting = false;

const type = () => {
  if (isDeleting) {
    cursor.style.visibility = "visible";
    text.textContent = "A" + textContent[textIndex].substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textContent.length;
    }
  } else {
    cursor.style.visibility = "hidden";
    text.textContent = "A" + textContent[textIndex].substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === textContent[textIndex].length) {
      isDeleting = true;
    }
  }

  const typingSpeed = isDeleting ? 50 : 150;
  setTimeout(type, typingSpeed);
};

type();
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });

  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx + 1))
});

// =================================
// ======education=================
// ==============================
document.addEventListener('scroll', function() {
  const containers = document.querySelectorAll('.container1');
  const timeline = document.querySelector('.timeline');
  const darkPage = document.querySelector('.into1');
  const rect = darkPage.getBoundingClientRect();

  if (rect.top <= 5) {
      containers.forEach(container => {
          container.classList.add('animate');
      });
      timeline.classList.add('animate');
  } else {
      containers.forEach(container => {
          container.classList.remove('animate');
      });
  }
}); 
// =================================
// ======Skill=================
// ==============================
const imgBxs = document.querySelectorAll('.icon .imgBx');

imgBxs.forEach(imgBx => {
    imgBx.addEventListener('click', function() {
        // Reset all imgBx elements to default state
        imgBxs.forEach(box => {
            box.classList.remove('active1');
        });
        this.classList.add('active1');

        // Show corresponding contentBx based on data-id
        const contentId = this.dataset.id;
        const contentBx = document.getElementById(contentId);

        // Hide all contentBx elements first
        document.querySelectorAll('.contentBx').forEach(box => {
            box.classList.remove('active1');
        });

        // Show the selected contentBx
        contentBx.classList.add('active1');

        // Update the helloDiv card with data-message and data-back-message
        const helloImg = document.getElementById('helloImg');
        const helloMsg = document.getElementById('helloMsg');
        const backMsg = document.getElementById('backMsg');

        // Update the image in helloDiv
        const imgInBox = this.querySelector('img'); // Get img inside clicked imgBx
        helloImg.src = imgInBox.src;

        helloMsg.textContent = this.dataset.message;
        backMsg.textContent = this.dataset.backMessage;

        // Show the helloDiv card
        const helloDiv = document.getElementById('helloDiv');
        helloDiv.style.display = 'block';
    });
});

// =================================================
// JavaScript to set the animation duration dynamically
const tickerWrapper = document.getElementById('ticker-wrapper');
const tickerItems = tickerWrapper.children;
const numItems = tickerItems.length;
const itemWidth = tickerItems[0].offsetWidth ; // 20px is the margin

// Set the width of the ticker wrapper
tickerWrapper.style.width = `${numItems * itemWidth}px`;

// Set the animation duration based on the total width
const tickerWidth = numItems * itemWidth ;
const animationDuration =  15; // Adjust speed by changing divisor
tickerWrapper.style.transition = `transform ${animationDuration}s linear`;
tickerWrapper.style.transform = `translateX(-${tickerWidth}px)`;

// Function to reset the ticker position
function resetTicker() {
    tickerWrapper.style.transition = 'none';
    tickerWrapper.style.transform = 'translateX(0)';
    // Force reflow
    void tickerWrapper.offsetWidth;
    tickerWrapper.style.transition = `transform ${animationDuration}s linear`;
    tickerWrapper.style.transform = `translateX(-${tickerWidth}px) `;
}

tickerWrapper.addEventListener('transitionend', resetTicker);

// Modal functionality
const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const closeModal = document.getElementsByClassName("close")[0];

function showModal(title, description, link) {
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalLink.href = link;
    modal.style.display = "flex";
    tickerWrapper.style.animationPlayState = 'paused';
}

function hideModal() {
    modal.style.display = "none";
    tickerWrapper.style.animationPlayState = 'running';
}

closeModal.onclick = hideModal;

window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}

// Attach click events to project cards
const projectCards = document.getElementsByClassName("project-card");
for (let card of projectCards) {
    card.onclick = function() {
        const title = card.getAttribute("data-title");
        const description = card.getAttribute("data-description");
        showModal(title, description);
    }
}