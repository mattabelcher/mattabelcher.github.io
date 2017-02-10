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
var heroList = [113];
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

document.addEventListener('DOMContentLoaded', function(){
	loadHeroes();
}, false);

 function selectValue(btn, type) {
 	var unpress = 0;
    var img = document.getElementById(btn).src;
    if (type === 'complexity'){
    	if (img.indexOf('images/UnpressedButton.jpg')!=-1) {
	    	for (var i = btn[btn.length-1]; i >= 0; i--){
	        	document.getElementById('ComplexityButton' + i).src  = 'images/PressedButton.jpg';
	        	unpress = 0;
	        }
	    } else {
	    	for (var i = btn[btn.length-1]; i < 10; i++){
	    		document.getElementById('ComplexityButton' + i).src  = 'images/UnpressedButton.jpg';
	    		unpress = -1;
	    	}
	   	}
    } else if (type === 'melee' || type === 'ranged'){
		if (img.indexOf('images/UnpressedButton.jpg')!=-1) {
	    	for (var i = btn[btn.length-1]; i >= 1; i--){
	        	document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'images/PressedButton.jpg';
	        	unpress = 0;
	        }
	    } else {
	    	for (var i = btn[btn.length-1]; i < 6; i++){
	    		document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'images/UnpressedButton.jpg';
	    		unpress = -1;
	    	}
	   	}
    } else {
	    if (img.indexOf('images/UnpressedButton.jpg')!=-1) {
	    	for (var i = btn[btn.length-1]; i >= 1; i--){
	        	document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'images/PressedButton.jpg';
	        	unpress = 0;
	        }
	    } else {
	    	for (var i = btn[btn.length-1]; i < 9; i++){
	    		document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'images/UnpressedButton.jpg';
	    		unpress = -1;
	    	}
	   	}
	}
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

function togglePlus(btn, type){
	var toggle = false;
	var img = document.getElementById(btn).src;
	if (img.indexOf('images/UnpressedPlus.jpg')!=-1) {
	    document.getElementById(btn).src  = 'images/PressedPlus.jpg';
	    toggle = true;
	} else {
		document.getElementById(btn).src  = 'images/UnpressedPlus.jpg';
	}

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

function beginCompSearch(){
	document.getElementById('progressArea').innerHTML = "Finding comps. This may take a moment. <br>";
	document.getElementById('displayArea').innerHTML = "";
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

								document.getElementById('displayArea').innerHTML += "<a data=\"" + heroList[a].name + "\nCarry: " + heroList[a].carry + "\nSupport: " + heroList[a].support + "\nNuker: " + heroList[a].nuker + "\nDisabler: " + heroList[a].disabler + "\nJungler: " + heroList[a].jungler + "\nDurabler: " + heroList[a].durable + "\nEscape: " + heroList[a].escape + "\nPusher: " + heroList[a].pusher + "\nInitiator: " + heroList[a].initiator + "\nComplexity: " + heroList[a].complexity + "\"><img src=\"" + heroList[a].imgsrc + "\"> </a>";
								document.getElementById('displayArea').innerHTML += "<a data=\"" + heroList[b].name + "\nCarry: " + heroList[b].carry + "\nSupport: " + heroList[b].support + "\nNuker: " + heroList[b].nuker + "\nDisabler: " + heroList[b].disabler + "\nJungler: " + heroList[b].jungler + "\nDurabler: " + heroList[b].durable + "\nEscape: " + heroList[b].escape + "\nPusher: " + heroList[b].pusher + "\nInitiator: " + heroList[b].initiator + "\nComplexity: " + heroList[b].complexity + "\"><img src=\"" + heroList[b].imgsrc + "\"> </a>";
								document.getElementById('displayArea').innerHTML += "<a data=\"" + heroList[c].name + "\nCarry: " + heroList[c].carry + "\nSupport: " + heroList[c].support + "\nNuker: " + heroList[c].nuker + "\nDisabler: " + heroList[c].disabler + "\nJungler: " + heroList[c].jungler + "\nDurabler: " + heroList[c].durable + "\nEscape: " + heroList[c].escape + "\nPusher: " + heroList[c].pusher + "\nInitiator: " + heroList[c].initiator + "\nComplexity: " + heroList[c].complexity + "\"><img src=\"" + heroList[c].imgsrc + "\"> </a>";
								document.getElementById('displayArea').innerHTML += "<a data=\"" + heroList[d].name + "\nCarry: " + heroList[d].carry + "\nSupport: " + heroList[d].support + "\nNuker: " + heroList[d].nuker + "\nDisabler: " + heroList[d].disabler + "\nJungler: " + heroList[d].jungler + "\nDurabler: " + heroList[d].durable + "\nEscape: " + heroList[d].escape + "\nPusher: " + heroList[d].pusher + "\nInitiator: " + heroList[d].initiator + "\nComplexity: " + heroList[d].complexity + "\"><img src=\"" + heroList[d].imgsrc + "\"> </a>";
								document.getElementById('displayArea').innerHTML += "<a data=\"" + heroList[e].name + "\nCarry: " + heroList[e].carry + "\nSupport: " + heroList[e].support + "\nNuker: " + heroList[e].nuker + "\nDisabler: " + heroList[e].disabler + "\nJungler: " + heroList[e].jungler + "\nDurabler: " + heroList[e].durable + "\nEscape: " + heroList[e].escape + "\nPusher: " + heroList[e].pusher + "\nInitiator: " + heroList[e].initiator + "\nComplexity: " + heroList[e].complexity + "\"><img src=\"" + heroList[e].imgsrc + "\"> </a><br>";
								lineCounter++
								pass = false;
							}
							if (lineCounter > 15){
								break quitSearch;
							}
						}
						positionFour++;
						if (lineCounter > 15){
							break quitSearch;
						}
					}
					positionThree++;
					if (lineCounter > 15){
						break quitSearch;
					}
				}
				positionTwo++;
				if (lineCounter > 15){
					break quitSearch;
				}
			}
			positionOne++;
			if (lineCounter > 15){
				break quitSearch;
			}
		}
	if (lineCounter > 15){
		document.getElementById('displayArea').innerHTML += "<br> Too many comps found. Search ended. <br>";
	}
	document.getElementById('displayArea').innerHTML += "Done.";
	document.getElementById('progressArea').innerHTML = "";
}

function loadHeroes(){
	heroList[0] = {name:"Abbadon", imgsrc:"images/abaddon.png", carry:1, support:2, nuker:0, disabler:0, jungler:0, durable:2, escape:0, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
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
}
