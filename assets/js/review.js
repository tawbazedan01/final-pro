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


document.querySelector("form").addEventListener("submit", function (event) {
  let review = document.querySelector("#exampleFormControlTextarea1").value;
  let name = document.querySelector("#exampleFormControlInput1").value;
  let email = document.querySelector("#exampleFormControlInput1").value;
  let checkbox = document.querySelector("#flexCheckDefault").checked;

  if (!review || !name || !email || !checkbox) {
    alert("Please select a rating and give us your review");
    event.preventDefault();
  }
});




