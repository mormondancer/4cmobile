// sessionStorage scope:
// 		- not between browsers,
//    - not between tabs,
//    - ends when session is closed or destroyed.

// set storage in name/value pairs.
sessionStorage.setItem('myKey', 'myValue');
// get value from name.
var myVar = sessionStorage.getItem('myKey');

// localStorage scope:
// 		- between browsers,
//    - between tabs,
//    - between window sessions.

// set storage in name/value pairs.
localStorage.setItem('myKey', 'myValue');
// get value from name.
var myVar = localStorage.getItem('myKey');

// Note that we can only store strings, which is a significant drawback.
// However, to get around this, we can store and retrieve string
// representations of JSON objects by using the JSON.stringify() method
// to store a string, and JSON.parse() to create the original
// object from that string.

window.addEventListener('storage', function(event) {
  console.log('The value for ' + event.key
  					+ ' was changed from' + event.oldValue
  					+ ' to ' + event.newValue);
  }, false);
// Above, we create an event listener on the window object for the
// storage event. When the event happens, a function that logs the key,
// oldValue and newValue to your console
// (e.g. Firebug or Google Chrome Developer Tools) is executed.





