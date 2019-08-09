
   function get_achievement(x,y,z){
    let total = x+y+z;
          return total;
          
   }
   function grade(x,y,z){
       let total = get_achievement(x,y,z);
      //put the result of the get_achievement function inthe variable result
   
       if ( 250 <= total) {
           return("Your grade is A. ");
       }
       else if (200 <= total){
           return("Your grade is B. ");
       }
       else if  (100 <= total){
           return("Your grade is C. ");
       }       
       else {(0 <= total)
           return("Your grade is D.");
       }
    }
   function get_pass_or_failure (x,y,z){
   
       let get_pass_or_failure = [x, y, z];
       
       if (x >= 60 && y >= 60 && z >= 60){
           return "PASS !" ;
       }
       else{
           return "FAILED !";
       }
   }
   function judgement(x,y,z) {
    var a = grade(x,y,z);
    var b = get_pass_or_failure(x,y,z);

      if (grade(x,y,z) === "Your grade is A. ") 
      {
          return a + "EXCELLENT !";
      }
      else {
      } return a+b;
  }
console.log(judgement(60,80,90));