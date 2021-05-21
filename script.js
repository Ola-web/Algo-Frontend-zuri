



const convertFahrToCelcius = (fahr) => {
    let convertToNumber = parseInt(fahr)



    if (!(convertToNumber)) {
        return `${fahr} is not a valid number but a/an ${typeof fahr}`
    }

    if (convertToNumber >= 0 || convertToNumber <= 0) {
        const celciusToFahr = (fahr - 32) * 5 / 9
        const fahrToFixed = celciusToFahr.toFixed(4)
        return Number(fahrToFixed)
    }




}

console.log(convertFahrToCelcius([0]))

// if it a number convert it to a string

const checkYuGiOh = (n) => {
    let result = []
    let num = Number(n)
    if (!num) {
        return `${n} invalid parameter`
    } if (num) {
        for (let i = 1; i <= num; i++) {
            let str = ""

            if (i % 2 === 0) {
                str += 'yu'
            }
            if (i % 3 === 0) {
                str += 'gi'
            }
            if (i % 5 === 0) {
                str += 'oh'
            }
            if (i % 2 === 0 && i % 5 === 0) {
                str = 'yu-oh'
            }
            if (i % 2 === 0 && i % 3 === 0) {
                str = 'yu-gi'
            }
            if (i % 3 === 0 && i % 5 === 0) {
                str = 'gi-oh'
            }
            if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                str = 'yu-gi-oh'
            }

            if (str === '') {

                result.push(i)
            }


            else {
                result.push(str)
            }
        }
    }

    return result;
}

console.log(checkYuGiOh("90"))