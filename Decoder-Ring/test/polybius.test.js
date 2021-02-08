const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("should ignore case of input", () => {
        let expected = "23513434112251";
        let actual = polybius("mEsSage");
        expect(actual).to.equal(expected);
    })
})
describe("polybius", () => {
    it("should, when encoding, translate 'i' and 'j' to 42", () => {
        expected = "4242";
        actual = polybius("ij");
        expect(actual).to.equal(expected);
    })
})
describe("polybius", () => {
    it("should, when decoding, translate 42 to 'i/j'", () => {
        expected = "(i/j)(i/j)m lahey"
        actual = polybius("424223 1311325145",false)
        expect(actual).to.eql(expected);
    })
})
describe("polybius", () => {
    it("should maintain spaces before and after encoding or decoding", () => {
        expected = "42 42 42";
        actual = polybius("i j i");
        expect(actual).to.eql(expected);
    })
})
describe("polybius", () => {
    it("should maintain spaces before and after encoding or decoding", () => {
        expected = "a a a";
        actual = polybius("11 11 11",false);
        expect(actual).to.eql(expected);
    })
})