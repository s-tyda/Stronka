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

var imageURLs = [
    "./images/01.jpg"
    , "./images/02.png"
    , "./images/03.png"
    , "./images/04.png"
    , "./images/05.png"
    , "./images/06.png"
    , "./images/07.png"
    , "./images/08.png"
    , "./images/09.png"
    , "./images/10.png"
    , "./images/11.png"
    , "./images/12.png"
    , "./images/13.png"
    , "./images/14.jpg"
    , "./images/15.jpg"
    , "./images/16.jpg"
    , "./images/17.jpg"
    , "./images/18.jpg"
    , "./images/19.jpg"
    , "./images/20.jpg"
    , "./images/21.jpg"
    , "./images/22.jpg"
    , "./images/23.jpg"
    , "./images/24.jpg"
    , "./images/25.jpg"
    , "./images/26.jpg"
    , "./images/27.jpg"
    , "./images/28.jpg"
    , "./images/29.jpg"
    , "./images/30.jpg"
    , "./images/31.jpg"
    , "./images/32.jpg"
    , "./images/33.jpg"
    , "./images/34.jpg"
    , "./images/35.jpg"
    , "./images/36.jpg"
    , "./images/37.jpg"
    , "./images/38.jpg"
    , "./images/39.jpg"
    , "./images/40.jpg"
    , "./images/41.jpg"
    , "./images/42.jpg"
    , "./images/43.jpg"
    , "./images/44.jpg"
    , "./images/45.jpg"
    , "./images/46.jpg"
    , "./images/47.jpg"
    , "./images/48.jpg"
    , "./images/49.jpg"
    , "./images/50.jpg"
    , "./images/51.jpg"
    , "./images/52.jpg"
    , "./images/53.jpg"
    , "./images/54.jpg"
    , "./images/55.png"
    , "./images/56.jpg"
    , "./images/57.jpg"
    , "./images/58.png"
    , "./images/59.jpg"
    , "./images/60.jpg"
    , "./images/61.jpg"
    , "./images/62.jpg"
    , "./images/63.jpg"
    , "./images/64.jpg"
    , "./images/65.jpg"
    , "./images/66.jpg"
    , "./images/67.jpg"
    , "./images/68.jpg"
    , "./images/69.jpg"
    , "./images/70.png"
    , "./images/71.png"
    , "./images/72.jpg"
    , "./images/73.jpg"
    , "./images/74.jpg"
    , "./images/75.jpg"
    , "./images/76.jpg"
    , "./images/77.png"
    , "./images/78.jpg"
    , "./images/79.png"
    , "./images/80.jpg"
    , "./images/81.png"
    , "./images/82.jpg"
    , "./images/83.jpg"
    , "./images/84.png"
    , "./images/85.jpg"
    , "./images/86.jpg"
];

const getImage = function () {
    const imgContainer = document.getElementById("random-meme");

    return new function() {
        console.log("XD");
        let img = "";
        const randomIndex = Math.floor(Math.random() * imageURLs.length);
        img += imageURLs[randomIndex];
        imgContainer.src = img;
        if (img === "./images/86.jpg"){
            unlockSecret();
        }
    }
}
getImage();

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
    playAudio();
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

const playAudio = function () {
    const audio = new Audio("audio/xcq.mp3");
    audio.volume = 1;
    audio.loop = true;
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

