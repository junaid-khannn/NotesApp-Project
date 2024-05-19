document.addEventListener("DOMContentLoaded", function() {
  const noteInput = document.getElementById("noteInput");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const notesList = document.getElementById("notesList");
  const h1Color = window.getComputedStyle(document.querySelector("h1")).color;

  
  function addNote() {
      const noteText = noteInput.value.trim();

      if (noteText !== "") {
          const li = document.createElement("li");
          li.textContent = noteText;
          li.style.color = h1Color; 
          notesList.appendChild(li);
          noteInput.value = "";
      } else {
          alert("Please enter a note.");
      }
  }

 
  addNoteBtn.addEventListener("click", addNote);
});
