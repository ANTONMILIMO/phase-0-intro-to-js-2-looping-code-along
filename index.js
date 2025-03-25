// Code your solutions in this file
function writeCards(names, event) {
    let customMessages = [];
  
    for (let i = 0; i < names.length; i += 1) {
      customMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return customMessages;
  }
  
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  
  // while loop
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number -= 1;
    }
  }
  
  console.log(countDown(10));