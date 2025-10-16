document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-btn");

  buttons.forEach((btn, index) => {
    const numStars = 10 + Math.floor(Math.random() * 6); 
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("inner-star");

      
      const size = (Math.random() * 4 + 2).toFixed(1) + "px";
      const top = Math.random() * 100 + "%";
      const left = Math.random() * 100 + "%";
      const duration = (Math.random() * 5 + 4).toFixed(1) + "s";
      const delay = (Math.random() * 3).toFixed(1) + "s";

      Object.assign(star.style, {
        width: size,
        height: size,
        top,
        left,
        animationDuration: duration,
        animationDelay: delay
      });

      btn.appendChild(star);
    }
  });
});
