let position: Coordinate3D = [27, 31, 5];

//This is a type alias
type Coordinate3D = [number, number, number];

function calculateDistance3D(point1: Coordinate3D, point2: Coordinate3D): number {}

type FruitList = string[];
interface IndexedFruitList {
  [index: number]: string;
}

const fruit: FruitList = ["Apple", "Orange"];

//Differences between 'type' and 'interface'
// Interfaces support 'extends' so that one interface can extend another one and thus inherit its properties
// type aliases, on the other hand, can represent any type, including functions and Interfaces!
