/* Hamburger toggle functionality */
function clickHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = hamburger.querySelector('i');

    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');

      if (navLinks.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-xmark');
      } else {
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
      }
    });
}
document.addEventListener('DOMContentLoaded', clickHamburgerMenu )

/* Social email copy functionality */
function copyToClipboard() {
    const copyButton = document.querySelector('.copy-email');
    const emailAddress = document.querySelector('.email-address').textContent;
    const feedbackEl = document.querySelector('.copy-feedback');

    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(emailAddress)
        .then(() => {
            feedbackEl.textContent = 'Copied!';
            feedbackEl.style.opacity = '1';          
            
            /* Clear the feedback after 2 seconds*/
            setTimeout(() => {
                feedbackEl.style.opacity = '0';
                setTimeout(() => feedbackEl.textContent = '', 300);
            }, 2000);
        })
        .catch(err => {
            console.error('Error copying text: ', err);
            feedbackEl.textContent = 'Error copying';
            feedbackEl.style.opacity = '1';
            setTimeout(() => {
                feedbackEl.style.opacity = '0';
                setTimeout(() => feedbackEl.textContent = '', 300);
            }, 2000);
        });
    });
}
document.addEventListener('DOMContentLoaded', copyToClipboard )
