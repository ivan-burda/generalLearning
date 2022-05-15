
import {dimension} from "./dimension";

//  A chair interface
export interface IChair{
    height: number;
    width: number;
    depth: number;
    getDimensions(): dimension;
}

//  The chair base class
export default class Chair implements IChair{
    height = 0;
    width = 0;
    depth = 0;

    getDimensions(): dimension {
        return {
            width: this.width,
            height: this.height,
            depth: this.depth
        };
    }

}
