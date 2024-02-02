/**
 *
 *  TypeScript Learn
 *  (C) 2018-24 Alessio Saltarin
 *
 *  custom-types.ts
 *
 */

// The following code is a simple example of a custom type
// in TypeScript. It resembles an interface, but it is not.
// It is a type definition.
type User = {
    id: number;
    name: string;
    email: string;
}

export class CustomTypes {

    private user: User = {
        id: 1,
        name: 'Alessio Saltarin',
        email: 'alessiosaltarin@gmail.com'
    };

    public getUser(): User {

        console.log(`User: ${this.user.name} (${this.user.email})`);
        return this.user;
    }

}
