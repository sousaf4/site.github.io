/* Tantek Çelik's NewBase60.
 *     http://tantek.com/
 *     http://tantek.pbworks.com/NewBase60
 *
 * Lightly translated from the original CASSIS to CommonsJS- &
 * Node.js-aware JavaScript by Edward O'Connor <hober0@gmail.com>.
 *
 * Then translated once more to a more usable Node.js module
 * that implements Date conversion similar to that of Shane Becker's
 * NewBase60 ( https://github.com/veganstraightedge/new_base_60 ).
 * NewBase60.js by Michael Owens <mk@mowens.com>. Published on NPM
 * as newbase60 ( https://npmjs.org/package/newbase60 ).
 *
 * Released under CC BY-SA 3.0:
 *           http://creativecommons.org/licenses/by-sa/3.0/
 */


// Converts a JS Date Object to a Sexageismal (Base 60) String
function DateToSxg(dateObj) {
    var sinceEpoch = dateObj.getTime();
    var epochDays = Math.floor(sinceEpoch / (1000 * 60 * 60 * 24));
  
    return IntToSxg(epochDays);
  }
  
  // Converts a JS Date Object to a Sexageismal (Base 60) String with formatting
  function DateToSxgF(dateObj, formatLength) {
    var sinceEpoch = dateObj.getTime();
    var epochDays = Math.floor(sinceEpoch / (1000 * 60 * 60 * 24));
  
    return IntToSxgF(epochDays, formatLength);
  }
  
  // Converts a Base 10 Integer into Sexagesimal (Base 60) String
  function IntToSxg(num) {
    var sxg = "";
    var sequence = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz";
    if (num===undefined || num===0) { return 0; }
    while (num > 0) {
      var index = num % 60;
      sxg = sequence[index] + sxg;
      num = (num - index)/60;
    }
    return sxg;
  }
  
  // Converts a Base 10 Integer into Sexagesimal (Base 60) String with a Formatted Length
  function IntToSxgF(num, formatLength) {
    var sxg = IntToSxg(num);
    if (formatLength===undefined) {
      formatLength = 1;
    }
    var zeroesToAdd = formatLength - sxg.length;
    while (zeroesToAdd > 0) {
      sxg = "0" + sxg;
      zeroesToAdd = zeroesToAdd - 1;
    }
    return sxg;
  }
  
  // Converts a Sexageismal (Base 60) String into a Base 10 Integer
  function SxgToInt(sxg) {
    var num = 0;
    var j = sxg.length;
    for (var i=0; i<j; i++) { // iterate from first to last char of s
      var c = sxg[i].charCodeAt(0); //  put current ASCII of char into c
      if (c>=48 && c<=57) { c=c-48; }
      else if (c>=65 && c<=72) { c-=55; }
      else if (c==73 || c==108) { c=1; } // typo capital I,
      // lowercase l to 1
      else if (c>=74 && c<=78) { c-=56; }
      else if (c==79) { c=0; } // error correct typo capital O to 0
      else if (c>=80 && c<=90) { c-=57; }
      else if (c==95) { c=34; } // underscore
      else if (c>=97 && c<=107) { c-=62; }
      else if (c>=109 && c<=122) { c-=63; }
      else { c = 0; } // treat all other noise as 0
      num = (60 * num) + c;
    }
    return num;
  }
  
  // Converts a Sexageismal (Base 60) String into a JS Date Object
  function SxgToDate(sxg) {
    var num = SxgToInt(sxg);
    var epochMS = num * 1000 * 60 * 60 * 24;
    var dateObj = new Date(0);
    var tzOffset = dateObj.getTimezoneOffset();
    var tzAdjust = tzOffset * 60 * 1000;
    dateObj.setTime(epochMS + tzAdjust);
    return dateObj;
  }
  
  // Converts a Sexageismal (Base 60) String into a ISO-8601 Datetime String (always UTC)
  function SxgToISO(sxg) {
    var dateObj = SxgToDate(sxg);
    return dateObj.toISOString();
  }
  
  module.exports.DateToSxg = DateToSxg;
  module.exports.DateToSxgF = DateToSxgF;
  module.exports.IntToSxg = IntToSxg;
  module.exports.IntToSxgF = IntToSxgF;
  module.exports.SxgToInt = SxgToInt;
  module.exports.SxgToDate = SxgToDate;
  module.exports.SxgToISO = SxgToISO;
  
  // When run directly as a Node.js program, spit out a random 32-bit number in NewBase60
  if ((typeof(__filename) == 'string')
      && (typeof(process) == 'object')
      && (__filename == process.argv[1])) {
  
      var rand = Math.pow(2,32);
      var num = Math.floor(Math.random() * rand);
      var sxg = IntToSXG(num);
  
      // Output SXG to console
      console.log(sxg);
  
      // Return SXG
      return sxg;
  }