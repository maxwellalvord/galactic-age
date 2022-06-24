export default class Mars {
  constructor (earthtime){
    this.earthtime = earthtime;
  }
  marsTime(earthtime){
    return earthtime/1.88;
  }
}