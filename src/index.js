// Code here

document.addEventListener('DOMContentLoaded', function() {
    fetchFirstBeer();
    beerPatch();

    let beerDescriptionUpdate = document.getElementsByClassName('description')[1]
    beerDescriptionUpdate.addEventListener('click', descriptionChange(data))

    let addReview = document.getElementsByClassName('review-form')
    addReview.addEventListener('submit', (event) => {event.preventDefault();})

    
})

function fetchFirstBeer() {
    fetch('http://localhost:3000/beers/1')
    .then(resp => resp.json())
    .then(data => renderFirstBeer(data))
}

function renderFirstBeer(beer) {

    let beerName = document.querySelector('h2')
    beerName.innerHTML = beer.name
    let beerImage = document.querySelector('img')
    beerImage.src = beer.image_url
    let beerDescription = document.getElementsByClassName('description')[0]
    beerDescription.innerHTML = beer.description
    let beerReviews = document.getElementsByClassName('reviews')[0]
    let li = document.createElement('li')
    beerReviews.appendChild(li)
    beerReviews.innerHTML = beer.reviews

}


function beerPatch() {

    fetch(`http://localhost:3000/beers/1`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            description: 'changed description'
        })

    }).then(resp => resp.json())
    .then(data => descriptionChange(data))
    }

function descriptionChange (data) {
    let newBeerDescription = document.getElementsByClassName('description')[0]
    newBeerDescription.innerHTML = data.description
}

function reviewAddition() {
    let newReview = document.getElementsByClassName('review-form')[0].value
    let beerReviews = document.getElementsByClassName('reviews')[0]
    beerReviews.appendChild(newReview)
}

reviewAddition


// let form = document.getElementsByClassName('review-form');
// function submitForm(event) { 
//     event.preventDefault(); 
// } 
// form.addEventListener('submit', submitForm);