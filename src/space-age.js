export class SpaceAge {
  constructor(age) {
    this.age = age;
  }

  makeSeconds(){
    const inSeconds = 31557459.167;
    let userAge = this.age;
    let secondsAge = Math.round(userAge*inSeconds);
    return secondsAge;
  }
}
