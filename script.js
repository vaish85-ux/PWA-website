// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact section alert
const contactSection = document.querySelector("section:last-of-type");

if (contactSection) {
  contactSection.addEventListener("click", () => {
    alert("You clicked the contact section. Email: vaishnavi@example.com");
  });
}

// Optional: Toggle dark mode
const toggleButton = document.createElement("button");
toggleButton.innerText = "Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px";
toggleButton.style.borderRadius = "8px";
toggleButton.style.backgroundColor = "#4caf50";
toggleButton.style.color = "white";
document.body.appendChild(toggleButton);


toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});