function leftTabs(evt, tabPos) {
    var i, x, tablinks2;
    x = document.getElementsByClassName("leftab");
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    tablinks2 = document.getElementsByClassName("leftlink");
    for (i = 0; i < x.length; i++){
        tablinks2[i].className = tablinks2[i].className.replace(" w3-blue", ""); 
    }
    document.getElementById(tabPos).style.display = "block";
    evt.currentTarget.className += " w3-blue";
}
