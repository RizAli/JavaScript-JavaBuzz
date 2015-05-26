describe('Javabuzz', function(){

  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe( 'knows when a number is', function(){

    it ('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it ('not divisible by 3', function (){
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it ('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('not divisible by five', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('knows if a number', function(){

    it("is divisible by 15", function(){
      expect(javabuzz.isDivisibleByFifteen(0)).toBe(true);
    });

    it("is not divisible by 15", function(){
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('knows if a number', function(){
    it('is not divisible by 3, 5, 15 and returns the same number', function(){
      expect(javabuzz.number(1)).toBe(1)
    });
  });

  describe('when playing, says', function(number){
    it('"Java" when a number is divisible by 3', function(){
      expect (javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"FizzBuzz" when a number is divisible by 15', function(){
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });
  });
});
