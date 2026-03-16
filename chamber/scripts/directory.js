const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const realurl = 'data/members.json';

const businessdisplay = document.querySelector("#businesses");

const grid = document.querySelector("#grid");
const list = document.querySelector("#list");

const display = document.querySelector("article");

grid.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

list.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
});

async function GetBusiness() {
    const response = await fetch(url);
    const data = response.json();
    // DisplayBusinesses(data.businesses);

    businessdisplay.innerHTML = data.businesses;
}

function DisplayBusinesses(businesses) {
    businesses.forEach((business) => {
        const base = document.createElement("article");
        base.classList.add('grid');

        if (business.membership == 1){
            base.classList.add('member');
        }
        else if (business.membership == 2){
            base.classList.add('silver');
        }
        else {
            base.classList.add('gold');
        }

        const name = document.createElement("p");
        name.innerHTML = `<h2>${business.name}</h2>`;

        const pic = document.createElement("img");
        pic.setAttribute('src', business.image);
        pic.setAttribute('alt', `Company photo for ${business.name}`); // fill in the blank
        pic.setAttribute('loading', 'lazy');

        const address = document.createElement("p");
        address.innerHTML = `${business.address.street}\n${business.address.city}`;

        const phone = document.createElement("p");
        phone.innerHTML = `${business.phone}`;

        const url = document.createElement("p");
        url.innerHTML = business.url;

        base.appendChild(name);
        base.appendChild(pic);
        base.appendChild(address);
        base.appendChild(phone);
        base.appendChild(url);

        businessdisplay.appendChild(base);
    });
}

GetBusiness();