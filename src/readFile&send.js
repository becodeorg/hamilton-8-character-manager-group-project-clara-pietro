document.getElementById("image").addEventListener("change", readFile);
let image64;

function readFile() {
    if (!this.files || !this.files[0]) return;
    const FR = new FileReader();
    FR.addEventListener("load", function(evt) {

        let index = evt.target.result.indexOf(',');
        image64 = evt.target.result.substring(index + 1);
    });
    FR.readAsDataURL(this.files[0]);
}

function send(){
    let nameC = document.getElementById('name').value;
    let shortDescription = document.getElementById('shortDescription').value;
    let description = document.getElementById('description').value;

    fetch("https://character-database.becode.xyz/characters", {
    method: "POST",
    body: JSON.stringify({
        image: image64,
        name: nameC,
        shortDescription: shortDescription,
        description: description,

  }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
  }
})
    .then( rep => {
        document.location.href="../index.html"; 
})
}
