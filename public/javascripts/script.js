window.onload=function(){
    var top_a = document.getElementById("top_a");
    top_a.onmouseover = function(){
        bdpfmenu.style.display = "block";
    }
    top_a.onmouseout = function(){
        bdpfmenu.style.display = "none";
    }
    var gd = document.getElementById("gd");
    var gengduo = document.getElementById("gengduo");
    gd.onmouseover = function(){
        gengduo.style.opacity = "1";
        gengduo.style.display = "block";
    }
    gd.onmouseout = function(){
        gengduo.style.opacity = "0";
        gengduo.style.display = "name";
    }

}
