// Generics are one of the most powerful parts of TypeScript. They make it possible to reuse and transform our types into different types, instead of having to rewrite different definitions for each type. Think of them as functions, but for types. A type goes in, a different type comes out.

// This is where generics come in. We want the ability to write a type signature for a function that takes in an array of some type, lets call that type ItemType, and returns a single item with the type ItemType. Here's how we would write that signature.

function getFirstItem<ItemType>(list: ItemType[]): ItemType {
  return list[0];
}
