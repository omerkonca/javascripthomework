function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] == 2){
            console.log(numbers[i] + " sayisi asaldir.")
        }else if(numbers[i] == 1){
            console.log(numbers[i] + " sayisi asal degildir.")
        }else if(numbers[i] == 0){
            console.log(numbers[i] + " sayisi asal degildir.")
        }else if(numbers[i] > 0){
            for (let j = 2; j <= numbers[i]; i++) {
				if (numbers[i] % j != 0) {
					console.log(numbers[i] + " sayisi asaldir.")
				} else {
					console.log(numbers[i] + " sayisi asal degildir.")
				}
			}
        }
        else{
            console.log(numbers[i] + " sayisi asal değildir.")
        }
    }
}
findPrime(2,5,8,21,-10,13)
