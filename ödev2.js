function isFriendlyNumbers(number1,number2) {

    let divisorsOfNumber1 = []
    let divisorsOfNumber2 = []
    let divisorsOfNumber1Total
    let divisorsOfNumber2Total

    function findDivisors(number,array) {
        for (let i = 0; i < number; i++) {
            if(number % i == 0){
                array.push(i)
            }
        }
    }

    findDivisors(number1,divisorsOfNumber1)
    findDivisors(number2,divisorsOfNumber2)

    function add(array) {
        let total = array.reduce((acc,divisor) => acc + divisor, 0)
        return total
    }

    divisorsOfNumber1Total = add(divisorsOfNumber1)
    divisorsOfNumber2Total = add(divisorsOfNumber2)

    if(divisorsOfNumber1Total == number2 && divisorsOfNumber2Total == number1) {
        console.log(`${number1} ve ${number2}  arkadaş sayidir.`)
    }else{
        console.log(`${number1} ve ${number2}  arkadaş sayi degildir.`)
    }
}

isFriendlyNumbers(220,284)
isFriendlyNumbers(1184,1210)
isFriendlyNumbers(2620,2924)
isFriendlyNumbers(100,200)
isFriendlyNumbers(66928,66992)
