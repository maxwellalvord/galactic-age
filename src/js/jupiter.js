export default class jupiter {
  
  constructor (earthtime, lifexpec){
    this.earthtime = earthtime;
    this.lifexpec = lifexpec;
  }
  
  jupiterTime(earthtime){
    return earthtime/11.86;
  }

  jupiterLife(lifexpec){
    return lifexpec;
  }

  jupiterRemain(earthtime, lifexpec){
    if ((lifexpec - (this.jupiterTime(earthtime))) < 0){
      return ((earthtime/11.86) - lifexpec);
    } else {
      return (lifexpec - (earthtime/11.86));
    }
  }
}