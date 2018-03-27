/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  collections.ts
 *
 */

export class Collections
{

    static Arrays(): number
    {
        let array: Array<number> = [];
        let result: number = 0;

        array.push(Number(10));
        array.push(Number(11));
        array.push(Number(12));

        array.forEach(function (value) {
            result += value;
        });

        return result;
    }

    static Tuples(): number
    {
        let tuple: [string, number];

        tuple = ["hello", 10]; // OK

        // Modify element
        tuple[1] = 20;

        // Add element (beware of type!)
        tuple[2] = 12; // works well because it can be string or number, union type

        return tuple[0].length + tuple[1] + Number(tuple[2]);
    }



}
