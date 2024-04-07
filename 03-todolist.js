var list = document.querySelector(".list");
var addNoteButtons = document.querySelectorAll(".btn");
var inputBox = document.querySelector(".input-box");

addNoteButtons.forEach(function(buttons) {
  buttons.addEventListener("click", () => {
    var inputValue = inputBox.value; 

    if (inputValue === "") {
      alert("You have to type something before clicking the add button");
    } else {
      var span = document.createElement("span");
      var p = document.createElement("p");
      var button = document.createElement("button");
      var i = document.createElement("i");
      button.setAttribute("class", "trash");
      i.setAttribute("class", "fa-solid fa-xmark");
      button.appendChild(i);
      p.textContent = inputValue;
      span.appendChild(p);
      span.appendChild(button);
      list.appendChild(span);

      inputBox.value = "";

     button.addEventListener("click", () => {
       span.remove(); 
     });
    }
  });
});

