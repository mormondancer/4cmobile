
// --------------------------------------------------------------------------
// FORM TO CREATE A PET THAT IS NOT ALREADY ACTIVE.
function createPetForm() {

	document.getElementById("petDetailsDiv").style.display="none";

	// get array from localStorage
	activePetArray = JSON.parse(localStorage.getItem('activePetArray'));

	var str  = '<form id="createForm" name="createForm"><fieldset>';
			str += '<legend>Select A Pet</legend>';
			str += 'Pick a Species: <select name="createSpec">';

			// TODO: check for active pets and display them
			for (var i=0;i<11;i++) {
				if (petLib[i].activeFlag == 0) {
					str += '<option value="'+i+'">'+petLib[i].spec+'</option>';
				}
			}

			str += '</select><br />';
			str += 'Name: <input name="createNickName" required /><br />';
			str += '<button id="createPetButton" onclick="createPet()" >CREATE</button><br />';
			str += '</fieldset></form>';

			// return str;
		document.getElementById("createFormDiv").style.display="inherit";
		document.getElementById("createFormDiv").innerHTML = str;
} // end createPetForm()
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// FUNCTION THAT GETS FORM INFO, SETS DATA, LOAD TO LOCALSTORAGE
function createPet() {
	// Get spec and name from from.
	var spec 			= parseInt(document.createForm.createSpec.value);
	var nickName  = document.createForm.createNickName.value;

	if (isNotNull(nickName) && isNotNull(spec)) {
		// set nickname to specified spec and activate it.
		petLib[spec].nickName = nickName;
		petLib[spec].activeFlag = 1;
		// store petLib in localStorage
		localStorage.setItem('petLib', JSON.stringify(petLib));
		petLib = JSON.parse(localStorage.getItem("petLib"));
		document.getElementById("createFormDiv").innerHTML = '';
		// view all active pets
		viewActivePets(0);
	} else {
		// prompt user to input all fields if one is null or empty
		alert('Please fill out all required fields.');
	}
} // end createPet()
// --------------------------------------------------------------------------
