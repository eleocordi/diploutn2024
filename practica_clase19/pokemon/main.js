const main = document.querySelector("main");

fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => response.json())
.then(data =>{
    const pokemons=data.results;
    console.log(data.results);

    pokemons.forEach(pokemon => {
        const listaPoke = document.createElement("li");
        listaPoke.innerHTML = pokemon.name;
        main.append(listaPoke);
})
   
});
