export default class jupiter {
  
  constructor (earthtime){
    this.earthtime = earthtime;
  }
  jupiterTime(earthtime){
    return earthtime/11.86;
  }
}