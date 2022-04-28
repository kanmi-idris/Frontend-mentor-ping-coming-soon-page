const form = document.querySelector('.email-request form');
const email = document.querySelector('.email-request form input[type=email]');

form.addEventListener('click', (e) => {     /*to activate a submit request on the form*/
    e.preventDefault();
    let emailValue = email.value;/*select the email input*/
    if (validateEmail(emailValue)) {
        form.classList.remove('error')
    } else {
        form.classList.add('error');
    };
});

/*to validate the email*/
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
