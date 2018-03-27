/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  greeter.ts
 *
 */

export class Greeter
{
    readonly greeting: string;

    constructor(message: string)
    {
        this.greeting = message;
    }

    public greet(): string
    {
        return `Bonjour, ${this.greeting}!`;
    }
}
