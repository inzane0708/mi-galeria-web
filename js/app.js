const galeria = document.getElementById("galeria");
const buscador = document.getElementById("buscar");

const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

const modalImg = document.getElementById("modal-img");
const modalNombre = document.getElementById("modal-nombre");
const modalTipo = document.getElementById("modal-tipo");

let listaPokemon = [];

async function cargarDatos(){

    try{

        galeria.innerHTML = "Cargando...";

        const respuesta =
        await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=20"
        );

        const datos =
        await respuesta.json();

        listaPokemon =
        datos.results.map((pokemon,index)=>({

            name:pokemon.name,

            img:
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`

        }));

        mostrarPokemon(listaPokemon);

    }
    catch(error){

        galeria.innerHTML =
        "Error al cargar datos";

        console.error(error);
    }
}

function mostrarPokemon(lista){

    galeria.innerHTML = "";

    lista.forEach(pokemon=>{

        const tarjeta =
        document.createElement("article");

        tarjeta.className =
        "tarjeta";

        tarjeta.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
        `;

        tarjeta.addEventListener("click",()=>{

            modalImg.src =
            pokemon.img;

            modalNombre.textContent =
            pokemon.name;

            modalTipo.textContent =
            "Pokémon obtenido desde la PokéAPI";

            modal.style.display =
            "block";

        });

        galeria.appendChild(tarjeta);

    });

}

buscador.addEventListener("input",()=>{

    const texto =
    buscador.value.toLowerCase();

    const resultado =
    listaPokemon.filter(pokemon=>

        pokemon.name
        .toLowerCase()
        .includes(texto)

    );

    mostrarPokemon(resultado);

});

cerrar.addEventListener("click",()=>{

    modal.style.display =
    "none";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display =
        "none";

    }

});

document
.getElementById("cargar")
.addEventListener("click",cargarDatos);