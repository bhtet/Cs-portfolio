var sampson = document.getElementById("sampson");
var sampsoninfo = document.getElementById("sampsoninfo");
var clemson = document.getElementById("clemson");
var clemsoninfo = document.getElementById("clemsoninfo");
var nicholas = document.getElementById("nicholas");
var nicholasinfo = document.getElementById("nicholasinfo");
var farragut = document.getElementById("farragut");
var farragutinfo = document.getElementById("farragutinfo");
var mahan = document.getElementById("mahan");
var mahaninfo = document.getElementById("mahaninfo");
var benson = document.getElementById("benson");
var bensoninfo = document.getElementById("bensoninfo");
var fletcher = document.getElementById("fletcher");
var fletcherinfo = document.getElementById("fletcherinfo");
var gearing = document.getElementById("gearing");
var gearinginfo = document.getElementById("gearinginfo");

sampson.addEventListener("click", function() {
    sampsoninfo.innerHTML = "The first American destroyer of the game, the Sampson is a swift and fast ship, capable to reaching a speed of 30 knots. Its 102mm artillary guns fire much faster than its Japanses counterpart but as a destroyer, it's damage is low. Shooting High Explosive shells to light enemy ships on fire and moving in close into torpedo range is key to causing chaos in the battle. The anti-aircraft capabilities of this ship are very low, with only one AA gun. However, there is a lack of aircraft in battles of this low level.";
    clemsoninfo.innerHTML = "";
    nicholasinfo.innerHTML = "";
    farragutinfo.innerHTML = "";
    mahaninfo.innerHTML = "";
    bensoninfo.innerHTML = "";
    fletcherinfo.innerHTML = "";
    gearinginfo.innerHTML = "";
});
clemson.addEventListener("click", function() {
    clemsoninfo.innerHTML = "Since both the Wickes and Clemson are very similar, they will be grouped together. Some of the most widely produced destroyers for the US Navy, these ships are very similar to the Sampson. Improvements to these ships include a speed increase to 35 knots, an increased torpedo range to 5.5 kilometers, and stronger artillary guns. For a fully upgraded Clemson, every 102mm gun is given duel barrels, leading to a total of 8 cannons. Once again, using the fast firing rate of the cannons to set ships on fire is the main tactic of this ship. Another important tactic is using islands and smoke screens to close the gap before launching torpedos. As fragile ships, stealth is important ins staying alive. The anti-aircraft armarment of this ship is still weak and shouldn't be relied on.";
    sampsoninfo.innerHTML = "";
    nicholasinfo.innerHTML = "";
    farragutinfo.innerHTML = "";
    mahaninfo.innerHTML = "";
    bensoninfo.innerHTML = "";
    fletcherinfo.innerHTML = "";
    gearinginfo.innerHTML = "";
});
nicholas.addEventListener("click", function() {
    clemsoninfo.innerHTML = "";
    sampsoninfo.innerHTML = "";
    farragutinfo.innerHTML = "";
    mahaninfo.innerHTML = "";
    bensoninfo.innerHTML = "";
    fletcherinfo.innerHTML = "";
    gearinginfo.innerHTML = "";
    nicholasinfo.innerHTML = "A new design for US destroyers, the Nicholas is a 'paper destroyer,' meaning that it only existed in blueprint form. The ship has recieved a small speed boost to 37 knots but recieved a major boost to its artillary. Armed with 127mm or 5-inch guns, the damage has increased substantially. Furthermore, the guns now turn faster than the previous destroyers. The torpedos remain very similar to the Clemson and requires the ship to get close before launching them. All of these changes allows for the Nicholas to counter the slower-firing Japanese coutnerparts while also setting larger crusiers and battlesships on fire repeatedly. The anti-aircraft capabilities have increased as well, with this ship carrying 12 AA guns fully upgraded. However, they should be turned off most of the time to maintain stealth as the Nicholas is still a fragile ship.";
});
farragut.addEventListener("click", function() {
    clemsoninfo.innerHTML = "";
    sampsoninfo.innerHTML = "";
    nicholasinfo.innerHTML = "";
    mahaninfo.innerHTML = "";
    bensoninfo.innerHTML = "";
    fletcherinfo.innerHTML = "";
    gearinginfo.innerHTML = "";
    farragutinfo.innerHTML = "A new destroyer design and the start of a new generation of destroyers, the Farragut is an interesting vessal. The main change about her is the placement of the torpedo tubes. On all the previous ships, the torpedos were placed on the left and right sides of the ship, with equal amounts on both sides. This set-up effectively halved the number of torpedoes that could be used at once. With the torpedo tubes in the center of the ship, they can be turned to fire on either side. This allows all the torpedoes to be used in one swift attack. However, even though the torpedo range is increased to 6.4 km, they still pale in comparison to the Japanses torpedos. Getting close is the key to success. The ship still uses the 5-inch guns of the Nicholas and they are still rapid fire cannons. The AA guns, while improved from before, still have trouble taking out aircraft.";
});
mahan.addEventListener("click", function() {
    clemsoninfo.innerHTML = "";
    sampsoninfo.innerHTML = "";
    nicholasinfo.innerHTML = "";
    farragutinfo.innerHTML = "";
    bensoninfo.innerHTML = "";
    fletcherinfo.innerHTML = "";
    gearinginfo.innerHTML = "";
    mahaninfo.innerHTML = "An improvement on the Farragut, the Mahan's main upgrade is its torpedo range, which is now 9.2 km. With this upgrade, it is now possible to stealthily launch torpedoes and escape without ever being seen. Since the detection range for this ship is 7.9 km and the torpedo range is 9.2km, there is a zone of about 1.3 km where the torpedoes can reach the target but the Mahan won't be spotted. This bonus to stealth also for the Mahan to be a silent killer if played correctly. However, if spotted, the Mahan's 5-inch cannons can rapidly fire High Explosive shells to make a ship a burning wreck. The AA guns are still only decent at best and should always be turned off for stealth. By this point in the US destroyer line, the US destroyers are able to attack enemy destroyers and suppress other ships.";
});
benson.addEventListener("click", function() {
    clemsoninfo.innerHTML = "";
    sampsoninfo.innerHTML = "";
    nicholasinfo.innerHTML = "";
    farragutinfo.innerHTML = "";
    mahaninfo.innerHTML = "";
    fletcherinfo.innerHTML = "";
    gearinginfo.innerHTML = "";
    bensoninfo.innerHTML = "While a large ship and thus an easy target, the speed of the Benson of 38 knots allows it to dodge enemy artillary fire. There is now a total of 10 torpedo tubes that can be all launched at once, an impressive ammount of damaging potential. The rapid-fire 5 inch guns return on the Benson and they perform the same as before. The AA armament is still only decent on this ship but that is negligible because they should be turned off at all times. There isn't a lot to say about this ship's performance in-game because of how similar it is to the Mahan. It is a culmination of all the improvement the previous destroyers have went through, creating a multi-purpose vessal that specializes in nothing but isn't weak in anything for a destroyer.";
});
fletcher.addEventListener("click", function() {
    clemsoninfo.innerHTML = "";
    sampsoninfo.innerHTML = "";
    nicholasinfo.innerHTML = "";
    farragutinfo.innerHTML = "";
    mahaninfo.innerHTML = "";
    bensoninfo.innerHTML = "";
    gearinginfo.innerHTML = "";
    fletcherinfo.innerHTML = "During WWII, these ships were some of the most powerful destroyers for the US navy. The same thing applies in-game, where the Fletcher is a strong destroyer that's an upgrade over the Benson. It's guns fire faster, the turrents turn faster, the torpedoes have more range, and AA guns are much stronger. With all of these improvements, the downside is the speed decrease by 1.5 knots. This ships is meant to be played similar to the Benson. Stealth torpedo attacks can deal massive damage but using artillary fire can still cause damage. With a good number of AA guns, this ship can also protect allies by serving to shoot down enemy strike aircraft. Despite all the upgrades, this ship is still very fragile and meeting an enemy crusier can spell certain doom.";
});
gearing.addEventListener("click", function() {
    clemsoninfo.innerHTML = "";
    sampsoninfo.innerHTML = "";
    nicholasinfo.innerHTML = "";
    farragutinfo.innerHTML = "";
    mahaninfo.innerHTML = "";
    bensoninfo.innerHTML = "";
    fletcherinfo.innerHTML = "";
    gearinginfo.innerHTML = "At the end of the American destroyer line is the Gearing. At first, this ship looks to be a downgrade from the Fletcher. It has a shorter artillary range of only 11 km and the 6 5-inch guns are held in 3 turrents of 2 guns each. This means that one turrent being disabled is about a third of the firepower gone compared to only a fifth on the Fletcher. However, this ship is the definition of an American destroyer. Moving at a speed of 36 knots, it isn't the fastest of the end-game destroyers. However, the 6 5-inch guns are able to put out about 20 rounds a minute, the fastest out of all the competition. In addition to being able to suppress and enemy ship with non-stop fire, the torpedoes have a range of 16.5 km, the longest range out of the comeptition. Finally, the AA guns have recieved an even bigger boost. The Gearing carries a total of 19 AA guns, allowing it to protect ships and itself from an air attack. Whether escorting allied ships or silently stalking unsuspecting targets, the Gearing is a powerful, yet fragile, ship and the pinnacle of the US destroyers.";
});
