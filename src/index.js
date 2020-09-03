//fetch 
getBeers()

function getBeers(){
    fetch('http://localhost:3000/beers/1')
    .then((resp) => resp.json())
    .then((beer) => {
        console.log(beer)
    const getBeerDetails = document.getElementsByClassName('beer-details')[0]
    getBeerDetails.innerHTML = ""
        appendBeer(beer)
    })
}

// fetch patch 

function patchBeers(beerId,updateBeer){
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: updateBeer,
    };

    fetch(`http://localhost:3000/beers/${beerId}`, options)
    
}

//append beer

function appendBeer(beerImageandTitle){
    const getBeerDetails = document.getElementsByClassName('beer-details')[0]
    // console.log(getBeerDetails) // check

    const beerDetails = renderBeer(beerImageandTitle)
    getBeerDetails.innerHTML += beerDetails

}

// render

function renderBeer(seeBeer){
return `<div class="beer-details">
<h2>${seeBeer?.name}</h2>
<img src=${seeBeer?.image_url}>

<form onsubmit="event.preventDefault(); updateBeer(${seeBeer?.id})" class="description">
  <textarea>${seeBeer?.description}</textarea>
  <button>Update Beer</button>
</form>

<h3>Leave a Review</h3>
<form onsubmit="event.preventDefault(); addReview(${seeBeer?.id})" class="review-form">
  <textarea></textarea>
  <input type="submit" value="Submit">
</form>

<h3>Customer Reviews</h3>
<ul class="reviews">
${seeBeer?.reviews?.map(renderReview).join('')}
</ul>
</div>`
}

// render reviews from server

function renderReview(review) {
    return `<li>${review}</li>`

    }

// update beer

function updateBeer(beerId){
const beerForm = document.getElementsByClassName('description')[0]
const beerDescription = beerForm.children[0].value
console.log(beerDescription)
patchBeers(beerId, beerDescription)
}