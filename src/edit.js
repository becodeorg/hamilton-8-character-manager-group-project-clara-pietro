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

    let btnL = document.createElement('button');
    btnL.className = "btn_left";
    btnL.innerText = "Edit";
    divBtn.appendChild(btnL);
}


/* function send(){
    let editName = document.getElementById('name').value;
    let editShortDescription = document.getElementById('shortDescription').value;
    let editDescription = document.getElementById('description').value;

    fetch("https://character-database.becode.xyz/characters" + postId, {
    method: "PUT",
    body: JSON.stringify({
        image: image64,
        name: editName,
        shortDescription: editShortDescription,
        description: editDescription,

  }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
  }
})
    .then( rep => {
        document.location.href="mainPage.html"; 
})
} */