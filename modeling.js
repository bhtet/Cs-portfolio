// JavaScript File

var firstText = document.getElementById("first_text");
var nextButton = document.getElementById("nextbutton");
var backButton = document.getElementById("backbutton");
var image = document.getElementById("image");
var heading = document.getElementById("heading");
var info = document.getElementById("info");
var imageArray = ["http://www.navy.mil/navydata/ships/cruisers/history/cruiser-jpg/atlanta2.jpg" , "http://www.hazegray.org/navhist/carriers/images/non-cv/acr11.jpg" , "http://steelnavy.com/images/St%20Louis/USS%20St%20Louis%201909%20SF.jpg" , "http://www.navalofficer.com.au/kwd/wp-content/uploads/2009/10/detroitfw.jpg" , "http://i.imgur.com/QJc4LEu.jpg" , "http://i.imgur.com/DqvtvZ7.jpg" , "https://upload.wikimedia.org/wikipedia/commons/f/f3/USS_San_Juan_CL-54.jpg" , "http://i.imgur.com/CDpgXdO.jpg" , "http://scaleshipyard.com/Catalog%20Pages/images/cag1.jpg" , "https://upload.wikimedia.org/wikipedia/commons/0/07/US_Navy_100304-N-6006S-046_The_Ticonderoga-class_guided-missile_cruiser_USS_Bunker_Hill_(CG_52)_transits_in_the_Atlantic_Ocean.jpg"];
var headingsArray = ["Atlanta/Boston - class" , "Tennessee - class" , "St. Louis - class" , "Omaha - class" , "Pensacola - class" , "New Orleans - class" , "Atlanta - class" , "Cleveland - class" , "Boston - class" , "Ticonderoga - class"];
var infoArray = ["The USS Atlanta and her sister ship, the USS Boston, were among the first cruisers to serve in the United State's new navy. These ships had weak armor, with the thickest being 2 inches thick. However, they also carried an armament of both 8in guns and 6in guns. This is supplimented by a variety of smaller caliber guns. Interestingly, the ships in this class were built with their main propulsion being sails. Eventually, the sails were replaced with an engine. The Atlanta-class cruisers spent most of ther service patrolling enenmy waters while also supporting troop invasions. These ships turned into training ships by around WWI and were sold around that time period as well." , "The Tennessee - class of cruisers was an upgrade in firepower over previous cruiser designs. They carried four 10in guns in two turrents. This is the heaviest armament that a US curiser has had so far. However, the US also needed cruisers that had improved speed. The Tennessees managed to achieve a speed of 22 knots but had to sacrifice some armor thickness. The armor ranged from 3 - 5in in thickness but also covered more of the ship compared to previous cruisers. These ships served for the US Navy's fleet during WWI but were then converted to training ships or sold for scrap." , "Armed with a large number of artillary guns, a total of 44, the St. Louis class of cruisers bridged the gap between lightly armored protected cruisers and heavily armored armored cruisers. To compromise this, they were designated as semi-armored cruisers. Armor on this ship ranged from 2 - 4 inches. The propulsion system is a set of steam boilers giving the ship a speed of 22 knots. These ships served during WWI as convoy escort ships and were sold for scrap shortly afterwards"];

var currentImageIndex = -1;
var currentHeadingsIndex = -1;
var currentInfoIndex = -1;

nextButton.addEventListener("click" , next);

function next() {
  
    currentImageIndex++;
    image.src = imageArray[currentImageIndex];
    
    currentHeadingsIndex++;
    heading.innerHTML = headingsArray[currentHeadingsIndex];
    
    currentInfoIndex++;
    info.innerHTML = infoArray[currentInfoIndex];
    
    firstText.innerHTML = "";
    
}

backButton.addEventListener("click" , previous);

function previous() {
    
    currentImageIndex--;
    image.src = imageArray[currentImageIndex];
    
    currentHeadingsIndex--;
    heading.innerHTML = headingsArray[currentHeadingsIndex];
    
    currentInfoIndex--;
    info.innerHTML = infoArray[currentInfoIndex];
    
}






