console.log('hi')

const imgbackbtnel = document.getElementById('img-back');
let arrayOfHiddenImages = [];

const ftFoxySound = new Audio('./audio/ENCORE.ogg')
const mangleSound = new Audio('./audio/mangle-6.ogg')
const Roxysound = new Audio('./RN_ROXY_00029_pref.wav')

function imagesback() {
    console.log('button was clicked!')
    arrayOfHiddenImages.map((imageID) => {
        document.getElementById(imageID).style.display = 'block'
    })
}

function hideObject(imageID) {
    arrayOfHiddenImages.push(imageID)
    const freddyimg = document.getElementById(imageID);
    freddyimg.style.display = 'none'
    console.log(imgbackbtnel.style)
    if (imgbackbtnel.style.display === 'none' || !imgbackbtnel.style.display) {
        imgbackbtnel.style.display = 'block'
        arrayOfHiddenImages = []
    }
}

function voiceline(id) {
    const idMatch = {
        'ft-foxy': ftFoxySound,
        'mangle': mangleSound,
        'Roxy': RoxySound

    }

    const soundMatch = idMatch[id]
    soundMatch && soundMatch.play()
}