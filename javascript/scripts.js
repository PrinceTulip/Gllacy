var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form-feedback");
var name = popup.querySelector("[name=name-inf]");
var mail = popup.querySelector("[name=name-mail]");
var overlay = document.querySelector(".overlay");




link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-show");
    overlay.classList.add("overlay-show")
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
    overlay.classList.remove("overlay-show")
});

form.addEventListener("submit", function(event) {
    if (!name.value || !mail.value) {
        event.preventDefault();
        popup.classList.add("popup-error");
    } else {
        localStorage.setItem("contact-us", name.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
        }
    }
});