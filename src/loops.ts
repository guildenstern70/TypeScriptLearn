export class Loops
{

    public static Iterator(): number
    {
        let result = 0;
        const  someArray = [1, 2, 3, 4];

        for (const entry of someArray)
        {
            result += entry;
        }

        return result;
    }

    public static ForOf(): number
    {
        let result = 0;
        const list = [4, 5, 6];

        for (const i of list) // "4", "5", "6"
        {
            result += i;
        }

        return result;
    }

    public static ForIn(): number
    {
        let result: number = 0;
        const list = [4, 5, 6];

        for (const i in list) // "0", "1", "2",
        {
            result += Number(i);
        }

        return result;

    }

    public static NormalFor(): number
    {
        let result: number = 0;
        let i: number;

        for (i = 0; i <= 10; i += 2)
        {
           result += i;
        }

        return result;
    }

}
