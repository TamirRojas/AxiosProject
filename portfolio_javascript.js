function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu")
    var icon = document.getElementById("topnav_responsive_icon")
    var root = document.getElementById("root_menu")
    if (menu.classMenu ===""){
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY ="hidden";
    } else{
        menu.classMenu ="";
        icon.classMenu ="";
        root.style.overflowY ="";
    }
}