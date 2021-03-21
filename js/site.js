function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function unlockSecret(){
	setCookie('secret_unlocked', true, 18250);
    document.getElementById("secret").id = "not_a_secret_anymore";
    document.documentElement.setAttribute('theme', 'snso');
}

var imageURLs = []

fetch('./.netlify/functions/getMemes')
    .then(res => res.json())
    .then(data => imageURLs = data.memes)
    .then(() => getImage())

const nowySekrecikOdStaszka = () => {
    if(document.getElementById("jd").classList.contains("jebac_disa")) {
        playAudio("audio/jd.mp3", false);
        document.getElementById("jd").classList.remove("jebac_disa");
    }
}
setInterval(nowySekrecikOdStaszka, 500);


const getImage = function () {
    const imgContainer = document.getElementById("random-meme");

    return new function() {
        console.log("XD");
        let img = "";
        const randomIndex = Math.floor(Math.random() * imageURLs.length);
        img += imageURLs[randomIndex];
        imgContainer.src = img;
        if (img === "./images/memes/86.jpg"){
            unlockSecret();
        }
    }
}

let counter = 0;
const clickCounter = function () {
    if (counter < 200)
        counter += 1;
    else if (counter == 200) {
        initKotyraEgg();
    }
}

const initKotyraEgg = function () {
    addBlinkingBackground()
    playAudio("audio/xcq.mp3", true);
    addRandomImage("images/randomKotyra.jpg");
    addRandomImage("images/backgrounds/chinaFlag.jpg");
    setBackgroundFlagForButtons();
}

const setBackgroundFlagForButtons = function () {
    document.querySelectorAll(".but").forEach(el => {
        el.style.backgroundColor = "transparent";
        el.style.backgroundImage = "url('images/backgrounds/chinaFlag.jpg')";
        el.style.backgroundSize = "cover";
    })
}

const playAudio = function (path, loop) {
    const audio = new Audio(path);
    audio.volume = 1;
    audio.loop = loop;
    audio.load();
    audio.play();
    counter = 101;
}

const addRandomImage = async function (imagePath) {
    const img = document.createElement("img");
    img.id = "randomKotyraFace";
    img.src = imagePath;
    img.style.position = "absolute";
    img.style.zIndex = 100;
    document.body.append(img);
    img.style.right = Math.floor(Math.random() * 80) + "%";
    img.style.bottom = Math.floor(Math.random() * 80) + "%";
    img.style.width = Math.floor(Math.random() * 50) + "%";

    setTimeout(() => {
        document.body.removeChild(img);
        addRandomImage(imagePath);
    }, 100);
    console.log("XD2");
}

const addBlinkingBackground = function () {
    const background = document.createElement("div");
    background.classList.add("blinking-background");
    document.body.style.backgroundImage = "url('images/backgrounds/borzecki.jpg')"
    background.style.animation = ".2s ease epilepsy infinite";
    background.style.animationPlayState = "running";
    document.body.appendChild(background);
}


document.addEventListener("click", clickCounter);
document.getElementById("btn-random-meme").addEventListener("click", getImage);

