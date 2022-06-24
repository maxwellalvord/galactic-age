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
      let livelong = "Wow you lived " + ((earthtime/.62) - lifexpec) + " years passed your life expectancy";
      return livelong;
    } else {
      let timeleft = "you only have "(lifexpec - (earthtime/.62)) + " more years to live, yikes";
      return timeleft;
    }
  }
}