var romanToInt = function(s) {
  var intRes = 0;
  var len = s.length;
  var myMap = new Map();
  var i = 0;

  myMap.set('I',1);
  myMap.set('II',2);
  myMap.set('III',3);
  myMap.set('IV',4);
  myMap.set('V',5);
  myMap.set('IX',9);
  myMap.set('X',10);
  myMap.set('XL',40);
  myMap.set('L',50);
  myMap.set('XC',90);
  myMap.set('C',100);
  myMap.set('CD',400);
  myMap.set('D',500);
  myMap.set('CM',900);
  myMap.set('M',1000);

  while(i < len) {
    if( (  i + 1 < len ) && ( myMap.get(s.charAt(i)) < myMap.get(s.charAt(i + 1)) ) ) {
      intRes += ( myMap.get( s.charAt(i) + s.charAt(i + 1) ) );
      i+=2;
    } else {
      intRes += ( myMap.get(s.charAt(i)) );
      i++;
    }
  }

  return intRes;

}

console.log(romanToInt("III"));

/*

public int romanToInt(String s) {
     int sum=0;
    if(s.indexOf("IV")!=-1){sum-=2;}
    if(s.indexOf("IX")!=-1){sum-=2;}
    if(s.indexOf("XL")!=-1){sum-=20;}
    if(s.indexOf("XC")!=-1){sum-=20;}
    if(s.indexOf("CD")!=-1){sum-=200;}
    if(s.indexOf("CM")!=-1){sum-=200;}
    
    char c[]=s.toCharArray();
    int count=0;
    
   for(;count<=s.length()-1;count++){
       if(c[count]=='M') sum+=1000;
       if(c[count]=='D') sum+=500;
       if(c[count]=='C') sum+=100;
       if(c[count]=='L') sum+=50;
       if(c[count]=='X') sum+=10;
       if(c[count]=='V') sum+=5;
       if(c[count]=='I') sum+=1;
       
   }
   
   return sum;
    
}

############################################
var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XC': 90,
        'XL': 40,
        'CD': 400,
        'CM': 900
    }
    let sum = 0
    s = s.replace(/IV|IX|XC|XL|CD|CM/gi, function (match, offset) {
        sum += map[match]
        return ''
    })
    for(let i = 0; i < s.length; i++){
        sum += map[s[i]]
    }
    return sum
*/