const form = document.querySelector('.modal__form');
const change_profile = document.getElementById('change_profile');
const modal = document.querySelector('.modal');
const close_modal = document.querySelector('.modal__close');
const profileAvatar = document.querySelector('.profile__avatar img');

const nameInput = document.getElementById('name_input');
const surnameInput = document.getElementById('surname_input');
const professionInput = document.getElementById('profession_input');
const avatarInput = document.getElementById('avatar_input');

const profileName = document.querySelector('.explorer__name');
const profileJob = document.querySelector('.explorer__stats');

if (change_profile) {
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
    close_modal.addEventListener('click', closeModal);
    change_profile.addEventListener('click', openModal);

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const name = nameInput.value;
        const surname = surnameInput.value;
        const profession = professionInput.value;
        const avatar = avatarInput.value;

        profileName.textContent = `${name} ${surname}`;
        profileJob.textContent = profession;
        profileAvatar.src = avatar;

        closeModal();
    })

}else {
    console.warn('Modal elements not found');
}

