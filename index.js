const modalChangingProfile = document.querySelector('#modal-changing-profile');
const modalAddingTrip = document.querySelector('#modal-adding-trip');
const form = modalChangingProfile.querySelector('.modal__form');
const changeProfile = document.getElementById('change_profile');

const buttonCloseModel = modalChangingProfile.querySelector('.modal__close');
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

const plus = document.querySelector('.profile__add-trip');

const openModalChangeProfile = ()=>{

    const fullName = profileName.textContent.split(' ');
    const job = profileJob.textContent;
    const avatar = profileAvatar.getAttribute('src');

    nameInput.value = fullName[0];
    surnameInput.value = fullName[1] || "";
    professionInput.value = job;
    avatarInput.value = avatar;


    modalChangingProfile.hidden = false;
    document.body.style.overflow = 'hidden';
};

const closeModal = ()=>{
    modalChangingProfile.hidden = true;
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


function closeAddTripModal() {
    modalAddingTrip.hidden = true;
    document.body.style.overflow = '';
}

function saveAddingTrip(e){
    e.preventDefault();

    const tripBlock = document.getElementById('tripBlock');
    const trip_img = document.getElementById('srcTripImg').value;
    const trip_name = document.getElementById('inputTripName').value;

    const contentTrip = document.createElement('div');
    contentTrip.className = 'content__trip';

    const tripImg = document.createElement('div');
    tripImg.className = 'trip__img';

    const img_trip = document.createElement('img');
    img_trip.src = trip_img;

    const tripInfo = document.createElement('div');
    tripInfo.className = 'trip__info';

    const tripName = document.createElement('p');
    tripName.className = 'trip__name';
    tripName.textContent = trip_name;

    const imgHeart = document.createElement('img');
    imgHeart.src = './img/heart.svg';
    imgHeart.alt = 'likes';

    contentTrip.appendChild(tripImg);
    tripImg.appendChild(img_trip);
    contentTrip.appendChild(tripInfo);
    tripInfo.appendChild(tripName);
    tripInfo.appendChild(imgHeart);

    tripBlock.prepend(contentTrip);

    closeAddTripModal();
}

function openModalAddingTrip(e){
    e.preventDefault();
    modalAddingTrip.hidden = false;
    document.body.style.overflow = 'hidden';
}

if (changeProfile) {
    buttonCloseModel.addEventListener('click', closeModal);
    changeProfile.addEventListener('click', openModalChangeProfile);
    form.addEventListener('submit', sendForm);
    plus.addEventListener('click', openModalAddingTrip);
}else {
    console.warn('Modal elements not found');
}




document.addEventListener('DOMContentLoaded', function (){
    blackHearts();
    setSettingsImageModal();
    document.querySelector('#button_trip').addEventListener('click', saveAddingTrip);
    document.getElementById('close_trip').addEventListener('click', closeAddTripModal);
    document.getElementById('close_overlay_trip').addEventListener('click', closeAddTripModal);
});




