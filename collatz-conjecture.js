//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (input) => {
    
  if (input <= 0){
    throw "Only positive numbers are allowed"
  }
  let counter = 0
    while(input !== 1){
      counter++
      if(input % 2 == 0){
        input = input/2
      } else {
         input = input * 3 + 1
        
      
      
      }
    } 
    return counter

  }  
   
    
  //  throw new Error("Remove this statement and implement this function");
 
