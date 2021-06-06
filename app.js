const buttons = document.querySelectorAll(".accordion");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Piece of code will remove class .active when its toggled i.e. active and not active
    btn.classList.toggle("active");
    const panel = btn.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
