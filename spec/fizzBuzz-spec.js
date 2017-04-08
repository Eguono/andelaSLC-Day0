'use strict';

var myApp = require('../app/fizzBuzz.js');

(function () {
  describe("Case for non Number Datatype", function () {

    it("should return 'Invalid Input for String Data Type'", function () {
      expect(myApp.fizzBuzz("String")).toEqual("Invalid Input");

    });

    it("should return 'Invalid Input for Number Data Type'", function () {

      expect(myApp.fizzBuzz([])).toEqual("Invalid Input");
    });

    it("should return 'Invalid Input for Boolean Data Type'", function () {

      expect(myApp.fizzBuzz(true)).toEqual("Invalid Input");

      expect(myApp.fizzBuzz(false)).toEqual("Invalid Input");
    });

    it("should return 'Invalid Input for Null Data Type'", function () {

      expect(myApp.fizzBuzz(null)).toEqual("Invalid Input");
    });

    it("should return 'Invalid Input for undefined Data Type'", function () {

      expect(myApp.fizzBuzz(undefined)).toEqual("Invalid Input");
    });

    it("should return 'Invalid Input for Boolean Data Type'", function () {

      expect(myApp.fizzBuzz(Symbol('foo'))).toEqual("Invalid Input");
    });

  });
  
  describe("Fizz Buzz Postive Integer Tests", function(){
      it("should return 'Number must be greater than 0' for negative Integer", function () {
      expect(myApp.fizzBuzz(-1)).toBe("Number must be greater than 0");
    });
  })
  describe("Fizz Buzz tests ", function () {

    it("should return `Fizz` for number divisible by 3", function () {
      expect(myApp.fizzBuzz(3)).toBe('Fizz');
    });

    it("should return `Buzz` for number divisible by 5", function () {
      expect(myApp.fizzBuzz(5)).toBe('Buzz');
    });

    it("should return `Buzz` for number divisible by 5", function () {
      expect(myApp.fizzBuzz(65)).toBe('Buzz');
    });

    it("should return `FizzBuzz` for 15", function () {
      expect(myApp.fizzBuzz(15)).toBe('FizzBuzz');
    });

    it("should return `FizzBuzz` for 45", function () {
      expect(myApp.fizzBuzz(45)).toBe('FizzBuzz');
    });

    it("should return `FizzBuzz` for 90", function () {
      expect(myApp.fizzBuzz(90)).toBe('FizzBuzz');
    });

    it("should return `Fizz` for 63", function () {
      expect(myApp.fizzBuzz(63)).toBe('Fizz');
    });

    it("should return 7 since its indivisible by 3 and 5", function () {
      expect(myApp.fizzBuzz(7)).toBe(7);
    });

    it("should return 101 since its indivisible by 3 and 5", function () {
      expect(myApp.fizzBuzz(101)).toBe(101);
    });

    it("should return 103 since its indivisible by 3 and 5", function () {
      expect(myApp.fizzBuzz(103)).toBe(103);
    });

  })
})();