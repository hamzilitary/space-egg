import {SpaceAge} from "../src/space-age.js"

describe('SpageAge', function() {
  it('should return age', function () {
    let testAge = new SpaceAge();
    testAge.setAge(18);
    expect(testAge.age).toEqual(18)
  })

  it('should return age in seconds', function () {
    let testAge = new SpaceAge();
    testAge.setAge(18);
    let ageInSec = testAge.makeSeconds();
    expect(ageInSec).toEqual(568034265)
  })

  it('should determine if date or int is entered', function () {
    let userAge = new SpaceAge();
    userAge.setAge(18);
    let dateAge = new SpaceAge();
    dateAge.setAge("03/16/2000");
    expect(18).toEqual(dateAge.age)
  })

  it('should convert user age into Mercurian years', function() {
    let userAge = new SpaceAge();
    userAge.setAge("03/16/2000");
    let mercuryAge = userAge.onMercury();
    expect(75).toEqual(mercuryAge);
  })

  it('should convert user age into Venusian years', function() {
    let userAge = new SpaceAge();
    userAge.setAge("03/16/2000");
    let venusAge = userAge.onVenus();
    expect(29.03).toEqual(venusAge);
  })

  it('should convert user age into Martian years', function() {
    let userAge = new SpaceAge();
    userAge.setAge("03/16/2000");
    let marsAge = userAge.onMars();
    expect(9.57).toEqual(marsAge);
  })

  it('should convert user age into Jovian years', function() {
    let userAge = new SpaceAge();
    userAge.setAge("03/16/2000");
    let jupiterAge = userAge.onJupiter();
    expect(1.52).toEqual(jupiterAge);
  })

  it('should return the number of years left of life expectancy', function () {
    let userAge = new SpaceAge();
    userAge.setAge("03/16/2000");
    let yearsLeft = userAge.lifeExpectancy();
    expect(62).toEqual(yearsLeft);
  })

  it('should return the number of years lived past life expectancy', function () {
    let userAge = new SpaceAge();
    userAge.setAge("03/16/1930");
    let yearsPast = userAge.lifeExpectancy();
    expect(8).toEqual(yearsPast);
  })

  it('should convert user years left to live or user years lived past expectancy into years on all the other planets', function () {
    let userAge = new SpaceAge();
    userAge.setAge("03/16/1956");
    let options = userAge.lifeOnOtherPlanets();
    expect(options).toEqual([75,29.03,9.57,1.52])
  })

})
