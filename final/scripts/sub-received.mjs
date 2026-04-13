const display = document.querySelector('#resultsDisplay');

const praiseInfo = new URLSearchParams(window.location.search);

if (praiseInfo.get('cat-ownership') == 'yes'){
    const comparison = document.createElement('div');
    
    const catName = document.createElement('h2');
    catName.innerHTML = praiseInfo.get('name');

    const message = document.createElement('p');
    message.innerHTML = `Thanks for telling me about ${praiseInfo.get('name')} the ${praiseInfo.get('breed')}. Unfortunately, Louise is inherently superior.`;

    const superior = document.createElement('p');
    superior.innerHTML = `You chose <b>${praiseInfo.get('superior')}</b> when asked if Louise was better.`

    const exchange = document.createElement('p');
    exchange.innerHTML = `When asked if you would exchange your cat for Louise, you said: <b>${praiseInfo.get('trade')}</b>.`

    comparison.appendChild(catName);
    comparison.appendChild(message);
    comparison.appendChild(superior);
    comparison.appendChild(exchange);

    display.appendChild(comparison);
}

const interact = document.createElement('div');
var content = false;
interact.innerHTML = "<h2>You said you wanted to. . .</h2>";

const list = document.createElement('ul');

if (praiseInfo.get('pet')){
    const pet = document.createElement('li');
    pet.innerHTML = `Pet my cat`

    list.appendChild(pet);
    content = true;
}

if (praiseInfo.get('hold')){
    const hold = document.createElement('li');
    hold.innerHTML = `Hold my cat`

    list.appendChild(hold);
    content = true;
}

if (praiseInfo.get('scritch')){
    const scritch = document.createElement('li');
    scritch.innerHTML = `Give my cat a scritch`

    list.appendChild(scritch);
    content = true;
}

if (praiseInfo.get('hug')){
    const hug = document.createElement('li');
    hug.innerHTML = `Hug my cat`

    list.appendChild(hug);
    content = true;
}

if (praiseInfo.get('feed')){
    const feed = document.createElement('li');
    feed.innerHTML = `Feed my cat`

    list.appendChild(feed);
    content = true;
}

if (praiseInfo.get('snuggle')){
    const snuggle = document.createElement('li');
    snuggle.innerHTML = `Snuggle with my cat`

    list.appendChild(snuggle);
    content = true;
}

interact.appendChild(list);

if (content){
    display.appendChild(interact);
}
else if (praiseInfo.get('cat-ownership') == 'no'){
    const question = document.createElement('p');
    question.innerHTML = "<h2>Nothing? Really? Not a cat person or something? Why are you here?<h2>";
    display.appendChild(question);
}

import GetDate from './date.mjs';
import Navigation from './navigation.mjs';
import DisclaimerModal from './disclaimer.mjs';

GetDate();
Navigation();
DisclaimerModal();