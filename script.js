//elements
let button = document.getElementById("button");
let agent = document.getElementById("agent");
let photo = document.getElementById("photo");
let info = document.getElementById("info");


let agentNames = ['Breach', 'Brimstone', 'Cypher', 'Jett', 'Killjoy', 'Omen', 'Phoenix', 'Raze', 'Reyna', 'Sage', 'Sova', 'Viper'];

//agent profiles
let breach = "./Resources/Pics/Reach.webp";
let brimstone = "./Resources/Pics/Brimstone.webp";
let cyper = "./Resources/Pics/Cypher.webp";
let jett = "./Resources/Pics/Jett.webp";
let killjoy = "./Resources/Pics/Killjoy.webp";
let omen = "./Resources/Pics/Omen.webp";
let phenix = "./Resources/Pics/Phinox.webp";
let raze = "./Resources/Pics/Raze.webp";
let reyna = "./Resources/Pics/Reyna.webp";
let sage = "./Resources/Pics/Sage.webp";
let sova = "./Resources/Pics/Sova.webp";
let viper = "./Resources/Pics/Viper.webp";

//random name gen function
let randomAgent = () => {
    let randomNum = Math.floor(Math.random() * agentNames.length);
    let agentName = ''
    if (randomNum === 0) {
        agentName = 'Breach'
        photo.src = breach
        info.innerHTML = "Initiator";
    } else if (randomNum === 1) {
        agentName = 'Brimstone'
        photo.src = brimstone
        info.innerHTML = "Controller";
    } else if (randomNum === 2) {
        agentName = 'Cypher'
        photo.src = cyper
        info.innerHTML = "Sentinel";
    } else if (randomNum === 3) {
        agentName = 'Jett'
        photo.src = jett
        info.innerHTML = "Duelist";
    } else if (randomNum === 4) {
        agentName = 'Killjoy'
        photo.src = killjoy
        info.innerHTML = "Sentinel";
    } else if (randomNum === 5) {
        agentName = 'Omen'
        photo.src = omen
        info.innerHTML = "Controller";
    } else if (randomNum === 6) {
        agentName = 'Phoenix'
        photo.src = phenix;
        info.innerHTML = "Duelist";
    }  else if (randomNum === 7) {
        agentName = 'Raze'
        photo.src = raze
        info.innerHTML = "Duelist";
    }  else if (randomNum === 8) {
        agentName = 'Reyna'
        photo.src = reyna
        info.innerHTML = "Duelist";
    }  else if (randomNum === 9) {
        agentName = 'Sage'
        photo.src = sage
        info.innerHTML = "Sentinel";
    }  else if (randomNum === 10) {
        agentName = 'Sova'
        photo.src = sova
        info.innerHTML = "Initiator";
    } else {
        agentName = 'Viper'
        photo.src = viper
        info.innerHTML = "Controller";
    }

    return agentName;
}




let test = () => {
    agent.innerHTML = randomAgent();
    info.style.display = "block";
    agent.style.display = "block";
}



button.onclick = test;






