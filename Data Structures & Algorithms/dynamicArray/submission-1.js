class DynamicArray {
    arr
    capacity
    length
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.arr= []
        this.capacity=capacity
        this.length=0

    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i]=n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.length === this.capacity){
            this.resize()
        }
        this.arr[this.length]=n
        this.length++
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.length>0){
            this.length--
        }
        return this.arr[this.length]
    }

    /**
     * @returns {void}
     */
    resize() {
        let arr1= new Array(this.capacity*2).fill(0)
        for (let i=0; i<this.length; i++){
            arr1[i]=this.arr[i]
        }
        this.arr=arr1
        this.capacity*=2
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
