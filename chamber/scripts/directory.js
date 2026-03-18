const businessdisplay = document.querySelector("#businesses");

const grid = document.querySelector("#grid");
const list = document.querySelector("#list");

const display = document.querySelector("article");

grid.addEventListener('click', () => {
    businessdisplay.classList.add('grid');
    businessdisplay.classList.remove('list');
});

list.addEventListener('click', () => {
    businessdisplay.classList.add('list');
    businessdisplay.classList.remove('grid');
});

async function GetBusiness() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    DisplayBusinesses(data.businesses);
}

function DisplayBusinesses(businesses) {
    businesses.forEach((business) => {
        const base = document.createElement("article");
        
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
        address.innerHTML = `${business.address.street}, ${business.address.city}`;

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