//waf to generate the nth Carol number

function carolNumber(n) {
    if (n <= 0) {
        return false;
    }
    return ((2 ** n) - 1) ** 2 - 2;
}
console.log(carolNumber(3))