/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  type-inference.ts
 *
 */

import {Point} from "./simple-class";

export class TypeInference
{

    public static TypeOfNumber(): string
    {
        let x = 3;
        console.log(typeof(x));
        return typeof(x); // number
    }

    public static TypeOfObject(): string
    {
        let x = new Point(0,0);
        return typeof(x); // object
    }

    public static Reflection(): string
    {
        let x = new Point(0,0);
        return x.constructor.name; // Point
    }

}
