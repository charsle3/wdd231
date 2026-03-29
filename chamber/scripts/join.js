const npmodal = document.querySelector('#npModal');
const closeNPModal = document.querySelector('#closeNPModal');
const npOpenModal = document.querySelector('#npOpenModal');

npOpenModal.addEventListener('click', () => {
    npmodal.showModal();
})

closeNPModal.addEventListener('click', () => {
  npmodal.close();
});

const brmodal = document.querySelector('#brModal');
const closeBRModal = document.querySelector('#closeBRModal');
const brOpenModal = document.querySelector('#brOpenModal');

brOpenModal.addEventListener('click', () => {
    brmodal.showModal();
})

closeBRModal.addEventListener('click', () => {
  brmodal.close();
});

const simodal = document.querySelector('#siModal');
const closeSIModal = document.querySelector('#closeSIModal');
const siOpenModal = document.querySelector('#siOpenModal');

siOpenModal.addEventListener('click', () => {
    simodal.showModal();
})

closeSIModal.addEventListener('click', () => {
  simodal.close();
});

const gomodal = document.querySelector('#goModal');
const closeGOModal = document.querySelector('#closeGOModal');
const goOpenModal = document.querySelector('#goOpenModal');

goOpenModal.addEventListener('click', () => {
    gomodal.showModal();
})

closeGOModal.addEventListener('click', () => {
  gomodal.close();
});

const timestamp = document.querySelector('#timestamp');

function SetTimestamp(){
    const today = new Date();
    timestamp.setAttribute('value', today);
}