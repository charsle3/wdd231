const apiKey = "live_lDVH2YZOahu55PNmo1a0Xrd9a1wPgqcoQqYLx6IBBAtZlMbzmYPcoOgkCzDiwNEE";
const breedButtons = document.querySelector('#breedButtons');
const breedPics = document.querySelector('#breedPics');
const breedDetails = document.querySelector('#breedDetails');

const catBreedsUrl = "https://api.thecatapi.com/v1/breeds";

async function GetCatBreeds() {
    try {
        const response = await fetch(catBreedsUrl, {headers: {
            'x-api-key': apiKey
        }});
        if (response.ok) {
            const data = await response.json();
            DisplayCatBreeds(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function DisplayCatBreeds(data){
    data.forEach(breed => {

        const name = document.createElement('button');
        name.innerHTML = `${breed.name}`;

        name.addEventListener('click', () => {
            DisplayCat(breed);
        });

        breedButtons.appendChild(name);
    });
}

function DisplayCat (breed) {
    breedDetails.innerHTML = "";
            
    const name = document.createElement('p')
    name.innerHTML = `<b>Name:</b> ${breed.name}`;

    const origin = document.createElement('p')
    origin.innerHTML = `<b>Origin:</b> ${breed.origin}`;

    const lifeSpan = document.createElement('p');
    lifeSpan.innerHTML = `<b>Life Span:</b> ${breed.life_span} years`;

    const temperament = document.createElement('p')
    temperament.innerHTML = `<b>Temperament:</b> ${breed.temperament}`;

    const description = document.createElement('p')
    description.innerHTML = `<b>Description:</b> ${breed.description}`;

    breedDetails.appendChild(name);
    breedDetails.appendChild(origin);
    breedDetails.appendChild(lifeSpan);
    breedDetails.appendChild(temperament);
    breedDetails.appendChild(description);

    GetBreedPics(breed.id);
    localStorage.setItem("lastChosenBreed", JSON.stringify(breed));
}

async function GetBreedPics(breedID) {

    const catBreedImagesurl = `https://api.thecatapi.com/v1/images/search?limit=4&breed_ids=${breedID}&api_key=${apiKey}`;

    try {
        const response = await fetch(catBreedImagesurl, {headers: {
            'x-api-key': apiKey
        }});
        if (response.ok) {
            const data = await response.json();
            DisplayBreedPics(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function DisplayBreedPics(data){

    breedPics.innerHTML = ``;

    data.forEach(breed => {
        const image = document.createElement('img');
        image.setAttribute('src', breed.url);
        image.setAttribute('alt', `Image of ${breed.id}`);
        image.setAttribute('loading', 'lazy');

        breedPics.appendChild(image);
    });

    if (data.length == 0){
        breedPics.innerHTML = `<p>Sorry! No photographs available for this breed!</p>`
    }
}

GetCatBreeds();

if (localStorage.getItem('lastChosenBreed')) {
    DisplayCat(JSON.parse(localStorage.getItem('lastChosenBreed')))
}

import GetDate from './date.mjs';
import Navigation from './navigation.mjs';
import DisclaimerModal from './disclaimer.mjs';

GetDate();
Navigation();
DisclaimerModal();