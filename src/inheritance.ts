/**
 *
 *  TypeScript Learn
 *  (C) 2018 Alessio Saltarin
 *
 *  inheritance.ts
 *
 */

/**
 * Base abstract class
 */
abstract class Shape
{
    protected abstract area(): number;
    protected abstract perimeter(): number;
}

/**
 * Implementation of base class
 */
class Square extends Shape
{
    private readonly side: number;

    /**
     *
     * @param {number} squareSide
     */
    constructor(squareSide: number)
    {
        super();
        this.side = squareSide;
    }

    /**
     * Get area of square
     *
     * @returns {number}
     */
    public area(): number
    {
        return (this.side * this.side);
    }

    /**
     * Get perimeter of square
     *
     * @returns {number}
     */
    public perimeter(): number
    {
        return 4 * this.side;
    }
}

export { Shape, Square };
