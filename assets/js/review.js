document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {

    star.addEventListener("mouseover", function () {
      if (!star.classList.contains('selected')) {
        resetStars();
        highlightStars(this);
      }
    });


    star.addEventListener("mouseout", function () {
      if (!star.classList.contains('selected')) {
        resetStars();
      }
    });


    star.addEventListener("click", function () {

      resetStars();
      star.classList.add("selected");
      highlightStars(this, true);
    });
  });

  function resetStars() {
    stars.forEach((star) => {
      star.classList.remove("hover");
    });
  }

  function highlightStars(star, isSelected = false) {
    star.classList.add(isSelected ? "selected" : "hover");
    let prevStar = star.previousElementSibling;

    while (prevStar) {
      prevStar.classList.add(isSelected ? "selected" : "hover");
      prevStar = prevStar.previousElementSibling;
    }
  }
});
