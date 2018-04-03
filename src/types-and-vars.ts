/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  types-and-vars.ts
 *
 */

// Boolean
const isDone: boolean = true;

// Numbers
const decimal: number = 6;
const hex: number = 0xf00d;

// Strings
const color: string = "blue";

// Symbols
const ONE: symbol = Symbol("one");
const TWO: symbol = Symbol("two");
const THREE: symbol = Symbol("three");

// Template Strings
const fullName: string = "Alessio Saltarin";
const age: number = 47;
const sentence: string = `Hi, my name is ${ fullName }. I am ${ age }.`;  // Notice `

// Enums
export enum Color {Red, Green, Blue}
const c: Color = Color.Green;

// Any
const notSure: any = 4;

// Cast (type assertion)
const someValue: any = "this is a string";  // Note that this is 'any'
const strLength: number = (someValue as string).length;

export class TypesAndVars
{
    public static All(): number
    {
        let result = -1;

        if (isDone)
        {
            result = decimal * hex + color.length - notSure;
        }

        return result;
    }

    public static  Color(): Color
    {
        return c;
    }

    public static StrLength(): number
    {
        return strLength;
    }

    public static Sentence(): string
    {
        return sentence;
    }

    public static Symbols(): number
    {
        let myObj: any = {};

        myObj[ONE] = 1;
        myObj[TWO] = 2;
        myObj[THREE] = 3;

        return myObj[ONE]+myObj[TWO]+myObj[THREE];
    }

    public static Describe(): void
    {
        console.log(`All => ${TypesAndVars.All()}`);
        console.log(`Color => ${TypesAndVars.Color()}`);
        console.log(`StrLength => ${TypesAndVars.StrLength()}`);
        console.log(`Sentence => ${TypesAndVars.Sentence()}`);
    }
}
