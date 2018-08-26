// function to click input button and show value assigment
function clic(element)
{
  alert("<br><br>Możesz skorzystać z " + element.value);
}

var ALERT_TITLE = "Środek kontaktu!";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
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