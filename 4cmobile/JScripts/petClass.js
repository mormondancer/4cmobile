// --------------------------------------------------------------------------
// PET CONSTRUCTOR
// PASS IN PROPERTY VALUES THAT ARE UNIQUE TO EACH PET
function Pet(spec,str,intel,vital,mana) {
	this.spec 			= spec;
	this.nickName 	= "";
	this.str 				= str;
	this.intel 			= intel;
	this.vital 			= vital;
	this.mana 			= mana;
	this.level 			= 1;
	this.exp 				= 0;
	this.coin 			= 10;
	this.HP 				= 1;
	this.MP 				= 1;
	this.currFloor 	= 1;
	this.currRoom 	= 1;
	this.maxFloor 	= 1;
	this.maxRoom 		= 1;
	this.bossKey 		= 0;
	this.phyAttack 	= 1;
	this.magAttack 	= 1;
	this.mood 			= "happy";
	this.happyURL 	= "";
	this.sadURL 		= "";
	this.neutralURL = "";
	this.activeFlag = 0;

	// this.incrementLevel = (function(this.level) {
	// 	// this.level = this.level + 1;
	// 	return this.level;
	// });

} // end Pet()
// --------------------------------------------------------------------------

// Pet.prototype.incrementLevel() = (function() {
// 		// this.level = this.level + 1;
// 		return this.level;
// 	});


// function testing() {
// 	alert(petLib[0].incrementLevel());
// }



// --------------------------------------------------------------------------
// FUNCTION RESETS SPECIFIED PET TO DEFAULT VALUES
function resetPet(spec) {
	alert(spec);
	switch(spec) {
		case "Robinsauron":
			var Robinsauron 		= new Pet("Robinsauron"	,5,10,10,25);
			petLib[0]		= Robinsauron;
			break;
		case "Armstrango":
			var Armstrango 	= new Pet("Armstrango"	,5,5,15,25);
			petLib[1] 	= Armstrango;
			break;
		case "Sompooliwag":
			var Sompooliwag 		= new Pet("Sompooliwag"	,5,5,25,15);
			petLib[2]		= Sompooliwag;
			break;
		case "McLaughchee":
			var McLaughchee 		= new Pet("McLaughchee"	,10,15,10,15);
			petLib[3]		= McLaughchee;
			break;
		case "Barneezle":
			var Barneezle 		= new Pet("Barneezle"	,5,15,20,10);
			petLib[4]		= Barneezle;
			break;
		case "Erix":
			var Erix 		= new Pet("Erix"		,15,15,10,10);
			petLib[5]		= Erix;
			break;
		case "Olavedon":
			var Olavedon 	= new Pet("Olavedon"	,10,15,15,10);
			petLib[6] 	= Olavedon;
			break;
		case "Godfreeboo":
			var Godfreeboo 	= new Pet("Godfreeboo"	,10,10,15,15);
			petLib[7] 	= Godfreeboo;
			break;
		case "Jacksune":
			var Jacksune 		= new Pet("Jacksune"		,15,10,10,15);
			petLib[8]		= Jacksune;
			break;
		case "Rigbeast":
			var Rigbeast 		= new Pet("Rigbeast"		,10,15,10,15);
			petLib[9]	 	= Rigbeast;
			break;
		case "Barzoolet":
			var Barzoolet 			= new Pet("Barzoolet"		,15,10,15,10);
			petLib[10] 	= Barzoolet;
			break;
		default:
			alert('Could not reset Species');
	}
	// store petlib in localstorage
	localStorage.setItem("petLib", JSON.stringify(petLib));
	viewActivePets(0);
} // end resetPet()
// --------------------------------------------------------------------------