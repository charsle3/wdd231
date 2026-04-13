export default function DisclaimerModal(){
    const disclaimer = document.querySelector('#disclaimer');
    const closeDisclaimer = document.querySelector('#closeDisclaimer');
    const disclaimerFooter = document.querySelector('#disclaimerModal');

    closeDisclaimer.addEventListener('click', () => {
        disclaimer.close();
    });

    disclaimerFooter.addEventListener('click', () => {
        disclaimer.showModal();
    });

}