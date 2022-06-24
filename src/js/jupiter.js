export default class jupiter {
  
  constructor (earthtime, lifexpect){
    this.earthtime = earthtime;
    this.lifexpect = lifexpect
  }
  jupiterTime(earthtime){
    return earthtime/11.86;
  }
  jupiterLife(lifexpect){
    return lifexpect;
  }
  jupiterRemain(earthtime, lifexpect){
    if ((lifexpect - (earthtime/11.86)) < 0){
      return ((earthtime/11.86) - lifexpect);
    } else {
      return (lifexpect - (earthtime/11.86));
    }
  }
}