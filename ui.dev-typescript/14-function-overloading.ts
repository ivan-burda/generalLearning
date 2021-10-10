function stringOrArrayLength(input: string | unknown[]) {
  return input.length;
}

If we had more than a few arguments or types in our union, it could get messy. That's where function overloading comes in.

We overload a function by adding multiple function type signatures above the function definition. If we were to overload the same function as above without using unions, it might look like this:

function stringOrArrayLength(input: string): number;
function stringOrArrayLength(input: unknown[]): number;
function stringOrArrayLength(input: { length: number }): number {
  return input.length;
}