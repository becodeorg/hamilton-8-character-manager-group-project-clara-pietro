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

    let btnR = document.createElement('button');
    btnR.className = "btn_right";
    btnR.innerText = "Delete";
    divBtn.appendChild(btnR);
}

// Add click event listener to deleteButton for deleting the character
const deleteButton = cardInfoCharacter.querySelector('.btn_right');
btn_right.addEventListener('click', () => {
    // Display an alert to confirm the deletion
    const confirmation = confirm('Are you sure you want to delete?');
    if (confirmation) {
        // Add code to delete the character
        fetch(`https://character-database.becode.xyz/characters/${cardData["id"]}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                // Display success message
                alert("You killed him :'(");

                // Redirect to index.html
                window.location.href = "index.html";
            } else {
                // Handle the error case
                alert("Failed to delete character.");
            }
        })
        .catch(error => {
            // Handle any network or other errors
            console.error("Error deleting character:', error");
            alert('An error occurred while deleting the character.');
        });
    }
});
