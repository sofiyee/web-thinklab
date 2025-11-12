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
    logoImg.src = "assets/images/logo_dark.png";
  } else {
    navbar.className =
      "w-full flex justify-between items-center px-14 py-3 bg-[#2D3142] text-white rounded-b-[25px] transition-all duration-500 ease-in-out";
    iconMenu.classList.replace("text-gray-900", "text-white");
    logoImg.src = "assets/images/logo_light.png";
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

document.querySelectorAll('a[href^="index.html#"]').forEach(link => {
  link.addEventListener("click", e => {
    const href = e.currentTarget.getAttribute("href");
    const target = href.split("#")[1];
    if (!target) return;
    e.preventDefault();
    sessionStorage.setItem("thinklabScrollTarget", target);
    window.location.href = "index.html";
  });
});
