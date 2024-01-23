function powerOfN(num) {
    for(var i = 1; i <= 10; i++)
    {
        num *= i;
    }
    return num;
}
const prod = 1;
const result = powerOfN(prod);
console.log(result);