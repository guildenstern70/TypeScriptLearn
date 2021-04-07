/**
 *
 *  TypeScript Learn
 *  (C) 2018-21 Alessio Saltarin
 *
 *  types-and-vars.ts
 *
 */

// Boolean
const isDone = true;

// Numbers
const decimal = 6;
const hex = 0xf00d;

// Strings
const color = 'blue';

// Symbols
const ONE = Symbol('one');
const TWO = Symbol('two');
const THREE = Symbol('three');

// Template Strings
const fullName = 'Alessio Saltarin';
const age = 47;
const sentence = `Hi, my name is ${fullName}. I am ${age}.`; // Notice `

// Enums
export enum Color {
    Red,
    Green,
    Blue,
}
const c: Color = Color.Green;

// Any
const notSure: any = 4;

// Cast (type assertion)
const someValue: any = 'this is a string'; // Note that this is 'any'
const strLength: number = (someValue as string).length;

/**
 * Various examples of variables and types
 */
export class TypesAndVars {
    public static All(): number {
        let result = -1;

        if (isDone) {
            result = decimal * hex + color.length - notSure;
        }

        return result;
    }

    public static Color(): Color {
        return c;
    }

    public static StrLength(): number {
        return strLength;
    }

    public static Sentence(): string {
        return sentence;
    }

    public static Symbols(): number {
        const myObj: any = {};

        myObj[ONE] = 1;
        myObj[TWO] = 2;
        myObj[THREE] = 3;

        return myObj[ONE] + myObj[TWO] + myObj[THREE];
    }

    public static Describe(): void {
        console.log(`All => ${TypesAndVars.All()}`);
        console.log(`Color => ${TypesAndVars.Color()}`);
        console.log(`StrLength => ${TypesAndVars.StrLength()}`);
        console.log(`Sentence => ${TypesAndVars.Sentence()}`);
    }
}
