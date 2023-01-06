function openModal (elementId) {
  var el = document.getElementById(elementId);
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;

  el.showModal();
}

function closeModal (elementId) {
  var el = document.getElementById(elementId);

  document.body.style.position = '';
  document.body.style.top = `-${window.scrollY}px`;
    
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