const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            const pokePhoto = document.getElementById("pokeImg");
            pokePhoto.src = "./assets/img/x.png";
            pokePhoto.style = "height: 130px; padding-top:10px;";
            const pokeNameH = document.getElementById("labelNameP");
            pokeNameH.innerHTML = 'No se encontraron resultados';
        }
        else {
            return res.json();
        }
        
    }).then((data) => { //nos da la informacion del pokemon
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            let pId = data.id;
            funId(pId);
            
            let pName = data.name;
            funName(upperFirst(pName));
            
            let pHeight = data.height;
            funHeight(pHeight);
            
            let pWeight = data.weight;
            funWeight(pWeight);
            
            let pType = data.types.map(typeInfo => typeInfo.type.name);
            funType(pType);

            let pAbi = data.abilities.map(abiInfo => abiInfo.ability.name);
            funAbility(pAbi);

            const { stats } = data;
            funStats(stats);
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

//funcion para nombre de pokemon 
const funName = (url) => {
    const pokeNameH = document.getElementById("labelNameP");
    pokeNameH.innerHTML = url;
}
// funcion ID
const funId= (url) => {
    const element = document.getElementById("idP");
    element.innerHTML = url;
}

// funcion tipos
const funType = (url) => {
    const element = document.getElementById("typeP");
    element.innerHTML = url.join(' | ');
}

// funcion para height
const funHeight= (url) => {
    const element = document.getElementById("heightP");
    element.innerHTML = url;
}

// funcion para weight
const funWeight= (url) => {
    const element = document.getElementById("weightP");
    element.innerHTML = url;
}

// funcion para habilidades
const funAbility = (url) => {
    const element = document.getElementById("abilityP");
    element.innerHTML = url.join(' | ');
}

// funcion para moviemientos
const funStats = url => {
    const element = document.getElementById("statsP");
    element.innerHTML = ' ';
    url.forEach(stats => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementValue = document.createElement("div");
        statElementName.textContent = stats.stat.name,': ';
        statElementName.style.fontWeight = "bold";
        statElementValue.textContent = stats.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementValue);
        element.appendChild(statElement);
    });
}