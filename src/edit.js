const postId = (new URLSearchParams(window.location.search)).get('id');
let nameC = document.getElementById('name');
let shortDescription = document.getElementById('shortDescription');
let description = document.getElementById('description');
let image = document.getElementById('image');
let btnE = document.getElementById('btnEdit');

const uptade = 
fetch("https://character-database.becode.xyz/characters/")
    .then((id) => id.json())
    .then((id) => {
        for (let elements of id ){
            if (elements.id === postId){
                nameC.value = elements.name
                shortDescription.value = elements.shortDescription
                description.value = elements.description
                image.src=  'data:image/gif;base64,' + elements.image;
            }
        }
    })
    btnE.addEventListener("click", function (event) {

        event.preventDefault();
        let inputName = nameC.value;
        let inputShortDescription = shortDescription.value;
        let inputDescription = description.value;
      
        const newCharacter = {
          name: inputName,
          shortDescription: inputShortDescription,
          description: inputDescription,
        }
      
        console.log(newCharacter) //ok
        fetch("https://character-database.becode.xyz/characters/" + postId, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCharacter),
        })
      
          .then(response => response.json())
          .then(result => {
            console.log("Success:", result);
            window.location.href = "../index.html";
          })
       
          .catch(error => {
            console.error("Error:", error);
          });
      })