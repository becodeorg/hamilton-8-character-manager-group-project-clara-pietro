
const allCards = document.querySelector("#allCards");


    const characterInfos = fetch('https://character-database.becode.xyz/characters')
    .then((response) => response.json())
    .then((cards) => {
        for (let character of cards) {
            //creating cards
            let div = document.createElement("div");
            div.className = "max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"; 
            allCards.appendChild(div);


            //creating image 
            let img = document.createElement('img');
            img.src = 'data:image/gif;base64,'+ character.image;
            img.classList.add("img");
            img.className = "img rounded-t-lg"
            div.appendChild(img);
   
            //creating name 
            let name = document.createElement('h5');
            name.innerText = character.name;
            name.classList.add("name");
            name.className = "text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            div.appendChild(name);
    
            //creating short description
            let shortDescription = document.createElement('p');
            shortDescription.innerText = character.shortDescription;
            shortDescription.classList.add("shortDescription");
            shortDescription.className = "shortDescription text-center mb-3 font-normal text-gray-700 dark:text-gray-400";
            div.appendChild(shortDescription);
            
            //creating button
            let btn = document.createElement('button');
            btn.innerText = "See character";
            btn.classList.add("btn");    
            btn.className = "text-center inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            btn.href = "add&change.html";
            div.appendChild(btn);
            btn.style.marginLeft = "135px"
        }
    })