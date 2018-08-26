//this function get the element aboutArist and set to time to show values

var headerTitleH1 = document.getElementById("headerTitle");
var displaySetting = headerTitleH1.style.display;

function showElementsAboutArtist()
{
    headerTitleH1.className = "h1HeaderTitle";  
    // headerTitleH1.style.setInterval
}


var timeToShow = setTimeout(showElementsAboutArtist, 2000); //get 2 sec/2000milisec to start load element

showElementsAboutArtist.onload = function()
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

showElementsAboutArtist.onload = function()
{
    clearTimeout(timeToShowS);    
}

///// diV with contact
    document.getElementById("textOnRight").addEventListener("mouseover", mouseOver);
    document.getElementById("textOnRight").addEventListener("mouseout", mouseOut);

   function mouseOver()
   {
    document.getElementById("textOnRight");
    let start = Date.now();

    let timer = setInterval(function() 
    {
       var timePassed = setTimeout(textOnRight, 8000)
        // let timePassed = Date.now() - start;

      textOnRight.style.left = timePassed / 1 + 'px';

      if (timePassed > 100) {
      clearInterval(timer);  
        }
    }, 20);
  };  

  //cos zrobic, zeby wracal w druga strone!!!!!
  

  function mouseOut()
  {
      document.getElementById("textOnRight"); 
  }