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
