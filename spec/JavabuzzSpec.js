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




});
