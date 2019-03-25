
var uniqueMorseRepresentations = function(words) {
  var res = 0;
  var alphabetString ='abcdefghijklmnopqrstuvwxyz'
  var alphabet = alphabetString.split('');
  var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  var transformations = [];
  var transformation = "";
  var len = alphabet.length;
  var myMap = new Map();
  var i = 0;
  var w = 0;

  for(i = 0; i < len; i++ ) {
    myMap.set(alphabet[i],morse[i]);
  }

  for (w = 0; w < words.length; w++) {
    for(i = 0; i < words[w].length; i++) {
      transformation += myMap.get(words[w].charAt(i));
    }
    transformations.push(transformation);
    transformation = '';
  }
  
  var unique = new Set(transformations);

  return unique.size;
};

var words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));