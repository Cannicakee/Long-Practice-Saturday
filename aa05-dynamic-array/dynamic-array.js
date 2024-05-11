class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize
    this.length = 0
    this.data = Array(this.capacity)
  }

  read(index) {
    return this.data[index]
  }

  push(val) {
    this.data[this.length] = val
    this.length++
  }


  pop() {
    if (this.length === 0) {
      return undefined
    }
    let result = this.data[this.length - 1]
    this.data.length - 1
    if(this.length > 0) {
      this.length--
    }
    return result
  }

  shift() {

    // Your code here 
  }

  unshift(val) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.length++
    this.data[0] = val
  }

  indexOf(val) {

    // Your code here 
  }

  resize() {

    // Your code here 
  }

}


module.exports = DynamicArray;
