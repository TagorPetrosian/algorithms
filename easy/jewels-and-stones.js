var numJewelsInStones = function(J, S) {
    var myMap = new Map();
    var jlen = J.length;
    var slen = S.length;
    var res = 0;

    for ( var i = 0; i < jlen; i++ ) {
      myMap.set(J[i],i);
    }

    for ( var j = 0; j < slen; j++ ) {
      if ( myMap.has(S[j]) ) {
        res++;
      }
    }

    return res;
};

console.log(numJewelsInStones('z', 'ZZ'));