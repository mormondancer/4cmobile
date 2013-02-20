// --------------------------------------------------------------------------
// TO VIEW ALL PETS
function viewPet(i) {
	petLib = JSON.parse(localStorage.getItem("petLib"));
	// sets array of active pet indexes to localStorage.
	setActivePetArray();
	// get array from localStorage
	activePetArray = JSON.parse(localStorage.getItem('activePetArray'));
	// set previous and next values for 'previous' and 'next' button
	var nextVal = i + 1;
	var prevVal = i - 1;
	// declare and initialize empty string
	var str = '';
	str += '<button onclick="viewActivePets('+prevVal+')" >PREVIOUS PET</button>';
	str += '<button onclick="viewActivePets('+nextVal+')" >NEXT PET</button><br /><br />';
	str += 'Species: 					<span id="petSpecies" >'+				activePetArray[i].spec 				+'</span><br />';
	str += 'Name: 						<span id="petName" >'+					activePetArray[i].nickName 		+'</span><br />';
	str += 'Strength: 				<span id="petStrength" >'+			activePetArray[i].str 				+'</span><br />';
	str += 'Intelligence: 		<span id="petIntelligence" >'+	activePetArray[i].intel 			+'</span><br />';
	str += 'Vitality: 				<span id="petVitality" >'+			activePetArray[i].vital 			+'</span><br />';
	str += 'Mana: 						<span id="petMana" >'+					activePetArray[i].mana 				+'</span><br />';
	str += 'Level: 						<span id="petLevel" >'+					activePetArray[i].level 			+'</span><br />';
	str += 'Experience: 			<span id="petExperience" >'+		activePetArray[i].exp 				+'</span><br />';
	// str += 'Coin: 						<span id="petCoin" >'+					activePetArray[i].coin 				+'</span><br />';
	str += 'Health Potion(s): <span id="petHP" >'+						activePetArray[i].HP 					+'</span><br />';
	str += 'Mana Potion(s): 	<span id="petMP" >'+						activePetArray[i].MP 					+'</span><br />';
	str += 'Current Floor: 		<span id="petCurrFloor" >'+			activePetArray[i].currFloor 	+'</span><br />';
	str += 'Current Room: 		<span id="petCurrRoom" >'+			activePetArray[i].currRoom 		+'</span><br />';
	str += 'Max Floor: 				<span id="maxFloor" >'+					activePetArray[i].maxFloor 		+'</span><br />';
	str += 'Max Room: 				<span id="maxRoom" >'+					activePetArray[i].maxRoom 		+'</span><br />';
	str += 'Boss Key: 				<span id="bossKey" >'+					activePetArray[i].bossKey 		+'</span><br />';
	str += 'Physical Attack: 	<span id="phyAttack" >'+				activePetArray[i].phyAttack 	+'</span><br />';
	str += 'Magic Attack: 		<span id="magAttack" >'+				activePetArray[i].magAttack 	+'</span><br />';
	str += 'Mood: 						<span id="mood" >'+							activePetArray[i].mood 				+'</span><br />';
	str += 'Happy URL: 				<span id="happyURL" >'+					activePetArray[i].happyURL 		+'</span><br />';
	str += 'Sad URL: 					<span id="sadURL" >'+						activePetArray[i].sadURL 			+'</span><br />';
	str += 'Neutral URL: 			<span id="neutralURL" >'+				activePetArray[i].neutralURL 	+'</span><br />';
	str += 'Active Flag: 			<span id="activeFlag" >'+				activePetArray[i].activeFlag 	+'</span><br />';
	str += '<button onclick="resetPet(\''+activePetArray[i].spec+'\')" >RESET?</button><br /><br />';

	document.getElementById("coin").innerHTML = activePetArray[i].coin;

	return str;
} // end viewPets()
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// TO VIEW ALL PETS WITH ACTIVEFLAG IS TRUE
function viewActivePets(i) {
	petLib = JSON.parse(localStorage.getItem("petLib"));
	// sets array of active pet indexes to localStorage.
	setActivePetArray();
	// get array from localStorage
	activePetArray = JSON.parse(localStorage.getItem('activePetArray'));

	if (i == activePetArray.length || i == -1) {
		var prevVal = -2;
		var nextVal = 0;
		var str  = '<button id="prevPetButton" onclick="viewActivePets('+prevVal+')" >PREVIOUS PET</button>';
				str += '<button id="nextPetButton" onclick="viewActivePets('+nextVal+')" >NEXT PET</button><br /><br />';
				str += '<button id="createPetLink" onclick="createPetForm()">Add New Pet</button><br /><br />';
	} else if (i < 0) {
		i = activePetArray.length - 1;
		var str = viewPet(i);
	} else if (i > activePetArray.length) {
		i = 0;
		var str = viewPet(i);
	} else {
		var str = viewPet(i);
	}

	document.getElementById("petDetailsDiv").innerHTML = str;
} // end viewActivePets()
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
function setActivePetArray() {
	petLib = JSON.parse(localStorage.getItem("petLib"));
	var activePetArray = new Array();
	var count = 0;
	for (var i = 0; i<11; i++) {
		if (petLib[i].activeFlag == 1) {
			activePetArray[count] = petLib[i];
			count++;
		}
	}
	localStorage.setItem("activePetArray", JSON.stringify(activePetArray));
} // end setActivePetArray()
// --------------------------------------------------------------------------













// --------------------------------------------------------------------------
// TO VIEW ALL PETS WITH ACTIVEFLAG FALSE
function viewNotActivePets() {
	petLib = JSON.parse(localStorage.getItem("petLib"));
	var str = '';
	for (var i = 0; i<11; i++) {
		if (petLib[i].activeFlag == 0) {
		  str += 'Species: <span id="petSpecies" >'+petLib[i].spec+'</span><br />';
		  str += 'Name: <span id="petName" >'+petLib[i].nickName+'</span><br />';
		  str += 'Strength: <span id="petStrength" >'+petLib[i].str+'</span><br />';
		  str += 'Intelligence: <span id="petIntelligence" >'+petLib[i].intel+'</span><br />';
		  str += 'Vitality: <span id="petVitality" >'+petLib[i].vital+'</span><br />';
		  str += 'Mana: <span id="petMana" >'+petLib[i].mana+'</span><br />';
		  str += 'Level: <span id="petLevel" >'+petLib[i].level+'</span><br />';
		  str += 'Experience: <span id="petExperience" >'+petLib[i].exp+'</span><br />';
		  str += 'Money: <span id="petMoney" >'+petLib[i].coin+'</span><br /><br />';
		}
	}
	document.getElementById("petDetailsDiv").innerHTML = str;
} // end viewNotActivePets()
// --------------------------------------------------------------------------