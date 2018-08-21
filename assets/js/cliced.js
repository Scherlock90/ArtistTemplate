// function to click input button and show value assigment
function clic(element)
{
  alert("Możesz skorzystać z " + element.value);
}


// button to show more/show less

var aboutArtist = document.getElementById("aboutArtist");
var button = document.getElementById("show-more");
var main = document.getElementById("main");

// button.onclick = function(){

//     var displaySetting = aboutArtist.style.display;
//     if( displaySetting == 'block')
//     {   
//         aboutArtist.style.display = 'none';
//         aboutArtist.className = "";
//         aboutArtist.innerHTML = "Pokaż więcej"; 
//     }else{
//         aboutArtist.style.display = 'block';
//         aboutArtist.className = "open";
//         button.innerHTML = "Pokaż mniej";
//     }
// };


// function to change Lenght text

function changeLenghtText() {
    // get the textAboutArtist
    var textAboutArtist = document.getElementById('aboutArtist');

    // get the current value of textAboutArtist display property
    var displaySetting = textAboutArtist.style.display;

    // also get the showMoreButton, so we can change what it says
    var showMoreButton = document.getElementById('showMoreButton');

    // now toggle the showMoreButton and the button text, depending on current state
    if (displaySetting == 'block') {
      // text is visible. hide it
      
      textAboutArtist.style.display = '';
      aboutArtist.className = '';
      // change button text
      showMoreButton.innerHTML = "Pokaż więcej";
    }
    else {
      // text is hidden. show it
      textAboutArtist.style.display = 'block';
      aboutArtist.className = 'open';
      // change button text
      showMoreButton.innerHTML = "Pokaż mniej";
    }
  }