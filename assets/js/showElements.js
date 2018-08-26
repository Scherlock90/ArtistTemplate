//this function get the element aboutArist and set to time to show values

var headerTitleH1 = document.getElementById("headerTitle");
var displaySetting = headerTitleH1.style.display;

function showElementsAboutArtist()
{
    headerTitleH1.className = "h1HeaderTitle";  
    // headerTitleH1.style.setInterval
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


//function to show divAdres to other side

// function myMove() {
//     var elem = document.getElementById("adres");   
//     var pos = elem;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         elem.style.top = pos + 'px'; 
//         elem.style.left = pos + 'px'; 
//       }
//     }
//   }


    document.getElementById("textOnRight").addEventListener("mouseover", mouseOver);
    document.getElementById("textOnRight").addEventListener("mouseout", mouseOut);

   function mouseOver()
   {
    document.getElementById("textOnRight");
    let start = Date.now();

    let timer = setInterval(function() 
    {
       var timePassed = setTimeout(textOnRight, 10000)
        // let timePassed = Date.now() - start;

      textOnRight.style.left = timePassed / 1 + 'px';

      if (timePassed > 100) clearInterval(timer);
    }, 20);
  };  
  

  function mouseOut()
  {
      document.getElementById("textOnRight"); 
  }