import {SpaceAge} from "../src/space-age"

describe('SpageAge', function() {
  it('should return age in seconds', function () {
    let testAge = new SpaceAge(18);
    expect(testAge).toEqual(568034265)
  })
})
