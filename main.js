const btns= document.querySelectorAll('[role="circle"]');
const submitBtn= document.getElementById('submit');
const thankYouBox= document.getElementById('thank-you-box');
const selectedRating= document.getElementById('selected-rating');
const feedBackBox= document.getElementById('feedback-box');

btns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
    let selectedBtn= e.currentTarget;
    for (let i=0 ; i<btns.length; i++) {

        if (btns[i].getAttribute('aria-selected')=='true') {
            btns[i].setAttribute('aria-selected', false);
            selectedBtn.setAttribute('aria-selected', true);
            selectedRating.textContent=selectedBtn.id;
        }else{ 
            selectedBtn.setAttribute('aria-selected', true);
            selectedRating.textContent=selectedBtn.id;
        }
    }
})
})
submitBtn.addEventListener('click', function() {
    feedBackBox.setAttribute('hidden', true);
    thankYouBox.removeAttribute('hidden');
})