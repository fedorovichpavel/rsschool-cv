const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const checkbox = document.querySelector(".mobile-menu__checkbox");
const url = document.querySelectorAll(".mobile-menu__item");

url.forEach((e) => {
  e.addEventListener("click", () => {
    checkbox.checked = false;
  });
});
