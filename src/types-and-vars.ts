/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  types-and-vars.ts
 *
 */

// Boolean
let isDone: boolean = true;

// Numbers
let decimal: number = 6;
let hex: number = 0xf00d;

// Strings
let color: string = 'blue';

// Template Strings
let fullName: string = `Alessio Saltarin`;
let age: number = 47;
let sentence: string = `Hi, my name is ${ fullName }. I am ${ age }.`;

// Enums
export enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;

// Cast (type assertion)
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

export class TypesAndVars
{
    static All(): number
    {
        let result = -1;

        if (isDone)
        {
            result = decimal*hex+color.length - notSure;
        }

        return result;
    }

    static  Color(): Color
    {
        return c;
    }

    static StrLength(): number
    {
        return strLength;
    }

    static Sentence(): string
    {
        return sentence;
    }

    static Describe(): void
    {
        console.log(`All => ${TypesAndVars.All()}`);
        console.log(`Color => ${TypesAndVars.Color()}`);
        console.log(`StrLength => ${TypesAndVars.StrLength()}`);
        console.log(`Sentence => ${TypesAndVars.Sentence()}`);
    }
}

