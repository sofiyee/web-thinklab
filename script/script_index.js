AOS.init({ duration: 900, once: true });

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  document.querySelectorAll("svg.lucide").forEach(icon => {
    icon.classList.add("text-inherit");
  });
});

const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const iconMenu = menuBtn.querySelector("i");
const logoImg = document.getElementById("logoImg");
const mobileMenu = document.getElementById("mobileMenu");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > 50) {
    navbar.className =
      "w-full flex justify-between items-center px-14 py-3 mt-5 bg-white/50 backdrop-blur-xl text-gray-900 rounded-full shadow-md transition-all duration-500 ease-in-out";
    iconMenu.classList.replace("text-white", "text-gray-900");
    logoImg.src = "/assets/images/logo_dark.png";
  } else {
    navbar.className =
      "w-full flex justify-between items-center px-14 py-3 bg-[#2D3142] text-white rounded-b-[25px] transition-all duration-500 ease-in-out";
    iconMenu.classList.replace("text-gray-900", "text-white");
    logoImg.src = "/assets/images/logo_light.png";
  }
});

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const y = window.scrollY;
    if (!mobileMenu.classList.contains("hidden")) {
      if (y > 50) {
        mobileMenu.className =
          "md:hidden flex-col bg-white/60 backdrop-blur-xl text-[#2D3142] font-medium px-6 pb-4 mt-0 transition-all duration-300 rounded-3xl shadow-lg";
      } else {
        mobileMenu.className =
          "md:hidden flex-col bg-white backdrop-blur-md text-[#2D3142] font-medium px-6 pb-4 mt-2 transition-all duration-300 rounded-3xl shadow-lg";
      }
    } else {
      mobileMenu.classList.add("hidden");
    }
  });

  mobileMenu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => mobileMenu.classList.add("hidden"))
  );
}

const projekBtn = document.getElementById("labProjekBtn");
const modal = document.getElementById("labProjekModal");
const closeModal = document.getElementById("closeModal");

if (projekBtn && modal && closeModal) {
  projekBtn.addEventListener("click", () => modal.classList.remove("hidden"));
  closeModal.addEventListener("click", () => modal.classList.add("hidden"));
  window.addEventListener("click", e => {
    if (e.target === modal) modal.classList.add("hidden");
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const targetId = sessionStorage.getItem("thinklabScrollTarget");
  if (!targetId) return;

  sessionStorage.removeItem("thinklabScrollTarget");
  window.scrollTo(0, 0);

  const target = document.getElementById(targetId);
  if (!target) return;

  setTimeout(() => {
    const navbarHeight = 100;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    const start = window.scrollY;
    const duration = 1800;
    const startTime = performance.now();

    const animate = time => {
      const t = Math.min((time - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); 
      window.scrollTo(0, start + (top - start) * ease);
      if (t < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, 500);
});
