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
    return (lifexpect - (earthtime/.24));
  }
}