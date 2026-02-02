const nav = document.querySelector(".nav");

const logoSp = document.getElementById("logoSp");
const logoSpBlack = document.getElementById("logoSpBlack");

const logo1280 = document.getElementById("logo1280");
const logo1280Black = document.getElementById("logo1280Black");

const logo1680 = document.getElementById("logo1680");
const logo1680Black = document.getElementById("logo1680Black");

function updateLogo() {
  const isScrolled = window.scrollY > 860;   
  const width = window.innerWidth;

  // navbar background
  if (isScrolled) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  // hide all logos first
  logoSp.style.display = "none";
  logoSpBlack.style.display = "none";
  logo1280.style.display = "none";
  logo1280Black.style.display = "none";
  logo1680.style.display = "none";
  logo1680Black.style.display = "none";

  // 0–767 (SP)
  if (width < 768) {
    if (isScrolled) {
      logoSpBlack.style.display = "block";
    } else {
      logoSp.style.display = "block";
    }
  }

  // 768–1299 (1280)
  else if (width >= 768 && width < 1300) {
    if (isScrolled) {
      logo1280Black.style.display = "block";
    } else {
      logo1280.style.display = "block";
    }
  }

  // 1300+
  else {
    if (isScrolled) {
      logo1680Black.style.display = "block";
    } else {
      logo1680.style.display = "block";
    }
  }
}

window.addEventListener("scroll", updateLogo);
window.addEventListener("resize", updateLogo);
updateLogo();


const hamburger = document.querySelector(".hamburger"); const spMenu = document.querySelector(".sp-menu"); const hamburgerIcon = document.getElementById("hamburgerIcon"); const closeIcon = document.getElementById("closeIcon"); hamburger.addEventListener("click", () => { spMenu.classList.add("active"); hamburger.classList.add("active"); hamburgerIcon.src = "../assets/img/new_common/icon-hamburger-close.svg"; }); closeIcon.addEventListener("click", () => { spMenu.classList.remove("active"); hamburger.classList.remove("active"); hamburgerIcon.src = "../assets/img/new_common/icon-hamburger.svg"; })