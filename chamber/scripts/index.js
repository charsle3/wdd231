const businessdisplay = document.querySelector("#businessdisplay")

async function GetBusiness() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const filteredBusinesses = data.businesses.filter(business => business.membership > 1);

    let finalBusinesses = GetRandomBusiness(filteredBusinesses);
    
    DisplayBusinesses(finalBusinesses);
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

        base.classList.add('businessCards');

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

function GetRandomBusiness(filteredBusinesses) {
    let choice1 = Math.floor(Math.random() * (filteredBusinesses.length - 0) + 0);
    let choice2 = (choice1 + 3) % filteredBusinesses.length

    if (choice1 > choice2) {
        filteredBusinesses.splice(choice2, choice1 - choice2);
    }
    else {
        filteredBusinesses.slice(choice1, choice2);
    }

    return filteredBusinesses;
}

GetBusiness();