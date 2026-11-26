class DynamicArray {
    int[] arr;
    int capacity;
    int length;
    public DynamicArray(int capacity) {
        this.capacity=capacity;
        this.arr = new int[capacity];
        this.length=0;
    }

    public int get(int i) {
        return this.arr[i];
    }

    public void set(int i, int n) {
        this.arr[i]=n;
    }

    public void pushback(int n) {
        if(this.length==this.capacity){resize();}
        this.arr[this.length]=n;
        this.length++;
    }

    public int popback() {
        if(length>0){length--;}
        return arr[length];
    }

    private void resize() {
        int[] arr1=new int[this.capacity*2];
        for(int i=0; i<length; i++){
            arr1[i]=arr[i];
        }
        arr=arr1;
        capacity*=2;
    }

    public int getSize() {
        return length;
    }

    public int getCapacity() {
        return capacity;
    }
}
