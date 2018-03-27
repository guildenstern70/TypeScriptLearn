export class Loops
{

    static Iterator(): number
    {
        let result = 0;
        let someArray = [1, 2, 3, 4];

        for (let entry of someArray)
        {
            result += entry;
        }

        return result;
    }

    static ForOf(): number
    {
        let result = 0;
        let list = [4, 5, 6];

        for (let i of list) // "4", "5", "6"
        {
            result += i;
        }

        return result;
    }

    static ForIn(): number
    {
        let result: number = 0;
        let list = [4, 5, 6];

        for (let i in list) // "0", "1", "2",
        {
            result += Number(i);
        }

        return result;

    }

    static NormalFor(): number
    {
        let result: number = 0;
        let i: number;

        for (i = 0; i<=10; i+=2)
        {
           result += i;
        }

        return result;
    }


}
