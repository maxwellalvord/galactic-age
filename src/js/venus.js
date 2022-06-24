export default class Venus {

  constructor (earthtime, lifexpec){
    this.earthtime = earthtime;
    this.lifexpec = lifexpec;
  }

  venusTime(earthtime){
    return earthtime/.62;
  }

  venusLife(lifexpec){
    return lifexpec;
  }
  
  venusRemain(earthtime, lifexpec){
    if ((lifexpec - (this.venusTime(earthtime))) < 0){
      return ((earthtime/.62) - lifexpec);
    } else {
      return (lifexpec - (earthtime/.62));
    }
  }
}