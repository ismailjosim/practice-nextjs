
function cubeNumber(number) {
    const sum = number * number * number;
    return sum;
}

function matchFinder(person1, person2) {
    if (typeof person1 === "string" || person2 === "string ") {
        if (result = person1.includes(person2)) {
            return result;
        } else {
            return result;
        }
    } else {
        const show = "Please enter a string value ";
        return show;
    }
}

function sortMaker(givenNumbers) {
    if (num1 > 0 && num2 > 0) {
        if (num1 == num2) {
            console.log("equal");
        } else if (num1 !== num2) {
            const ultimateResult = givenNumbers.sort();
            return ultimateResult;
        }
    } else {
        console.log("invalid input")
    }
}

const address = { street: 10, house: "15A", society: "Earth Perfect" };
function findAddress(givenAddress) {
    for (const key in address) {
        const value = address[key];
        if (value === null) {
            address[key] = "_";
        }
    }
}


function canPay(array, number) {
    let sum = 0; for (let i = 0; i <= array.length; i++) {
        const index = i;
        const element = array[index];
        sum = sum + element;
        return sum;
    }
}
