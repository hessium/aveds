
const select = document.querySelector(".location__select");
        if (localStorage.selectedIndex !== undefined) {
            select.selectedIndex = localStorage.selectedIndex;
        }
        select.onchange = function() {
            localStorage.selectedIndex = this.selectedIndex;
        }
   
    