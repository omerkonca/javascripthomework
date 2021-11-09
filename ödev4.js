function findPrime() {
    for (let i = 2; i < 100; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false
            }
        }
        if (isPrime) {
            console.log(`${i} sayisi asaldir`)
        }else {
            console.log(`${i} sayisi asal degildir`)
        }
    }
}

findPrime()
