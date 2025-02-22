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

/* Show tooltips when hovering over the skill icons in the Hire Me section */
function showTooltips() {

    const tooltip = document.getElementById('tooltip');
    const icons = document.querySelectorAll('.services-icon');
  
    icons.forEach(icon => {
      icon.addEventListener('mouseenter', function () {
        const text = this.getAttribute('data-tooltip');
        tooltip.textContent = text;
        tooltip.style.opacity = '1';
  
        /* Calculate position: display tooltip above the icon */
        const rect = this.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
  
        let top = rect.top - tooltipRect.height - 8;
        let left = rect.left + (rect.width - tooltipRect.width) / 2;
  
        /* Adjust if tooltip goes off-screen */
        if (top < 0) {
          top = rect.bottom + 8;
        }
        if (left < 0) {
          left = 8;
        } else if (left + tooltipRect.width > window.innerWidth) {
          left = window.innerWidth - tooltipRect.width - 8;
        }
  
        tooltip.style.top = `${top + window.scrollY}px`;
        tooltip.style.left = `${left + window.scrollX}px`;
      });
  
      icon.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
      });
    });
  }
  document.addEventListener('DOMContentLoaded', showTooltips)
  