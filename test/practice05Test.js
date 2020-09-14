const assert = chai.assert;

describe("Practice Assignment 5", function () {
  describe("Question 1", function () {
    it("helloWorld should exist.", function () {
      assert.exists(helloWorld);
    });
    it("helloWorld should be a function.", function () {
      assert.isFunction(helloWorld);
    });
    it("The function helloWorld should return string data.", function () {
      const result = helloWorld();
      assert.isString(result);
    });
    it("The function helloWorld should return accurate data.", function () {
      const result = helloWorld();
      assert.match(result, /^Hello World!$/);
    });
  });
  describe("Question 2", function () {
    it("greeting should exist.", function () {
      assert.exists(greeting);
    });
    it("greeting should be a function.", function () {
      assert.isFunction(greeting);
    });
    it("The function greeting should return string data.", function () {
      const result = greeting("Dave");
      assert.isString(result);
    });
    it("The function greeting should return accurate data.", function () {
      let result = greeting("Dave");
      assert.match(result, /^Hello, Dave.$/);
      result = greeting("Cassie");
      assert.match(result, /^Hello, Cassie.$/);
    });
  });
  describe("Question 3", function () {
    it("divisibleByThree should exist.", function () {
      assert.exists(divisibleByThree);
    });
    it("divisibleByThree should be a function.", function () {
      assert.isFunction(divisibleByThree);
    });
    it("The function divisibleByThree should return boolean data.", function () {
      const result = divisibleByThree(2);
      assert.isBoolean(result);
    });
    it("The function divisibleByThree should return accurate data.", function () {
      let result = divisibleByThree(33);
      assert.strictEqual(result, true);
      result = divisibleByThree(50);
      assert.strictEqual(result, false);
      result = divisibleByThree(27);
      assert.strictEqual(result, true);
    });
  });
  describe("Question 4", function () {
    it("averageAge should exist.", function () {
      assert.exists(averageAge);
    });
    it("averageAge should be a function.", function () {
      assert.isFunction(averageAge);
    });
    it("The function averageAge should return number data.", function () {
      const result = averageAge(20, 21, 22);
      assert.isNumber(result);
    });
    it("The function averageAge should return accurate data with all 3 parameters.", function () {
      let result = averageAge(20, 21, 22);
      assert.strictEqual(result, 21);
      result = averageAge(40, 45, 50);
      assert.strictEqual(result, 45);
      result = averageAge(19, 23, 37);
      assert.strictEqual(result, 26);
    });
    it("The function averageAge should return accurate data with only 2 parameters.", function () {
      let result = averageAge(20, 22);
      assert.strictEqual(result, 21);
      result = averageAge(40, 50);
      assert.strictEqual(result, 45);
      result = averageAge(19, 37);
      assert.strictEqual(result, 28);
    });
  });
  describe("Question 5", function () {
    it("leetSpeak should exist.", function () {
      assert.exists(leetSpeak);
    });
    it("leetSpeak should be a function.", function () {
      assert.isFunction(leetSpeak);
    });
    it("The function leetSpeak should return string data.", function () {
      const result = leetSpeak("leet");
      assert.isString(result);
    });
    it("The function leetSpeak should replace instances of the lower case letter e with 3.", function () {
      let result = leetSpeak("leet");
      assert.strictEqual(result, "l33t");
      result = leetSpeak("beetle");
      assert.strictEqual(result, "b33tl3");
      result = leetSpeak("egg");
      assert.strictEqual(result, "3gg");
    });
    it("The function leetSpeak should NOT replace instances of the upper case letter E with 3.", function () {
      let result = leetSpeak("Einstein");
      assert.strictEqual(result, "Einst3in");
      result = leetSpeak("lEEt");
      assert.strictEqual(result, "lEEt");
    });
    it("The function leetSpeak should replace instances of the lower case letter a with 4.", function () {
      let result = leetSpeak("Dave");
      assert.strictEqual(result, "D4v3");
      result = leetSpeak("speak");
      assert.strictEqual(result, "sp34k");
      result = leetSpeak("acura");
      assert.strictEqual(result, "4cur4");
    });
    it("The function leetSpeak should NOT replace instances of the upper case letter A with 4.", function () {
      let result = leetSpeak("Acura");
      assert.strictEqual(result, "Acur4");
      result = leetSpeak("CaliforniA");
      assert.strictEqual(result, "C4liforniA");
    });
  });
});
