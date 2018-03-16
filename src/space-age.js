export class SpaceAge {
  constructor() {
    this.age;
  }

  makeSeconds(){
    const inSeconds = 31557459.167;
    let userAge = this.age;
    let secondsAge = Math.round(userAge*inSeconds);
    return secondsAge;
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

  onMercury(){
    const onMercuryRatio = .24;
    let mercuryAge = ((this.age / onMercuryRatio).toFixed(2))/1;
    return mercuryAge;
  }

  onVenus(){
    const onVenusRatio = .62;
    let venusAge = ((this.age / onVenusRatio).toFixed(2))/1;
    return venusAge;
  }

  onMars(){
    const onMarsRatio = 1.88;
    let marsAge = ((this.age / onMarsRatio).toFixed(2))/1;
    return marsAge;
  }

  onJupiter(){
    const onJupiterRatio = 11.86;
    let jupiterAge = ((this.age / onJupiterRatio).toFixed(2))/1;
    return jupiterAge;
  }

  lifeExpectancy(){
    const deathAge = 80;
    if (this.age < deathAge) {
      let yearsLeft = deathAge - this.age;
      return yearsLeft;
    } else if (this.age >= deathAge) {
      let yearsPast = this.age - deathAge;
      return yearsPast;
    } else {
      return "Enter an Age";
    }
  }

  lifeOnOtherPlanets(){
    let options = [];
    return options;
  }
}
