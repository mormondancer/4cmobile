// --------------------------------------------------------------------------
// FUNCTION RETURNS FALSE IF PARAM CONTAINS PROPERTIES
function isEmpty(obj) {
	// for each property in the object
  for(var prop in obj) {
  	// if object has a property then return false
    if(obj.hasOwnProperty(prop)) {
    	return false;
    }
  }
  // return true if loop doesn't find a property
  return true;
} // end isNotEmpty()
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// RETURNS FALSE IF VALUE IS NULL, '', OR FALSE
function isNotNull(value) {
	if (value === null || value === '') {
		return false;
	} else {
		return true;
	}
} // end isNotNull()
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// FUNCTION RETURNS THE NUMBER OF ACTIVE PETS
function activeCount() {
	// declare a counter variable and initialize it to start at 0
	var count = 0;
	// loop through petLib
	for (var i=0;i<11;i++) {
		// if pet is active then increment counter
		if (petLib[i].activeFlag == 1) {
			count++;
		}
	}
	// return counter variable
	return count;
} // end activeCount()
// --------------------------------------------------------------------------




