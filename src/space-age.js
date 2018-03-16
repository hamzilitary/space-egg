export class SpaceAge {
  constructor() {
    this.age;
  }

  setAge(age){
    if(typeof age === "number") {
      this.age = age;
      return this.age;
    } else if (typeof age === "string") {
      let today = new Date();
      let birthday = new Date(age);
      let ageDate = today - birthday;
      let numberAge = Math.round(ageDate/31536000000);
      this.age = numberAge;
      return this.age;
    }
    else {
      return "enter an age or a date";
    }
  }

  makeSeconds(){
    const inSeconds = 31557459.167;
    let userAge = this.age;
    let secondsAge = Math.round(userAge*inSeconds);
    return secondsAge;
  }

  onMercury(){
    const onMercury = .24;
    let mercuryAge = ((this.age / onMercury).toFixed(2))/1;
    return mercuryAge;
  }
}
