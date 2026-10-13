
const screens = [...document.querySelectorAll(".screen")];

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const toast = document.getElementById("musicToast");

let toastTimer;

function showScreen(id) {
  screens.forEach(screen => {
    screen.classList.toggle("active", screen.id === id);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3600);
}

async function startMusic() {
  bgMusic.volume = 0.25;

  try {
    await bgMusic.play();

    musicToggle.hidden = false;
    musicToggle.textContent = "♫ Music on";
  } catch (error) {
    showToast(
      "Add music/best-part.mp3 to enable the background song. 🎵"
    );
  }
}

// OPEN THE LETTER

document.getElementById("beginBtn").addEventListener("click", async () => {
  await startMusic();
  showScreen("letterScreen");
});

document.getElementById("openBtn").addEventListener("click", async () => {
  await startMusic();
  showScreen("letterScreen");
});

// OPEN THE FINAL MESSAGE

document.getElementById("promiseBtn").addEventListener("click", () => {
  showScreen("promiseScreen");
});

// READ THE LETTER AGAIN

document.getElementById("againBtn").addEventListener("click", () => {
  showScreen("letterScreen");
});

// MUSIC ON / OFF

musicToggle.addEventListener("click", async () => {
  if (bgMusic.paused) {
    await startMusic();
  } else {
    bgMusic.pause();
    musicToggle.textContent = "♫ Music off";
  }
});

// CREATE RANDOM TWINKLING STARS

const stars = document.getElementById("stars");

for (let i = 0; i < 75; i++) {
  const star = document.createElement("span");

  star.className = "star";

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  star.style.animationDelay = `${Math.random() * 3}s`;
  star.style.animationDuration = `${2 + Math.random() * 3}s`;

  if (Math.random() > 0.8) {
    star.style.width = "4px";
    star.style.height = "4px";
  }

  stars.appendChild(star);
}
