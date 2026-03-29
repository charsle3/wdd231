const formData = new URLSearchParams(window.location.search);

const display = document.querySelector('#response');

display.innerHTML = `
    <p>Thank you for your interest, ${formData.get('title')} ${formData.get('fname')} ${formData.get('lname')}!</p>
    <p>Please verify your contact info:</p>
    <p><b>Email</b>: ${formData.get('email')}, <b>Mobile</b>: ${formData.get('telephone')}</p>
    <p>Your business, ${formData.get('business')} will be considered promptly for ${formData.get('membership')} tier membership.</p>
    <p><b>Business description</b>: ${formData.get('desc')}</p>
    <p><b>Submitted</b>: ${formData.get('timestamp')}</p>`