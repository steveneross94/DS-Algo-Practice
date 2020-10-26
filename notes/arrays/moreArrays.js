//pop
//push
//shift
//unshift
//get

class MyArray {
    constructor(){
        this.data = {};
        this.length = 0
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item;
        this.length++
        return this.data
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    deleteAtIndex(index){
        // find the item to delete
        const item = this.data[index]
        // get rid of it
        this.shiftItems(index)
        return item
        // ??? 
        // adjust something 
    }

    shiftItems(index){
        for (let i = index; i < this.length - 1; i++ ){
            this.data[i] = this.data[i + 1]
        }
        console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1]
        this.length--
    }
    

}

const myArray = new MyArray()

myArray.push('hi')
myArray.push('my')
myArray.push('name')
myArray.push('is')
myArray.push('steven')
myArray.push('!')
console.log(myArray);
myArray.pop()
myArray.shiftItems(0)
console.log(myArray)

