export async function sleep(delay){
    return new Promise(resolve => {
        setTimeout(resolve, delay)
    })
}

export function CycleIterator(arr) {
    let current = 0;
    const size = arr.length;

    this.current = () => arr[current];
    this.next = () => {
        current++;
        if (current === size) {
            current = 0;
        }
        return this.current();
    }
    this.previous = () => {
        current--;
        if (current < 0) {
            current = size - 1;
        }
        return this.current();
    }
}