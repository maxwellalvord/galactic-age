export default class Mars {
  
  constructor (earthtime, lifexpec){
    this.earthtime = earthtime;
    this.lifexpec = lifexpec;
  }

  marsTime(earthtime){
    return earthtime/1.88;
  }

  marsLife(lifexpec){
    return lifexpec;
  }

  marsRemain(earthtime, lifexpec){
    if ((lifexpec - (this.marsTime(earthtime))) < 0){
      return ((earthtime/1.88) - lifexpec);
    } else {
      return (lifexpec - (earthtime/1.88));
    }
  }
}