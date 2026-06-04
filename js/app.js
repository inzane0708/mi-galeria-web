const galeria = document.getElementById("galeria");

async function cargarDatos(){

    galeria.innerHTML = "Cargando...";

    try{

        const respuesta =
        await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

        if(!respuesta.ok){
            throw new Error("Error " + respuesta.status);
        }

        const datos = await respuesta.json();

        galeria.innerHTML = "";

        for(const pokemon of datos.results){

            const detalle = await fetch(pokemon.url);
            const info = await detalle.json();

            const tarjeta =
            document.createElement("article");

            tarjeta.className = "tarjeta";

            tarjeta.innerHTML = `
                <img src="${info.sprites.front_default}" alt="${info.name}">
                <h3>${info.name}</h3>
            `;

            galeria.appendChild(tarjeta);
        }

    }catch(error){

        galeria.innerHTML =
        "No se pudieron cargar los datos.";

        console.error(error);
    }
}

document
.getElementById("cargar")
.addEventListener("click", cargarDatos);