const postId = (new URLSearchParams(window.location.search)).get('id');

fetch("https://character-database.becode.xyz/characters/" + postId,)
    .then(response => response.json())
    .then(data => create(data));
