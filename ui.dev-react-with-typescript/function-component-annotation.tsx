import { ReactElement } from "react";

//A function component returns either ReactElement or null
function HelloWorld(): ReactElement | null {
  return <div>Hello world!</div>;
}

//Annotating props
function Message({ message }: { message: string }): ReactElement {
  return <div>A message: {message}</div>;
}
