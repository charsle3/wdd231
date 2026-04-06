import placesOfInterest from "../data/places-of-interest.mjs";

const visitDate = document.querySelector('#visitDate');
const placesDisplay = document.querySelector('#places');

function GetVisits(){
    const userVisit = localStorage.getItem('visit');
    const today = new Date();
    
    if (userVisit != null) {
        const timeSinceVisit = userVisit - today.getTime();

        if (timeSinceVisit < 86400000) {
            visitDate.innerHTML = "Back so soon! Awesome!";
        }
        else if (Math.round(timeSinceVisit / 86400000) == 1){
            visitDate.innerHTML = `You last visited one day ago.`
        }
        else {
            visitDate.innerHTML = `You last visited ${Math.round(timeSinceVisit / 86400000)} days ago.`
        }
    }
    else {
        visitDate.innerHTML = "Welcome! Let us know if you have any questions."
    }

    localStorage.setItem('visit', today.getTime());
    
}

function DisplayPlaces(placesOfInterest) {
    placesOfInterest.places.forEach(place => {
        const card = document.createElement('div');

        const title = document.createElement('h2');
        title.innerHTML = `${place.name}`;

        const figure = document.createElement('figure');
        const image = document.createElement('img');
        image.setAttribute('src', `${place.photo}`);
        image.setAttribute('alt', `${place.name}`);
        image.setAttribute('loading', 'lazy');
        figure.appendChild(image);

        const address = document.createElement('address');
        address.innerHTML = `${place.address}`;

        const desc = document.createElement('p');
        desc.innerHTML = `${place.description}`;

        const learn = document.createElement('button');
        learn.innerHTML = "Learn More";

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(desc);
        card.appendChild(learn);

        placesDisplay.appendChild(card);
    });
}

GetVisits();
DisplayPlaces(placesOfInterest);