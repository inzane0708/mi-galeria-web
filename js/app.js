const galeria = document.getElementById("galeria");
const buscador = document.getElementById("buscar");

const listaPokemon = [
    {name:"bulbasaur", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
    {name:"ivysaur", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},
    {name:"venusaur", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},
    {name:"charmander", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
    {name:"charmeleon", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},
    {name:"charizard", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},
    {name:"squirtle", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},
    {name:"wartortle", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},
    {name:"blastoise", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},
    {name:"pikachu", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}
];

function mostrarPokemon(lista){

    galeria.innerHTML = "";

    lista.forEach(pokemon => {

        const tarjeta = document.createElement("article");

        tarjeta.className = "tarjeta";

        tarjeta.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
        `;

        galeria.appendChild(tarjeta);
    });
}

document.getElementById("cargar")
.addEventListener("click", () => {
    mostrarPokemon(listaPokemon);
});

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const resultado = listaPokemon.filter(pokemon =>
        pokemon.name.includes(texto)
    );

    mostrarPokemon(resultado);
});