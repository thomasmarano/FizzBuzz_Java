describe("FizzBuzz", function() {

      var fizzBuzz;

      beforeEach(function() {
        fizzBuzz = new FizzBuzz();
      });

      describe("should return the number where not divisible by 3 or 5", function() {
        it ('prints number for 1', function() {
              expect(fizzBuzz.play(1)).toEqual(1);
              expect(fizzBuzz.play(8)).toEqual(8);
              expect(fizzBuzz.play(11)).toEqual(11);
        });
    });

    describe("should return fizz where number is divisible by 3", function() {
        it ('prints fizz for multiples of 3', function() {
          expect(fizzBuzz.play(3)).toEqual('fizz');
          expect(fizzBuzz.play(9)).toEqual('fizz');
          expect(fizzBuzz.play(21)).toEqual('fizz');
        });
    });

    describe("should return buzz where number is divisible by 5", function() {
        it ('prints buzz for multiples of 5', function() {
            expect(fizzBuzz.play(5)).toEqual('buzz');
            expect(fizzBuzz.play(25)).toEqual('buzz');
            expect(fizzBuzz.play(35)).toEqual('buzz');
        });
    });

    describe("should return fizzbuzz where number is divisible by 3 & 5", function() {
        it ('prints fizzbuzz for multiples of 3 & 5', function() {
            expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
            expect(fizzBuzz.play(30)).toEqual('fizzbuzz');
            expect(fizzBuzz.play(45)).toEqual('fizzbuzz');
        });
    });
});
