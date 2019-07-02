var imageForm = document.getElementById('image-form');
var imageUrl = document.getElementById('image-url');
var mainImage = document.getElementById('main-image');
var topCaptionInput = document.getElementById('top-caption-input');
var bottomCaptionInput = document.getElementById('bottom-caption-input');
var topCaption = document.getElementById('top-caption');
var bottomCaption = document.getElementById('bottom-caption');
var saveMemeBtn = document.getElementById('save-meme');
var displayTextBtn = document.getElementById('display-text');
var resultsArea = document.getElementById('results-area');
var luckyBtn = document.getElementById('lucky-button');


imageForm.addEventListener('submit', function(event){;
    event.preventDefault();
    if(imageUrl.value === '') return;
    mainImage.src = imageUrl.value;
    mainImage.style.display = "block";
    topCaptionInput.style.display = "block";
    bottomCaptionInput.style.display = "block";
    if(displayTextBtn.style.display === "block"){
        saveMemeBtn.style.display = "block";
        captionFill();
    } else {
        saveMemeBtn.style.display = "none";
    }
    displayTextBtn.style.display = "block";
});

luckyBtn.addEventListener('click', function(event){
    var randomIndex = Math.floor(Math.random() * luckyImages.length);
    console.log(randomIndex)
    imageUrl.value = luckyImages[randomIndex];
});

displayTextBtn.addEventListener('click', function(event){
    event.preventDefault();
    topCaption.innerText = topCaptionInput.childNodes[1].value;
    bottomCaption.innerText = bottomCaptionInput.childNodes[1].value;
    topCaption.style.display = "block";
    bottomCaption.style.display = "block";
    saveMemeBtn.style.display = "block";
});

function captionFill(){
    topCaption.innerText = topCaptionInput.childNodes[1].value;
    bottomCaption.innerText = bottomCaptionInput.childNodes[1].value;
    topCaption.style.display = "block";
    bottomCaption.style.display = "block";
    saveMemeBtn.style.display = "block";
}

var idCount = 1;

saveMemeBtn.addEventListener('click', function(event){
    event.preventDefault();
    var outerDiv = document.createElement('div');
    var innerDiv = document.createElement('div');
    var topHead = document.createElement('h2');
    var img = document.createElement('img');
    var bottomHead = document.createElement('h2');
    var deleteBtn = document.createElement('button');
    outerDiv.setAttribute("id", `box-${idCount}`);
    outerDiv.setAttribute("class", "outer-layout");
    innerDiv.setAttribute("class", "image-layout");
    topHead.setAttribute("class", "top-caption-layout");
    topHead.innerText = topCaption.innerText;
    img.setAttribute("class", "main-image-layout");
    img.src = mainImage.src;
    bottomHead.setAttribute("class", "bottom-caption-layout");
    bottomHead.innerText = bottomCaption.innerText;
    deleteBtn.setAttribute("class", "delete-button");
    deleteBtn.setAttribute("id", `button-${idCount}`);
    deleteBtn.innerText = 'Delete';
    addDeleteEvent(deleteBtn);
    innerDiv.appendChild(topHead);
    innerDiv.appendChild(img);
    innerDiv.appendChild(bottomHead);
    outerDiv.appendChild(innerDiv);
    outerDiv.appendChild(deleteBtn);
    resultsArea.prepend(outerDiv);
    idCount++;
    resetInput();
});

function resetInput(){
    imageUrl.value = '';
    mainImage.src = '';
    mainImage.style.display = "none";
    topCaptionInput.style.display = "none";
    topCaptionInput.childNodes[1].value = '';
    bottomCaptionInput.style.display = "none";
    bottomCaptionInput.childNodes[1].value = '';
    saveMemeBtn.style.display = "none";
    displayTextBtn.style.display = "none";
    topCaption.style.display = "none";
    bottomCaption.style.display = "none";
}

function addDeleteEvent(btn){
    btn.addEventListener('click', function(){
        event.preventDefault();
        var parentId = btn.parentNode.id;
        var parentEl = document.getElementById(parentId);
        parentEl.remove();
    })
}

var luckyImages = [
    'https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg',
    'https://junkee.com/wp-content/uploads/2019/04/Daenerys-Targaryen.jpg',
    'https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s800-c85.jpg',
    'https://i.imgflip.com/2puag9.jpg',
    'http://cdn.arn.com.au/media/7608613/chloe.jpg',
    'https://imgflip.com/s/meme/One-Does-Not-Simply.jpg',
    'https://imgflip.com/s/meme/Futurama-Fry.jpg',
    'https://i.pinimg.com/236x/cd/99/95/cd9995d067176809b6a1d45fb952f775--kevin-hart-kevin-oleary.jpg',
    'https://comicsandmemes.com/wp-content/uploads/blank-meme-template-012-dave-chapelle-got-any-more.png',
    'https://i.imgur.com/iUtxmEN.jpg',
    'http://bestmememaker.weebly.com/uploads/4/1/0/7/41076499/8585768_orig.jpg',
    'https://i.imgflip.com/tglb9.jpg',
    'https://sayingimages.com/wp-content/uploads/Mad-Baby-Blank-Meme.jpg',
    'http://www.quickmeme.com/img/1e/1e322b11837872ed639ead2f4adf7df8084c1c697e4ae5c821797a2eb1126820.jpg',
    'https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg',
    'https://media.giphy.com/media/ksEi1DprJUroG66Z99/giphy.gif',
    'https://media.giphy.com/media/ckltH3WWaHuSUAgIZE/giphy.gif',
    'https://media.giphy.com/media/4JXQB4WFjehB9p2UwV/giphy.gif',
    'https://media.giphy.com/media/aUrv4ohm0IPNS/giphy.gif',
    'https://media.giphy.com/media/6kTFyZAgluhoc/giphy.gif',
    'https://media.giphy.com/media/WpxeQuE1hfvLow9Ir3/giphy.gif',
    'https://media.giphy.com/media/A6aHBCFqlE0Rq/giphy.gif',
    'https://media.giphy.com/media/duiWE5jXyelf77m3a5/giphy.gif'
];
