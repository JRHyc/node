module.exports = {
    multiply: function(num1, num2){
        console.log("the sum is:", num1 * num2);
    },
    add: function(num1,num2)
    {
        console.log("the sum is:", num1 + num2);
    },
    square: function(num1)
    {
        console.log("the square of " + num1 + " is", num1*num1);
    },
    random: function(num1, num2)
    {
        let x = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
        console.log("the random number between " + num1 + " and " + num2 + " is " + x);
    }
}
