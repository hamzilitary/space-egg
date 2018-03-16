import {SpaceAge} from "../src/space-age.js"

describe('SpageAge', function() {
  it('should return age', function () {
    let testAge = new SpaceAge(18);
    expect(testAge.age).toEqual(18)
  })

  it('should return age in seconds', function () {
    let testAge = new SpaceAge(18);
    let ageInSec = testAge.makeSeconds();
    expect(ageInSec).toEqual(568034265)
  })

  it('should determine if date or int is entered', function () {
    let ageAge = new SpaceAge(18);
    let dateAge = new SpaceAge("03/16/2000");
    expect(ageAge).toEqual(dateAge)
  })
})
