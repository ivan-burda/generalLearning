import { ReactElement } from "react";

//A function component returns either ReactElement or null
function HelloWorld(): ReactElement | null {
  return <div>Hello world!</div>;
}

//Annotating props
function Message({ message }: { message: string }): ReactElement {
  return <div>A message: {message}</div>;
}

interface FruitBasketProps {
  // This could be a string, but I'm using a union of strings
  // to constrain what the possible values are.
  fruitType: "apple" | "orange" | "banana";
  maxFruit: number;
  disabled?: boolean;
  fruit: string[];
}

const FruitBasket = (props: FruitBasketProps) => {
  // ...
};

//Props with a set default value
interface FruitBasketProps {
  // This could be a string, but I'm using a union of strings
  // to constrain what the possible values are.
  fruitType?: "apple" | "orange" | "banana";
  maxFruit: number;
  disabled?: boolean;
  fruit: string[];
  addFruit: (fruitName: string) => void;
}

const FruitBasket = ({ fruitType = "apple", ...props }: FruitBasketProps) => {
  // ...
};
