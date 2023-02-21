var expect = require("chai").expect;

function fizzBuzz(value) {
  return "1";
}

it("returns 1 with 1 passed in", function () {
  var result = fizzBuzz(1);
  expect(result).to.equal("1");
});

it("returns 2 with 2 passed in", function () {
  var result = fizzBuzz(2);
  expect(result).to.equal("2");
});
