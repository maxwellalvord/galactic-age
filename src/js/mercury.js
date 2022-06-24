export default class Mercury {
  
  constructor (earthtime, lifexpec){
    this.earthtime = earthtime;
    this.lifexpec = lifexpec;
  }

  mercuryTime(earthtime){
    return earthtime/.24;
  }

  mercuryLife(lifexpec){
    return lifexpec;
  }
  
  mercuryRemain(earthtime, lifexpec){
    if ((lifexpec - (this.mercuryTime(earthtime))) < 0){
      return ((earthtime/.24) - lifexpec);
    } else {
      return (lifexpec - (earthtime/.24));
    }
  }
}