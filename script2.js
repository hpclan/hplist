window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.loader-wrapper').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 3000);
  });

function toggleMenu() {
    var menu = document.getElementById("dropdown");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Cerrar el menú si el usuario hace clic fuera del mismo
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        var dropdowns = document.getElementsByClassName("menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
