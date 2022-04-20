// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//plusOne
describe('plusOne', function() {
    it('should be defined a function', function(){
        expect(typeof plusOne).toBe("function");
    })
    it('should return a number', function(){
        expect(typeof plusOne()).toBe("number")
    })
    it('should return 5 when passed 4', function(){
        expect(plusOne(4)).toBe(5)
    })
    it('should return 0 when passed anything but a number',function(){
        expect(plusOne(true)).toBe(0)
    })
})
describe('sayHello',function(){
    it('should be defined as a function', function () {
        expect(typeof sayHello).toBe("function")
    });
    it('should return as a string when called',function(){
        expect(typeof sayHello()).toBe("string")
    })

    it('should never return "undefined" when called',function (){
        expect(sayHello()).not.toBe(undefined)
    })
    it('should say "Hello, Jane! when asserted into the function',function (){
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    })
    it('Should say "Hello Alex!" when asserted into the function', function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    })
    it('Should say "Hello, Pat!" when asserted into the function',function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    })
    it('should be true',function (){
        expect(sayHello(false)).toBe("Hello, World!")
    })

})
describe('isFive',function (){
    it('should be described as a function.',function (){
        expect(typeof isFive).toBe("function")
    })
    it('Should return a Boolean',function (){
        expect(typeof isFive()).toBe("boolean")
    })
    it('should return true when you enter the number 5',function(){
        expect(isFive(5)).toBe(true)
    })
    it ('should return false if you pass in the string "5"',function(){
        expect(isFive("5")).toBe(false)
    })
})
// describe('isEven', function()[
//     it('should be described as a function',function(){
//         expect
//     })
//     ])