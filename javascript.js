var firstTranslation = 0;

var memeTemplates = {
    'spongebob': "images\spongebob.jpg",
    'mems': "images\mems.jpeg"
};

var imageUrl = memeTemplates["spongebob"];

function translateAndCreateImage() {
    var rawText = document.getElementById("raw").value;
    var translatedText = generateSpongebobText(rawText)
    document.getElementById("image").src = '' //hide old meme and reveal 'loading' screen
    document.getElementById('translated').innerHTML = translatedText; 
    console.log(translatedText);
    document.getElementById('image').src = createURL(); //show new meme
}

function clearTextBox() {
    if (firstTranslation == 0) {
        firstTranslation = 1;
        textBoxes = document.getElementsByClassName("textboxes");

        // loop thru textboxes and clear text
        for (let i = 0; i < textBoxes.length; i++) {
            console.log(textBoxes[i]);
            textBoxes[i].value = '';
        }
    }
}

function generateSpongebobText(text) {
    capitalizedText = text.split('').map(function( value ) {
        randomNum = Math.floor(Math.random() * 10) + 1;
        if (randomNum % 2 == 0) {
            return value.toUpperCase();
        } else {
            return value;
        }
    });
    return capitalizedText.join('');
}

function chooseImage(memeName) {
    imageUrl = memeTemplates[memeName];

    //reset border for all images 
    images = document.getElementsByClassName("thumbs");
    for (let i = 0; i < images.length; i++){
        images[i].style.border = '0px';
    }
    //set border for image clicked on
    document.getElementById(memeName + "_thumb").style.border = '3px solid rgb(36, 209, 209)';
}

function createURL() {
    var apiURL = 'https://textoverimage.moesif.com/image?image_url='
    var imageText = document.getElementById('translated').value;
    console.log(imageText)


    var URL =  apiURL + encodeURIComponent(imageUrl) + '&text=' + encodeURIComponent(imageText) + '&margin=5&y_align=bottom&x_align=center';
    return URL;
}
