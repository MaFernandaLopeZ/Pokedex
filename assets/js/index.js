const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
        
    }).then((data) => { //nos da la informacion del pokemon
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pName = data.name;
            let pType = data.type.name;
            let pHeight = data.height;
            let pWeight = data.weight;
            pokeImage(pokeImg);
            funName(upperFirst(pName));
            funHeight(pHeight);
            funWeight(pWeight);
            console.log(upperFirst(pName));
            console.log(pType);
            console.log(pHeight);
            console.log(pweight);
        }
    });
}
function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const funName = (url) => {
    const pokeNameH = document.getElementById("labelNameP");
    pokeNameH.innerHTML = url;
}
const funType = (url) => {
    const element = document.getElementById("typeP");
    element.innerHTML = url;
}
const funHeight= (url) => {
    const element = document.getElementById("heightP");
    element.innerHTML = url;
}
const funWeight= (url) => {
    const element = document.getElementById("weightP");
    element.innerHTML = url;
}
// const pokeAbility = (url) => {
//     const pokeAby = document.getElementById("abilityP");
//     pokeAby.src = url;
// }