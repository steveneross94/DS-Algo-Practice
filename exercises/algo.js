// worksheet for DS&A with Udemy

const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']

function findNemo(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] === 'nemo'){
            console.log("Found Nemo!");
        }
    }  
}

findNemo(nemo);
// this is O(n) (linear time) because as we add more elements to the array, 
// the number of operations increases 

// what if:

let boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]);  //O(1)
    console.log(boxes[1]);  //O(1)
}

logFirstTwoBoxes(boxes) // O(2)