const RE = /^\d{3}-\d{3}-\d{4}$/;
const RE2 = /^\(\d{3}\)\s?\d{3}-?\s?\d{4}$/;
const RE3 = /^\d{3}\s?\d{3}\s?\d{4}$/;
 const RE4 = /^1\s\d{3}-?\s\d{3}-?\s\d{4}$/;
 const RE5=/^1\s\d{3}-\d{3}-\d{4}$/;
 const RE6 =/^1\s?\(\d{3}\)\s?\-?\d{3}-\d{4}/;

// Create array of regexes
const REGEXES = [RE, RE2, RE3, RE4, RE5, RE6];
function telephoneCheck(str) {
  // loop through regexes
for(let regex of REGEXES) {
if (regex.test(str)) {
  return true;
}
}
return false;
  // if one matches return true
  //return RE.test(str) || RE2.test(str) || RE3.test(str);
}
console.log(telephoneCheck("55 55-55-555-5"));

// false

