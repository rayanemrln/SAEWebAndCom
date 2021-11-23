var btn = document.querySelector('input');
var txt = document.querySelector('p');



function updateBtn() {
  if (btn.value === 'Démarrer la machine') {
    btn.value = 'Arrêter la machine';
    txt.textContent = 'La machine est démarrée !';
  } else {
    btn.value = 'Démarrer la machine';
    txt.textContent = 'La machine est arrêtée.';
  }
}

btn.addEventListener('click', updateBtn);