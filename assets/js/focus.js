// function to resizeImageArtist
    function bigImg(x) 
    {
        x.style.height = "15%";
        x.style.width = "25%";
        aboutArtist.className = 'biggerImageArtist';
    }						
    function normalImg(x) 
    {
         x.style = document.getElementsByClassName("image");
         aboutArtist.className = 'normalImg';
    }
