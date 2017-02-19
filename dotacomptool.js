/*****************************
* Created by Matthew Belcher *
* mattabelcher.github.io/    *
* 2 / 18 / 2017				 *
*****************************/

// User input variables
var carry = 6;
var support = 7;
var nuker = 5;
var disabler = 5;
var jungler = 0;
var durable = 3;
var escape = 5;
var pusher = 3;
var initiator = 6;
var complexity = 5;
var melee = 2;
var ranged = 3;
var carryPlus = true;
var supportPlus = true;
var nukerPlus = true;
var disablerPlus = true;
var junglerPlus = false;
var durablePlus = true;
var escapePlus = true;
var pusherPlus = true;
var initiatorPlus = true;
var complexityPlus = true;
var meleePlus = true;
var rangedPlus = true;

// Stores hero data
var heroList = [113];

// Stores specific hero input
var selectedHeroes = [];
var ignoredHeroes = [];

// Load hero data on page load
document.addEventListener('DOMContentLoaded', function(){
	loadHeroes();
}, false);

/*
This function takes input when clicking on specific value buttons
First parameter is the button id, ie: PusherButton6
Second parameter is the type of button, used in a switch statement

What it performs:
Toggles the image of the button between pressed and unpressed
Updates user input variables
*/
function selectValue(btn, type) {
 	var unpress = 0;								// Determines value when unpressing a button
    var img = document.getElementById(btn).src;		// Holds src value of the image of the button

    // Requires special case due to the nature of the complexity hero stat
    if (type === 'complexity'){						
    	if (img.indexOf('images/UnpressedButton.jpg')!=-1) {
	    	for (var i = btn[btn.length-1]; i >= 0; i--){
	        	document.getElementById('ComplexityButton' + i).src  = 'images/PressedButton.jpg';
	        }
	        unpress = 0;
	    } else {
	    	for (var i = btn[btn.length-1]; i < 10; i++){
	    		document.getElementById('ComplexityButton' + i).src  = 'images/UnpressedButton.jpg';
	    	}
	    	unpress = -1;
	   	}

	// Requires special case due to the nature of the melee hero stat
	// Restricts instances where melee + ranged > 5
    } else if (type === 'melee'){					
		if (img.indexOf('images/UnpressedButton.jpg')!=-1) {
	    	for (var i = btn[btn.length-1]; i >= 1; i--){
	        	document.getElementById('MeleeButton' + i).src  = 'images/PressedButton.jpg';
	        }
	        if (document.getElementById('RangedButton' + (6 - btn[btn.length-1])).src  = 'images/PressedButton.jpg'){
		        for (var i = 6 - btn[btn.length-1]; i < 6; i++){
		        	document.getElementById('RangedButton' + i).src  = 'images/UnpressedButton.jpg';
		        }
		        ranged = 5 - parseInt(btn[btn.length-1]);
		    }
	        unpress = 0;
	    } else {
	    	for (var i = btn[btn.length-1]; i < 6; i++){
	    		document.getElementById('MeleeButton' + i).src  = 'images/UnpressedButton.jpg';
	    	}
	    	unpress = -1;
	   	}

	// Requires special case due to the nature of the ranged hero stat
	// Restricts instances where melee + ranged > 5
    } else if (type === 'ranged'){
		if (img.indexOf('images/UnpressedButton.jpg')!=-1) {
	    	for (var i = btn[btn.length-1]; i >= 1; i--){
	        	document.getElementById('RangedButton' + i).src  = 'images/PressedButton.jpg';	
	        }
	        if (document.getElementById('MeleeButton' + (6 - btn[btn.length-1])).src  = 'images/PressedButton.jpg'){
		        for (var i = 6 - btn[btn.length-1]; i < 6; i++){
		        	document.getElementById('MeleeButton' + i).src  = 'images/UnpressedButton.jpg';
		        }
		        melee = 5 - parseInt(btn[btn.length-1]);
		    }
		    unpress = 0;
	    } else {
	    	for (var i = btn[btn.length-1]; i < 6; i++){
	    		document.getElementById('RangedButton' + i).src  = 'images/UnpressedButton.jpg';
	    	}
	    	unpress = -1;
	   	}

	// All other cases
    }else {
	    if (img.indexOf('images/UnpressedButton.jpg')!=-1) {
	    	for (var i = btn[btn.length-1]; i >= 1; i--){
	        	document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'images/PressedButton.jpg';
	        }
	        unpress = 0;
	    } else {
	    	for (var i = btn[btn.length-1]; i < 9; i++){
	    		document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'images/UnpressedButton.jpg';
	    	}
	    	unpress = -1;
	   	}
	}

	// Processes button click into desired input based on button type and button id
   	switch (type) {
   		case 'carry':
   			carry = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		case 'support':
   			support = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		case 'nuker':
   			nuker = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		case 'disabler':
   			disabler = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		case 'jungler':
   			jungler = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		case 'durable':
   			durable = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		case 'escape':
   			escape = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		case 'pusher':
   			pusher = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		case 'initiator':
   			initiator = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		case 'complexity':
   			complexity = parseInt(btn[btn.length-1]) + unpress + 6; 
   			break;
   		case 'melee':
   			melee = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		case 'ranged':
   			ranged = parseInt(btn[btn.length-1]) + unpress;
   			break;
   		default:
   			break;
   }
}

/*
This function takes input when clicking on buttons
First parameter is the button id, ie: InitiatorPlus
Second parameter is the type of button, used in a switch statement

What it performs:
Toggles the image of the button between pressed and unpressed
Updates user input variables
*/

function togglePlus(btn, type){
	var toggle = false;								// Default case
	var img = document.getElementById(btn).src;		// Holds src value of the image of the button

	if (img.indexOf('images/UnpressedPlus.jpg')!=-1) {
	    document.getElementById(btn).src  = 'images/PressedPlus.jpg';
	    toggle = true;
	} else {
		document.getElementById(btn).src  = 'images/UnpressedPlus.jpg';
	}

	// Processes button click into desired input based on button type
	switch (type) {
   		case 'carry':
   			carryPlus = toggle;
   			break;
   		case 'support':
   			supportPlus = toggle;
   			break;
   		case 'nuker':
   			nukerPlus = toggle;
   			break;
   		case 'disabler':
   			disablerPlus = toggle;
   			break;
   		case 'jungler':
   			junglerPlus = toggle;
   			break;
   		case 'durable':
   			durablePlus = toggle;
   			break;
   		case 'escape':
   			escapePlus = toggle;
   			break;
   		case 'pusher':
   			pusherPlus = toggle;
   			break;
   		case 'initiator':
   			initiatorPlus = toggle;
   			break;
   		case 'complexity':
   			complexityPlus = toggle;
   			break;
   		case 'melee':
   			meleePlus = toggle;
   			break;
   		case 'ranged':
   			rangedPlus = toggle;
   			break;
   		default:
   			break;
   }
}

/*
This function displays status information to the user before performing the search
Executes when "Find comps" button is pressed
*/

function beginCompSearch(){
	document.getElementById('displayArea').innerHTML = "Finding comps. This may take a moment. <br>";
	document.getElementById('displayComps').innerHTML = "";
	timeoutID = window.setTimeout(findComps, 50);
}

function findComps(){
	var lineCounter = 0;
	var positionOne = 1;
	var positionTwo = 2;
	var positionThree = 3;
	var positionFour = 4;
	var pass;
	quitSearch:
		for (var a = 0; a < heroList.length; a++){
			positionTwo = positionOne + 1;
			for (var b = positionOne; b < heroList.length; b++){
				positionThree = positionTwo + 1;
				for (var c = positionTwo; c < heroList.length; c++){
					positionFour = positionThree + 1;
					for (var d = positionThree; d < heroList.length; d++){
						for (var e = positionFour; e < heroList.length; e++){
							pass = true;
							while(pass){
								if (selectedHeroes.length > 0){
									var breaker = false;
									for (var f = 0; f < selectedHeroes.length; f++){
										if( !(selectedHeroes[f] == heroList[a].name || selectedHeroes[f] == heroList[b].name || selectedHeroes[f] == heroList[c].name || selectedHeroes[f] == heroList[d].name || selectedHeroes[f] == heroList[e].name)){
											breaker = true;
										}
									}
									if (breaker){
										break;
									}
								}

								if (ignoredHeroes.length > 0){
									var breaker = false;
									for (var f = 0; f < ignoredHeroes.length; f++){
										if(ignoredHeroes[f] == heroList[a].name || ignoredHeroes[f] == heroList[b].name || ignoredHeroes[f] == heroList[c].name || ignoredHeroes[f] == heroList[d].name || ignoredHeroes[f] == heroList[e].name){
											breaker = true;
										}
									}
									if (breaker){
										break;
									}
								}

								if(carryPlus){
									if (!(heroList[a].carry + heroList[b].carry + heroList[c].carry + heroList[d].carry + heroList[e].carry >= carry)){
										break;
									} 
								} else {
									if (!(heroList[a].carry + heroList[b].carry + heroList[c].carry + heroList[d].carry + heroList[e].carry == carry)){
										break;
									} 
								}

								if(supportPlus){
									if (!(heroList[a].support + heroList[b].support + heroList[c].support + heroList[d].support + heroList[e].support >= support)){
										break;
									}
								} else {
									if (!(heroList[a].support + heroList[b].support + heroList[c].support + heroList[d].support + heroList[e].support == support)){
										break;
									}
								}

								if(nukerPlus){
									if (!(heroList[a].nuker + heroList[b].nuker + heroList[c].nuker + heroList[d].nuker + heroList[e].nuker >= nuker)){
										break;
									}
								} else {
									if (!(heroList[a].nuker + heroList[b].nuker + heroList[c].nuker + heroList[d].nuker + heroList[e].nuker == nuker)){
										break;
									}
								}

								if(disablerPlus){
									if (!(heroList[a].disabler + heroList[b].disabler + heroList[c].disabler + heroList[d].disabler + heroList[e].disabler >= disabler)){
										break;
									}
								} else {
									if (!(heroList[a].disabler + heroList[b].disabler + heroList[c].disabler + heroList[d].disabler + heroList[e].disabler == disabler)){
										break;
									}
								}

								if(junglerPlus){
									if (!(heroList[a].jungler + heroList[b].jungler + heroList[c].jungler + heroList[d].jungler + heroList[e].jungler >= jungler)){
										break;
									}
								} else {
									if (!(heroList[a].jungler + heroList[b].jungler + heroList[c].jungler + heroList[d].jungler + heroList[e].jungler == jungler)){
										break;
									}
								}

								if(durablePlus){
									if (!(heroList[a].durable + heroList[b].durable + heroList[c].durable + heroList[d].durable + heroList[e].durable >= durable)){
										break;
									}
								} else {
									if (!(heroList[a].durable + heroList[b].durable + heroList[c].durable + heroList[d].durable + heroList[e].durable == durable)){
										break;
									}
								}

								if(escapePlus){
									if (!(heroList[a].escape + heroList[b].escape + heroList[c].escape + heroList[d].escape + heroList[e].escape >= escape)){
										break;
									}
								} else {
									if (!(heroList[a].escape + heroList[b].escape + heroList[c].escape + heroList[d].escape + heroList[e].escape == escape)){
										break;
									}
								}

								if(pusherPlus){
									if (!(heroList[a].pusher + heroList[b].pusher + heroList[c].pusher + heroList[d].pusher + heroList[e].pusher >= pusher)){
										break;
									}
								} else {
									if (!(heroList[a].pusher + heroList[b].pusher + heroList[c].pusher + heroList[d].pusher + heroList[e].pusher == pusher)){
										break;
									}
								}

								if(initiatorPlus){
									if (!(heroList[a].initiator + heroList[b].initiator + heroList[c].initiator + heroList[d].initiator + heroList[e].initiator >= initiator)){
										break;
									}
								} else {
									if (!(heroList[a].initiator + heroList[b].initiator + heroList[c].initiator + heroList[d].initiator + heroList[e].initiator == initiator)){
										break;
									}
								}

								if(complexityPlus){
									if (!(heroList[a].complexity + heroList[b].complexity + heroList[c].complexity + heroList[d].complexity + heroList[e].complexity >= complexity)){
										break;
									}
								} else {
									if (!(heroList[a].complexity + heroList[b].complexity + heroList[c].complexity + heroList[d].complexity + heroList[e].complexity == complexity)){
										break;
									}
								}

								if(meleePlus){
									if (!(heroList[a].melee + heroList[b].melee + heroList[c].melee + heroList[d].melee + heroList[e].melee >= melee)){
										break;
									}
								} else {
									if (!(heroList[a].melee + heroList[b].melee + heroList[c].melee + heroList[d].melee + heroList[e].melee == melee)){
										break;
									}
								}

								if(rangedPlus){
									if (!(heroList[a].ranged + heroList[b].ranged + heroList[c].ranged + heroList[d].ranged + heroList[e].ranged >= ranged)){
										break;
									}
								} else {
									if (!(heroList[a].ranged + heroList[b].ranged + heroList[c].ranged + heroList[d].ranged + heroList[e].ranged == ranged)){
										break;
									}
								}
								
								document.getElementById('displayComps').innerHTML += "<a comps=\"" + heroList[a].name + "\nCarry: " + heroList[a].carry + "\nSupport: " + heroList[a].support + "\nNuker: " + heroList[a].nuker + "\nDisabler: " + heroList[a].disabler + "\nJungler: " + heroList[a].jungler + "\nDurabler: " + heroList[a].durable + "\nEscape: " + heroList[a].escape + "\nPusher: " + heroList[a].pusher + "\nInitiator: " + heroList[a].initiator + "\nComplexity: " + heroList[a].complexity + "\"><img src=\"" + heroList[a].imgsrc + "\"> </a>";
								document.getElementById('displayComps').innerHTML += "<a comps=\"" + heroList[b].name + "\nCarry: " + heroList[b].carry + "\nSupport: " + heroList[b].support + "\nNuker: " + heroList[b].nuker + "\nDisabler: " + heroList[b].disabler + "\nJungler: " + heroList[b].jungler + "\nDurabler: " + heroList[b].durable + "\nEscape: " + heroList[b].escape + "\nPusher: " + heroList[b].pusher + "\nInitiator: " + heroList[b].initiator + "\nComplexity: " + heroList[b].complexity + "\"><img src=\"" + heroList[b].imgsrc + "\"> </a>";
								document.getElementById('displayComps').innerHTML += "<a comps=\"" + heroList[c].name + "\nCarry: " + heroList[c].carry + "\nSupport: " + heroList[c].support + "\nNuker: " + heroList[c].nuker + "\nDisabler: " + heroList[c].disabler + "\nJungler: " + heroList[c].jungler + "\nDurabler: " + heroList[c].durable + "\nEscape: " + heroList[c].escape + "\nPusher: " + heroList[c].pusher + "\nInitiator: " + heroList[c].initiator + "\nComplexity: " + heroList[c].complexity + "\"><img src=\"" + heroList[c].imgsrc + "\"> </a>";
								document.getElementById('displayComps').innerHTML += "<a comps=\"" + heroList[d].name + "\nCarry: " + heroList[d].carry + "\nSupport: " + heroList[d].support + "\nNuker: " + heroList[d].nuker + "\nDisabler: " + heroList[d].disabler + "\nJungler: " + heroList[d].jungler + "\nDurabler: " + heroList[d].durable + "\nEscape: " + heroList[d].escape + "\nPusher: " + heroList[d].pusher + "\nInitiator: " + heroList[d].initiator + "\nComplexity: " + heroList[d].complexity + "\"><img src=\"" + heroList[d].imgsrc + "\"> </a>";
								document.getElementById('displayComps').innerHTML += "<a comps=\"" + heroList[e].name + "\nCarry: " + heroList[e].carry + "\nSupport: " + heroList[e].support + "\nNuker: " + heroList[e].nuker + "\nDisabler: " + heroList[e].disabler + "\nJungler: " + heroList[e].jungler + "\nDurabler: " + heroList[e].durable + "\nEscape: " + heroList[e].escape + "\nPusher: " + heroList[e].pusher + "\nInitiator: " + heroList[e].initiator + "\nComplexity: " + heroList[e].complexity + "\"><img src=\"" + heroList[e].imgsrc + "\"> </a><br>";
								lineCounter++
								pass = false;
							}
							if (lineCounter > 14){
								break quitSearch;
							}
						}
						positionFour++;
						if (lineCounter > 14){
							break quitSearch;
						}
					}
					positionThree++;
					if (lineCounter > 14){
						break quitSearch;
					}
				}
				positionTwo++;
				if (lineCounter > 14){
					break quitSearch;
				}
			}
			positionOne++;
			if (lineCounter > 14){
				break quitSearch;
			}
		}
	if (lineCounter > 14){
		document.getElementById('displayArea').innerHTML = "Too many comps found. Search ended.";
	} else {
		document.getElementById('displayArea').innerHTML = "Done.";
	}
}

function selectHero(hero){
	if (document.getElementById(hero).style.borderColor == "green"){
		document.getElementById(hero).style.borderColor = "red";
		var heroIndex = selectedHeroes.indexOf(hero);
		selectedHeroes.splice(heroIndex, 1);
		ignoredHeroes.push(hero);
	} else if (document.getElementById(hero).style.borderColor == "red"){
		document.getElementById(hero).style.borderColor = "rgb(10, 18, 22)";
		var heroIndex = ignoredHeroes.indexOf(hero);
		ignoredHeroes.splice(heroIndex, 1);
	} else if (selectedHeroes.length < 4){
		document.getElementById(hero).style.borderColor = "green"; 
		selectedHeroes.push(hero);
	} else {
		document.getElementById(hero).style.borderColor = "red"; 
		ignoredHeroes.push(hero);
	}
}

function loadHeroes(){
	heroList[0] = {name:"Abaddon", imgsrc:"images/abaddon.png", carry:1, support:2, nuker:0, disabler:0, jungler:0, durable:2, escape:0, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[1] = {name:"Alchemist", imgsrc:"images/alchemist.png", carry:2, support:1, nuker:1, disabler:1, jungler:0, durable:2, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[2] = {name:"Ancient Apparition", imgsrc:"images/ancient_apparition.png", carry:0, support:2, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[3] = {name:"Anti-Mage", imgsrc:"images/antimage.png", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[4] = {name:"Arc Warden", imgsrc:"images/arc_warden.png", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[5] = {name:"Axe", imgsrc:"images/axe.png", carry:0, support:0, nuker:0, disabler:2, jungler:2, durable:3, escape:0, pusher:0, initiator:3, complexity:1, melee:1, ranged:0};
	heroList[6] = {name:"Bane", imgsrc:"images/bane.png", carry:0, support:2, nuker:1, disabler:3, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[7] = {name:"Batrider", imgsrc:"images/batrider.png", carry:0, support:0, nuker:0, disabler:2, jungler:2, durable:0, escape:1, pusher:0, initiator:3, complexity:2, melee:0, ranged:1};
	heroList[8] = {name:"Beastmaster", imgsrc:"images/beastmaster.png", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[9] = {name:"Bloodseeker", imgsrc:"images/bloodseeker.png", carry:1, support:0, nuker:1, disabler:1, jungler:1, durable:0, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[10] = {name:"Bounty Hunter", imgsrc:"images/bounty_hunter.png", carry:0, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[11] = {name:"Brewmaster", imgsrc:"images/brewmaster.png", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:3, complexity:3, melee:1, ranged:0};
	heroList[12] = {name:"Bristleback", imgsrc:"images/bristleback.png", carry:2, support:0, nuker:1, disabler:0, jungler:0, durable:3, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[13] = {name:"Broodmother", imgsrc:"images/broodmother.png", carry:1, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:3, pusher:3, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[14] = {name:"Centaur Warrunner", imgsrc:"images/centaur.png", carry:0, support:0, nuker:1, disabler:1, jungler:0, durable:3, escape:1, pusher:0, initiator:3, complexity:1, melee:1, ranged:0};
	heroList[15] = {name:"Chaos Knight", imgsrc:"images/chaos_knight.png", carry:3, support:0, nuker:0, disabler:2, jungler:0, durable:2, escape:0, pusher:2, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[16] = {name:"Chen", imgsrc:"images/chen.png", carry:0, support:2, nuker:0, disabler:0, jungler:3, durable:0, escape:0, pusher:2, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[17] = {name:"Clinkz", imgsrc:"images/clinkz.png", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:3, pusher:1, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[18] = {name:"Clockwerk", imgsrc:"images/clockwerk.png", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:1, escape:0, pusher:0, initiator:3, complexity:2, melee:1, ranged:0};
	heroList[19] = {name:"Crystal Maiden", imgsrc:"images/crystal_maiden.png", carry:0, support:3, nuker:2, disabler:2, jungler:1, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[20] = {name:"Dark Seer", imgsrc:"images/dark_seer.png", carry:0, support:0, nuker:0, disabler:1, jungler:1, durable:0, escape:1, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[21] = {name:"Dazzle", imgsrc:"images/dazzle.png", carry:0, support:3, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[22] = {name:"Death Prophet", imgsrc:"images/death_prophet.png", carry:1, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:3, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[23] = {name:"Disruptor", imgsrc:"images/disruptor.png", carry:0, support:2, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:1, complexity:2, melee:0, ranged:1};
	heroList[24] = {name:"Doom", imgsrc:"images/doom_bringer.png", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[25] = {name:"Dragon Knight", imgsrc:"images/dragon_knight.png", carry:2, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:3, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[26] = {name:"Drow Ranger", imgsrc:"images/drow_ranger.png", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:0, escape:0, pusher:1, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[27] = {name:"Earth Spirit", imgsrc:"images/earth_spirit.png", carry:0, support:0, nuker:2, disabler:1, jungler:0, durable:1, escape:2, pusher:0, initiator:1, complexity:3, melee:1, ranged:0};
	heroList[28] = {name:"Earthshaker", imgsrc:"images/earthshaker.png", carry:0, support:1, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:3, complexity:2, melee:1, ranged:0};
	heroList[29] = {name:"Elder Titan", imgsrc:"images/elder_titan.png", carry:0, support:0, nuker:1, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[30] = {name:"Ember Spirit", imgsrc:"images/ember_spirit.png", carry:2, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:3, pusher:0, initiator:1, complexity:2, melee:1, ranged:0};
	heroList[31] = {name:"Enchantress", imgsrc:"images/enchantress.png", carry:0, support:2, nuker:0, disabler:1, jungler:3, durable:1, escape:0, pusher:2, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[32] = {name:"Enigma", imgsrc:"images/enigma.png", carry:0, support:0, nuker:0, disabler:2, jungler:3, durable:0, escape:0, pusher:2, initiator:2, complexity:2, melee:0, ranged:1};
	heroList[33] = {name:"Faceless Void", imgsrc:"images/faceless_void.png", carry:2, support:0, nuker:0, disabler:2, jungler:0, durable:1, escape:1, pusher:0, initiator:3, complexity:2, melee:1, ranged:0};
	heroList[34] = {name:"Gyrocopter", imgsrc:"images/gyrocopter.png", carry:3, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[35] = {name:"Huskar", imgsrc:"images/huskar.png", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:2, escape:0, pusher:0, initiator:1, complexity:1, melee:0, ranged:1};
	heroList[36] = {name:"Invoker", imgsrc:"images/invoker.png", carry:1, support:0, nuker:3, disabler:2, jungler:0, durable:0, escape:1, pusher:1, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[37] = {name:"Io", imgsrc:"images/io.png", carry:0, support:3, nuker:1, disabler:0, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[38] = {name:"Jakiro", imgsrc:"images/jakiro.png", carry:0, support:1, nuker:2, disabler:1, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[39] = {name:"Juggernaut", imgsrc:"images/juggernaut.png", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:1, pusher:1, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[40] = {name:"Keeper of the Light", imgsrc:"images/keeper_of_the_light.png", carry:0, support:3, nuker:2, disabler:1, jungler:1, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[41] = {name:"Kunkka", imgsrc:"images/kunkka.png", carry:1, support:0, nuker:1, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:1, complexity:2, melee:1, ranged:0};
	heroList[42] = {name:"Legion Commander", imgsrc:"images/legion_commander.png", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:1, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[43] = {name:"Leshrac", imgsrc:"images/leshrac.png", carry:1, support:1, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:3, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[44] = {name:"Lich", imgsrc:"images/lich.png", carry:0, support:3, nuker:2, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[45] = {name:"Lifestealer", imgsrc:"images/life_stealer.png", carry:2, support:0, nuker:0, disabler:1, jungler:1, durable:2, escape:1, pusher:0, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[46] = {name:"Lina", imgsrc:"images/lina.png", carry:1, support:1, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[47] = {name:"Lion", imgsrc:"images/lion.png", carry:0, support:2, nuker:3, disabler:3, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:1, melee:0, ranged:1};
	heroList[48] = {name:"Lone Druid", imgsrc:"images/lone_druid.png", carry:2, support:0, nuker:0, disabler:0, jungler:1, durable:1, escape:0, pusher:3, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[49] = {name:"Luna", imgsrc:"images/luna.png", carry:2, support:0, nuker:2, disabler:0, jungler:0, durable:0, escape:0, pusher:1, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[50] = {name:"Lycan", imgsrc:"images/lycan.png", carry:2, support:0, nuker:0, disabler:0, jungler:1, durable:1, escape:1, pusher:3, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[51] = {name:"Magnus", imgsrc:"images/magnus.png", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:3, complexity:2, melee:1, ranged:0};
	heroList[52] = {name:"Medusa", imgsrc:"images/medusa.png", carry:3, support:0, nuker:0, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[53] = {name:"Meepo", imgsrc:"images/meepo.png", carry:2, support:0, nuker:2, disabler:1, jungler:0, durable:0, escape:2, pusher:1, initiator:1, complexity:3, melee:1, ranged:0};
	heroList[54] = {name:"Mirana", imgsrc:"images/mirana.png", carry:1, support:1, nuker:1, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[55] = {name:"Monkey King", imgsrc:"images/monkey_king.png", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:1, complexity:2, melee:1, ranged:0};
	heroList[56] = {name:"Morphling", imgsrc:"images/morphling.png", carry:3, support:0, nuker:1, disabler:1, jungler:0, durable:2, escape:3, pusher:0, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[57] = {name:"Naga Siren", imgsrc:"images/naga_siren.png", carry:3, support:1, nuker:0, disabler:2, jungler:0, durable:0, escape:1, pusher:2, initiator:1, complexity:2, melee:1, ranged:0};
	heroList[58] = {name:"Nature's Prophet", imgsrc:"images/natures_prophet.png", carry:1, support:0, nuker:1, disabler:0, jungler:3, durable:0, escape:1, pusher:3, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[59] = {name:"Necrophos", imgsrc:"images/necrophos.png", carry:1, support:0, nuker:2, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[60] = {name:"Night Stalker", imgsrc:"images/night_stalker.png", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:1, melee:1, ranged:0};
	heroList[61] = {name:"Nyx Assassin", imgsrc:"images/nyx_assassin.png", carry:0, support:0, nuker:2, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[62] = {name:"Ogre Magi", imgsrc:"images/ogre_magi.png", carry:0, support:2, nuker:2, disabler:2, jungler:0, durable:1, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[63] = {name:"Omniknight", imgsrc:"images/omniknight.png", carry:0, support:2, nuker:1, disabler:0, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[64] = {name:"Oracle", imgsrc:"images/oracle.png", carry:0, support:3, nuker:3, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[65] = {name:"Outhouse Decorator", imgsrc:"images/outworld_devourer.png", carry:2, support:0, nuker:2, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[66] = {name:"Phantom Assassin", imgsrc:"images/phantom_assassin.png", carry:3, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[67] = {name:"Phantom Lancer", imgsrc:"images/phantom_lancer.png", carry:2, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:2, pusher:1, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[68] = {name:"Phoenix", imgsrc:"images/phoenix.png", carry:0, support:1, nuker:3, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:2, complexity:2, melee:0, ranged:1};
	heroList[69] = {name:"Puck", imgsrc:"images/puck.png", carry:0, support:0, nuker:2, disabler:3, jungler:0, durable:0, escape:3, pusher:0, initiator:3, complexity:2, melee:0, ranged:1};
	heroList[70] = {name:"Pudge", imgsrc:"images/pudge.png", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[71] = {name:"Pugna", imgsrc:"images/pugna.png", carry:0, support:0, nuker:2, disabler:0, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[72] = {name:"Queen of Pain", imgsrc:"images/queenofpain.png", carry:1, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[73] = {name:"Razor", imgsrc:"images/razor.png", carry:2, support:0, nuker:1, disabler:0, jungler:0, durable:2, escape:0, pusher:1, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[74] = {name:"Riki", imgsrc:"images/riki.png", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[75] = {name:"Rubick", imgsrc:"images/rubick.png", carry:0, support:2, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[76] = {name:"Sand King", imgsrc:"images/sand_king.png", carry:0, support:0, nuker:2, disabler:2, jungler:1, durable:0, escape:2, pusher:0, initiator:3, complexity:2, melee:1, ranged:0};
	heroList[77] = {name:"Shadow Demon", imgsrc:"images/shadow_demon.png", carry:0, support:2, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:1, complexity:2, melee:0, ranged:1};
	heroList[78] = {name:"Shadow Fiend", imgsrc:"images/shadow_fiend.png", carry:2, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[79] = {name:"Shadow Shaman", imgsrc:"images/shadow_shaman.png", carry:0, support:2, nuker:2, disabler:3, jungler:0, durable:0, escape:0, pusher:3, initiator:1, complexity:1, melee:0, ranged:1};
	heroList[80] = {name:"Silencer", imgsrc:"images/silencer.png", carry:1, support:1, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:2, melee:0, ranged:1};
	heroList[81] = {name:"Skywrath Mage", imgsrc:"images/skywrath_mage.png", carry:0, support:2, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[82] = {name:"Slardar", imgsrc:"images/slardar.png", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:2, escape:1, pusher:0, initiator:2, complexity:1, melee:1, ranged:0};
	heroList[83] = {name:"Slark", imgsrc:"images/slark.png", carry:2, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[84] = {name:"Sniper", imgsrc:"images/sniper.png", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[85] = {name:"Spectre", imgsrc:"images/spectre.png", carry:3, support:0, nuker:0, disabler:0, jungler:0, durable:1, escape:1, pusher:0, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[86] = {name:"Spirit Breaker", imgsrc:"images/spirit_breaker.png", carry:1, support:0, nuker:0, disabler:2, jungler:0, durable:2, escape:1, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[87] = {name:"Storm Spirit", imgsrc:"images/storm_spirit.png", carry:2, support:0, nuker:2, disabler:1, jungler:0, durable:0, escape:3, pusher:0, initiator:1, complexity:3, melee:0, ranged:1};
	heroList[88] = {name:"Sven", imgsrc:"images/sven.png", carry:2, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:1, melee:1, ranged:0};
	heroList[89] = {name:"Techies", imgsrc:"images/techies.png", carry:0, support:0, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[90] = {name:"Templar Assassin", imgsrc:"images/templar_assassin.png", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[91] = {name:"Terrorblade", imgsrc:"images/terrorblade.png", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[92] = {name:"Tidehunter", imgsrc:"images/tidehunter.png", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:3, escape:0, pusher:0, initiator:3, complexity:1, melee:1, ranged:0};
	heroList[93] = {name:"Timbersaw", imgsrc:"images/timbersaw.png", carry:0, support:0, nuker:3, disabler:0, jungler:0, durable:2, escape:2, pusher:0, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[94] = {name:"Tinker", imgsrc:"images/tinker.png", carry:1, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[95] = {name:"Tiny", imgsrc:"images/tiny.png", carry:3, support:0, nuker:2, disabler:1, jungler:0, durable:2, escape:0, pusher:2, initiator:2, complexity:1, melee:1, ranged:0};
	heroList[96] = {name:"Treant Protector", imgsrc:"images/treant.png", carry:0, support:3, nuker:0, disabler:1, jungler:0, durable:1, escape:1, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[97] = {name:"Troll Warlord", imgsrc:"images/troll_warlord.png", carry:3, support:0, nuker:0, disabler:1, jungler:0, durable:1, escape:0, pusher:2, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[98] = {name:"Tusk", imgsrc:"images/tusk.png", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:1, melee:1, ranged:0};
	heroList[99] = {name:"Underlord", imgsrc:"images/underlord.png", carry:0, support:1, nuker:1, disabler:1, jungler:0, durable:1, escape:2, pusher:0, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[100] = {name:"Undying", imgsrc:"images/undying.png", carry:0, support:1, nuker:1, disabler:1, jungler:0, durable:2, escape:0, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[101] = {name:"Ursa", imgsrc:"images/ursa.png", carry:2, support:0, nuker:0, disabler:1, jungler:1, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[102] = {name:"Vengeful Spirit", imgsrc:"images/vengefulspirit.png", carry:0, support:3, nuker:1, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:2, complexity:1, melee:0, ranged:1};
	heroList[103] = {name:"Venomancer", imgsrc:"images/venomancer.png", carry:0, support:2, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:1, initiator:1, complexity:1, melee:0, ranged:1};
	heroList[104] = {name:"Viper", imgsrc:"images/viper.png", carry:1, support:0, nuker:0, disabler:1, jungler:0, durable:2, escape:0, pusher:0, initiator:1, complexity:1, melee:0, ranged:1};
	heroList[105] = {name:"Visage", imgsrc:"images/visage.png", carry:0, support:1, nuker:2, disabler:1, jungler:0, durable:1, escape:0, pusher:1, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[106] = {name:"Warlock", imgsrc:"images/warlock.png", carry:0, support:1, nuker:0, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:1, melee:0, ranged:1};
	heroList[107] = {name:"Weaver", imgsrc:"images/weaver.png", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[108] = {name:"Windranger", imgsrc:"images/windrunner.png", carry:1, support:1, nuker:1, disabler:1, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[109] = {name:"Winter Wyvern", imgsrc:"images/winter_wyvern.png", carry:0, support:3, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[110] = {name:"Witch Doctor", imgsrc:"images/witch_doctor.png", carry:0, support:3, nuker:2, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[111] = {name:"Wraith King", imgsrc:"images/wraith_king.png", carry:2, support:1, nuker:0, disabler:2, jungler:0, durable:3, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[112] = {name:"Zeus", imgsrc:"images/zeus.png", carry:0, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};

	// Strength Heroes Alphabetized
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[0].name + "\nCarry: " + heroList[0].carry + "\nSupport: " + heroList[0].support + "\nNuker: " + heroList[0].nuker + "\nDisabler: " + heroList[0].disabler + "\nJungler: " + heroList[0].jungler + "\nDurabler: " + heroList[0].durable + "\nEscape: " + heroList[0].escape + "\nPusher: " + heroList[0].pusher + "\nInitiator: " + heroList[0].initiator + "\nComplexity: " + heroList[0].complexity + "\"><img id=\"" + heroList[0].name + "\" class=\"heroes\" src=\"" + heroList[0].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[1].name + "\nCarry: " + heroList[1].carry + "\nSupport: " + heroList[1].support + "\nNuker: " + heroList[1].nuker + "\nDisabler: " + heroList[1].disabler + "\nJungler: " + heroList[1].jungler + "\nDurabler: " + heroList[1].durable + "\nEscape: " + heroList[1].escape + "\nPusher: " + heroList[1].pusher + "\nInitiator: " + heroList[1].initiator + "\nComplexity: " + heroList[1].complexity + "\"><img id=\"" + heroList[1].name + "\" class=\"heroes\" src=\"" + heroList[1].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[5].name + "\nCarry: " + heroList[5].carry + "\nSupport: " + heroList[5].support + "\nNuker: " + heroList[5].nuker + "\nDisabler: " + heroList[5].disabler + "\nJungler: " + heroList[5].jungler + "\nDurabler: " + heroList[5].durable + "\nEscape: " + heroList[5].escape + "\nPusher: " + heroList[5].pusher + "\nInitiator: " + heroList[5].initiator + "\nComplexity: " + heroList[5].complexity + "\"><img id=\"" + heroList[5].name + "\" class=\"heroes\" src=\"" + heroList[5].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[8].name + "\nCarry: " + heroList[8].carry + "\nSupport: " + heroList[8].support + "\nNuker: " + heroList[8].nuker + "\nDisabler: " + heroList[8].disabler + "\nJungler: " + heroList[8].jungler + "\nDurabler: " + heroList[8].durable + "\nEscape: " + heroList[8].escape + "\nPusher: " + heroList[8].pusher + "\nInitiator: " + heroList[8].initiator + "\nComplexity: " + heroList[8].complexity + "\"><img id=\"" + heroList[8].name + "\" class=\"heroes\" src=\"" + heroList[8].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[11].name + "\nCarry: " + heroList[11].carry + "\nSupport: " + heroList[11].support + "\nNuker: " + heroList[11].nuker + "\nDisabler: " + heroList[11].disabler + "\nJungler: " + heroList[11].jungler + "\nDurabler: " + heroList[11].durable + "\nEscape: " + heroList[11].escape + "\nPusher: " + heroList[11].pusher + "\nInitiator: " + heroList[11].initiator + "\nComplexity: " + heroList[11].complexity + "\"><img id=\"" + heroList[11].name + "\" class=\"heroes\" src=\"" + heroList[11].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[12].name + "\nCarry: " + heroList[12].carry + "\nSupport: " + heroList[12].support + "\nNuker: " + heroList[12].nuker + "\nDisabler: " + heroList[12].disabler + "\nJungler: " + heroList[12].jungler + "\nDurabler: " + heroList[12].durable + "\nEscape: " + heroList[12].escape + "\nPusher: " + heroList[12].pusher + "\nInitiator: " + heroList[12].initiator + "\nComplexity: " + heroList[12].complexity + "\"><img id=\"" + heroList[12].name + "\" class=\"heroes\" src=\"" + heroList[12].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[14].name + "\nCarry: " + heroList[14].carry + "\nSupport: " + heroList[14].support + "\nNuker: " + heroList[14].nuker + "\nDisabler: " + heroList[14].disabler + "\nJungler: " + heroList[14].jungler + "\nDurabler: " + heroList[14].durable + "\nEscape: " + heroList[14].escape + "\nPusher: " + heroList[14].pusher + "\nInitiator: " + heroList[14].initiator + "\nComplexity: " + heroList[14].complexity + "\"><img id=\"" + heroList[14].name + "\" class=\"heroes\" src=\"" + heroList[14].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[15].name + "\nCarry: " + heroList[15].carry + "\nSupport: " + heroList[15].support + "\nNuker: " + heroList[15].nuker + "\nDisabler: " + heroList[15].disabler + "\nJungler: " + heroList[15].jungler + "\nDurabler: " + heroList[15].durable + "\nEscape: " + heroList[15].escape + "\nPusher: " + heroList[15].pusher + "\nInitiator: " + heroList[15].initiator + "\nComplexity: " + heroList[15].complexity + "\"><img id=\"" + heroList[15].name + "\" class=\"heroes\" src=\"" + heroList[15].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[18].name + "\nCarry: " + heroList[18].carry + "\nSupport: " + heroList[18].support + "\nNuker: " + heroList[18].nuker + "\nDisabler: " + heroList[18].disabler + "\nJungler: " + heroList[18].jungler + "\nDurabler: " + heroList[18].durable + "\nEscape: " + heroList[18].escape + "\nPusher: " + heroList[18].pusher + "\nInitiator: " + heroList[18].initiator + "\nComplexity: " + heroList[18].complexity + "\"><img id=\"" + heroList[18].name + "\" class=\"heroes\" src=\"" + heroList[18].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[24].name + "\nCarry: " + heroList[24].carry + "\nSupport: " + heroList[24].support + "\nNuker: " + heroList[24].nuker + "\nDisabler: " + heroList[24].disabler + "\nJungler: " + heroList[24].jungler + "\nDurabler: " + heroList[24].durable + "\nEscape: " + heroList[24].escape + "\nPusher: " + heroList[24].pusher + "\nInitiator: " + heroList[24].initiator + "\nComplexity: " + heroList[24].complexity + "\"><img id=\"" + heroList[24].name + "\" class=\"heroes\" src=\"" + heroList[24].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[25].name + "\nCarry: " + heroList[25].carry + "\nSupport: " + heroList[25].support + "\nNuker: " + heroList[25].nuker + "\nDisabler: " + heroList[25].disabler + "\nJungler: " + heroList[25].jungler + "\nDurabler: " + heroList[25].durable + "\nEscape: " + heroList[25].escape + "\nPusher: " + heroList[25].pusher + "\nInitiator: " + heroList[25].initiator + "\nComplexity: " + heroList[25].complexity + "\"><img id=\"" + heroList[25].name + "\" class=\"heroes\" src=\"" + heroList[25].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[27].name + "\nCarry: " + heroList[27].carry + "\nSupport: " + heroList[27].support + "\nNuker: " + heroList[27].nuker + "\nDisabler: " + heroList[27].disabler + "\nJungler: " + heroList[27].jungler + "\nDurabler: " + heroList[27].durable + "\nEscape: " + heroList[27].escape + "\nPusher: " + heroList[27].pusher + "\nInitiator: " + heroList[27].initiator + "\nComplexity: " + heroList[27].complexity + "\"><img id=\"" + heroList[27].name + "\" class=\"heroes\" src=\"" + heroList[27].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[28].name + "\nCarry: " + heroList[28].carry + "\nSupport: " + heroList[28].support + "\nNuker: " + heroList[28].nuker + "\nDisabler: " + heroList[28].disabler + "\nJungler: " + heroList[28].jungler + "\nDurabler: " + heroList[28].durable + "\nEscape: " + heroList[28].escape + "\nPusher: " + heroList[28].pusher + "\nInitiator: " + heroList[28].initiator + "\nComplexity: " + heroList[28].complexity + "\"><img id=\"" + heroList[28].name + "\" class=\"heroes\" src=\"" + heroList[28].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[29].name + "\nCarry: " + heroList[29].carry + "\nSupport: " + heroList[29].support + "\nNuker: " + heroList[29].nuker + "\nDisabler: " + heroList[29].disabler + "\nJungler: " + heroList[29].jungler + "\nDurabler: " + heroList[29].durable + "\nEscape: " + heroList[29].escape + "\nPusher: " + heroList[29].pusher + "\nInitiator: " + heroList[29].initiator + "\nComplexity: " + heroList[29].complexity + "\"><img id=\"" + heroList[29].name + "\" class=\"heroes\" src=\"" + heroList[29].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[35].name + "\nCarry: " + heroList[35].carry + "\nSupport: " + heroList[35].support + "\nNuker: " + heroList[35].nuker + "\nDisabler: " + heroList[35].disabler + "\nJungler: " + heroList[35].jungler + "\nDurabler: " + heroList[35].durable + "\nEscape: " + heroList[35].escape + "\nPusher: " + heroList[35].pusher + "\nInitiator: " + heroList[35].initiator + "\nComplexity: " + heroList[35].complexity + "\"><img id=\"" + heroList[35].name + "\" class=\"heroes\" src=\"" + heroList[35].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[37].name + "\nCarry: " + heroList[37].carry + "\nSupport: " + heroList[37].support + "\nNuker: " + heroList[37].nuker + "\nDisabler: " + heroList[37].disabler + "\nJungler: " + heroList[37].jungler + "\nDurabler: " + heroList[37].durable + "\nEscape: " + heroList[37].escape + "\nPusher: " + heroList[37].pusher + "\nInitiator: " + heroList[37].initiator + "\nComplexity: " + heroList[37].complexity + "\"><img id=\"" + heroList[37].name + "\" class=\"heroes\" src=\"" + heroList[37].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[41].name + "\nCarry: " + heroList[41].carry + "\nSupport: " + heroList[41].support + "\nNuker: " + heroList[41].nuker + "\nDisabler: " + heroList[41].disabler + "\nJungler: " + heroList[41].jungler + "\nDurabler: " + heroList[41].durable + "\nEscape: " + heroList[41].escape + "\nPusher: " + heroList[41].pusher + "\nInitiator: " + heroList[41].initiator + "\nComplexity: " + heroList[41].complexity + "\"><img id=\"" + heroList[41].name + "\" class=\"heroes\" src=\"" + heroList[41].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[42].name + "\nCarry: " + heroList[42].carry + "\nSupport: " + heroList[42].support + "\nNuker: " + heroList[42].nuker + "\nDisabler: " + heroList[42].disabler + "\nJungler: " + heroList[42].jungler + "\nDurabler: " + heroList[42].durable + "\nEscape: " + heroList[42].escape + "\nPusher: " + heroList[42].pusher + "\nInitiator: " + heroList[42].initiator + "\nComplexity: " + heroList[42].complexity + "\"><img id=\"" + heroList[42].name + "\" class=\"heroes\" src=\"" + heroList[42].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[45].name + "\nCarry: " + heroList[45].carry + "\nSupport: " + heroList[45].support + "\nNuker: " + heroList[45].nuker + "\nDisabler: " + heroList[45].disabler + "\nJungler: " + heroList[45].jungler + "\nDurabler: " + heroList[45].durable + "\nEscape: " + heroList[45].escape + "\nPusher: " + heroList[45].pusher + "\nInitiator: " + heroList[45].initiator + "\nComplexity: " + heroList[45].complexity + "\"><img id=\"" + heroList[45].name + "\" class=\"heroes\" src=\"" + heroList[45].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[50].name + "\nCarry: " + heroList[50].carry + "\nSupport: " + heroList[50].support + "\nNuker: " + heroList[50].nuker + "\nDisabler: " + heroList[50].disabler + "\nJungler: " + heroList[50].jungler + "\nDurabler: " + heroList[50].durable + "\nEscape: " + heroList[50].escape + "\nPusher: " + heroList[50].pusher + "\nInitiator: " + heroList[50].initiator + "\nComplexity: " + heroList[50].complexity + "\"><img id=\"" + heroList[50].name + "\" class=\"heroes\" src=\"" + heroList[50].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[51].name + "\nCarry: " + heroList[51].carry + "\nSupport: " + heroList[51].support + "\nNuker: " + heroList[51].nuker + "\nDisabler: " + heroList[51].disabler + "\nJungler: " + heroList[51].jungler + "\nDurabler: " + heroList[51].durable + "\nEscape: " + heroList[51].escape + "\nPusher: " + heroList[51].pusher + "\nInitiator: " + heroList[51].initiator + "\nComplexity: " + heroList[51].complexity + "\"><img id=\"" + heroList[51].name + "\" class=\"heroes\" src=\"" + heroList[51].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[60].name + "\nCarry: " + heroList[60].carry + "\nSupport: " + heroList[60].support + "\nNuker: " + heroList[60].nuker + "\nDisabler: " + heroList[60].disabler + "\nJungler: " + heroList[60].jungler + "\nDurabler: " + heroList[60].durable + "\nEscape: " + heroList[60].escape + "\nPusher: " + heroList[60].pusher + "\nInitiator: " + heroList[60].initiator + "\nComplexity: " + heroList[60].complexity + "\"><img id=\"" + heroList[60].name + "\" class=\"heroes\" src=\"" + heroList[60].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[63].name + "\nCarry: " + heroList[63].carry + "\nSupport: " + heroList[63].support + "\nNuker: " + heroList[63].nuker + "\nDisabler: " + heroList[63].disabler + "\nJungler: " + heroList[63].jungler + "\nDurabler: " + heroList[63].durable + "\nEscape: " + heroList[63].escape + "\nPusher: " + heroList[63].pusher + "\nInitiator: " + heroList[63].initiator + "\nComplexity: " + heroList[63].complexity + "\"><img id=\"" + heroList[63].name + "\" class=\"heroes\" src=\"" + heroList[63].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[68].name + "\nCarry: " + heroList[68].carry + "\nSupport: " + heroList[68].support + "\nNuker: " + heroList[68].nuker + "\nDisabler: " + heroList[68].disabler + "\nJungler: " + heroList[68].jungler + "\nDurabler: " + heroList[68].durable + "\nEscape: " + heroList[68].escape + "\nPusher: " + heroList[68].pusher + "\nInitiator: " + heroList[68].initiator + "\nComplexity: " + heroList[68].complexity + "\"><img id=\"" + heroList[68].name + "\" class=\"heroes\" src=\"" + heroList[68].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[70].name + "\nCarry: " + heroList[70].carry + "\nSupport: " + heroList[70].support + "\nNuker: " + heroList[70].nuker + "\nDisabler: " + heroList[70].disabler + "\nJungler: " + heroList[70].jungler + "\nDurabler: " + heroList[70].durable + "\nEscape: " + heroList[70].escape + "\nPusher: " + heroList[70].pusher + "\nInitiator: " + heroList[70].initiator + "\nComplexity: " + heroList[70].complexity + "\"><img id=\"" + heroList[70].name + "\" class=\"heroes\" src=\"" + heroList[70].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[76].name + "\nCarry: " + heroList[76].carry + "\nSupport: " + heroList[76].support + "\nNuker: " + heroList[76].nuker + "\nDisabler: " + heroList[76].disabler + "\nJungler: " + heroList[76].jungler + "\nDurabler: " + heroList[76].durable + "\nEscape: " + heroList[76].escape + "\nPusher: " + heroList[76].pusher + "\nInitiator: " + heroList[76].initiator + "\nComplexity: " + heroList[76].complexity + "\"><img id=\"" + heroList[76].name + "\" class=\"heroes\" src=\"" + heroList[76].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[82].name + "\nCarry: " + heroList[82].carry + "\nSupport: " + heroList[82].support + "\nNuker: " + heroList[82].nuker + "\nDisabler: " + heroList[82].disabler + "\nJungler: " + heroList[82].jungler + "\nDurabler: " + heroList[82].durable + "\nEscape: " + heroList[82].escape + "\nPusher: " + heroList[82].pusher + "\nInitiator: " + heroList[82].initiator + "\nComplexity: " + heroList[82].complexity + "\"><img id=\"" + heroList[82].name + "\" class=\"heroes\" src=\"" + heroList[82].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[86].name + "\nCarry: " + heroList[86].carry + "\nSupport: " + heroList[86].support + "\nNuker: " + heroList[86].nuker + "\nDisabler: " + heroList[86].disabler + "\nJungler: " + heroList[86].jungler + "\nDurabler: " + heroList[86].durable + "\nEscape: " + heroList[86].escape + "\nPusher: " + heroList[86].pusher + "\nInitiator: " + heroList[86].initiator + "\nComplexity: " + heroList[86].complexity + "\"><img id=\"" + heroList[86].name + "\" class=\"heroes\" src=\"" + heroList[86].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[88].name + "\nCarry: " + heroList[88].carry + "\nSupport: " + heroList[88].support + "\nNuker: " + heroList[88].nuker + "\nDisabler: " + heroList[88].disabler + "\nJungler: " + heroList[88].jungler + "\nDurabler: " + heroList[88].durable + "\nEscape: " + heroList[88].escape + "\nPusher: " + heroList[88].pusher + "\nInitiator: " + heroList[88].initiator + "\nComplexity: " + heroList[88].complexity + "\"><img id=\"" + heroList[88].name + "\" class=\"heroes\" src=\"" + heroList[88].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[92].name + "\nCarry: " + heroList[92].carry + "\nSupport: " + heroList[92].support + "\nNuker: " + heroList[92].nuker + "\nDisabler: " + heroList[92].disabler + "\nJungler: " + heroList[92].jungler + "\nDurabler: " + heroList[92].durable + "\nEscape: " + heroList[92].escape + "\nPusher: " + heroList[92].pusher + "\nInitiator: " + heroList[92].initiator + "\nComplexity: " + heroList[92].complexity + "\"><img id=\"" + heroList[92].name + "\" class=\"heroes\" src=\"" + heroList[92].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[93].name + "\nCarry: " + heroList[93].carry + "\nSupport: " + heroList[93].support + "\nNuker: " + heroList[93].nuker + "\nDisabler: " + heroList[93].disabler + "\nJungler: " + heroList[93].jungler + "\nDurabler: " + heroList[93].durable + "\nEscape: " + heroList[93].escape + "\nPusher: " + heroList[93].pusher + "\nInitiator: " + heroList[93].initiator + "\nComplexity: " + heroList[93].complexity + "\"><img id=\"" + heroList[93].name + "\" class=\"heroes\" src=\"" + heroList[93].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[95].name + "\nCarry: " + heroList[95].carry + "\nSupport: " + heroList[95].support + "\nNuker: " + heroList[95].nuker + "\nDisabler: " + heroList[95].disabler + "\nJungler: " + heroList[95].jungler + "\nDurabler: " + heroList[95].durable + "\nEscape: " + heroList[95].escape + "\nPusher: " + heroList[95].pusher + "\nInitiator: " + heroList[95].initiator + "\nComplexity: " + heroList[95].complexity + "\"><img id=\"" + heroList[95].name + "\" class=\"heroes\" src=\"" + heroList[95].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[96].name + "\nCarry: " + heroList[96].carry + "\nSupport: " + heroList[96].support + "\nNuker: " + heroList[96].nuker + "\nDisabler: " + heroList[96].disabler + "\nJungler: " + heroList[96].jungler + "\nDurabler: " + heroList[96].durable + "\nEscape: " + heroList[96].escape + "\nPusher: " + heroList[96].pusher + "\nInitiator: " + heroList[96].initiator + "\nComplexity: " + heroList[96].complexity + "\"><img id=\"" + heroList[96].name + "\" class=\"heroes\" src=\"" + heroList[96].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[98].name + "\nCarry: " + heroList[98].carry + "\nSupport: " + heroList[98].support + "\nNuker: " + heroList[98].nuker + "\nDisabler: " + heroList[98].disabler + "\nJungler: " + heroList[98].jungler + "\nDurabler: " + heroList[98].durable + "\nEscape: " + heroList[98].escape + "\nPusher: " + heroList[98].pusher + "\nInitiator: " + heroList[98].initiator + "\nComplexity: " + heroList[98].complexity + "\"><img id=\"" + heroList[98].name + "\" class=\"heroes\" src=\"" + heroList[98].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[99].name + "\nCarry: " + heroList[99].carry + "\nSupport: " + heroList[99].support + "\nNuker: " + heroList[99].nuker + "\nDisabler: " + heroList[99].disabler + "\nJungler: " + heroList[99].jungler + "\nDurabler: " + heroList[99].durable + "\nEscape: " + heroList[99].escape + "\nPusher: " + heroList[99].pusher + "\nInitiator: " + heroList[99].initiator + "\nComplexity: " + heroList[99].complexity + "\"><img id=\"" + heroList[99].name + "\" class=\"heroes\" src=\"" + heroList[99].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[100].name + "\nCarry: " + heroList[100].carry + "\nSupport: " + heroList[100].support + "\nNuker: " + heroList[100].nuker + "\nDisabler: " + heroList[100].disabler + "\nJungler: " + heroList[100].jungler + "\nDurabler: " + heroList[100].durable + "\nEscape: " + heroList[100].escape + "\nPusher: " + heroList[100].pusher + "\nInitiator: " + heroList[100].initiator + "\nComplexity: " + heroList[100].complexity + "\"><img id=\"" + heroList[100].name + "\" class=\"heroes\" src=\"" + heroList[100].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[111].name + "\nCarry: " + heroList[111].carry + "\nSupport: " + heroList[111].support + "\nNuker: " + heroList[111].nuker + "\nDisabler: " + heroList[111].disabler + "\nJungler: " + heroList[111].jungler + "\nDurabler: " + heroList[111].durable + "\nEscape: " + heroList[111].escape + "\nPusher: " + heroList[111].pusher + "\nInitiator: " + heroList[111].initiator + "\nComplexity: " + heroList[111].complexity + "\"><img id=\"" + heroList[111].name + "\" class=\"heroes\" src=\"" + heroList[111].imgsrc + "\" onclick=\"selectHero(this.id)\"></a><br><br>";

	// Agility Heroes Alphabetized
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[3].name + "\nCarry: " + heroList[3].carry + "\nSupport: " + heroList[3].support + "\nNuker: " + heroList[3].nuker + "\nDisabler: " + heroList[3].disabler + "\nJungler: " + heroList[3].jungler + "\nDurabler: " + heroList[3].durable + "\nEscape: " + heroList[3].escape + "\nPusher: " + heroList[3].pusher + "\nInitiator: " + heroList[3].initiator + "\nComplexity: " + heroList[3].complexity + "\"><img id=\"" + heroList[3].name + "\" class=\"heroes\" src=\"" + heroList[3].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[4].name + "\nCarry: " + heroList[4].carry + "\nSupport: " + heroList[4].support + "\nNuker: " + heroList[4].nuker + "\nDisabler: " + heroList[4].disabler + "\nJungler: " + heroList[4].jungler + "\nDurabler: " + heroList[4].durable + "\nEscape: " + heroList[4].escape + "\nPusher: " + heroList[4].pusher + "\nInitiator: " + heroList[4].initiator + "\nComplexity: " + heroList[4].complexity + "\"><img id=\"" + heroList[4].name + "\" class=\"heroes\" src=\"" + heroList[4].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[9].name + "\nCarry: " + heroList[9].carry + "\nSupport: " + heroList[9].support + "\nNuker: " + heroList[9].nuker + "\nDisabler: " + heroList[9].disabler + "\nJungler: " + heroList[9].jungler + "\nDurabler: " + heroList[9].durable + "\nEscape: " + heroList[9].escape + "\nPusher: " + heroList[9].pusher + "\nInitiator: " + heroList[9].initiator + "\nComplexity: " + heroList[9].complexity + "\"><img id=\"" + heroList[9].name + "\" class=\"heroes\" src=\"" + heroList[9].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[10].name + "\nCarry: " + heroList[10].carry + "\nSupport: " + heroList[10].support + "\nNuker: " + heroList[10].nuker + "\nDisabler: " + heroList[10].disabler + "\nJungler: " + heroList[10].jungler + "\nDurabler: " + heroList[10].durable + "\nEscape: " + heroList[10].escape + "\nPusher: " + heroList[10].pusher + "\nInitiator: " + heroList[10].initiator + "\nComplexity: " + heroList[10].complexity + "\"><img id=\"" + heroList[10].name + "\" class=\"heroes\" src=\"" + heroList[10].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[13].name + "\nCarry: " + heroList[13].carry + "\nSupport: " + heroList[13].support + "\nNuker: " + heroList[13].nuker + "\nDisabler: " + heroList[13].disabler + "\nJungler: " + heroList[13].jungler + "\nDurabler: " + heroList[13].durable + "\nEscape: " + heroList[13].escape + "\nPusher: " + heroList[13].pusher + "\nInitiator: " + heroList[13].initiator + "\nComplexity: " + heroList[13].complexity + "\"><img id=\"" + heroList[13].name + "\" class=\"heroes\" src=\"" + heroList[13].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[17].name + "\nCarry: " + heroList[17].carry + "\nSupport: " + heroList[17].support + "\nNuker: " + heroList[17].nuker + "\nDisabler: " + heroList[17].disabler + "\nJungler: " + heroList[17].jungler + "\nDurabler: " + heroList[17].durable + "\nEscape: " + heroList[17].escape + "\nPusher: " + heroList[17].pusher + "\nInitiator: " + heroList[17].initiator + "\nComplexity: " + heroList[17].complexity + "\"><img id=\"" + heroList[17].name + "\" class=\"heroes\" src=\"" + heroList[17].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[26].name + "\nCarry: " + heroList[26].carry + "\nSupport: " + heroList[26].support + "\nNuker: " + heroList[26].nuker + "\nDisabler: " + heroList[26].disabler + "\nJungler: " + heroList[26].jungler + "\nDurabler: " + heroList[26].durable + "\nEscape: " + heroList[26].escape + "\nPusher: " + heroList[26].pusher + "\nInitiator: " + heroList[26].initiator + "\nComplexity: " + heroList[26].complexity + "\"><img id=\"" + heroList[26].name + "\" class=\"heroes\" src=\"" + heroList[26].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[30].name + "\nCarry: " + heroList[30].carry + "\nSupport: " + heroList[30].support + "\nNuker: " + heroList[30].nuker + "\nDisabler: " + heroList[30].disabler + "\nJungler: " + heroList[30].jungler + "\nDurabler: " + heroList[30].durable + "\nEscape: " + heroList[30].escape + "\nPusher: " + heroList[30].pusher + "\nInitiator: " + heroList[30].initiator + "\nComplexity: " + heroList[30].complexity + "\"><img id=\"" + heroList[30].name + "\" class=\"heroes\" src=\"" + heroList[30].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[33].name + "\nCarry: " + heroList[33].carry + "\nSupport: " + heroList[33].support + "\nNuker: " + heroList[33].nuker + "\nDisabler: " + heroList[33].disabler + "\nJungler: " + heroList[33].jungler + "\nDurabler: " + heroList[33].durable + "\nEscape: " + heroList[33].escape + "\nPusher: " + heroList[33].pusher + "\nInitiator: " + heroList[33].initiator + "\nComplexity: " + heroList[33].complexity + "\"><img id=\"" + heroList[33].name + "\" class=\"heroes\" src=\"" + heroList[33].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[34].name + "\nCarry: " + heroList[34].carry + "\nSupport: " + heroList[34].support + "\nNuker: " + heroList[34].nuker + "\nDisabler: " + heroList[34].disabler + "\nJungler: " + heroList[34].jungler + "\nDurabler: " + heroList[34].durable + "\nEscape: " + heroList[34].escape + "\nPusher: " + heroList[34].pusher + "\nInitiator: " + heroList[34].initiator + "\nComplexity: " + heroList[34].complexity + "\"><img id=\"" + heroList[34].name + "\" class=\"heroes\" src=\"" + heroList[34].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[39].name + "\nCarry: " + heroList[39].carry + "\nSupport: " + heroList[39].support + "\nNuker: " + heroList[39].nuker + "\nDisabler: " + heroList[39].disabler + "\nJungler: " + heroList[39].jungler + "\nDurabler: " + heroList[39].durable + "\nEscape: " + heroList[39].escape + "\nPusher: " + heroList[39].pusher + "\nInitiator: " + heroList[39].initiator + "\nComplexity: " + heroList[39].complexity + "\"><img id=\"" + heroList[39].name + "\" class=\"heroes\" src=\"" + heroList[39].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[48].name + "\nCarry: " + heroList[48].carry + "\nSupport: " + heroList[48].support + "\nNuker: " + heroList[48].nuker + "\nDisabler: " + heroList[48].disabler + "\nJungler: " + heroList[48].jungler + "\nDurabler: " + heroList[48].durable + "\nEscape: " + heroList[48].escape + "\nPusher: " + heroList[48].pusher + "\nInitiator: " + heroList[48].initiator + "\nComplexity: " + heroList[48].complexity + "\"><img id=\"" + heroList[48].name + "\" class=\"heroes\" src=\"" + heroList[48].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[49].name + "\nCarry: " + heroList[49].carry + "\nSupport: " + heroList[49].support + "\nNuker: " + heroList[49].nuker + "\nDisabler: " + heroList[49].disabler + "\nJungler: " + heroList[49].jungler + "\nDurabler: " + heroList[49].durable + "\nEscape: " + heroList[49].escape + "\nPusher: " + heroList[49].pusher + "\nInitiator: " + heroList[49].initiator + "\nComplexity: " + heroList[49].complexity + "\"><img id=\"" + heroList[49].name + "\" class=\"heroes\" src=\"" + heroList[49].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[52].name + "\nCarry: " + heroList[52].carry + "\nSupport: " + heroList[52].support + "\nNuker: " + heroList[52].nuker + "\nDisabler: " + heroList[52].disabler + "\nJungler: " + heroList[52].jungler + "\nDurabler: " + heroList[52].durable + "\nEscape: " + heroList[52].escape + "\nPusher: " + heroList[52].pusher + "\nInitiator: " + heroList[52].initiator + "\nComplexity: " + heroList[52].complexity + "\"><img id=\"" + heroList[52].name + "\" class=\"heroes\" src=\"" + heroList[52].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[53].name + "\nCarry: " + heroList[53].carry + "\nSupport: " + heroList[53].support + "\nNuker: " + heroList[53].nuker + "\nDisabler: " + heroList[53].disabler + "\nJungler: " + heroList[53].jungler + "\nDurabler: " + heroList[53].durable + "\nEscape: " + heroList[53].escape + "\nPusher: " + heroList[53].pusher + "\nInitiator: " + heroList[53].initiator + "\nComplexity: " + heroList[53].complexity + "\"><img id=\"" + heroList[53].name + "\" class=\"heroes\" src=\"" + heroList[53].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[54].name + "\nCarry: " + heroList[54].carry + "\nSupport: " + heroList[54].support + "\nNuker: " + heroList[54].nuker + "\nDisabler: " + heroList[54].disabler + "\nJungler: " + heroList[54].jungler + "\nDurabler: " + heroList[54].durable + "\nEscape: " + heroList[54].escape + "\nPusher: " + heroList[54].pusher + "\nInitiator: " + heroList[54].initiator + "\nComplexity: " + heroList[54].complexity + "\"><img id=\"" + heroList[54].name + "\" class=\"heroes\" src=\"" + heroList[54].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[55].name + "\nCarry: " + heroList[55].carry + "\nSupport: " + heroList[55].support + "\nNuker: " + heroList[55].nuker + "\nDisabler: " + heroList[55].disabler + "\nJungler: " + heroList[55].jungler + "\nDurabler: " + heroList[55].durable + "\nEscape: " + heroList[55].escape + "\nPusher: " + heroList[55].pusher + "\nInitiator: " + heroList[55].initiator + "\nComplexity: " + heroList[55].complexity + "\"><img id=\"" + heroList[55].name + "\" class=\"heroes\" src=\"" + heroList[55].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[56].name + "\nCarry: " + heroList[56].carry + "\nSupport: " + heroList[56].support + "\nNuker: " + heroList[56].nuker + "\nDisabler: " + heroList[56].disabler + "\nJungler: " + heroList[56].jungler + "\nDurabler: " + heroList[56].durable + "\nEscape: " + heroList[56].escape + "\nPusher: " + heroList[56].pusher + "\nInitiator: " + heroList[56].initiator + "\nComplexity: " + heroList[56].complexity + "\"><img id=\"" + heroList[56].name + "\" class=\"heroes\" src=\"" + heroList[56].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[57].name + "\nCarry: " + heroList[57].carry + "\nSupport: " + heroList[57].support + "\nNuker: " + heroList[57].nuker + "\nDisabler: " + heroList[57].disabler + "\nJungler: " + heroList[57].jungler + "\nDurabler: " + heroList[57].durable + "\nEscape: " + heroList[57].escape + "\nPusher: " + heroList[57].pusher + "\nInitiator: " + heroList[57].initiator + "\nComplexity: " + heroList[57].complexity + "\"><img id=\"" + heroList[57].name + "\" class=\"heroes\" src=\"" + heroList[57].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[61].name + "\nCarry: " + heroList[61].carry + "\nSupport: " + heroList[61].support + "\nNuker: " + heroList[61].nuker + "\nDisabler: " + heroList[61].disabler + "\nJungler: " + heroList[61].jungler + "\nDurabler: " + heroList[61].durable + "\nEscape: " + heroList[61].escape + "\nPusher: " + heroList[61].pusher + "\nInitiator: " + heroList[61].initiator + "\nComplexity: " + heroList[61].complexity + "\"><img id=\"" + heroList[61].name + "\" class=\"heroes\" src=\"" + heroList[61].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[66].name + "\nCarry: " + heroList[66].carry + "\nSupport: " + heroList[66].support + "\nNuker: " + heroList[66].nuker + "\nDisabler: " + heroList[66].disabler + "\nJungler: " + heroList[66].jungler + "\nDurabler: " + heroList[66].durable + "\nEscape: " + heroList[66].escape + "\nPusher: " + heroList[66].pusher + "\nInitiator: " + heroList[66].initiator + "\nComplexity: " + heroList[66].complexity + "\"><img id=\"" + heroList[66].name + "\" class=\"heroes\" src=\"" + heroList[66].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[67].name + "\nCarry: " + heroList[67].carry + "\nSupport: " + heroList[67].support + "\nNuker: " + heroList[67].nuker + "\nDisabler: " + heroList[67].disabler + "\nJungler: " + heroList[67].jungler + "\nDurabler: " + heroList[67].durable + "\nEscape: " + heroList[67].escape + "\nPusher: " + heroList[67].pusher + "\nInitiator: " + heroList[67].initiator + "\nComplexity: " + heroList[67].complexity + "\"><img id=\"" + heroList[67].name + "\" class=\"heroes\" src=\"" + heroList[67].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[73].name + "\nCarry: " + heroList[73].carry + "\nSupport: " + heroList[73].support + "\nNuker: " + heroList[73].nuker + "\nDisabler: " + heroList[73].disabler + "\nJungler: " + heroList[73].jungler + "\nDurabler: " + heroList[73].durable + "\nEscape: " + heroList[73].escape + "\nPusher: " + heroList[73].pusher + "\nInitiator: " + heroList[73].initiator + "\nComplexity: " + heroList[73].complexity + "\"><img id=\"" + heroList[73].name + "\" class=\"heroes\" src=\"" + heroList[73].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[74].name + "\nCarry: " + heroList[74].carry + "\nSupport: " + heroList[74].support + "\nNuker: " + heroList[74].nuker + "\nDisabler: " + heroList[74].disabler + "\nJungler: " + heroList[74].jungler + "\nDurabler: " + heroList[74].durable + "\nEscape: " + heroList[74].escape + "\nPusher: " + heroList[74].pusher + "\nInitiator: " + heroList[74].initiator + "\nComplexity: " + heroList[74].complexity + "\"><img id=\"" + heroList[74].name + "\" class=\"heroes\" src=\"" + heroList[74].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[78].name + "\nCarry: " + heroList[78].carry + "\nSupport: " + heroList[78].support + "\nNuker: " + heroList[78].nuker + "\nDisabler: " + heroList[78].disabler + "\nJungler: " + heroList[78].jungler + "\nDurabler: " + heroList[78].durable + "\nEscape: " + heroList[78].escape + "\nPusher: " + heroList[78].pusher + "\nInitiator: " + heroList[78].initiator + "\nComplexity: " + heroList[78].complexity + "\"><img id=\"" + heroList[78].name + "\" class=\"heroes\" src=\"" + heroList[78].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[83].name + "\nCarry: " + heroList[83].carry + "\nSupport: " + heroList[83].support + "\nNuker: " + heroList[83].nuker + "\nDisabler: " + heroList[83].disabler + "\nJungler: " + heroList[83].jungler + "\nDurabler: " + heroList[83].durable + "\nEscape: " + heroList[83].escape + "\nPusher: " + heroList[83].pusher + "\nInitiator: " + heroList[83].initiator + "\nComplexity: " + heroList[83].complexity + "\"><img id=\"" + heroList[83].name + "\" class=\"heroes\" src=\"" + heroList[83].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[84].name + "\nCarry: " + heroList[84].carry + "\nSupport: " + heroList[84].support + "\nNuker: " + heroList[84].nuker + "\nDisabler: " + heroList[84].disabler + "\nJungler: " + heroList[84].jungler + "\nDurabler: " + heroList[84].durable + "\nEscape: " + heroList[84].escape + "\nPusher: " + heroList[84].pusher + "\nInitiator: " + heroList[84].initiator + "\nComplexity: " + heroList[84].complexity + "\"><img id=\"" + heroList[84].name + "\" class=\"heroes\" src=\"" + heroList[84].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[85].name + "\nCarry: " + heroList[85].carry + "\nSupport: " + heroList[85].support + "\nNuker: " + heroList[85].nuker + "\nDisabler: " + heroList[85].disabler + "\nJungler: " + heroList[85].jungler + "\nDurabler: " + heroList[85].durable + "\nEscape: " + heroList[85].escape + "\nPusher: " + heroList[85].pusher + "\nInitiator: " + heroList[85].initiator + "\nComplexity: " + heroList[85].complexity + "\"><img id=\"" + heroList[85].name + "\" class=\"heroes\" src=\"" + heroList[85].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[90].name + "\nCarry: " + heroList[90].carry + "\nSupport: " + heroList[90].support + "\nNuker: " + heroList[90].nuker + "\nDisabler: " + heroList[90].disabler + "\nJungler: " + heroList[90].jungler + "\nDurabler: " + heroList[90].durable + "\nEscape: " + heroList[90].escape + "\nPusher: " + heroList[90].pusher + "\nInitiator: " + heroList[90].initiator + "\nComplexity: " + heroList[90].complexity + "\"><img id=\"" + heroList[90].name + "\" class=\"heroes\" src=\"" + heroList[90].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[91].name + "\nCarry: " + heroList[91].carry + "\nSupport: " + heroList[91].support + "\nNuker: " + heroList[91].nuker + "\nDisabler: " + heroList[91].disabler + "\nJungler: " + heroList[91].jungler + "\nDurabler: " + heroList[91].durable + "\nEscape: " + heroList[91].escape + "\nPusher: " + heroList[91].pusher + "\nInitiator: " + heroList[91].initiator + "\nComplexity: " + heroList[91].complexity + "\"><img id=\"" + heroList[91].name + "\" class=\"heroes\" src=\"" + heroList[91].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[97].name + "\nCarry: " + heroList[97].carry + "\nSupport: " + heroList[97].support + "\nNuker: " + heroList[97].nuker + "\nDisabler: " + heroList[97].disabler + "\nJungler: " + heroList[97].jungler + "\nDurabler: " + heroList[97].durable + "\nEscape: " + heroList[97].escape + "\nPusher: " + heroList[97].pusher + "\nInitiator: " + heroList[97].initiator + "\nComplexity: " + heroList[97].complexity + "\"><img id=\"" + heroList[97].name + "\" class=\"heroes\" src=\"" + heroList[97].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[101].name + "\nCarry: " + heroList[101].carry + "\nSupport: " + heroList[101].support + "\nNuker: " + heroList[101].nuker + "\nDisabler: " + heroList[101].disabler + "\nJungler: " + heroList[101].jungler + "\nDurabler: " + heroList[101].durable + "\nEscape: " + heroList[101].escape + "\nPusher: " + heroList[101].pusher + "\nInitiator: " + heroList[101].initiator + "\nComplexity: " + heroList[101].complexity + "\"><img id=\"" + heroList[101].name + "\" class=\"heroes\" src=\"" + heroList[101].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[102].name + "\nCarry: " + heroList[102].carry + "\nSupport: " + heroList[102].support + "\nNuker: " + heroList[102].nuker + "\nDisabler: " + heroList[102].disabler + "\nJungler: " + heroList[102].jungler + "\nDurabler: " + heroList[102].durable + "\nEscape: " + heroList[102].escape + "\nPusher: " + heroList[102].pusher + "\nInitiator: " + heroList[102].initiator + "\nComplexity: " + heroList[102].complexity + "\"><img id=\"" + heroList[102].name + "\" class=\"heroes\" src=\"" + heroList[102].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[103].name + "\nCarry: " + heroList[103].carry + "\nSupport: " + heroList[103].support + "\nNuker: " + heroList[103].nuker + "\nDisabler: " + heroList[103].disabler + "\nJungler: " + heroList[103].jungler + "\nDurabler: " + heroList[103].durable + "\nEscape: " + heroList[103].escape + "\nPusher: " + heroList[103].pusher + "\nInitiator: " + heroList[103].initiator + "\nComplexity: " + heroList[103].complexity + "\"><img id=\"" + heroList[103].name + "\" class=\"heroes\" src=\"" + heroList[103].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[104].name + "\nCarry: " + heroList[104].carry + "\nSupport: " + heroList[104].support + "\nNuker: " + heroList[104].nuker + "\nDisabler: " + heroList[104].disabler + "\nJungler: " + heroList[104].jungler + "\nDurabler: " + heroList[104].durable + "\nEscape: " + heroList[104].escape + "\nPusher: " + heroList[104].pusher + "\nInitiator: " + heroList[104].initiator + "\nComplexity: " + heroList[104].complexity + "\"><img id=\"" + heroList[104].name + "\" class=\"heroes\" src=\"" + heroList[104].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[107].name + "\nCarry: " + heroList[107].carry + "\nSupport: " + heroList[107].support + "\nNuker: " + heroList[107].nuker + "\nDisabler: " + heroList[107].disabler + "\nJungler: " + heroList[107].jungler + "\nDurabler: " + heroList[107].durable + "\nEscape: " + heroList[107].escape + "\nPusher: " + heroList[107].pusher + "\nInitiator: " + heroList[107].initiator + "\nComplexity: " + heroList[107].complexity + "\"><img id=\"" + heroList[107].name + "\" class=\"heroes\" src=\"" + heroList[107].imgsrc + "\" onclick=\"selectHero(this.id)\"></a><br> <br>";

	// Intelligence Heroes Alphabetized
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[2].name + "\nCarry: " + heroList[2].carry + "\nSupport: " + heroList[2].support + "\nNuker: " + heroList[2].nuker + "\nDisabler: " + heroList[2].disabler + "\nJungler: " + heroList[2].jungler + "\nDurabler: " + heroList[2].durable + "\nEscape: " + heroList[2].escape + "\nPusher: " + heroList[2].pusher + "\nInitiator: " + heroList[2].initiator + "\nComplexity: " + heroList[2].complexity + "\"><img id=\"" + heroList[2].name + "\" class=\"heroes\" src=\"" + heroList[2].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[6].name + "\nCarry: " + heroList[6].carry + "\nSupport: " + heroList[6].support + "\nNuker: " + heroList[6].nuker + "\nDisabler: " + heroList[6].disabler + "\nJungler: " + heroList[6].jungler + "\nDurabler: " + heroList[6].durable + "\nEscape: " + heroList[6].escape + "\nPusher: " + heroList[6].pusher + "\nInitiator: " + heroList[6].initiator + "\nComplexity: " + heroList[6].complexity + "\"><img id=\"" + heroList[6].name + "\" class=\"heroes\" src=\"" + heroList[6].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[7].name + "\nCarry: " + heroList[7].carry + "\nSupport: " + heroList[7].support + "\nNuker: " + heroList[7].nuker + "\nDisabler: " + heroList[7].disabler + "\nJungler: " + heroList[7].jungler + "\nDurabler: " + heroList[7].durable + "\nEscape: " + heroList[7].escape + "\nPusher: " + heroList[7].pusher + "\nInitiator: " + heroList[7].initiator + "\nComplexity: " + heroList[7].complexity + "\"><img id=\"" + heroList[7].name + "\" class=\"heroes\" src=\"" + heroList[7].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[16].name + "\nCarry: " + heroList[16].carry + "\nSupport: " + heroList[16].support + "\nNuker: " + heroList[16].nuker + "\nDisabler: " + heroList[16].disabler + "\nJungler: " + heroList[16].jungler + "\nDurabler: " + heroList[16].durable + "\nEscape: " + heroList[16].escape + "\nPusher: " + heroList[16].pusher + "\nInitiator: " + heroList[16].initiator + "\nComplexity: " + heroList[16].complexity + "\"><img id=\"" + heroList[16].name + "\" class=\"heroes\" src=\"" + heroList[16].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[19].name + "\nCarry: " + heroList[19].carry + "\nSupport: " + heroList[19].support + "\nNuker: " + heroList[19].nuker + "\nDisabler: " + heroList[19].disabler + "\nJungler: " + heroList[19].jungler + "\nDurabler: " + heroList[19].durable + "\nEscape: " + heroList[19].escape + "\nPusher: " + heroList[19].pusher + "\nInitiator: " + heroList[19].initiator + "\nComplexity: " + heroList[19].complexity + "\"><img id=\"" + heroList[19].name + "\" class=\"heroes\" src=\"" + heroList[19].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[20].name + "\nCarry: " + heroList[20].carry + "\nSupport: " + heroList[20].support + "\nNuker: " + heroList[20].nuker + "\nDisabler: " + heroList[20].disabler + "\nJungler: " + heroList[20].jungler + "\nDurabler: " + heroList[20].durable + "\nEscape: " + heroList[20].escape + "\nPusher: " + heroList[20].pusher + "\nInitiator: " + heroList[20].initiator + "\nComplexity: " + heroList[20].complexity + "\"><img id=\"" + heroList[20].name + "\" class=\"heroes\" src=\"" + heroList[20].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[21].name + "\nCarry: " + heroList[21].carry + "\nSupport: " + heroList[21].support + "\nNuker: " + heroList[21].nuker + "\nDisabler: " + heroList[21].disabler + "\nJungler: " + heroList[21].jungler + "\nDurabler: " + heroList[21].durable + "\nEscape: " + heroList[21].escape + "\nPusher: " + heroList[21].pusher + "\nInitiator: " + heroList[21].initiator + "\nComplexity: " + heroList[21].complexity + "\"><img id=\"" + heroList[21].name + "\" class=\"heroes\" src=\"" + heroList[21].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[22].name + "\nCarry: " + heroList[22].carry + "\nSupport: " + heroList[22].support + "\nNuker: " + heroList[22].nuker + "\nDisabler: " + heroList[22].disabler + "\nJungler: " + heroList[22].jungler + "\nDurabler: " + heroList[22].durable + "\nEscape: " + heroList[22].escape + "\nPusher: " + heroList[22].pusher + "\nInitiator: " + heroList[22].initiator + "\nComplexity: " + heroList[22].complexity + "\"><img id=\"" + heroList[22].name + "\" class=\"heroes\" src=\"" + heroList[22].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[23].name + "\nCarry: " + heroList[23].carry + "\nSupport: " + heroList[23].support + "\nNuker: " + heroList[23].nuker + "\nDisabler: " + heroList[23].disabler + "\nJungler: " + heroList[23].jungler + "\nDurabler: " + heroList[23].durable + "\nEscape: " + heroList[23].escape + "\nPusher: " + heroList[23].pusher + "\nInitiator: " + heroList[23].initiator + "\nComplexity: " + heroList[23].complexity + "\"><img id=\"" + heroList[23].name + "\" class=\"heroes\" src=\"" + heroList[23].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[31].name + "\nCarry: " + heroList[31].carry + "\nSupport: " + heroList[31].support + "\nNuker: " + heroList[31].nuker + "\nDisabler: " + heroList[31].disabler + "\nJungler: " + heroList[31].jungler + "\nDurabler: " + heroList[31].durable + "\nEscape: " + heroList[31].escape + "\nPusher: " + heroList[31].pusher + "\nInitiator: " + heroList[31].initiator + "\nComplexity: " + heroList[31].complexity + "\"><img id=\"" + heroList[31].name + "\" class=\"heroes\" src=\"" + heroList[31].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[32].name + "\nCarry: " + heroList[32].carry + "\nSupport: " + heroList[32].support + "\nNuker: " + heroList[32].nuker + "\nDisabler: " + heroList[32].disabler + "\nJungler: " + heroList[32].jungler + "\nDurabler: " + heroList[32].durable + "\nEscape: " + heroList[32].escape + "\nPusher: " + heroList[32].pusher + "\nInitiator: " + heroList[32].initiator + "\nComplexity: " + heroList[32].complexity + "\"><img id=\"" + heroList[32].name + "\" class=\"heroes\" src=\"" + heroList[32].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[36].name + "\nCarry: " + heroList[36].carry + "\nSupport: " + heroList[36].support + "\nNuker: " + heroList[36].nuker + "\nDisabler: " + heroList[36].disabler + "\nJungler: " + heroList[36].jungler + "\nDurabler: " + heroList[36].durable + "\nEscape: " + heroList[36].escape + "\nPusher: " + heroList[36].pusher + "\nInitiator: " + heroList[36].initiator + "\nComplexity: " + heroList[36].complexity + "\"><img id=\"" + heroList[36].name + "\" class=\"heroes\" src=\"" + heroList[36].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[38].name + "\nCarry: " + heroList[38].carry + "\nSupport: " + heroList[38].support + "\nNuker: " + heroList[38].nuker + "\nDisabler: " + heroList[38].disabler + "\nJungler: " + heroList[38].jungler + "\nDurabler: " + heroList[38].durable + "\nEscape: " + heroList[38].escape + "\nPusher: " + heroList[38].pusher + "\nInitiator: " + heroList[38].initiator + "\nComplexity: " + heroList[38].complexity + "\"><img id=\"" + heroList[38].name + "\" class=\"heroes\" src=\"" + heroList[38].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[40].name + "\nCarry: " + heroList[40].carry + "\nSupport: " + heroList[40].support + "\nNuker: " + heroList[40].nuker + "\nDisabler: " + heroList[40].disabler + "\nJungler: " + heroList[40].jungler + "\nDurabler: " + heroList[40].durable + "\nEscape: " + heroList[40].escape + "\nPusher: " + heroList[40].pusher + "\nInitiator: " + heroList[40].initiator + "\nComplexity: " + heroList[40].complexity + "\"><img id=\"" + heroList[40].name + "\" class=\"heroes\" src=\"" + heroList[40].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[43].name + "\nCarry: " + heroList[43].carry + "\nSupport: " + heroList[43].support + "\nNuker: " + heroList[43].nuker + "\nDisabler: " + heroList[43].disabler + "\nJungler: " + heroList[43].jungler + "\nDurabler: " + heroList[43].durable + "\nEscape: " + heroList[43].escape + "\nPusher: " + heroList[43].pusher + "\nInitiator: " + heroList[43].initiator + "\nComplexity: " + heroList[43].complexity + "\"><img id=\"" + heroList[43].name + "\" class=\"heroes\" src=\"" + heroList[43].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[44].name + "\nCarry: " + heroList[44].carry + "\nSupport: " + heroList[44].support + "\nNuker: " + heroList[44].nuker + "\nDisabler: " + heroList[44].disabler + "\nJungler: " + heroList[44].jungler + "\nDurabler: " + heroList[44].durable + "\nEscape: " + heroList[44].escape + "\nPusher: " + heroList[44].pusher + "\nInitiator: " + heroList[44].initiator + "\nComplexity: " + heroList[44].complexity + "\"><img id=\"" + heroList[44].name + "\" class=\"heroes\" src=\"" + heroList[44].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[46].name + "\nCarry: " + heroList[46].carry + "\nSupport: " + heroList[46].support + "\nNuker: " + heroList[46].nuker + "\nDisabler: " + heroList[46].disabler + "\nJungler: " + heroList[46].jungler + "\nDurabler: " + heroList[46].durable + "\nEscape: " + heroList[46].escape + "\nPusher: " + heroList[46].pusher + "\nInitiator: " + heroList[46].initiator + "\nComplexity: " + heroList[46].complexity + "\"><img id=\"" + heroList[46].name + "\" class=\"heroes\" src=\"" + heroList[46].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[58].name + "\nCarry: " + heroList[58].carry + "\nSupport: " + heroList[58].support + "\nNuker: " + heroList[58].nuker + "\nDisabler: " + heroList[58].disabler + "\nJungler: " + heroList[58].jungler + "\nDurabler: " + heroList[58].durable + "\nEscape: " + heroList[58].escape + "\nPusher: " + heroList[58].pusher + "\nInitiator: " + heroList[58].initiator + "\nComplexity: " + heroList[58].complexity + "\"><img id=\"" + heroList[58].name + "\" class=\"heroes\" src=\"" + heroList[58].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[59].name + "\nCarry: " + heroList[59].carry + "\nSupport: " + heroList[59].support + "\nNuker: " + heroList[59].nuker + "\nDisabler: " + heroList[59].disabler + "\nJungler: " + heroList[59].jungler + "\nDurabler: " + heroList[59].durable + "\nEscape: " + heroList[59].escape + "\nPusher: " + heroList[59].pusher + "\nInitiator: " + heroList[59].initiator + "\nComplexity: " + heroList[59].complexity + "\"><img id=\"" + heroList[59].name + "\" class=\"heroes\" src=\"" + heroList[59].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[62].name + "\nCarry: " + heroList[62].carry + "\nSupport: " + heroList[62].support + "\nNuker: " + heroList[62].nuker + "\nDisabler: " + heroList[62].disabler + "\nJungler: " + heroList[62].jungler + "\nDurabler: " + heroList[62].durable + "\nEscape: " + heroList[62].escape + "\nPusher: " + heroList[62].pusher + "\nInitiator: " + heroList[62].initiator + "\nComplexity: " + heroList[62].complexity + "\"><img id=\"" + heroList[62].name + "\" class=\"heroes\" src=\"" + heroList[62].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[64].name + "\nCarry: " + heroList[64].carry + "\nSupport: " + heroList[64].support + "\nNuker: " + heroList[64].nuker + "\nDisabler: " + heroList[64].disabler + "\nJungler: " + heroList[64].jungler + "\nDurabler: " + heroList[64].durable + "\nEscape: " + heroList[64].escape + "\nPusher: " + heroList[64].pusher + "\nInitiator: " + heroList[64].initiator + "\nComplexity: " + heroList[64].complexity + "\"><img id=\"" + heroList[64].name + "\" class=\"heroes\" src=\"" + heroList[64].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[65].name + "\nCarry: " + heroList[65].carry + "\nSupport: " + heroList[65].support + "\nNuker: " + heroList[65].nuker + "\nDisabler: " + heroList[65].disabler + "\nJungler: " + heroList[65].jungler + "\nDurabler: " + heroList[65].durable + "\nEscape: " + heroList[65].escape + "\nPusher: " + heroList[65].pusher + "\nInitiator: " + heroList[65].initiator + "\nComplexity: " + heroList[65].complexity + "\"><img id=\"" + heroList[65].name + "\" class=\"heroes\" src=\"" + heroList[65].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[69].name + "\nCarry: " + heroList[69].carry + "\nSupport: " + heroList[69].support + "\nNuker: " + heroList[69].nuker + "\nDisabler: " + heroList[69].disabler + "\nJungler: " + heroList[69].jungler + "\nDurabler: " + heroList[69].durable + "\nEscape: " + heroList[69].escape + "\nPusher: " + heroList[69].pusher + "\nInitiator: " + heroList[69].initiator + "\nComplexity: " + heroList[69].complexity + "\"><img id=\"" + heroList[69].name + "\" class=\"heroes\" src=\"" + heroList[69].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[71].name + "\nCarry: " + heroList[71].carry + "\nSupport: " + heroList[71].support + "\nNuker: " + heroList[71].nuker + "\nDisabler: " + heroList[71].disabler + "\nJungler: " + heroList[71].jungler + "\nDurabler: " + heroList[71].durable + "\nEscape: " + heroList[71].escape + "\nPusher: " + heroList[71].pusher + "\nInitiator: " + heroList[71].initiator + "\nComplexity: " + heroList[71].complexity + "\"><img id=\"" + heroList[71].name + "\" class=\"heroes\" src=\"" + heroList[71].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[72].name + "\nCarry: " + heroList[72].carry + "\nSupport: " + heroList[72].support + "\nNuker: " + heroList[72].nuker + "\nDisabler: " + heroList[72].disabler + "\nJungler: " + heroList[72].jungler + "\nDurabler: " + heroList[72].durable + "\nEscape: " + heroList[72].escape + "\nPusher: " + heroList[72].pusher + "\nInitiator: " + heroList[72].initiator + "\nComplexity: " + heroList[72].complexity + "\"><img id=\"" + heroList[72].name + "\" class=\"heroes\" src=\"" + heroList[72].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[75].name + "\nCarry: " + heroList[75].carry + "\nSupport: " + heroList[75].support + "\nNuker: " + heroList[75].nuker + "\nDisabler: " + heroList[75].disabler + "\nJungler: " + heroList[75].jungler + "\nDurabler: " + heroList[75].durable + "\nEscape: " + heroList[75].escape + "\nPusher: " + heroList[75].pusher + "\nInitiator: " + heroList[75].initiator + "\nComplexity: " + heroList[75].complexity + "\"><img id=\"" + heroList[75].name + "\" class=\"heroes\" src=\"" + heroList[75].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[77].name + "\nCarry: " + heroList[77].carry + "\nSupport: " + heroList[77].support + "\nNuker: " + heroList[77].nuker + "\nDisabler: " + heroList[77].disabler + "\nJungler: " + heroList[77].jungler + "\nDurabler: " + heroList[77].durable + "\nEscape: " + heroList[77].escape + "\nPusher: " + heroList[77].pusher + "\nInitiator: " + heroList[77].initiator + "\nComplexity: " + heroList[77].complexity + "\"><img id=\"" + heroList[77].name + "\" class=\"heroes\" src=\"" + heroList[77].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[79].name + "\nCarry: " + heroList[79].carry + "\nSupport: " + heroList[79].support + "\nNuker: " + heroList[79].nuker + "\nDisabler: " + heroList[79].disabler + "\nJungler: " + heroList[79].jungler + "\nDurabler: " + heroList[79].durable + "\nEscape: " + heroList[79].escape + "\nPusher: " + heroList[79].pusher + "\nInitiator: " + heroList[79].initiator + "\nComplexity: " + heroList[79].complexity + "\"><img id=\"" + heroList[79].name + "\" class=\"heroes\" src=\"" + heroList[79].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[80].name + "\nCarry: " + heroList[80].carry + "\nSupport: " + heroList[80].support + "\nNuker: " + heroList[80].nuker + "\nDisabler: " + heroList[80].disabler + "\nJungler: " + heroList[80].jungler + "\nDurabler: " + heroList[80].durable + "\nEscape: " + heroList[80].escape + "\nPusher: " + heroList[80].pusher + "\nInitiator: " + heroList[80].initiator + "\nComplexity: " + heroList[80].complexity + "\"><img id=\"" + heroList[80].name + "\" class=\"heroes\" src=\"" + heroList[80].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[81].name + "\nCarry: " + heroList[81].carry + "\nSupport: " + heroList[81].support + "\nNuker: " + heroList[81].nuker + "\nDisabler: " + heroList[81].disabler + "\nJungler: " + heroList[81].jungler + "\nDurabler: " + heroList[81].durable + "\nEscape: " + heroList[81].escape + "\nPusher: " + heroList[81].pusher + "\nInitiator: " + heroList[81].initiator + "\nComplexity: " + heroList[81].complexity + "\"><img id=\"" + heroList[81].name + "\" class=\"heroes\" src=\"" + heroList[81].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[87].name + "\nCarry: " + heroList[87].carry + "\nSupport: " + heroList[87].support + "\nNuker: " + heroList[87].nuker + "\nDisabler: " + heroList[87].disabler + "\nJungler: " + heroList[87].jungler + "\nDurabler: " + heroList[87].durable + "\nEscape: " + heroList[87].escape + "\nPusher: " + heroList[87].pusher + "\nInitiator: " + heroList[87].initiator + "\nComplexity: " + heroList[87].complexity + "\"><img id=\"" + heroList[87].name + "\" class=\"heroes\" src=\"" + heroList[87].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[89].name + "\nCarry: " + heroList[89].carry + "\nSupport: " + heroList[89].support + "\nNuker: " + heroList[89].nuker + "\nDisabler: " + heroList[89].disabler + "\nJungler: " + heroList[89].jungler + "\nDurabler: " + heroList[89].durable + "\nEscape: " + heroList[89].escape + "\nPusher: " + heroList[89].pusher + "\nInitiator: " + heroList[89].initiator + "\nComplexity: " + heroList[89].complexity + "\"><img id=\"" + heroList[89].name + "\" class=\"heroes\" src=\"" + heroList[89].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[94].name + "\nCarry: " + heroList[94].carry + "\nSupport: " + heroList[94].support + "\nNuker: " + heroList[94].nuker + "\nDisabler: " + heroList[94].disabler + "\nJungler: " + heroList[94].jungler + "\nDurabler: " + heroList[94].durable + "\nEscape: " + heroList[94].escape + "\nPusher: " + heroList[94].pusher + "\nInitiator: " + heroList[94].initiator + "\nComplexity: " + heroList[94].complexity + "\"><img id=\"" + heroList[94].name + "\" class=\"heroes\" src=\"" + heroList[94].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[105].name + "\nCarry: " + heroList[105].carry + "\nSupport: " + heroList[105].support + "\nNuker: " + heroList[105].nuker + "\nDisabler: " + heroList[105].disabler + "\nJungler: " + heroList[105].jungler + "\nDurabler: " + heroList[105].durable + "\nEscape: " + heroList[105].escape + "\nPusher: " + heroList[105].pusher + "\nInitiator: " + heroList[105].initiator + "\nComplexity: " + heroList[105].complexity + "\"><img id=\"" + heroList[105].name + "\" class=\"heroes\" src=\"" + heroList[105].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[106].name + "\nCarry: " + heroList[106].carry + "\nSupport: " + heroList[106].support + "\nNuker: " + heroList[106].nuker + "\nDisabler: " + heroList[106].disabler + "\nJungler: " + heroList[106].jungler + "\nDurabler: " + heroList[106].durable + "\nEscape: " + heroList[106].escape + "\nPusher: " + heroList[106].pusher + "\nInitiator: " + heroList[106].initiator + "\nComplexity: " + heroList[106].complexity + "\"><img id=\"" + heroList[106].name + "\" class=\"heroes\" src=\"" + heroList[106].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[108].name + "\nCarry: " + heroList[108].carry + "\nSupport: " + heroList[108].support + "\nNuker: " + heroList[108].nuker + "\nDisabler: " + heroList[108].disabler + "\nJungler: " + heroList[108].jungler + "\nDurabler: " + heroList[108].durable + "\nEscape: " + heroList[108].escape + "\nPusher: " + heroList[108].pusher + "\nInitiator: " + heroList[108].initiator + "\nComplexity: " + heroList[108].complexity + "\"><img id=\"" + heroList[108].name + "\" class=\"heroes\" src=\"" + heroList[108].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[109].name + "\nCarry: " + heroList[109].carry + "\nSupport: " + heroList[109].support + "\nNuker: " + heroList[109].nuker + "\nDisabler: " + heroList[109].disabler + "\nJungler: " + heroList[109].jungler + "\nDurabler: " + heroList[109].durable + "\nEscape: " + heroList[109].escape + "\nPusher: " + heroList[109].pusher + "\nInitiator: " + heroList[109].initiator + "\nComplexity: " + heroList[109].complexity + "\"><img id=\"" + heroList[109].name + "\" class=\"heroes\" src=\"" + heroList[109].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[110].name + "\nCarry: " + heroList[110].carry + "\nSupport: " + heroList[110].support + "\nNuker: " + heroList[110].nuker + "\nDisabler: " + heroList[110].disabler + "\nJungler: " + heroList[110].jungler + "\nDurabler: " + heroList[110].durable + "\nEscape: " + heroList[110].escape + "\nPusher: " + heroList[110].pusher + "\nInitiator: " + heroList[110].initiator + "\nComplexity: " + heroList[110].complexity + "\"><img id=\"" + heroList[110].name + "\" class=\"heroes\" src=\"" + heroList[110].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
	document.getElementById('displayHeroes').innerHTML += "<a hero=\"" + heroList[112].name + "\nCarry: " + heroList[112].carry + "\nSupport: " + heroList[112].support + "\nNuker: " + heroList[112].nuker + "\nDisabler: " + heroList[112].disabler + "\nJungler: " + heroList[112].jungler + "\nDurabler: " + heroList[112].durable + "\nEscape: " + heroList[112].escape + "\nPusher: " + heroList[112].pusher + "\nInitiator: " + heroList[112].initiator + "\nComplexity: " + heroList[112].complexity + "\"><img id=\"" + heroList[112].name + "\" class=\"heroes\" src=\"" + heroList[112].imgsrc + "\" onclick=\"selectHero(this.id)\"></a>";
}
