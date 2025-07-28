let navBar = document.querySelector("nav #onlySmallScreen");
let displaySmallScreen = document.querySelector(".display-small-screen");
function displayNavBar()
{
	
		navBar.style.display = "block";
		document.getElementById("close-icon").style.display = "block";
		displaySmallScreen.style.display = "none";
}

function closeMenu()
{
		document.getElementById("close-icon").style.display = "none";
		navBar.style.display = "none";
		displaySmallScreen.style.display = "block";
}