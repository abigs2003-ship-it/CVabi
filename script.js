// ---------- Typewriter del hero ----------
const app = document.getElementById('app');

if (app && window.Typewriter) {
  const typewriter = new Typewriter(app, {
    loop: true,
    delay: 60,
    deleteSpeed: 30,
  });

  typewriter
    .typeString('Soy Abigail García')
    .pauseFor(1200)
    .deleteChars(6)
    .typeString('<strong> Desarrolladora Móvil</strong>')
    .pauseFor(1600)
    .deleteChars(21)
    .typeString('<strong> Desarrolladora Web</strong>')
    .pauseFor(1600)
    .deleteChars(19)
    .start();
}


// ---------- AOS Animaciones ----------
if (window.AOS) {
  AOS.init({
    duration: 650,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  });
}


// ---------- Navbar: fondo sólido al hacer scroll ----------
const mainNav = document.getElementById('mainNav');

function updateNavbar() {
  if (!mainNav) return;

  if (window.scrollY > 40) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavbar);
updateNavbar();


// ---------- Barra de avance de carrera ----------
const progressBar = document.getElementById('progressBar');
const progressValue = document.getElementById('progressValue');
const progressContainer = document.querySelector('.progress');

const TARGET_PERCENT = 65;

if (progressBar && progressValue && progressContainer) {

  const progressObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          // Animación de la barra
          progressBar.style.width = TARGET_PERCENT + '%';


          // Animación del número
          let n = 0;

          const counter = setInterval(() => {

            n++;

            progressValue.textContent = n + '%';

            if (n >= TARGET_PERCENT) {
              clearInterval(counter);
            }

          }, 18);


          progressObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.5
    }
  );


  progressObserver.observe(progressContainer);
}
