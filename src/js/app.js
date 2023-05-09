const button = document.querySelector(".next1")
const button2 = document.querySelector(".next2")
const button3 = document.querySelector(".next3")
const icon = document.querySelector(".close m-4")
console.log(button);
function createcard() {
  let card = document.createElement("div")
  let icon = document.createElement("span")
  let but = document.createElement("button")
  but.className = "close m-4"
  but.innerHTML = "&times";
  icon.className = "close-image-icon"
  card.className = "cards"
  card.innerHTML = "<strong>Новая карточка</strong>"
  icon.appendChild(but)
  card.appendChild(icon)
  but.addEventListener('click', function (e) {
    e.preventDefault();
    card.remove()
  })
  card.addEventListener("mousedown", function (e){
    mousedown(e,card)
  })
  return card
}
button.addEventListener('click', function (e) {
  e.preventDefault();
  let card = createcard()
  let sib = document.querySelector(".tables-item1")
  sib.appendChild(card)

})

button2.addEventListener('click', function (y) {
  y.preventDefault();
  let card = createcard()
  let sib = document.querySelector(".tables-item2")
  sib.appendChild(card)
})
button3.addEventListener('click', function (e) {
  e.preventDefault();
  let card = createcard()
  let sib = document.querySelector(".tables-item3")
  sib.appendChild(card)
})

let currentDroppable = null;

 function mousedown(event, ball) {

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    ball.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    ball.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null если мы были не над droppable до этого события
        // (например, над пустым пространством)
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
        // (например, только что покинули droppable)
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

ball.ondragstart = function() {
  return false;
};


