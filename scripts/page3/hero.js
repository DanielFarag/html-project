const heroSlides = [
  {
    image: "../../images/page3/student-slider-1.jpg",
    header: "Education Loan Rate Low Of Interest.",
    description: [
      "The low rate you need for the need you want! Call",
      "Apply Now!",
    ],
    button: {
      link: "https://www.google.com",
      caption: "Get Started Today",
    },
  },
  {
    image: "../../images/page3/student-slider-2.jpg",
    header: "Helping Student Build a Stronger Tomorrow.",
    description: ["The low rate you need for the need you want! Call"],
    button: {
      link: "https://www.google.com",
      caption: "View Products",
    },
  },
  {
    image: "../../images/page3/student-slider-3.jpg",
    header: "Award winning Education loans",
    description: ["The low rate you need for the need you want! Call"],
    button: {
      link: "https://www.google.com",
      caption: "Apply Now",
    },
  },
];

const page3Hero = document.getElementById("page3Hero");

document.addEventListener("DOMContentLoaded", () => {
  let startIndex = 0;
  let content = `
        <div class="slider">
          <div class="slides">
            ${heroSlides
              .map(
                ({ image, header, description, button }, index) => `
                <div class="slide ${index === startIndex ? "active" : ""}">
                  <img src="${image}" class="heroImage" title="${header}" alt="${header}" />
                  <div class="heroCaption">
                    <h2 class="heroHeader">${header}</h2>
                    <p>${description
                      .map((element) => `<p>${element}</p>`)
                      .join("")}</p>
                    <button class="mainButton">
                        <a href=${button.link}>${button.caption}</a>
                    </button>
                  </div>
               
                </div>
              `
              )
              .join("")}
            <button class="nextButton" id="next"><i class="fa-solid fa-chevron-right"></i></button>
            <button class="prevButton" id="prev"><i class="fa-solid fa-chevron-left"></i></button>
          </div>
        </div>
      `;

  page3Hero.innerHTML = content;

  let slides = document.querySelectorAll(".slide");

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("active");
      if (i === idx) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    startIndex = (startIndex + 1) % slides.length;
    showSlide(startIndex);
  }

  function prevSlide() {
    startIndex = (startIndex - 1 + slides.length) % slides.length;
    showSlide(startIndex);
  }

  document.getElementById("next").addEventListener("click", nextSlide);
  document.getElementById("prev").addEventListener("click", prevSlide);
  setInterval(nextSlide, 7000);
});
