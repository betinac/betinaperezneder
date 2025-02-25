/* Contact Form submission verification */
function formSubmission() {
    const form = document.getElementById('contactForm');
    const formMessageEl = document.getElementById('formMessage');
    const loadingMessageEl = document.getElementById('loadingMessage');
    const submitButton = form.querySelector('button[type="submit"]');

    if (!form) {
        console.error("No form with id 'contactForm' found.");
        return;
    }

    form.addEventListener('submit', function (event) {
        /* Avoid submitting the form automatically */
        event.preventDefault();
        
        /* Clear previous error messages and styles */
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(el => el.textContent = '');
        const inputs = this.querySelectorAll('input, textarea');
        inputs.forEach(input => input.classList.remove('error'));
        formMessageEl.textContent = '';
    
        loadingMessageEl.style.display = 'block';
        loadingMessageEl.className = 'summary-message';
        submitButton.disabled = true;

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const company = document.getElementById('company');
        const message = document.getElementById('message');
    
        let isValid = true;
    
        if (firstName.value.trim().length < 2) {
          isValid = false;
          firstName.classList.add('error');
          document.getElementById('firstNameError').textContent = 'Please enter at least 2 characters.';
        }
        if (firstName.value.trim().length > 50) {
          isValid = false;
          firstName.classList.add('error');
          document.getElementById('firstNameError').textContent = 'First name must be less than 50 characters.';
        }
    
        if (lastName.value.trim().length < 2) {
          isValid = false;
          lastName.classList.add('error');
          document.getElementById('lastNameError').textContent = 'Please enter at least 2 characters.';
        }
        if (lastName.value.trim().length > 50) {
          isValid = false;
          lastName.classList.add('error');
          document.getElementById('lastNameError').textContent = 'Last name must be less than 50 characters.';
        }

        const emailValue = email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
          isValid = false;
          email.classList.add('error');
          document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        } else {
          /* Check for disallowed email domains */
          const disallowedDomains = ['mailinator.com', 'dispostable.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com', 'example.com'];
          const emailDomain = emailValue.split('@')[1].toLowerCase();
          if (disallowedDomains.includes(emailDomain)) {
            isValid = false;
            email.classList.add('error');
            document.getElementById('emailError').textContent = 'That email domain is not allowed.';
          }
        }
    
        if (company.value.trim().length > 100) {
          isValid = false;
          company.classList.add('error');
          document.getElementById('companyError').textContent = 'Company name must be less than 100 characters.';
        }
    
        if (message.value.trim().length === 0) {
          isValid = false;
          message.classList.add('error');
          document.getElementById('messageError').textContent = 'Please enter a message.';
        }

        if (message.value.trim().length > 1000) {
          isValid = false;
          message.classList.add('error');
          document.getElementById('messageError').textContent = 'Message must be less than 1000 characters.';
        }
    
        /* Show a confirmation or error message */
        if (isValid) {
            const formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: formData
            })
                .then(response => response.text())
                .then(result => {
                    loadingMessageEl.style.display = 'none';
                    submitButton.disabled = false;
                    formMessageEl.textContent = 'Thank you! Your message has been sent successfully.';
                    formMessageEl.className = 'summary-message confirmation-message';
                    form.reset();
                    formMessageEl.focus();
                })
                .catch(error => {
                    loadingMessageEl.style.display = 'none';
                    submitButton.disabled = false;
                    formMessageEl.textContent = 'There was an error when sending your message. Please try again later.';
                    formMessageEl.className = 'summary-message error-message';
                });
        } else {
            loadingMessageEl.style.display = 'none';
            submitButton.disabled = false;
            formMessageEl.textContent = 'Please correct the errors highlighted and try it again.';
            formMessageEl.className = 'summary-message error-message';
        }
    });
}
document.addEventListener('DOMContentLoaded', formSubmission )
