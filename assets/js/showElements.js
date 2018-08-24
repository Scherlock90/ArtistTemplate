//this function get the element aboutArist and set to time to show values

var headerTitleH1 = document.getElementById("headerTitle");
var displaySetting = headerTitleH1.style.display;

function showElementsAboutArtist()
{
    headerTitleH1.className = "h1HeaderTitle";  
}


var timeToShow = setTimeout(showElementsAboutArtist, 2000); //get 2 sec/2000milisec to start load element

showElementsAboutArtist.onmouseover = function()
{
    clearTimeout(timeToShow);
           
}


////function another DivAboutArtist

var divAboutArt = document.getElementById("aboutArtist");


function showElementsDiVAboutArtist()
{
    divAboutArt.className = "divAboutArtist";
   
}


var timeToShowS = setTimeout(showElementsDiVAboutArtist, 4000); //get 2 sec/2000milisec to start load element

showElementsAboutArtist.onmouseover = function()
{
    clearTimeout(timeToShowS);    
}
