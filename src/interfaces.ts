/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  interfaces.ts
 *
 */

// Interfaces can (also) be seen as a way to clarify intent of a set of parameters
interface ILabelledValue
{
    value: number;
    label?: string;  // this field is optional
}

export class Labeller
{
    public static print(): string
    {
        const myObj = {value: 10, label: "Size Object"};
        return Labeller.printValue(myObj);
    }

    private static printValue(message: ILabelledValue): string
    {
        let output = String(message.value);
        if (message.label)
        {
            output += " (" + message.label + ")";
        }
        return output;
    }

}
