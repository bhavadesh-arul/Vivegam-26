document.querySelectorAll(".links a").forEach(btn => {
  btn.addEventListener("click", e => {

    btn.style.boxShadow =
      "0 0 40px rgba(120,160,255,0.9), 0 0 80px rgba(120,160,255,0.6)";

    setTimeout(() => {
      btn.style.boxShadow = "";
    }, 300);

    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.width = ripple.style.height = "120px";
    ripple.style.background = "rgba(120,160,255,0.5)";
    ripple.style.borderRadius = "50%";
    ripple.style.left = `${e.offsetX - 60}px`;
    ripple.style.top = `${e.offsetY - 60}px`;
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s ease-out";

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
