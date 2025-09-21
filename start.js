const starsContainer = document.getElementById("stars");

/* Estrellas puntuales */
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top  = (-Math.random() * window.innerHeight) + "px"; // fuera de pantalla
  star.style.left = (Math.random() * window.innerWidth) + "px";
  star.style.animationDuration = (4 + Math.random() * 6) + "s";
  star.style.animationDelay    = (-Math.random() * 8) + "s";
  starsContainer.appendChild(star);
}

/* Estrellas fugaces diagonales */
for (let i = 0; i < 5; i++) {
  const s = document.createElement("div");
  s.className = "shooting-star";

  s.style.top = (-window.innerHeight * (0.2 + Math.random() * 0.6)) + "px";

  let minX, maxX;
  if (window.innerWidth < 768) {
    minX = window.innerWidth * 0.35;
    maxX = window.innerWidth * 0.65;
  } else {
    minX = window.innerWidth * 0.2;
    maxX = window.innerWidth * 0.8;
  }
  s.style.left = (minX + Math.random() * (maxX - minX)) + "px";

  const baseAngle = window.innerWidth < 768 ? 15 : 20;
  const angle = (Math.random() < 0.5 ? 1 : -1) * (baseAngle + Math.random() * 15);
  s.style.setProperty("--angle", angle + "deg");

  // hace que la deriva lateral siga el signo del ángulo
  s.style.setProperty("--drift", angle >= 0 ? "1" : "-1");

  s.style.setProperty("--len", (100 + Math.random() * 120) + "px");
  s.style.setProperty("--dur", (2.2 + Math.random() * 2.3) + "s");
  s.style.animationDelay = (Math.random() * 8) + "s";

  starsContainer.appendChild(s);
}