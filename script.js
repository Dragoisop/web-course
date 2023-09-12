// Create an array of names
var names = ["John", "Jane", "Bob", "Alice", "Jerry"];

// Loop over the array of names
for (var i = 0; i < names.length; i++) {
  // Get the current name
  var currentName = names[i];

  // Get the first letter of the current name and convert it to lowercase
  var firstLetter = currentName.charAt(0).toLowerCase();

  // Check if the first letter is 'j'
  if (firstLetter === 'j') {
    // If it is, print "Goodbye" to the console
    console.log("Goodbye " + currentName);
  } else {
    // If it's any other letter, print "Hello" to the console
    console.log("Hello " + currentName);
  }
}
