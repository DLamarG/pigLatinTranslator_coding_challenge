var translate = function(word) {
    if(word.length <2){
      return word
    }
    if(word.length >= 2 && /^[aeiou]/gi.test(word[0])){
      return word + 'ay'
    }
    if(word.length >= 2 && /[^aeiou]/gi.test(word[0])){
      return word.substring(1,) + word[0]+'ay'
    }   
  }



console.log(translate("billy")) //
console.log(translate("emily")) //
console.log(translate("dovetales")) //
console.log(translate("Leanord")) //