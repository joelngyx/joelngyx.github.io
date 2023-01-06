function openModal (elementId) {
  var el = document.getElementById(elementId);
  document.body.classList.add("stop-scrolling");

  el.showModal();
}

function closeModal (elementId) {
  var el = document.getElementById(elementId);
  document.body.classList.remove("stop-scrolling");
    
  el.close();
}

function toggleVideo (elementId) {
  var el = document.getElementById(elementId);

  if (el.paused) {
    el.play();
  } else {
    el.pause();
  }
}