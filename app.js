const container = document.querySelector('.container');
const thankYouState = document.querySelector('.thank-you-state');

const ratingCountBtn = document.querySelectorAll('.rating-count-btn');
const ratingSelected = document.getElementById('rating-selected');
const submitRatingBtn = document.getElementById('submit-rating-btn');
const rateAgainBtn = document.getElementById('rate-again-btn');

// Iterate over li's and pass value to RateAgainBtn

submitRatingBtn.addEventListener('click', () => {
    for (let rate of ratingCountBtn) {
        rate.addEventListener('click', () => {
            ratingSelected.innerHTML = rate.innerHTML;
        })
    }
    container.classList.add('hidden');
    thankYouState.classList.remove('hidden');
})

rateAgainBtn.addEventListener('click', () => {
    thankYouState.classList.add('hidden');
    container.classList.remove('hidden');
})
