// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; //O(1)
  
    for (let i = 0; i < input.length; i++) { // O(n) n is input
      anotherFunction(); //O(n)
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(n)
  }

// O(3 + 4n)
// total should be O(n) because we drop the 3 and the 4 on 4n