document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const mainLogo = document.querySelector(".main-logo");
    const navLinks = document.querySelectorAll("nav ul li a");


    /* ================================
       SEARCH FUNCTION
       ================================ */

    function performSearch() {

        const searchValue = searchInput.value.trim();

        if (searchValue === "") {
            alert("Please enter a restaurant, cuisine or a dish.");
            searchInput.focus();
            return;
        }

        alert("Searching for: " + searchValue);
    }


    // Search button click
    searchButton.addEventListener("click", performSearch);


    // Search using Enter key
    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            performSearch();
        }

    });


    /* ================================
       SEARCH INPUT EFFECT
       ================================ */

    searchInput.addEventListener("focus", function () {

        searchInput.placeholder =
            "What are you craving today?";

    });


    searchInput.addEventListener("blur", function () {

        searchInput.placeholder =
            "Search for restaurant, cuisine or a dish";

    });


    /* ================================
       LOGO CLICK ANIMATION
       ================================ */

    mainLogo.addEventListener("click", function () {

        mainLogo.style.transform = "scale(1.1)";

        setTimeout(function () {

            mainLogo.style.transform = "scale(1)";

        }, 300);

    });


    /* ================================
       NAVIGATION HOVER EFFECT
       ================================ */

    navLinks.forEach(function (link) {

        link.addEventListener("mouseenter", function () {

            link.style.transform = "translateY(-3px)";

        });

        link.addEventListener("mouseleave", function () {

            link.style.transform = "translateY(0)";

        });

    });


    /* ================================
       CLEAR SEARCH ON ESCAPE
       ================================ */

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            searchInput.value = "";
            searchInput.blur();

        }

    });

});