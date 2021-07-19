let raceNumber = Math.floor(Math.random() * 1000);
registerTime = false
let runnerAge = 18
if (runnerAge > 18 && registerTime) {
  raceNumber += 1000
}
if (runnerAge > 18 && registerTime) {
  console.log('Your race will start at 9:30 am and your number is '+ raceNumber) 
}else if(runnerAge > 18 && registerTime === false){
  console.log('Your race will start at 11:00 am and your number is '+raceNumber) 
}else if(runnerAge < 18){
  console.log('Your race will start at 12:30 pm and your number is '+raceNumber) 
}else{
  console.log('See the registration desk ') 
}

