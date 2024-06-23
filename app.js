$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Show the thank you modal
  const modal = document.getElementById('thank-you-modal');
  modal.style.display = 'block';

  // Optionally, you can use AJAX to submit the form data
  const formData = new FormData(this);
  fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          this.reset(); // Reset the form fields
      } else {
          // Handle error
          alert('There was an error submitting the form.');
      }
  }).catch(error => {
      // Handle network error
      alert('There was a network error submitting the form.');
  });

  // Close the modal when the user clicks on <span> (x)
  document.getElementById('close-button').onclick = function() {
      modal.style.display = 'none';
  };

  // Close the modal when the user clicks anywhere outside of the modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  };
});

