const overlay = document.getElementById('overlay');
const sideMenu = document.getElementById('sideMenu');

function openSideMenu(){
  sideMenu.classList.add('open');
  overlay.classList.add('show');
}

function closeSideMenu(){
  sideMenu.classList.remove('open');
  overlay.classList.remove('show');
}

overlay.addEventListener('click', closeSideMenu);

/* MODAL */
const modal = document.getElementById('detailModal');

function openModal(data){
  document.getElementById('detailTitle').textContent = "COOKIE DETAIL";
  document.getElementById('detailName').textContent = data.title;
  document.getElementById('detailPrice').textContent = data.price;
  document.getElementById('detailCopy').textContent = data.copy;
  document.getElementById('detailDesc').textContent = data.desc;
  document.getElementById('detailImage').src = data.image;

  modal.classList.add('open');
  overlay.classList.add('show');
}

function closeModal(){
  modal.classList.remove('open');
}

document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('open-detail')){
    openModal(e.target.dataset);
  }

  if(e.target.id === 'closeModal' || e.target.id === 'detailCloseBtn'){
    closeModal();
  }

  if(e.target.id === 'overlay'){
    closeModal();
    closeSideMenu();
  }
});