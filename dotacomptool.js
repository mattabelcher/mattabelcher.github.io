var carry = 0;
var support = 0;
var nuker = 0;
var disabler = 0;
var jungler = 0;
var durable = 0;
var escape = 0;
var pusher = 0;
var initiator = 0;
var heroList = [113];

 function selectValue(btn, type) {
    var img = document.getElementById(btn).src;
    if (img.indexOf('UnpressedButton.jpg')!=-1) {
    	for (var i = btn[btn.length-1]; i >= 1; i--){
        	document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'PressedButton.jpg';
        }
    } else {
    	for (var i = btn[btn.length-1]; i < 9; i++){
    		document.getElementById(btn.substring(0,btn.length-1) + i).src  = 'UnpressedButton.jpg';
    	}
   }
   switch (type) {
   		case 'carry':
   			carry = btn[btn.length-1];
   			break;
   		case 'support':
   			support = btn[btn.length-1];
   			break;
   		case 'nuker':
   			nuker = btn[btn.length-1];
   			break;
   		case 'disabler':
   			disabler = btn[btn.length-1];
   			break;
   		case 'jungler':
   			jungler = btn[btn.length-1];
   			break;
   		case 'durable':
   			durable = btn[btn.length-1];
   			break;
   		case 'escape':
   			escape = btn[btn.length-1];
   			break;
   		case 'pusher':
   			pusher = btn[btn.length-1];
   			break;
   		case 'initiator':
   			initiator = btn[btn.length-1];
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
	for (var a = 0; a < heroList.length; a++){
		positionTwo = positionOne + 1;
		for (var b = positionOne; b < heroList.length; b++){
			positionThree = positionTwo + 1;
			for (var c = positionTwo; c < heroList.length; c++){
				positionFour = positionThree + 1;
				for (var d = positionThree; d < heroList.length; d++){
					for (var e = positionFour; e < heroList.length; e++){
						if (heroList[a].carry + heroList[b].carry + heroList[c].carry + heroList[d].carry + heroList[e].carry >= carry &&
							heroList[a].support + heroList[b].support + heroList[c].support + heroList[d].support + heroList[e].support >= support &&
							heroList[a].nuker + heroList[b].nuker + heroList[c].nuker + heroList[d].nuker + heroList[e].nuker >= nuker &&
							heroList[a].disabler + heroList[b].disabler + heroList[c].disabler + heroList[d].disabler + heroList[e].disabler >= disabler &&
							heroList[a].jungler + heroList[b].jungler + heroList[c].jungler + heroList[d].jungler + heroList[e].jungler >= jungler &&
							heroList[a].durable + heroList[b].durable + heroList[c].durable + heroList[d].durable + heroList[e].durable >= durable &&
							heroList[a].escape + heroList[b].escape + heroList[c].escape + heroList[d].escape + heroList[e].escape >= escape &&
							heroList[a].pusher + heroList[b].pusher + heroList[c].pusher + heroList[d].pusher + heroList[e].pusher >= pusher &&
							heroList[a].initiator + heroList[b].initiator + heroList[c].initiator + heroList[d].initiator + heroList[e].initiator >= initiator){
							document.getElementById('displayArea').innerHTML += heroList[a].name;
							for (var i = heroList[a].name.length; i <= 20; i++){
								document.getElementById('displayArea').innerHTML += "&nbsp;";
							}
							document.getElementById('displayArea').innerHTML += heroList[b].name;
							for (var i = heroList[b].name.length; i <= 20; i++){
								document.getElementById('displayArea').innerHTML += "&nbsp;";
							}
							document.getElementById('displayArea').innerHTML += heroList[c].name;
							for (var i = heroList[c].name.length; i <= 20; i++){
								document.getElementById('displayArea').innerHTML += "&nbsp;";
							}
							document.getElementById('displayArea').innerHTML += heroList[d].name;
							for (var i = heroList[d].name.length; i <= 20; i++){
								document.getElementById('displayArea').innerHTML += "&nbsp;";
							}
							document.getElementById('displayArea').innerHTML += heroList[e].name + "<br>";
							lineCounter++;
						}
						if (lineCounter > 43){
							break;
						}
					}
					positionFour++;
					if (lineCounter > 43){
						break;
					}
				}
				positionThree++;
				if (lineCounter > 43){
					break;
				}
			}
			positionTwo++;
			if (lineCounter > 43){
				break;
			}
		}
		positionOne++;
		if (lineCounter > 43){
			document.getElementById('displayArea').innerHTML += "<br> Too many comps found. Search ended. <br>";
			break;
		}
	}
	document.getElementById('displayArea').innerHTML += "Done.";
	document.getElementById('progressArea').innerHTML = "";
}

function loadHeroes(){
	heroList[0] = {name:"Abbadon", carry:1, support:2, nuker:0, disabler:0, jungler:0, durable:2, escape:0, pusher:0, initiator:0, complexity:1, melee:true};
	heroList[1] = {name:"Alchemist", carry:2, support:1, nuker:1, disabler:1, jungler:0, durable:2, escape:0, pusher:0, initiator:1, complexity:1, melee:true};
	heroList[2] = {name:"Ancient Apparition", carry:0, support:2, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[3] = {name:"Anti-Mage", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:1, melee:true};
	heroList[4] = {name:"Arc_Warden", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:3, melee:false};
	heroList[5] = {name:"Axe", carry:0, support:0, nuker:0, disabler:2, jungler:2, durable:3, escape:0, pusher:0, initiator:3, complexity:1, melee:true};
	heroList[6] = {name:"Bane", carry:0, support:2, nuker:1, disabler:3, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[7] = {name:"Batrider", carry:0, support:0, nuker:0, disabler:2, jungler:2, durable:0, escape:1, pusher:0, initiator:3, complexity:2, melee:false};
	heroList[8] = {name:"Beastmaster", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:2, melee:true};
	heroList[9] = {name:"Bloodseeker", carry:1, support:0, nuker:1, disabler:1, jungler:1, durable:0, escape:0, pusher:0, initiator:1, complexity:1, melee:true};
	heroList[10] = {name:"Bounty_Hunter", carry:0, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:1, melee:true};
	heroList[11] = {name:"Brewmaster", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:3, complexity:3, melee:true};
	heroList[12] = {name:"Bristleback", carry:2, support:0, nuker:1, disabler:0, jungler:0, durable:3, escape:0, pusher:0, initiator:1, complexity:1, melee:true};
	heroList[13] = {name:"Broodmother", carry:1, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:3, pusher:3, initiator:0, complexity:2, melee:true};
	heroList[14] = {name:"Centaur_Warrunner", carry:0, support:0, nuker:1, disabler:1, jungler:0, durable:3, escape:1, pusher:0, initiator:3, complexity:1, melee:true};
	heroList[15] = {name:"Chaos_Knight", carry:3, support:0, nuker:0, disabler:2, jungler:0, durable:2, escape:0, pusher:2, initiator:1, complexity:1, melee:true};
	heroList[16] = {name:"Chen", carry:0, support:2, nuker:0, disabler:0, jungler:3, durable:0, escape:0, pusher:2, initiator:0, complexity:3, melee:false};
	heroList[17] = {name:"Clinkz", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:3, pusher:1, initiator:0, complexity:2, melee:false};
	heroList[18] = {name:"Clockwerk", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:1, escape:0, pusher:0, initiator:3, complexity:2, melee:true};
	heroList[19] = {name:"Crystal_Maiden", carry:0, support:3, nuker:2, disabler:2, jungler:1, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	heroList[20] = {name:"Dark_Seer", carry:0, support:0, nuker:0, disabler:1, jungler:1, durable:0, escape:1, pusher:0, initiator:1, complexity:1, melee:true};
	heroList[21] = {name:"Dazzle", carry:0, support:3, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	heroList[22] = {name:"Death_Prophet", carry:1, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:3, initiator:0, complexity:1, melee:false};
	heroList[23] = {name:"Disruptor", carry:0, support:2, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:1, complexity:2, melee:false};
	heroList[24] = {name:"Doom", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:2, melee:true};
	heroList[25] = {name:"Dragon_Knight", carry:2, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:3, initiator:1, complexity:1, melee:true};
	heroList[26] = {name:"Drow_Ranger", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:0, escape:0, pusher:1, initiator:0, complexity:1, melee:false};
	heroList[27] = {name:"Earth_Spirit", carry:0, support:0, nuker:2, disabler:1, jungler:0, durable:1, escape:2, pusher:0, initiator:1, complexity:3, melee:true};
	heroList[28] = {name:"Earthshaker", carry:0, support:1, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:3, complexity:2, melee:true};
	heroList[29] = {name:"Elder_Titan", carry:0, support:0, nuker:1, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:2, complexity:2, melee:true};
	heroList[30] = {name:"Ember_Spirit", carry:2, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:3, pusher:0, initiator:1, complexity:2, melee:true};
	heroList[31] = {name:"Enchantress", carry:0, support:2, nuker:0, disabler:1, jungler:3, durable:1, escape:0, pusher:2, initiator:0, complexity:2, melee:false};
	heroList[32] = {name:"Enigma", carry:0, support:0, nuker:0, disabler:2, jungler:3, durable:0, escape:0, pusher:2, initiator:2, complexity:2, melee:false};
	heroList[33] = {name:"Faceless_Void", carry:2, support:0, nuker:0, disabler:2, jungler:0, durable:1, escape:1, pusher:0, initiator:3, complexity:2, melee:true};
	heroList[34] = {name:"Gyrocopter", carry:3, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	heroList[35] = {name:"Huskar", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:2, escape:0, pusher:0, initiator:1, complexity:1, melee:false};
	heroList[36] = {name:"Invoker", carry:1, support:0, nuker:3, disabler:2, jungler:0, durable:0, escape:1, pusher:1, initiator:0, complexity:3, melee:false};
	heroList[37] = {name:"Io", carry:0, support:3, nuker:1, disabler:0, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:3, melee:false};
	heroList[38] = {name:"Jakiro", carry:0, support:1, nuker:2, disabler:1, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:1, melee:false};
	heroList[39] = {name:"Juggernaut", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:1, pusher:1, initiator:0, complexity:1, melee:true};
	heroList[40] = {name:"Keeper_of_the_Light", carry:0, support:3, nuker:2, disabler:1, jungler:1, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[41] = {name:"Kunkka", carry:1, support:0, nuker:1, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:1, complexity:2, melee:true};
	heroList[42] = {name:"Legion_Commander", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:1, escape:0, pusher:0, initiator:1, complexity:1, melee:true};
	heroList[43] = {name:"Lechrac", carry:1, support:1, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:3, initiator:0, complexity:1, melee:false};
	heroList[44] = {name:"Lich", carry:0, support:3, nuker:2, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	heroList[45] = {name:"Lifestealer", carry:2, support:0, nuker:0, disabler:1, jungler:1, durable:2, escape:1, pusher:0, initiator:0, complexity:2, melee:true};
	heroList[46] = {name:"Lina", carry:1, support:1, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	heroList[47] = {name:"Lion", carry:0, support:2, nuker:3, disabler:3, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:1, melee:false};
	heroList[48] = {name:"Lone_Druid", carry:2, support:0, nuker:0, disabler:0, jungler:1, durable:1, escape:0, pusher:3, initiator:0, complexity:3, melee:false};
	heroList[49] = {name:"Luna", carry:2, support:0, nuker:2, disabler:0, jungler:0, durable:0, escape:0, pusher:1, initiator:0, complexity:1, melee:false};
	heroList[50] = {name:"Lycan", carry:2, support:0, nuker:0, disabler:0, jungler:1, durable:1, escape:1, pusher:3, initiator:0, complexity:2, melee:true};
	heroList[51] = {name:"Magnus", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:3, complexity:2, melee:true};
	heroList[52] = {name:"Medusa", carry:3, support:0, nuker:0, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	heroList[53] = {name:"Meepo", carry:2, support:0, nuker:2, disabler:1, jungler:0, durable:0, escape:2, pusher:1, initiator:1, complexity:3, melee:true};
	heroList[54] = {name:"Mirana", carry:1, support:1, nuker:1, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[55] = {name:"Monkey_King", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:1, complexity:2, melee:true};
	heroList[56] = {name:"Morphling", carry:3, support:0, nuker:1, disabler:1, jungler:0, durable:2, escape:3, pusher:0, initiator:0, complexity:3, melee:false};
	heroList[57] = {name:"Naga_Siren", carry:3, support:1, nuker:0, disabler:2, jungler:0, durable:0, escape:1, pusher:2, initiator:1, complexity:2, melee:true};
	heroList[58] = {name:"Nature's_Prophet", carry:1, support:0, nuker:1, disabler:0, jungler:3, durable:0, escape:1, pusher:3, initiator:0, complexity:2, melee:false};
	heroList[59] = {name:"Necrophos", carry:1, support:0, nuker:2, disabler:1, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	heroList[60] = {name:"Night_Stalker", carry:1, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:1, melee:true};
	heroList[61] = {name:"Nyx_Assassin", carry:0, support:0, nuker:2, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:2, complexity:2, melee:true};
	heroList[62] = {name:"Ogre_Magi", carry:0, support:2, nuker:2, disabler:2, jungler:0, durable:1, escape:0, pusher:0, initiator:1, complexity:1, melee:true};
	heroList[63] = {name:"Omniknight", carry:0, support:2, nuker:1, disabler:0, jungler:0, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:true};
	heroList[64] = {name:"Oracle", carry:0, support:3, nuker:3, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:3, melee:false};
	heroList[65] = {name:"Outhouse_Decorator", carry:2, support:0, nuker:2, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[66] = {name:"Phantom_Assassin", carry:3, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:1, melee:true};
	heroList[67] = {name:"Phantom_Lancer", carry:2, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:2, pusher:1, initiator:0, complexity:2, melee:true};
	heroList[68] = {name:"Phoenix", carry:0, support:1, nuker:3, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:2, complexity:2, melee:false};
	heroList[69] = {name:"Puck", carry:0, support:0, nuker:2, disabler:3, jungler:0, durable:0, escape:3, pusher:0, initiator:3, complexity:2, melee:false};
	heroList[70] = {name:"Pudge", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:2, melee:true};
	heroList[71] = {name:"Pugna", carry:0, support:0, nuker:2, disabler:0, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:2, melee:false};
	heroList[72] = {name:"Queen_of_Pain", carry:1, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[73] = {name:"Razor", carry:2, support:0, nuker:1, disabler:0, jungler:0, durable:2, escape:0, pusher:1, initiator:0, complexity:1, melee:false};
	heroList[74] = {name:"Riki", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:0, escape:2, pusher:0, initiator:0, complexity:1, melee:true};
	heroList[75] = {name:"Rubick", carry:0, support:2, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:3, melee:false};
	heroList[76] = {name:"Sand_King", carry:0, support:0, nuker:2, disabler:2, jungler:1, durable:0, escape:2, pusher:0, initiator:3, complexity:2, melee:true};
	heroList[77] = {name:"Shadow_Demon", carry:0, support:2, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:1, complexity:2, melee:false};
	heroList[78] = {name:"Shadow_Fiend", carry:2, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[79] = {name:"Shadow_Shaman", carry:0, support:2, nuker:2, disabler:3, jungler:0, durable:0, escape:0, pusher:3, initiator:1, complexity:1, melee:false};
	heroList[80] = {name:"Silencer", carry:1, support:1, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:2, melee:false};
	heroList[81] = {name:"Skywrath_Mage", carry:0, support:2, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	heroList[82] = {name:"Slardar", carry:2, support:0, nuker:0, disabler:1, jungler:0, durable:2, escape:1, pusher:0, initiator:2, complexity:1, melee:true};
	heroList[83] = {name:"Slark", carry:2, support:0, nuker:1, disabler:1, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:1, melee:true};
	heroList[84] = {name:"Sniper", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	heroList[85] = {name:"Spectre", carry:3, support:0, nuker:0, disabler:0, jungler:0, durable:1, escape:1, pusher:0, initiator:0, complexity:2, melee:true};
	heroList[86] = {name:"Spirit_Breaker", carry:1, support:0, nuker:0, disabler:2, jungler:0, durable:2, escape:1, pusher:0, initiator:2, complexity:2, melee:true};
	heroList[87] = {name:"Storm_Spirit", carry:2, support:0, nuker:2, disabler:1, jungler:0, durable:0, escape:3, pusher:0, initiator:1, complexity:3, melee:false};
	heroList[88] = {name:"Sven", carry:2, support:0, nuker:1, disabler:2, jungler:0, durable:2, escape:0, pusher:0, initiator:2, complexity:1, melee:true};
	heroList[89] = {name:"Techies", carry:0, support:0, nuker:3, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[90] = {name:"Templar_Assassin", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[91] = {name:"Terrorblade", carry:3, support:0, nuker:1, disabler:0, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:2, melee:true};
	heroList[92] = {name:"Tidehunter", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:3, escape:0, pusher:0, initiator:3, complexity:1, melee:true};
	heroList[93] = {name:"Timbersaw", carry:0, support:0, nuker:3, disabler:0, jungler:0, durable:2, escape:2, pusher:0, initiator:0, complexity:2, melee:true};
	heroList[94] = {name:"Tinker", carry:1, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:0, pusher:2, initiator:0, complexity:2, melee:false};
	heroList[95] = {name:"Tiny", carry:3, support:0, nuker:2, disabler:1, jungler:0, durable:2, escape:0, pusher:2, initiator:2, complexity:1, melee:true};
	heroList[96] = {name:"Treant_Protector", carry:0, support:3, nuker:0, disabler:1, jungler:0, durable:1, escape:1, pusher:0, initiator:2, complexity:2, melee:true};
	heroList[97] = {name:"Troll_Warlord", carry:3, support:0, nuker:0, disabler:1, jungler:0, durable:1, escape:0, pusher:2, initiator:0, complexity:2, melee:false};
	heroList[98] = {name:"Tusk", carry:0, support:0, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:1, melee:true};
	heroList[99] = {name:"Underlord", carry:0, support:1, nuker:1, disabler:1, jungler:0, durable:1, escape:2, pusher:0, initiator:0, complexity:2, melee:true};
	heroList[100] = {name:"Undying", carry:0, support:1, nuker:1, disabler:1, jungler:0, durable:2, escape:0, pusher:0, initiator:0, complexity:1, melee:true};
	heroList[101] = {name:"Ursa", carry:2, support:0, nuker:0, disabler:1, jungler:1, durable:1, escape:0, pusher:0, initiator:0, complexity:1, melee:true};
	heroList[102] = {name:"Vengeful_Spirit", carry:0, support:3, nuker:1, disabler:2, jungler:0, durable:0, escape:1, pusher:0, initiator:2, complexity:1, melee:false};
	heroList[103] = {name:"Venomancer", carry:0, support:2, nuker:1, disabler:1, jungler:0, durable:0, escape:0, pusher:1, initiator:1, complexity:1, melee:false};
	heroList[104] = {name:"Viper", carry:1, support:0, nuker:0, disabler:1, jungler:0, durable:2, escape:0, pusher:0, initiator:1, complexity:1, melee:false};
	heroList[105] = {name:"Visage", carry:0, support:1, nuker:2, disabler:1, jungler:0, durable:1, escape:0, pusher:1, initiator:0, complexity:3, melee:false};
	heroList[106] = {name:"Warlock", carry:0, support:1, nuker:0, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:2, complexity:1, melee:false};
	heroList[107] = {name:"Weaver", carry:2, support:0, nuker:0, disabler:0, jungler:0, durable:0, escape:3, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[108] = {name:"Windranger", carry:1, support:1, nuker:1, disabler:1, jungler:0, durable:0, escape:1, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[109] = {name:"Winter_Wyvern", carry:0, support:3, nuker:1, disabler:2, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:2, melee:false};
	heroList[110] = {name:"Witch_Doctor", carry:0, support:3, nuker:2, disabler:1, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	heroList[111] = {name:"Wraith_King", carry:2, support:1, nuker:0, disabler:2, jungler:0, durable:3, escape:0, pusher:0, initiator:1, complexity:1, melee:true};
	heroList[112] = {name:"Zeus", carry:0, support:0, nuker:3, disabler:0, jungler:0, durable:0, escape:0, pusher:0, initiator:0, complexity:1, melee:false};
	document.getElementById('load_button').style.visibility = 'hidden';
}
