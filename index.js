const modal = document.querySelector('.modal');
const form = modal.querySelector('.modal__form');
const changeProfile = document.getElementById('change_profile');

const buttonCloseModel = modal.querySelector('.modal__close');
const profileAvatar = document.querySelector('.profile__avatar img');

const nameInput = form.querySelector('#name_input');
const surnameInput = form.querySelector('#surname_input');
const professionInput = form.querySelector('#profession_input');
const avatarInput = form.querySelector('#avatar_input');

const profileName = document.querySelector('.explorer__name');
const profileJob = document.querySelector('.explorer__stats');

const imageModal = document.querySelector('.image__modal');
const modalImg = document.querySelector('.image__modal_img');
const modalClose = document.querySelector('.image__modal_close');

const openModal = ()=>{

    const fullName = profileName.textContent.split(' ');
    const job = profileJob.textContent;
    const avatar = profileAvatar.getAttribute('src');

    nameInput.value = fullName[0];
    surnameInput.value = fullName[1] || "";
    professionInput.value = job;
    avatarInput.value = avatar;


    modal.hidden = false;
    document.body.style.overflow = 'hidden';
};

const closeModal = ()=>{
    modal.hidden = true;
    document.body.style.overflow = '';
}


function sendForm(e){
    e.preventDefault();

    const name = nameInput.value;
    const surname = surnameInput.value;
    const profession = professionInput.value;
    const avatar = avatarInput.value;

    profileName.textContent = `${name} ${surname}`;
    profileJob.textContent = profession;
    profileAvatar.src = avatar;

    closeModal();
}
function blackHearts(){
    console.log('blackHearts запущена'); // ← ДОБАВИТЬ

    const hearts = document.querySelectorAll('.trip__info img[alt="likes"]');
    console.log('Найдено сердец:', hearts.length); // ← ДОБАВИТЬ

    hearts.forEach((heart, index) => {
        console.log(`Сердце ${index} обработано`); // ← ДОБАВИТЬ
        heart.addEventListener('click', function (e){
            console.log('Клик по сердцу!'); // ← ДОБАВИТЬ
            e.preventDefault();
            this.classList.toggle('liked');
        });
    });
}

function setSettingsImageModal(){
    document.querySelectorAll('.trip__img img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modalImg.src = this.src;
            imageModal.hidden = false;
        });
    });
    modalClose.addEventListener('click', () => {
        imageModal.hidden = true;
    });


    imageModal.querySelector('.image__modal_overlay').addEventListener('click', () => {
        imageModal.hidden = true;
    });
}


if (changeProfile) {
    buttonCloseModel.addEventListener('click', closeModal);
    changeProfile.addEventListener('click', openModal);
    form.addEventListener('submit', sendForm);
}else {
    console.warn('Modal elements not found');
}


document.addEventListener('DOMContentLoaded', blackHearts);

setSettingsImageModal();

