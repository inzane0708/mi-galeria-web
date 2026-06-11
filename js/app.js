const galeria = document.getElementById("galeria");
const buscador = document.getElementById("buscar");

let listaPokemon = [];

async function cargarDatos() {

    try {

        galeria.innerHTML = "Cargando...";

        const respuesta = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=20"
        );

        if (!respuesta.ok) {
            throw new Error("Error al obtener datos");
        }

        const datos = await respuesta.json();

        listaPokemon = datos.results.map((pokemon, index) => ({
            name: pokemon.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }));

        mostrarPokemon(listaPokemon);

    } catch (error) {

        galeria.innerHTML = "Error al cargar datos";
        console.error(error);
    }
}

function mostrarPokemon(lista) {

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

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const resultado = listaPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(texto)
    );

    mostrarPokemon(resultado);
});

document
    .getElementById("cargar")
    .addEventListener("click", cargarDatos);