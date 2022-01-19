const collapseBtn = document.querySelector('.collapsible__button');
const collapseContent = document.querySelector('.collapsible__content');
const collapseActionVisible = document.querySelector(
  '.collapsible__action--visible'
);
const collapseActionHidden = document.querySelector(
  '.collapsible__action--hidden'
);

let state = 'none';
function toggle() {
  if (state == 'none') {
    collapseContent.style.display = 'block';
    collapseActionVisible.style.display = 'block';
    collapseActionHidden.style.display = 'none';
    state = 'block';
  } else {
    collapseContent.style.display = 'none';
    collapseActionVisible.style.display = 'none';
    collapseActionHidden.style.display = 'block';
    state = 'none';
  }
}

collapseContent.style.display = 'none';
collapseActionVisible.style.display = 'none';

collapseBtn.addEventListener('click', toggle);

collapseContent.animate(
  [
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(.9)', opacity: 0.5 },
  ],
  {
    duration: 1000,
    easing: 'ease-in',
    iterations: Infinity,
    direction: 'alternate',
  }
);
