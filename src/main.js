const allCards = document.querySelector("#allCards");


const characterInfos = fetch('https://character-database.becode.xyz/characters')
.then((response) => response.json())
.then((cards) => {
    for (let character of cards) {
        //creating cards
        let a = document.createElement("a");
        a.className = "card"; 
        allCards.appendChild(a);
        
        //creating div
        let div = document.createElement("div");
        div.classList.add("div");
        div.className = "card__background";
        a.appendChild(div);

        //creating image 
        let img = document.createElement('img');
        img.src = 'data:image/gif;base64,'+ character.image;
        img.classList.add("img");
        img.className = "img-rounded"
        div.appendChild(img);

        //creating second div
        let divNd = document.createElement("div");
        divNd.classList.add("div");
        divNd.className = "card__content name p-5";
        a.appendChild(divNd);

        //creating name 
        let name = document.createElement('h5');
        name.innerText = character.name;
        name.classList.add("name");
        name.className = "card__name mb-2 text-2xl font-bold tracking-tight"
        divNd.appendChild(name);

        //creating short description
        let shortDescription = document.createElement('p');
        shortDescription.innerText = character.shortDescription;
        shortDescription.classList.add("shortDescription");
        shortDescription.className = "card__txt shortDescription text-center mb-3 font-normal text-gray-700 dark:text-gray-400";
        divNd.appendChild(shortDescription);
        
        //creating third div
        let divRd = document.createElement("div");
        divRd.classList.add("div");
        divRd.className = "btn text-center";
        divNd.appendChild(divRd);

        //creating button
        let btn = document.createElement('a');
        btn.innerText = "See character";
        btn.classList.add("btn");    
        btn.className = "text-center-btn"
        divRd.appendChild(btn);
        btn.href = "single.html?id=" + character['id'];
    }
})

//SEARCH BAR
