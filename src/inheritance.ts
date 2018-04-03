/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  inheritance.ts
 *
 */

abstract class Shape
{
    protected abstract area(): number;
    protected abstract perimeter(): number;
}

class Square extends Shape
{
    private readonly side: number;

    constructor(squareSide: number)
    {
        super();
        this.side = squareSide;
    }

    public area(): number
    {
        return (this.side * this.side);
    }

    public perimeter(): number
    {
        return 4 * this.side;
    }
}

export { Shape, Square };
