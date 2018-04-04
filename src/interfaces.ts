/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  interfaces.ts
 *
 */


/**
 * Interfaces can (also) be seen as a way to clarify intent of a set of parameters
 */
interface ILabelledValue
{
    value: number;
    label?: string;  // this field is optional
}

/**
 * Use of ILabelledValue interface as a parameter
 */
export class Labeller
{
    /**
     *
     * @returns {string}
     */
    public static print(): string
    {
        const myObj = {value: 10, label: "Size Object"};
        return Labeller.printValue(myObj);
    }

    /**
     *
     * @param {ILabelledValue} message
     * @returns {string}
     */
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
