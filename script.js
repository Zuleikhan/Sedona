let bookingButton = document.querySelector(".booking-button");
let form = document.querySelector(".search-form");

bookingButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("form-close");
});
