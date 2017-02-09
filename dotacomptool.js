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
    	if (img.indexOf('UnpressedButton.jpg')!=-1) {
	    	for (var i = btn[btn.length-1]; i >= 0; i--){
	        	document.getElementById('ComplexityButton' + i).src  = 'PressedButton.jpg';
	        	unpress = 0;
	        }
	    } else {
	    	for (var i = btn[btn.length-1]; i < 10; i++){
	    		document.getElementById('ComplexityButton' + i).src  = 'UnpressedButton.jpg';
	    		unpress = -1;
	    	}
	   	}
    } else if (type === 'melee' || type === 'ranged'){
		if (img.indexOf('UnpressedButton.jpg')!=-1) {
	    	for (var i = btn[btn.length-1]; i >= 1; i--){
	        	document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'PressedButton.jpg';
	        	unpress = 0;
	        }
	    } else {
	    	for (var i = btn[btn.length-1]; i < 6; i++){
	    		document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'UnpressedButton.jpg';
	    		unpress = -1;
	    	}
	   	}
    } else {
	    if (img.indexOf('UnpressedButton.jpg')!=-1) {
	    	for (var i = btn[btn.length-1]; i >= 1; i--){
	        	document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'PressedButton.jpg';
	        	unpress = 0;
	        }
	    } else {
	    	for (var i = btn[btn.length-1]; i < 9; i++){
	    		document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'UnpressedButton.jpg';
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
	if (img.indexOf('UnpressedPlus.jpg')!=-1) {
	    document.getElementById(btn).src  = 'PressedPlus.jpg';
	    toggle = true;
	} else {
		document.getElementById(btn).src  = 'UnpressedPlus.jpg';
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

								document.getElementById('displayArea').innerHTML += heroList[a].name;
								for (var i = heroList[a].name.length; i <= 19; i++){
									document.getElementById('displayArea').innerHTML += "&nbsp;";
								}
								document.getElementById('displayArea').innerHTML += heroList[b].name;
								for (var i = heroList[b].name.length; i <= 19; i++){
									document.getElementById('displayArea').innerHTML += "&nbsp;";
								}
								document.getElementById('displayArea').innerHTML += heroList[c].name;
								for (var i = heroList[c].name.length; i <= 19; i++){
									document.getElementById('displayArea').innerHTML += "&nbsp;";
								}
								document.getElementById('displayArea').innerHTML += heroList[d].name;
								for (var i = heroList[d].name.length; i <= 19; i++){
									document.getElementById('displayArea').innerHTML += "&nbsp;";
								}
								document.getElementById('displayArea').innerHTML += heroList[e].name + "<br>";
								lineCounter++
								pass = false;
							}
							if (lineCounter > 46){
								break quitSearch;
							}
						}
						positionFour++;
						if (lineCounter > 46){
							break quitSearch;
						}
					}
					positionThree++;
					if (lineCounter > 46){
						break quitSearch;
					}
				}
				positionTwo++;
				if (lineCounter > 46){
					break quitSearch;
				}
			}
			positionOne++;
			if (lineCounter > 46){
				break quitSearch;
			}
		}
	if (lineCounter > 46){
		document.getElementById('displayArea').innerHTML += "<br> Too many comps found. Search ended. <br>";
	}
	document.getElementById('displayArea').innerHTML += "Done.";
	document.getElementById('progressArea').innerHTML = "";
}

function loadHeroes(){
	heroList[0] = {name:"Abbadon", carry:1, support:2, nuker:0, disabler:0, jungler:0, durable:2, escape:0, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[1] = {name:"Alchemist", carry:2, support:1, nuker:1, disabler:1, jungler:0, durable:2, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[2] = {name:"Ancient Apparition", carry:0, support:2, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[3] = {name:"Anti-Mage", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[4] = {name:"Arc Warden", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[5] = {name:"Axe", carry:0, support:0, nuker:0, disabler:2, jungler:2, durable:3, escape:0, pusher:0, initiator:3, complexity:1, melee:1, ranged:0};
	heroList[6] = {name:"Bane", carry:0, support:2, nuker:1, disabler:3, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[7] = {name:"Batrider", carry:0, support:0, nuker:0, disabler:2, jungler:2, durable:0, escape:1, pusher:0, initiator:3, complexity:2, melee:0, ranged:1};
	heroList[8] = {name:"Beastmaster", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[9] = {name:"Bloodseeker", carry:1, support:0, nuker:1, disabler:1, jungler:1, durable:0, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[10] = {name:"Bounty Hunter", carry:0, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[11] = {name:"Brewmaster", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:3, complexity:3, melee:1, ranged:0};
	heroList[12] = {name:"Bristleback", carry:2, support:0, nuker:1, disabler:0, jungler:0, durable:3, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[13] = {name:"Broodmother", carry:1, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:3, pusher:3, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[14] = {name:"Centaur Warrunner", carry:0, support:0, nuker:1, disabler:1, jungler:0, durable:3, escape:1, pusher:0, initiator:3, complexity:1, melee:1, ranged:0};
	heroList[15] = {name:"Chaos Knight", carry:3, support:0, nuker:0, disabler:2, jungler:0, durable:2, escape:0, pusher:2, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[16] = {name:"Chen", carry:0, support:2, nuker:0, disabler:0, jungler:3, durable:0, escape:0, pusher:2, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[17] = {name:"Clinkz", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:3, pusher:1, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[18] = {name:"Clockwerk", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:1, escape:0, pusher:0, initiator:3, complexity:2, melee:1, ranged:0};
	heroList[19] = {name:"Crystal Maiden", carry:0, support:3, nuker:2, disabler:2, jungler:1, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[20] = {name:"Dark Seer", carry:0, support:0, nuker:0, disabler:1, jungler:1, durable:0, escape:1, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[21] = {name:"Dazzle", carry:0, support:3, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[22] = {name:"Death Prophet", carry:1, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:3, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[23] = {name:"Disruptor", carry:0, support:2, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:1, complexity:2, melee:0, ranged:1};
	heroList[24] = {name:"Doom", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[25] = {name:"Dragon Knight", carry:2, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:3, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[26] = {name:"Drow Ranger", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:0, escape:0, pusher:1, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[27] = {name:"Earth Spirit", carry:0, support:0, nuker:2, disabler:1, jungler:0, durable:1, escape:2, pusher:0, initiator:1, complexity:3, melee:1, ranged:0};
	heroList[28] = {name:"Earthshaker", carry:0, support:1, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:3, complexity:2, melee:1, ranged:0};
	heroList[29] = {name:"Elder Titan", carry:0, support:0, nuker:1, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[30] = {name:"Ember Spirit", carry:2, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:3, pusher:0, initiator:1, complexity:2, melee:1, ranged:0};
	heroList[31] = {name:"Enchantress", carry:0, support:2, nuker:0, disabler:1, jungler:3, durable:1, escape:0, pusher:2, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[32] = {name:"Enigma", carry:0, support:0, nuker:0, disabler:2, jungler:3, durable:0, escape:0, pusher:2, initiator:2, complexity:2, melee:0, ranged:1};
	heroList[33] = {name:"Faceless Void", carry:2, support:0, nuker:0, disabler:2, jungler:0, durable:1, escape:1, pusher:0, initiator:3, complexity:2, melee:1, ranged:0};
	heroList[34] = {name:"Gyrocopter", carry:3, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[35] = {name:"Huskar", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:2, escape:0, pusher:0, initiator:1, complexity:1, melee:0, ranged:1};
	heroList[36] = {name:"Invoker", carry:1, support:0, nuker:3, disabler:2, jungler:0, durable:0, escape:1, pusher:1, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[37] = {name:"Io", carry:0, support:3, nuker:1, disabler:0, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[38] = {name:"Jakiro", carry:0, support:1, nuker:2, disabler:1, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[39] = {name:"Juggernaut", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:1, pusher:1, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[40] = {name:"Keeper of the Light", carry:0, support:3, nuker:2, disabler:1, jungler:1, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[41] = {name:"Kunkka", carry:1, support:0, nuker:1, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:1, complexity:2, melee:1, ranged:0};
	heroList[42] = {name:"Legion Commander", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:1, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[43] = {name:"Lechrac", carry:1, support:1, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:3, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[44] = {name:"Lich", carry:0, support:3, nuker:2, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[45] = {name:"Lifestealer", carry:2, support:0, nuker:0, disabler:1, jungler:1, durable:2, escape:1, pusher:0, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[46] = {name:"Lina", carry:1, support:1, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[47] = {name:"Lion", carry:0, support:2, nuker:3, disabler:3, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:1, melee:0, ranged:1};
	heroList[48] = {name:"Lone Druid", carry:2, support:0, nuker:0, disabler:0, jungler:1, durable:1, escape:0, pusher:3, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[49] = {name:"Luna", carry:2, support:0, nuker:2, disabler:0, jungler:0, durable:0, escape:0, pusher:1, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[50] = {name:"Lycan", carry:2, support:0, nuker:0, disabler:0, jungler:1, durable:1, escape:1, pusher:3, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[51] = {name:"Magnus", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:3, complexity:2, melee:1, ranged:0};
	heroList[52] = {name:"Medusa", carry:3, support:0, nuker:0, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[53] = {name:"Meepo", carry:2, support:0, nuker:2, disabler:1, jungler:0, durable:0, escape:2, pusher:1, initiator:1, complexity:3, melee:1, ranged:0};
	heroList[54] = {name:"Mirana", carry:1, support:1, nuker:1, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[55] = {name:"Monkey King", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:1, complexity:2, melee:1, ranged:0};
	heroList[56] = {name:"Morphling", carry:3, support:0, nuker:1, disabler:1, jungler:0, durable:2, escape:3, pusher:0, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[57] = {name:"Naga Siren", carry:3, support:1, nuker:0, disabler:2, jungler:0, durable:0, escape:1, pusher:2, initiator:1, complexity:2, melee:1, ranged:0};
	heroList[58] = {name:"Nature's Prophet", carry:1, support:0, nuker:1, disabler:0, jungler:3, durable:0, escape:1, pusher:3, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[59] = {name:"Necrophos", carry:1, support:0, nuker:2, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[60] = {name:"Night Stalker", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:1, melee:1, ranged:0};
	heroList[61] = {name:"Nyx Assassin", carry:0, support:0, nuker:2, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[62] = {name:"Ogre Magi", carry:0, support:2, nuker:2, disabler:2, jungler:0, durable:1, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[63] = {name:"Omniknight", carry:0, support:2, nuker:1, disabler:0, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[64] = {name:"Oracle", carry:0, support:3, nuker:3, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[65] = {name:"Outhouse Decorator", carry:2, support:0, nuker:2, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[66] = {name:"Phantom Assassin", carry:3, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[67] = {name:"Phantom Lancer", carry:2, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:2, pusher:1, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[68] = {name:"Phoenix", carry:0, support:1, nuker:3, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:2, complexity:2, melee:0, ranged:1};
	heroList[69] = {name:"Puck", carry:0, support:0, nuker:2, disabler:3, jungler:0, durable:0, escape:3, pusher:0, initiator:3, complexity:2, melee:0, ranged:1};
	heroList[70] = {name:"Pudge", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[71] = {name:"Pugna", carry:0, support:0, nuker:2, disabler:0, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[72] = {name:"Queen of Pain", carry:1, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[73] = {name:"Razor", carry:2, support:0, nuker:1, disabler:0, jungler:0, durable:2, escape:0, pusher:1, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[74] = {name:"Riki", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[75] = {name:"Rubick", carry:0, support:2, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[76] = {name:"Sand King", carry:0, support:0, nuker:2, disabler:2, jungler:1, durable:0, escape:2, pusher:0, initiator:3, complexity:2, melee:1, ranged:0};
	heroList[77] = {name:"Shadow Demon", carry:0, support:2, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:1, complexity:2, melee:0, ranged:1};
	heroList[78] = {name:"Shadow Fiend", carry:2, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[79] = {name:"Shadow Shaman", carry:0, support:2, nuker:2, disabler:3, jungler:0, durable:0, escape:0, pusher:3, initiator:1, complexity:1, melee:0, ranged:1};
	heroList[80] = {name:"Silencer", carry:1, support:1, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:2, melee:0, ranged:1};
	heroList[81] = {name:"Skywrath Mage", carry:0, support:2, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[82] = {name:"Slardar", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:2, escape:1, pusher:0, initiator:2, complexity:1, melee:1, ranged:0};
	heroList[83] = {name:"Slark", carry:2, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[84] = {name:"Sniper", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[85] = {name:"Spectre", carry:3, support:0, nuker:0, disabler:0, jungler:0, durable:1, escape:1, pusher:0, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[86] = {name:"Spirit Breaker", carry:1, support:0, nuker:0, disabler:2, jungler:0, durable:2, escape:1, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[87] = {name:"Storm Spirit", carry:2, support:0, nuker:2, disabler:1, jungler:0, durable:0, escape:3, pusher:0, initiator:1, complexity:3, melee:0, ranged:1};
	heroList[88] = {name:"Sven", carry:2, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:1, melee:1, ranged:0};
	heroList[89] = {name:"Techies", carry:0, support:0, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[90] = {name:"Templar Assassin", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[91] = {name:"Terrorblade", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[92] = {name:"Tidehunter", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:3, escape:0, pusher:0, initiator:3, complexity:1, melee:1, ranged:0};
	heroList[93] = {name:"Timbersaw", carry:0, support:0, nuker:3, disabler:0, jungler:0, durable:2, escape:2, pusher:0, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[94] = {name:"Tinker", carry:1, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[95] = {name:"Tiny", carry:3, support:0, nuker:2, disabler:1, jungler:0, durable:2, escape:0, pusher:2, initiator:2, complexity:1, melee:1, ranged:0};
	heroList[96] = {name:"Treant Protector", carry:0, support:3, nuker:0, disabler:1, jungler:0, durable:1, escape:1, pusher:0, initiator:2, complexity:2, melee:1, ranged:0};
	heroList[97] = {name:"Troll Warlord", carry:3, support:0, nuker:0, disabler:1, jungler:0, durable:1, escape:0, pusher:2, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[98] = {name:"Tusk", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:1, melee:1, ranged:0};
	heroList[99] = {name:"Underlord", carry:0, support:1, nuker:1, disabler:1, jungler:0, durable:1, escape:2, pusher:0, initiator:0, complexity:2, melee:1, ranged:0};
	heroList[100] = {name:"Undying", carry:0, support:1, nuker:1, disabler:1, jungler:0, durable:2, escape:0, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[101] = {name:"Ursa", carry:2, support:0, nuker:0, disabler:1, jungler:1, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:1, ranged:0};
	heroList[102] = {name:"Vengeful Spirit", carry:0, support:3, nuker:1, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:2, complexity:1, melee:0, ranged:1};
	heroList[103] = {name:"Venomancer", carry:0, support:2, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:1, initiator:1, complexity:1, melee:0, ranged:1};
	heroList[104] = {name:"Viper", carry:1, support:0, nuker:0, disabler:1, jungler:0, durable:2, escape:0, pusher:0, initiator:1, complexity:1, melee:0, ranged:1};
	heroList[105] = {name:"Visage", carry:0, support:1, nuker:2, disabler:1, jungler:0, durable:1, escape:0, pusher:1, initiator:0, complexity:3, melee:0, ranged:1};
	heroList[106] = {name:"Warlock", carry:0, support:1, nuker:0, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:1, melee:0, ranged:1};
	heroList[107] = {name:"Weaver", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[108] = {name:"Windranger", carry:1, support:1, nuker:1, disabler:1, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[109] = {name:"Winter Wyvern", carry:0, support:3, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:0, ranged:1};
	heroList[110] = {name:"Witch Doctor", carry:0, support:3, nuker:2, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
	heroList[111] = {name:"Wraith King", carry:2, support:1, nuker:0, disabler:2, jungler:0, durable:3, escape:0, pusher:0, initiator:1, complexity:1, melee:1, ranged:0};
	heroList[112] = {name:"Zeus", carry:0, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:0, ranged:1};
}
