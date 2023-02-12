const button = document.querySelector(".button")
console.log(button);
const widget = document.querySelector(".widget")


button.addEventListener('click', function (e) {
  e.preventDefault();
  widget.classList.toggle("widget_active")
})
