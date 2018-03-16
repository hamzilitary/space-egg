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
})
