// JavaScript File

var firstText = document.getElementById("first_text");
var nextButton = document.getElementById("nextbutton");
var backButton = document.getElementById("backbutton");
var image = document.getElementById("image");
var heading = document.getElementById("heading");
var info = document.getElementById("info");
var imageArray = ["http://www.navy.mil/navydata/ships/cruisers/history/cruiser-jpg/atlanta2.jpg" , "http://www.hazegray.org/navhist/carriers/images/non-cv/acr11.jpg" , "http://steelnavy.com/images/St%20Louis/USS%20St%20Louis%201909%20SF.jpg" , "http://www.navalofficer.com.au/kwd/wp-content/uploads/2009/10/detroitfw.jpg" , "http://i.imgur.com/QJc4LEu.jpg" , "http://i.imgur.com/DqvtvZ7.jpg" , "https://upload.wikimedia.org/wikipedia/commons/f/f3/USS_San_Juan_CL-54.jpg" , "https://upload.wikimedia.org/wikipedia/commons/f/fd/USS_Pittsburgh_(CA-72)_Radar.jpg" , "http://scaleshipyard.com/Catalog%20Pages/images/cag1.jpg" , "https://upload.wikimedia.org/wikipedia/commons/0/07/US_Navy_100304-N-6006S-046_The_Ticonderoga-class_guided-missile_cruiser_USS_Bunker_Hill_(CG_52)_transits_in_the_Atlantic_Ocean.jpg"];
var headingsArray = ["Atlanta/Boston - class" , "Tennessee - class" , "St. Louis - class" , "Omaha - class" , "Pensacola - class" , "New Orleans - class" , "Atlanta - class" , "Baltimore - class" , "Boston - class" , "Ticonderoga - class"];
var infoArray = ["The USS Atlanta and her sister ship, the USS Boston, were among the first cruisers to serve in the United State's new navy. These ships had weak armor, with the thickest being 2 inches thick. However, they also carried an armament of both 8 inch guns and 6 inch guns. This is supplimented by a variety of smaller caliber guns. Interestingly, the ships in this class were built with their main propulsion being sails. Eventually, the sails were replaced with an engine. The Atlanta-class cruisers spent most of ther service patrolling enemy waters while also supporting troop invasions. These ships turned into training ships by around WWI and were sold around that time period as well." , "The Tennessee - class of cruisers was an upgrade in firepower over previous cruiser designs. They carried four 10 inch guns in two turrents. This is the heaviest armament that a US cruiser has had so far. However, the US also needed cruisers that had improved speed. The Tennessees managed to achieve a speed of 22 knots but had to sacrifice some armor thickness. The armor ranged from 3 to 5 inche in thickness but also covered more of the ship compared to previous cruisers. These ships served for the US Navy's fleet during WWI but were then converted to training ships or sold for scrap." , "Armed with a large number of artillery guns, a total of 44, the St. Louis class of cruisers bridged the gap between protected cruisers and armored cruisers. To compromise this, they were designated as semi-armored cruisers. Armor on this ship ranged from 2 to 4 inches. The propulsion system is a set of steam boilers giving the ship a speed of 22 knots. These ships served during WWI as convoy escort ships and were sold for scrap shortly afterwards." , "A new scout cruiser design, the Omaha looks more like modern and conventional ship. The classification system for cruisers has been changed to a light and heavy cruiser role. The Omaha was a light cruiser first designed in 1915. The hull armor was 3 inches thick, making it weak compared to post-WWI cruiser designs. These ships carried a total of 12 guns but only 4 guns were placed in turrets. This means that only 2 turrents were able to rotate and fire both right and left. The rest were placed in gun mounts inside the hull but could only shoot at the side they are on. This artillery set-up was ineffective and obsolete. Another interesting design choice was a system of alternating propulsion systems. This allowed the ship to continue moving even if one compartment is shut down by damage. The Omahas served as patrol boats in the inter-year years and through WWII. One of them were lended to the Soviet Union while the others were eventually scrapped." , "Now we get into the cruisers that played a role in WWII, starting with the Pensacola - class. Unlike the previous ships, this was the US Navy's first heavy cruiser. It was armed with 10 powerful 8 inch guns in 4 turrets. However, it was not fully a heavy cruiser. The Pensacola's armor was more similar to that of a light cruiser. It was only 2.5 to 4 inches thick. The reason why it was classified as a heavy cruiser was because a cruiser's guns determine its classification, not its armor. In fact, these ships were considered light cruisers before reclassification. These ships served in the Navy's fleet during WWII and survived the war. They were both used as test targets for nuclear weapons after the war." , "Some of the ships that endured the heaviest fighting in WWII, the New Orleans cruisers were a major upgrade from the Pensacolas. It carried 9 8 inch guns in 3 turrets as well as a large amount of anti-aircraft guns for defense. The armor was also increased to 3 to 5 inches and the turrent armor could reach a maximum of 8 inches. These ships could also reach a good speed of 32 knots despite the amount of firepower it had to carry. However, they were topside heavy. This was a problem that was never fixed for these ships. The New Orleans performed peace time patrols and were sent to fight in WWII. 4 of them were lost during the war. The survivors were eventually sold for scrap." , "During WWII, the US Navy needed a good way to defend itself from air attacks. The Atlanta - class cruisers were designed as light cruisers for scouting and leading smaller ships. However, they carried a a total of 12 5 inch rapid firing artillery guns. These guns could elevate to fire at high angles. allowing them to shoot aircraft. However, their small shell size hindered their ability to successfully attack other ships. The Atlantas also had thin armor of about 1 to 3 inches. The top speed of these ships was about 32 knots. All of this made the Atlantas suitable for escorting other ships but also they also need protection from enemy fire. All of the ships in this class fought in WWII, with 2 of them sinking. The surviving 6 were sold for scrap afterwards." , "Built as WWII was closing, the Baltimore - class cruisers were some of the strongest in the world when they entered service. They had 9 8 inch guns like the New Orleans but had improved armor. Most of the ship had 6 inches of protection. They also had a strong anti-aircraft defense system and fast speed of 33 knots. These ships were intended to protect carrier groups from heavy enemy ships. They were effective in the war and were kept in the fleet afterwards beecause of it, either in the main fleet or reserve fleet. Some of the ships were eventually sold for scrap while others were converted into guided-missile cruisers." , "After WWII, a new era of warfare was beginning. Navies were starting to create ships that used missiles as their main weapon of choice. The US started to create their own missile cruisers to compete with others. Their first design was the Boston - class cruisers. These ships were Baltimore - class cruisers but with their rear turret replaced with two launchers for Terrier anti-aircraft missiles. While they did enter service as missile cruisers, they were eventually redesignated as heavy cruisers because they used their guns more than their missiles. Advances in technology made these ships quickly obsolete and eventually sold for scrap." , "The Ticonderoga - class ships are the US Navy's current crusier design. They have had almost all their artillery guns stripped away so they only carry 2 5 inch guns. They have a top speed of 32 knots and a strong mix of anti-ship and anti-aircraft missiles. These ships are equip with radar and missile guidance systems to make them powerful vessals. Currently, these ships patrol in waters all around the world in order to help keep the world at peace. The Navy doesn't have plans to continue developing new cruisers so this class of ships may be the Navy's last cruisers. Instead, they plan to focus on improving smaller ship designs equiped with missiles."];

var currentImageIndex = -1;
var currentHeadingsIndex = -1;
var currentInfoIndex = -1;

nextButton.addEventListener("click" , next);

function next() {
  
    if (currentImageIndex < imageArray.length-1 && currentHeadingsIndex < headingsArray.length-1 && currentInfoIndex < infoArray.length-1) {
        
        currentImageIndex++;
        currentHeadingsIndex++;
        currentInfoIndex++;
        
    image.src = imageArray[currentImageIndex];
    heading.innerHTML = headingsArray[currentHeadingsIndex];
    info.innerHTML = infoArray[currentInfoIndex];
    
    }
    
    firstText.innerHTML = "";
    
}

backButton.addEventListener("click" , previous);

function previous() {
    
    if (currentImageIndex >= 1 && currentHeadingsIndex >= 1 && currentInfoIndex >= 1) {
        
    currentImageIndex--;
    currentHeadingsIndex--;
    currentInfoIndex--;

    image.src = imageArray[currentImageIndex];
    heading.innerHTML = headingsArray[currentHeadingsIndex];
    info.innerHTML = infoArray[currentInfoIndex];
    
    }
    
}






