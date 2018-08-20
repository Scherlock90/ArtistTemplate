
// main.css on the end page is animate.right to use event
function textFlightRight() 
{

}


// var x = document.getElementById("adres");
// x.addEventListener("mouseover", mouseOverFunction);
// x.addEventListener("mouseout", mouseOutFunction);

// function mouseOverFunction() {
//  document.getElementById("adres").innerHTML("animate-right");
// }

// function mouseOutFunction() {
// //  document.getElementById("adres").innerHTML += "Moused out!<br>";
// }

// function resizeClass()
// {
//     var elementsOnPage = document.getElementsByClassName('');
//     
//     // get the current value of elementsOnPage display property
//     var displaySetting = elementsOnPage.style.display; 

//     if (displaySetting == 'block') 
//     {
//         // elements is visible. hide it
//       elementsOnPage.style.display = '';
//       elementsOnPage.className = '';
//     }
//     else 
//     {
//       //elements is hidden. show it
//       elementsOnPage.style.display = 'block';
//       elementsOnPage.className = '';
//     }
// }

function bigImg(x) 
{
    var biggerDiv = document.getElementById("aboutArtist");
	x.style.height = "15%";
    x.style.width = "25%";
     biggerDiv = x.style.document.getElementsByClassName("biggerImageArtist");//to nie dziala
}							
function normalImg(x) 
{
     x.style = document.getElementsByClassName("image");
}
							
