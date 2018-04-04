/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  type-inference.ts
 *
 */

import {Point} from "./simple-class";


/**
 * Get the type of an object
 *
 */
export class TypeInference
{

    public static TypeOfNumber(): string
    {
        const x = 3;
        console.log(typeof(x));
        return typeof(x); // number
    }

    public static TypeOfObject(): string
    {
        const x = new Point(0, 0);
        return typeof(x); // object
    }

    public static Reflection(): string
    {
        const x = new Point(0, 0);
        return x.constructor.name; // Point
    }

}
