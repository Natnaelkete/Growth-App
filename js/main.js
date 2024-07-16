const faqContent = document.querySelector(".faq-content");

faqContent.addEventListener("click", (e) => {
  const iconList = e.target.closest(".faq-group-header");
  const faqBodyList = e.target.closest(".faq-group");

  if (!iconList) return;

  const icon = iconList.lastElementChild;
  const faqBody = faqBodyList.lastElementChild;

  if (faqBody.classList.contains("open")) {
    faqBody.classList.toggle("open");
    icon.className = "fas fa-plus";
  } else {
    faqBody.classList.toggle("open");
    icon.className = "fas fa-minus";
  }
});

const hamburgerButton = document.querySelector(".hamburger-button");
const mobileMenu = document.querySelector(".mobile-menu");
console.log(mobileMenu);

hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
