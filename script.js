document.querySelectorAll(".links a").forEach(btn => {
  btn.addEventListener("click", e => {
    const ripple = document.createElement("span");

    ripple.style.position = "absolute";
    ripple.style.width = ripple.style.height = "120px";
    ripple.style.background = "rgba(255,255,255,0.4)";
    ripple.style.borderRadius = "50%";
    ripple.style.left = `${e.offsetX - 60}px`;
    ripple.style.top = `${e.offsetY - 60}px`;
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s ease-out";

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
