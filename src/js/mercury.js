export default class Mercury {
  
  constructor (earthtime){
    this.earthtime = earthtime;
  }

  mercuryTime(earthtime){
    return earthtime/.24;
  }
}