const {expect, test, describe} = require("@jest/globals");
const{returnTwo, greeting, add, multiply} = require("./function");

test("ReturnTwo equals 2", function(){
    expect(returnTwo()).toBe(2);
})

test("greeting", function(){
    expect(greeting("brandon")).toBe("Hello, brandon");
    expect(greeting("bob")).toBe("hello, bob.");
})

describe("calculations", function(){
    test("Add", function(){
        expect(add(1, 2)).toBe(3);
        expect(add(5,9)).toBe(14);
    })
    test("multiply", function(){
        expect(multiply(2, 3)).toBe(6);
    })
})
