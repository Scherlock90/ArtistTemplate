// function to click input button and show value assigment
function clic(element)
{
  alert("Możesz skorzystać z " + element.value);
}


// button to show more/show less

var aboutArtist = document.getElementById("aboutArtist");
var button = document.getElementById("show-more");
var main = document.getElementById("main");

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
      aboutArtist.className = 'divAboutArtist';
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
  };

  //old version to scroll to up

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

//function to scroll page to up in slow motion

$(document).ready(function(){
	$(".buttonOnTop").hide();
	$(function toTop() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.buttonOnTop').fadeIn();
			} else {
				$('.buttonOnTop').fadeOut();
			}
		});

		$('.buttonOnTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 3000);
			return false;
		});
	});			
	});