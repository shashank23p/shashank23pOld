const typedTextSpan = document.querySelector(".typed");
const cursorSpan = document.querySelector(".cursor");
const scrollIndicator = document.querySelector(".scroll-indicator");
const content = document.querySelector(".content");
const body = document.querySelector("body");
const textArray = [
  "frontend developer",
  "backend developer",
  "full stack",
  "Shashank Padwal",
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (textArrayIndex == textArray.length - 1) return;
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay - 1000);
});

body.onscroll = function () {
  var scrollTop = document.scrollingElement.scrollTop;
  if (scrollTop > 50) {
    scrollIndicator.style.display = "none";
  } else {
    scrollIndicator.style.display = "block";
  }
};
