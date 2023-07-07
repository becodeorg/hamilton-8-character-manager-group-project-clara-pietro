const allCards = document.querySelector("#allCards");

/**
 * 
 * @param {string} elemHTML element create and append
 * @param {HTMLElement} parents parents element
 * @param {[string]} arraysClass arrays class
 * @param {string} image image card => default = false
 * @param {string} text text card => default = false
 * @returns return element create
 */
const createHTMLElement = (elemHTML, parents, arraysClass, image=false, text=false ) => {
    let elem = document.createElement(elemHTML);
        if(image != false){
            elem.src= 'data:image/gif;base64,'+ image;
        }

        if(text != false){
            elem.innerText = text;
        }

        for(let i = 0; i < arraysClass.length; i++){
            elem.classList.add(arraysClass[i])
        }
        parents.appendChild(elem);
        return elem
}


const characterInfos = fetch('https://character-database.becode.xyz/characters')
.then((response) => response.json())
.then((cards) => {
    for (let character of cards) {
        let name = character.name, image = character.image, shortDescription = character.shortDescription;
        //creating cards
        let a = createHTMLElement("a", allCards, ["card"]);
        
        //creating div
         let div = createHTMLElement("div", a, ["card__background"]);
    
        //creating image 
        createHTMLElement("img", div, ["img-rounded"], image);

        //creating second div
        let divNd = createHTMLElement("div", a, ["card__content", "name", "p-5"]);
    
        //creating name 
        createHTMLElement("h5", divNd, ["card__name", "mb-2", "text-2xl", "font-bold", "tracking-tight"], false, name);

        //creating short description
        createHTMLElement(
            "p",
            divNd,
            ["card__txt", "shortDescription", "text-center", "mb-3", "font-normal", "text-gray-700", "dark:text-gray-400"],
            false,
            shortDescription);
        
        //creating third div
        let divRd = createHTMLElement("div",divNd,["btn", "text-center"]);

        //creating button
        let btn = createHTMLElement(
            "a",
            divRd,
            ["text-center-btn"],
            false,
            "See character"
        );
            
        btn.href = "/Charactère manager/src/single.html?id=" + character.id;
    }
})

//SEARCH BAR
