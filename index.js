function openModal (elementId) {
  var el = document.getElementById(elementId);
  // TODO: Prevent close button from being auto-focused
  el.showModal();
}

function closeModal (elementId) {
  var el = document.getElementById(elementId);

  // if (elementId === 'school-project-cg2271') {
  //   var vidEl = document.getElementById('cg2271vid');
  //   vidEl.pause();
  // }
  
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