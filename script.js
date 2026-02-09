// ===============================
// INTRO LOGO CLEANUP
// ===============================
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("logo-intro");
    if (intro) intro.remove();
  }, 4500);
});
// ===============================
// VIVEGAM INTERACTIONS (PRO)
// ===============================

// Button click effects (ripple + glow)
document.querySelectorAll(".links a").forEach(btn => {

  btn.addEventListener("click", e => {

    // --- Temporary neon boost ---
    btn.style.boxShadow =
      "0 0 40px rgba(120,160,255,0.9), 0 0 80px rgba(120,160,255,0.6)";

    setTimeout(() => {
      btn.style.boxShadow = "";
    }, 300);

    // --- Ripple effect ---
    const ripple = document.createElement("span");

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.position = "absolute";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    ripple.style.background = "rgba(120,160,255,0.45)";
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";
    ripple.style.transform = "scale(0)";
    ripple.style.opacity = "0.8";
    ripple.style.animation = "ripple 0.6s ease-out";

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ===============================
// RIPPLE KEYFRAME (JS-INJECT SAFE)
// ===============================
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
