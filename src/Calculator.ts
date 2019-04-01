export class Calculator {

    constructor() {}

    public add(a: number,b: number): number {
        return a + b;
    }

    public subtract(a: number,b: number): number {
        return a - b;
    }

    public multiply(a: number,b: number): number {
        return a * b;
    }

    // old way
    public sumOfArray(numbs: ReadonlyArray<number>) {
        const x = numbs.reduce((a,b) => a+b);
        return x;
    }

    //new way
    public sumOfArrayNew(numbs: readonly number[]) {
        const x = numbs.reduce((a,b) => a+b);
        return x;
    }

    // tuples
    public sumWithTuple(numbs: readonly [number, number]) {
        const x = numbs[0] + numbs[1];
        return x;
    }
}