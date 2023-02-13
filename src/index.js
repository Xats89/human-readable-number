module.exports = function toReadable (number) {
    let numbersList = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
      }
    
    let dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    
    let hundred = ' hundred '
  
    let result = ''
    
    let num = number.toString().split('')
  
    let hundredsNum = [num[1], num[2]]
  
    
    if (num[0] == 0) return 'zero'
    
    if (number < 20) {
      for (let key in numbersList) {
        if(+key === number) return numbersList[key]
      }
    }
  
    function countDozens (x){
      let dozensNum = [x[0], x[1]]
      let resultDozens = ''
      if (+(x[0]+x[1]) < 20) {
          for (let key in numbersList) {
              if(+key === +(x[0]+x[1])) resultDozens += numbersList[key]
          }
        } else {         
            for (let key in dozens) {
                if(+key === +dozensNum[0]) resultDozens += dozens[key]
            }
            for (let key in numbersList) {
                if(+key === +dozensNum[1]) {
                    resultDozens += ' ' +numbersList[key]
                }
            }
        }
      return resultDozens.trim()
    }
  
    if (number < 100 ) return countDozens (num)
    if (number < 1000) {
      for (let key in numbersList) {
        if(+key === +num[0]) result = numbersList[key] + hundred
      }
      result += countDozens(hundredsNum)
      return result.trim()
    }
}