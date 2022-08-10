const hideButton = document.querySelector('.collapsible__action--visible');
const showButton = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');
const button = document.querySelector('.collapsible__button');
hideButton.style.display = 'none';
content.animate([{ transform: 'scale(1, 0)', maxHeight: 0 }], {
    duration: 0,
    fill: 'forwards'
});
button.addEventListener('click', (e) => {
    if (e.target.innerText === 'Показать содержимое') {
        content.animate([{ transform: 'scale(1, 1)', maxHeight: '1000px' }], {
            duration: 300,
            fill: 'forwards'
        }); 
        showContent();
    } else {
        content.animate([{ transform: 'scale(1, 0)', maxHeight: 0 }], {
            duration: 300,
            fill: 'forwards'
        }); 
        hideContent();
    }
})

function showContent() {
    hideButton.style.display = 'block';
    showButton.style.display = 'none';
    slideDown();
}
function hideContent() {
    hideButton.style.display = 'none';
    showButton.style.display = 'block';
    slideUp();
}