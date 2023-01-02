function openModal (elementId) {
  var el = document.getElementById(elementId);
  console.log(el);
  el.showModal();
}

function closeModal (elementId) {
  var el = document.getElementById(elementId);
  el.close();
}