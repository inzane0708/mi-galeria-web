const galeria = document.getElementById("galeria");
const buscador = document.getElementById("buscar");

let listaPokemon = [];

async function cargarDatos() {

    galeria.innerHTML = "Cargando...";

    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const datos = await respuesta.json();

    listaPokemon = [];

    for (const pokemon of datos.results) {

        const detalle = await fetch(pokemon.url);
        const info = await detalle.json();

        listaPokemon.push(info);
    }

    mostrarPokemon(listaPokemon);
}

function mostrarPokemon(lista) {

    galeria.innerHTML = "";

    lista.forEach(pokemon => {

        galeria.innerHTML += `
            <article class="tarjeta">
                <img src="${pokemon.sprites.front_default}">
                <h3>${pokemon.name}</h3>
            </article>
        `;
    });
}

buscador.addEventListener("keyup", function () {

    const texto = this.value.toLowerCase();

    const resultado = listaPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(texto)
    );

    mostrarPokemon(resultado);
});

document.getElementById("cargar")
.addEventListener("click", cargarDatos);