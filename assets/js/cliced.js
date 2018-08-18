

// alertContact.onclick = function()
// {
//     alert("you cliced me" + alertContact);
// };

function clic(element)
{
  alert("" + element.value);
}


function ClickContact()
{
    var alertContact = document.getElementById("telContact");
    var emailContact = document.getElementById("emailContact");
    var adresContact = document.getElementById("adresContact");

    if(alertContact.onclick){
        var fontSize = document.getElementById("telContact") ;
        alert("" + alertContact + fontSize)
    }
    alertContact.onclick = function()
    {
        var fontSize = document.getElementById("telContact") ;
        alert("" + alertContact + fontSize)
    
    }
    emailContact.onclick = function()
    {
       
        alert("" + emailContact)
    
    }
}



// var alertContact = document.getElementById("telContact");
// alertContact.onclick = function()
// {
//     var fontSize = document.getElementById("telContact") ;
//     alert("" + alertContact + fontSize)

// }



