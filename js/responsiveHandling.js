function searchblock()
{
    document.getElementById("searchInput").style.backgroundColor="white";
    document.getElementById("searchInput").style.color="black";
    document.getElementById("searchBtn").style.backgroundColor="black";
    document.getElementById("searchBtn").style.color="white";
}
function showSearchBar()
{

    if(document.getElementById("searchBarHidden").style.display==="none")
    {
        document.getElementById("searchBarHidden").style.display="block";
    }
    else{
        document.getElementById("searchBarHidden").style.display="none";
    }
}
function dropdown(obj)
{
    if(obj.nextElementSibling.style.display==="none")
    {
        obj.nextElementSibling.style.display="block";
    }
    else{
        obj.nextElementSibling.style.display="none";
    }
}
function showHamburgerContent(object)
{
    if(document.getElementById("hamburger-content").style.display==="none")
    {
        object.parentElement.style.backgroundColor="white";
        object.style.color="black";
        document.getElementById("hamburger-content").style.display="block";
    }
    else{
        object.parentElement.style.backgroundColor="black";
        object.style.color="white";
        document.getElementById("hamburger-content").style.display="none";
    }
}