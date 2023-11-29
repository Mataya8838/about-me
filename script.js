console.log('hi')

const imgbackbtnel = document.getElementById('img-back');
let arrayOfHiddenImages = [];
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
