let activeSection = 1;

function updateActiveSection(active) {
  const activeIndex = active - 1;
  const numberDivs = document.querySelectorAll(".number");
  const verticalLines = document.querySelectorAll(".vertical__line");
  const headings = document.querySelectorAll(".description__heading");
  const phoneContent = document.querySelector(".phone__content");

  phoneContent.innerHTML = `Active: ${active}`;

  for (let index = 0; index < numberDivs.length; index++) {
    if (index === activeIndex) {
      numberDivs[index]?.classList.add("active__bg");
      verticalLines[index]?.classList.add("fill__bg");
      headings[index]?.classList.add("active__text");
    } else {
      numberDivs[index]?.classList.remove("active__bg");
      verticalLines[index]?.classList.remove("fill__bg");
      headings[index]?.classList.remove("active__text");
    }
  }
}

function changeContentOnScroll() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  const containerHeight = windowHeight * 4;
  const scrollPosition = (scrollY / containerHeight) * 4;
  const newActiveSection = Math.floor(scrollPosition) + 1;

  if (newActiveSection !== activeSection) {
    activeSection = newActiveSection;
    updateActiveSection(activeSection);
  }
}

window.addEventListener("scroll", changeContentOnScroll);
