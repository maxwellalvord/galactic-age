export default class Mercury {
  
  constructor (earthtime){
    this.earthtime = earthtime;
  }

  mercuryTime(earthtime){
    return earthtime/.24;
  }
  mercuryLife(lifexpect){
    return lifexpect;
  }
  mercuryRemain(earthtime, lifexpect){
    if ((lifexpect - (earthtime/.24)) < 0){
      return ((earthtime/.24) - lifexpect);
    } else {
      return (lifexpect - (earthtime/.24));
    }
  }
}