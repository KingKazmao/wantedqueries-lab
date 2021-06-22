module.exports = {
    returnTwo(){
        return 2;
    },
    greeting(name){
        "hello" + name()
    },
    add: function(num1, num2){
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    }

}