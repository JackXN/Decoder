  
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {


    it("should return false if shift is 0", () => {
        const actual = caesar("hello", 0);
        expect(actual).to.be.false;
    })    

    it("should return false if shift is greater than 25 or less than -25", ()  => {
        const tooHigh = caesar("hi there", 27);
        const tooLow = caesar("greetings", -40, encode = false);
        expect(tooHigh).to.be.false &&
        expect(tooLow).to.be.false;
    });

     it("should return false if shift is not present", () => {
         const actual = caesar("salutations") 
         expect(actual).to.be.false;
    });

    it("ignores capital letters", () => {
        const expected = "welcome";
        const actual = caesar("Zhofrph", 3, encode = false);
        expect(actual).to.eql(expected);
    });

    it("wraps shifts that go past the end of the alphabet", () => {
        const expected = "ncwbyg"
        const actual = caesar("zoinks", 14);
        expect(actual).to.eql(expected);
    });

    it("maintains spaces and nonalphabetic symbols before and after en/decoding", () => {
        const expected = "xjfxts'x lwjjynslx!";
        const actual = caesar("season's Greetings!", 5);
        expect(actual).to.eql(expected);
    })
})