document.addEventListener("DOMContentLoaded", function ()
{
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const mainLogo = document.querySelector(".main-logo");
    const navLinks = document.querySelectorAll("nav ul li a");

    function performSearch()
    {
        const searchValue = searchInput.value.trim();
        if (searchValue === "")
        {
            alert("Please enter a restaurant, cuisine or a dish.");
            searchInput.focus();
            return;
        }
        alert("Searching for: " + searchValue);
    }

    searchButton.addEventListener("click", performSearch);
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter")
        {
            performSearch();
        }
    });
    searchInput.addEventListener("focus", function ()
    {
        searchInput.placeholder =
            "What are you craving today?";
    });
    searchInput.addEventListener("blur", function ()
    {
        searchInput.placeholder =
            "Search for restaurant, cuisine or a dish";
    });
    mainLogo.addEventListener("click", function ()
    {
        mainLogo.style.transform = "scale(1.1)";
        setTimeout(function ()
        {
            mainLogo.style.transform = "scale(1)";
        }, 300);
    });
    navLinks.forEach(function (link)
    {
        link.addEventListener("mouseenter", function ()
        {
            link.style.transform = "translateY(-3px)";
        });
        link.addEventListener("mouseleave", function ()
        {
            link.style.transform = "translateY(0)";
        });
    });
    searchInput.addEventListener("keydown", function (event)
    {
        if (event.key === "Escape")
            {
            searchInput.value = "";
            searchInput.blur();
        }
    });
});
