window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn-end')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
        
        var endDropdowns = document.getElementsByClassName("dropdown-content-end");
        for (var j = 0; j < endDropdowns.length; j++) {
            var openEndDropdown = endDropdowns[j];
            if (openEndDropdown.style.display === "block") {
                openEndDropdown.style.display = "none";
            }
        }
    }
}
