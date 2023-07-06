/**
 * 
 * @param {string} elemHTML element create and append
 * @param {HTMLElement} parents parents element
 * @param {[string]} arraysClass arrays class
 * @param {string} image image card => default = false
 * @param {string} text text card => default = false
 * @returns return element create
 */

const postId = (new URLSearchParams(window.location.search)).get('id');

const deleteCard = () => {
    fetch("https://character-database.becode.xyz/characters/" + postId, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok){
                console.log("bien supprimé");
            }
            else{
                console.log("pas supprimé error");
            }
        })
        .then(result => {
            console.log("Success:", result);
    
            // Redirection vers une autre page
            // TODO: la bonne page
            window.location.href = "../index.html";
    
          })
        .catch(error => {
            console.error("erreur :", error);
        });
    
}

const createHTMLElement = (elemHTML, parents, arraysClass = false, image=false, text=false ) => {
    let elem = document.createElement(elemHTML);
        if(image != false){
            elem.src= 'data:image/gif;base64,'+ image;
        }
        
        if(text != false){
            elem.innerText = text;
        }
        if(arraysClass != false){
            for(let i = 0; i < arraysClass.length; i++){
                elem.classList.add(arraysClass[i])
            }
        }
        parents.appendChild(elem);
        return elem
}

const createCard = (data) => {
    let name = data.name, image = data.image, shortDescription = data.shortDescription, description = data.description;

    let divC = createHTMLElement("div",document.getElementsByTagName('main')[0] ,["container"]);
   
    let divPP = createHTMLElement("div", divC, ["div_pp"]);
    /* let divPP = document.createElement('div');
    divPP.className = "div_pp";
    divC.appendChild(divPP); */

    createHTMLElement("img", divPP, false, image);
    /* let image = document.createElement('img');
    image.src = "data:image/gif;base64," + data.image;
    divPP.appendChild(image); */

    let divText = createHTMLElement("div", divC, ["divText"]);
    /* let divText = document.createElement('div');
    divText.className = "divText";
    divC.appendChild(divText);*/

    createHTMLElement("p", divText, ["name"], false, name);
   /*  let name = document.createElement('p');
    name.className = "name" ;
    name.innerText = data.name;
    divText.appendChild(name); */

    createHTMLElement("p", divText, ["shortDescription"], false, shortDescription);
   /*  let shortDescription = document.createElement('p');
    shortDescription.className = " shortDescription" ;
    shortDescription.innerText = data.shortDescription;
    divText.appendChild(shortDescription); */
    
    createHTMLElement("p", divText, ["description"], false, description);
    /* let description = document.createElement('p');
    description.className = "description";
    description.innerText = data.description;
    divText.appendChild(description); */

    let divBtn = createHTMLElement("div", divText, ["div_btn"]);
    /* let divBtn = document.createElement('div');
    divBtn.className = "div_btn";
    divText.appendChild(divBtn); */

    let btnL = createHTMLElement("a", divBtn, ["btn_left"], false, "Edit");
  /*   let btnL = document.createElement('a');
    btnL.className = "btn_left";
    btnL.innerText = "Edit";
    divBtn.appendChild(btnL); */
    btnL.href = "edit.html?id=" + data.id;

    let btnR = createHTMLElement("button", divBtn, ["btn_right"], false, "Delete");
    /* let btnR = document.createElement('button');
    btnR.className = "btn_right";
    btnR.innerText = "Delete";
    divBtn.appendChild(btnR); */

    btnR.onclick = () => {
        deleteCard();
    }
    /*   btnR.addEventListener("click", deleteCard); */
}

fetch("https://character-database.becode.xyz/characters/" + postId,)
    .then(response => response.json())
    .then(data => createCard(data));