const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const menuCloseGen = doc.querySelector(".closegen");
const menuCloseSim = doc.querySelector(".closesim");
const menuCloseRisk = doc.querySelector(".closerisk");
const menuCloseMit = doc.querySelector(".closemit");
const menuClosePrev = doc.querySelector(".closeprev");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseGen.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseSim.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseRisk.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseMit.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuClosePrev.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
