//Burger menu ----------------------------------------------------
const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
menu.classList.add('active');
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


//----------------------------------------------------------------
new WOW().init();

const counter = document.querySelectorAll('.rating__prosent'),
lines = document.querySelectorAll('.rating__line span');

counter.forEach((item, i) => {
    lines [i].style.width = item.innerHTML;
});

  // Modal ---------------------- Modal --------------------------

const modalTrigger = document.querySelector('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

function openModal() {
modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden';
clearInterval(modalTimerId);
}

/*modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
    });
});*/
modalTrigger.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';  // отключает скролл при открытой модалке
});

/*function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}*/
modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
});

//const modalTimerId = setTimeout(openModal, 3000); //таймер появления мольного окна

window.addEventListener('scroll', () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
    }
})

// ручная привязка 

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = '#1b8806;';
});
      
