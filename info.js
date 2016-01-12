// Takes the elements with the same ids from Info.html and fills them in for the variables in the Javascript 
var sampson = document.getElementById("sampson");
var sampsonInfo = document.getElementById("sampsonInfo");
var clemson = document.getElementById("clemson");
var clemsonInfo = document.getElementById("clemsonInfo");
var nicholas = document.getElementById("nicholas");
var nicholasInfo = document.getElementById("nicholasInfo");
var farragut = document.getElementById("farragut");
var farragutInfo = document.getElementById("farragutInfo");
var mahan = document.getElementById("mahan");
var mahanInfo = document.getElementById("mahanInfo");
var benson = document.getElementById("benson");
var bensonInfo = document.getElementById("bensonInfo");
var fletcher = document.getElementById("fletcher");
var fletcherInfo = document.getElementById("fletcherInfo");
var gearing = document.getElementById("gearing");
var gearingInfo = document.getElementById("gearingInfo");

// This function makes it so when the Sampson image is clicked, the previous ship information is removed and then replaced with the Sampson's information. The other ship information is set to nothing and only the Sampson's info has content. The other info is present but can't be seen because there is nothing for them to display.
sampson.addEventListener("click", function() {
    sampsonInfo.innerHTML = "The first American destroyer of the game, the Sampson is a swift and fast ship, capable to reaching a speed of 30 knots. Its 102mm artillary guns fire much faster than its Japanses counterpart but as a destroyer, it's damage is low. Shooting High Explosive shells to light enemy ships on fire and moving in close into torpedo range is key to causing chaos in the battle. The anti-aircraft capabilities of this ship are very low, with only one AA gun. However, there is a lack of aircraft in battles of this low level.";
    clemsonInfo.innerHTML = "";
    nicholasInfo.innerHTML = "";
    farragutInfo.innerHTML = "";
    mahanInfo.innerHTML = "";
    bensonInfo.innerHTML = "";
    fletcherInfo.innerHTML = "";
    gearingInfo.innerHTML = "";
});
// This function makes it so when the Clemson's picture is clicked, the other ships' information is cleared and only the Clemson info shows up.
clemson.addEventListener("click", function() {
    clemsonInfo.innerHTML = "Since both the Wickes and Clemson are very similar, they will be grouped together. Some of the most widely produced destroyers for the US Navy, these ships are very similar to the Sampson. Improvements to these ships include a speed increase to 35 knots, an increased torpedo range to 5.5 kilometers, and stronger artillary guns. For a fully upgraded Clemson, every 102mm gun is given duel barrels, leading to a total of 8 cannons. Once again, using the fast firing rate of the cannons to set ships on fire is the main tactic of this ship. Another important tactic is using islands and smoke screens to close the gap before launching torpedos. As fragile ships, stealth is important ins staying alive. The anti-aircraft armarment of this ship is still weak and shouldn't be relied on.";
    sampsonInfo.innerHTML = "";
    nicholasInfo.innerHTML = "";
    farragutInfo.innerHTML = "";
    mahanInfo.innerHTML = "";
    bensonInfo.innerHTML = "";
    fletcherInfo.innerHTML = "";
    gearingInfo.innerHTML = "";
});
// This function makes it so when the Nicholas's image is clicked all of the other ships' information is cleared and only the Nicholas's information is shown. 
nicholas.addEventListener("click", function() {
    clemsonInfo.innerHTML = "";
    sampsonInfo.innerHTML = "";
    farragutInfo.innerHTML = "";
    mahanInfo.innerHTML = "";
    bensonInfo.innerHTML = "";
    fletcherInfo.innerHTML = "";
    gearingInfo.innerHTML = "";
    nicholasInfo.innerHTML = "A new design for US destroyers, the Nicholas is a 'paper destroyer,' meaning that it only existed in blueprint form. The ship has recieved a small speed boost to 37 knots but recieved a major boost to its artillary. Armed with 127mm or 5-inch guns, the damage has increased substantially. Furthermore, the guns now turn faster than the previous destroyers. The torpedos remain very similar to the Clemson and requires the ship to get close before launching them. All of these changes allows for the Nicholas to counter the slower-firing Japanese coutnerparts while also setting larger crusiers and battlesships on fire repeatedly. The anti-aircraft capabilities have increased as well, with this ship carrying 12 AA guns fully upgraded. However, they should be turned off most of the time to maintain stealth as the Nicholas is still a fragile ship.";
});
// This function makes it so when the Farragut's image is clicked all of the other ships' information is cleared and only the Farragut's information is shown.
farragut.addEventListener("click", function() {
    clemsonInfo.innerHTML = "";
    sampsonInfo.innerHTML = "";
    nicholasInfo.innerHTML = "";
    mahanInfo.innerHTML = "";
    bensonInfo.innerHTML = "";
    fletcherInfo.innerHTML = "";
    gearingInfo.innerHTML = "";
    farragutInfo.innerHTML = "A new destroyer design and the start of a new generation of destroyers, the Farragut is an interesting vessal. The main change about her is the placement of the torpedo tubes. On all the previous ships, the torpedos were placed on the left and right sides of the ship, with equal amounts on both sides. This set-up effectively halved the number of torpedoes that could be used at once. With the torpedo tubes in the center of the ship, they can be turned to fire on either side. This allows all the torpedoes to be used in one swift attack. However, even though the torpedo range is increased to 6.4 km, they still pale in comparison to the Japanses torpedos. Getting close is the key to success. The ship still uses the 5-inch guns of the Nicholas and they are still rapid fire cannons. The AA guns, while improved from before, still have trouble taking out aircraft.";
});
// This function makes it so when the Mahan's image is clicked all of the other ships' information is cleared and only the Mahan's information is shown.
mahan.addEventListener("click", function() {
    clemsonInfo.innerHTML = "";
    sampsonInfo.innerHTML = "";
    nicholasInfo.innerHTML = "";
    farragutInfo.innerHTML = "";
    bensonInfo.innerHTML = "";
    fletcherInfo.innerHTML = "";
    gearingInfo.innerHTML = "";
    mahanInfo.innerHTML = "An improvement on the Farragut, the Mahan's main upgrade is its torpedo range, which is now 9.2 km. With this upgrade, it is now possible to stealthily launch torpedoes and escape without ever being seen. Since the detection range for this ship is 7.9 km and the torpedo range is 9.2km, there is a zone of about 1.3 km where the torpedoes can reach the target but the Mahan won't be spotted. This bonus to stealth also for the Mahan to be a silent killer if played correctly. However, if spotted, the Mahan's 5-inch cannons can rapidly fire High Explosive shells to make a ship a burning wreck. The AA guns are still only decent at best and should always be turned off for stealth. By this point in the US destroyer line, the US destroyers are able to attack enemy destroyers and suppress other ships.";
});
// This function makes it so when the Benson's image is clicked all of the other ships' information is cleared and only the Benson's information is shown.
benson.addEventListener("click", function() {
    clemsonInfo.innerHTML = "";
    sampsonInfo.innerHTML = "";
    nicholasInfo.innerHTML = "";
    farragutInfo.innerHTML = "";
    mahanInfo.innerHTML = "";
    fletcherInfo.innerHTML = "";
    gearingInfo.innerHTML = "";
    bensonInfo.innerHTML = "While a large ship and thus an easy target, the speed of the Benson of 38 knots allows it to dodge enemy artillary fire. There is now a total of 10 torpedo tubes that can be all launched at once, an impressive ammount of damaging potential. The rapid-fire 5 inch guns return on the Benson and they perform the same as before. The AA armament is still only decent on this ship but that is negligible because they should be turned off at all times. There isn't a lot to say about this ship's performance in-game because of how similar it is to the Mahan. It is a culmination of all the improvement the previous destroyers have went through, creating a multi-purpose vessal that specializes in nothing but isn't weak in anything for a destroyer.";
});
// This function makes it so when the Fletcher's image is clicked all of the other ships' information is cleared and only the Fletcher's information is shown.
fletcher.addEventListener("click", function() {
    clemsonInfo.innerHTML = "";
    sampsonInfo.innerHTML = "";
    nicholasInfo.innerHTML = "";
    farragutInfo.innerHTML = "";
    mahanInfo.innerHTML = "";
    bensonInfo.innerHTML = "";
    gearingInfo.innerHTML = "";
    fletcherInfo.innerHTML = "During WWII, these ships were some of the most powerful destroyers for the US navy. The same thing applies in-game, where the Fletcher is a strong destroyer that's an upgrade over the Benson. It's guns fire faster, the turrents turn faster, the torpedoes have more range, and AA guns are much stronger. With all of these improvements, the downside is the speed decrease by 1.5 knots. This ships is meant to be played similar to the Benson. Stealth torpedo attacks can deal massive damage but using artillary fire can still cause damage. With a good number of AA guns, this ship can also protect allies by serving to shoot down enemy strike aircraft. Despite all the upgrades, this ship is still very fragile and meeting an enemy crusier can spell certain doom.";
});
// This function makes it so when the Gearing's image is clicked all of the other ships' information is cleared and only the Gearing's information is shown.
gearing.addEventListener("click", function() {
    clemsonInfo.innerHTML = "";
    sampsonInfo.innerHTML = "";
    nicholasInfo.innerHTML = "";
    farragutInfo.innerHTML = "";
    mahanInfo.innerHTML = "";
    bensonInfo.innerHTML = "";
    fletcherInfo.innerHTML = "";
    gearingInfo.innerHTML = "At the end of the American destroyer line is the Gearing. At first, this ship looks to be a downgrade from the Fletcher. It has a shorter artillary range of only 11 km and the 6 5-inch guns are held in 3 turrents of 2 guns each. This means that one turrent being disabled is about a third of the firepower gone compared to only a fifth on the Fletcher. However, this ship is the definition of an American destroyer. Moving at a speed of 36 knots, it isn't the fastest of the end-game destroyers. However, the 6 5-inch guns are able to put out about 20 rounds a minute, the fastest out of all the competition. In addition to being able to suppress an enemy ship with non-stop fire, the torpedoes have a range of 16.5 km, the longest range out of the comeptition. Finally, the AA guns have recieved an even bigger boost. The Gearing carries a total of 19 AA guns, allowing it to protect ships and itself from an air attack. Whether escorting allied ships or silently stalking unsuspecting targets, the Gearing is a powerful, yet fragile, ship and the pinnacle of the US destroyers.";
});
