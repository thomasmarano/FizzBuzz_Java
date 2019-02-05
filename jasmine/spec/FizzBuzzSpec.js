describe("FizzBuzz", function() {

      var fizzBuzz;

      beforeEach(function() {
        fizzBuzz = new FizzBuzz();
      });

      describe("should return the number where not divisible by 3 or 5", function() {
        it ('prints number for 1', function() {
              expect(fizzBuzz.play(8)).toEqual(8);
        });
    });
});
