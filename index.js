function scuberGreetingForFeet(someNumber){
  // Write your code here!
  if (someNumber <= 400){
  return "This one is on me!"}

  else if (someNumber > 400 && someNumber < 2000 ){
  return "That will be twenty bucks."}

  else if (someNumber >2000 && someNumber <2500){
  return 'I will gladly take your thirty bucks.'}

  else if (someNumber > 2500){
  return 'No can do.' };
}
 
function ternaryCheckCity(region){
  // Write your code here!

  if (region ==='NYC') {
  return "Ok, sounds good."}
  
  else if(region !== 'NYC'){
  return "No go."};
}

function switchOnCharmFromTip(serviceTip){
  // Write your code here!

  switch (serviceTip) {
    case 'generous' :
      return 'Thank you so much.'
      case 'not as generous' :
        return 'Thank you.'
        case 'thanks for everything' : 
        return 'Bye.'
  }

}

