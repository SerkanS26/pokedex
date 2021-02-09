document.getElementById("search-btn").addEventListener("click", function () {

    const userInput = document.querySelector("#name-input").value;
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${userInput}`; // api url
    const pokeName = document.querySelector(".green-screen"); // pokemon name
    const pokeFrontImage = document.querySelector(".poke-front-image"); // pokemon image
    const pokeId = document.querySelector("#id-screen");
    const pokeMovesWindow = document.querySelector("#about-screen");
    fetch(apiUrl).then(res => {
        return res.json()
            .then((data, index) => {
                let movesNames = [];

                pokeName.textContent = data["name"]
                pokeFrontImage.src = data["sprites"]["front_default"];
                pokeId.textContent = "pokemon ID:" + data["id"]

                console.log(data);

                for (let i = 0; i < data["moves"].length; i++) {
                    index = i
                    let dataMoves = data["moves"][index]
                    let dataMoveName = dataMoves["move"]["name"]
                    movesNames.push(dataMoveName);
                }

                let fourMoves = movesNames.slice(0, 4)
                pokeMovesWindow.textContent = fourMoves;

                function fetchevolutionPokemon(evopokemon) {
                    fetch(`https:pokeapi.co/api/v2/pokemon-species/${userInput}`)
                        .then(response => response.json())
                        .then(evopokemon => {
                            console.log(evopokemon)

                            if (evopokemon.evolves_from_species !== null) {
                                evolu.textContent = evopokemon.evolves_from_species.name;
                            } else {
                                evolu.textContent = 'no previous evolution';
                            }
                        });


                }

                fetchevolutionPokemon();




            });
    })
})


// function fetchevolutionPokemon(evopokemon) {
//     fetch(`https:pokeapi.co/api/v2/pokemon-species/${userInput}`)
//         .then(response => response.json())
//         .then(evopokemon => {
//             console.log(evopokemon)
//
//             if (evopokemon.evolves_from_species !== null) {
//                 evolu.textContent = evopokemon.evolves_from_species.name;
//             } else {
//                 evolu.textContent = 'no previous evolution';
//             }
//         });
//
//
// }
//
// fetchevolutionPokemon();