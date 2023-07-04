const postId = (new URLSearchParams(window.location.search)).get('id');

fetch("https://character-database.becode.xyz/characters/" + postId,)
    .then(response => response.json())
    .then(data => create(data));

function create(data){
    let divC = document.createElement('div');
    divC.className = "container";
    document.getElementsByTagName('main')[0].appendChild(divC);
    
    let divPP = document.createElement('div');
    divPP.className = "div_pp";
    divC.appendChild(divPP);

    let image = document.createElement('img');
    image.src = "data:image/gif;base64," + data["image"];
    divPP.appendChild(image);

    let divText = document.createElement('div');
    divText.className = "divText";
    divC.appendChild(divText);

    let name = document.createElement('p');
    name.className = "name" ;
    name.innerText = data["name"];
    divText.appendChild(name);

    let shortDescription = document.createElement('p');
    shortDescription.className = " shortDescription" ;
    shortDescription.innerText = data["shortDescription"];
    divText.appendChild(shortDescription);
    
    let description = document.createElement('p');
    description.className = "description";
    description.innerText = data["description"];
    divText.appendChild(description);

    let divBtn = document.createElement('div');
    divBtn.className = "div_btn";
    divText.appendChild(divBtn);

    let btnL = document.createElement('a');
    btnL.className = "btn_left";
    btnL.innerText = "Edit";
    divBtn.appendChild(btnL);
    btnL.href = "edit.html?id=" + data['id'];

    let btnR = document.createElement('button');
    btnR.className = "btn_right";
    btnR.innerText = "Delete";
    divBtn.appendChild(btnR);

    btnR.addEventListener("click", () => {
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
    
    });
    
}