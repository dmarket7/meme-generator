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


imageForm.addEventListener('submit', function(event){
    event.preventDefault();
    if(imageUrl.value === '') return;
    mainImage.src = imageUrl.value;
    mainImage.style.display = "block";
    topCaptionInput.style.display = "block";
    bottomCaptionInput.style.display = "block";
    if(displayTextBtn.style.display === "block"){
        saveMemeBtn.style.display = "block";
    } else {
        saveMemeBtn.style.display = "none";
    }
    displayTextBtn.style.display = "block";
});

displayTextBtn.addEventListener('click', function(event){
    event.preventDefault();
    topCaption.innerText = topCaptionInput.childNodes[1].value;
    bottomCaption.innerText = bottomCaptionInput.childNodes[1].value;
    topCaption.style.display = "block";
    bottomCaption.style.display = "block";
    saveMemeBtn.style.display = "block";
});

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
    bottomCaptionInput.style.display = "none";
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
