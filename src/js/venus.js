export default class Venus {

  constructor (earthtime){
    this.earthtime = earthtime;
  }
  venusTime(earthtime){
    return earthtime/.62;
  }
  venusLife(lifexpect){
    return lifexpect;
  }
  venusRemain(earthtime, lifexpect){
    if ((lifexpect - (earthtime/.62)) < 0){
      return ((earthtime/.62) - lifexpect);
    } else {
      return (lifexpect - (earthtime/.62));
    }
  }
}