const items = document.querySelectorAll('#project p');
const images = document.querySelectorAll('#images img');
const skills = document.querySelectorAll('#skills div');
const skillsContainer = document.getElementById('skills');

// Smooth Scrolling
$('#scrollBtn').on('click', function(event){
  if (this.hash !== ''){
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  items.forEach((item, index) => {
    if (isInViewport(item)) {
      images[index].classList.add('show');
      if (index > 0) {
          images[index-1].classList.remove('show');
      }
      if (index < images.length - 1) {
          images[index+1].classList.remove('show');
      }
    }
  });

  skills.forEach(skill => {
    if (isInViewport(skill)) {
      skillsContainer.classList.add('show');
    }
    else {
      skillsContainer.classList.remove('show');
    }
  });
};

// Listen for scroll events
window.addEventListener('scroll', run);