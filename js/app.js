listaPokemon = [];

for (const pokemon of datos.results) {

    const detalle = await fetch(pokemon.url);
    const info = await detalle.json();

    listaPokemon.push({
        name: info.name,
        img: info.sprites.other["official-artwork"].front_default,
        tipo: info.types.map(t => t.type.name).join(", "),
        peso: info.weight,
        altura: info.height
    });
}