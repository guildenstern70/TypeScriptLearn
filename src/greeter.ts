/**
 *
 *  TypeScript Learn
 *  (C) 2018-21 Alessio Saltarin
 *
 *  greeter.ts
 *
 */

export class Greeter {
    private readonly greeting: string;

    /**
     *
     * Greet with a message
     *
     * @param {string} message
     */
    constructor(message: string) {
        this.greeting = message;
    }

    /**
     * Print greeting
     *
     * @returns {string}
     */
    public greet(): string {
        return `Bonjour, ${this.greeting}!`;
    }
}
