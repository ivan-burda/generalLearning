// Class modifiers: public, protected, private, (readonly)
// -public
// By default, class fields are marked as public. This makes the fields accessible both inside and outside of the class.

// -protected
// What if we were writing a class that will be used by other developers. Many of the parts of the class should be accessed by other developers, but other parts contain implementation details that we would prefer to keep to ourselves. We can use the protected and private modifiers to stop other developers from accessing certain properties and methods.
// The protected modifier limits access to class properties and methods to the class itself and any classes that inherit the parent class. If we try to access a protected property or method, TypeScript will throw a type error.

// -private
// private is the most restrictive of the class modifiers. It only allows access to properties on the class they are defined on. Trying to access the field in child classes and outside the class causes TypeScript to throw a type error.

// -readonly
// readonly is another modifier which is not limited to classes. You can use it on Interfaces, objects, arrays, or any other type as well. Adding this modifier to a property makes it so you cannot mutate or make changes to the property whatsoever. You can think of this as the const variable declaration, but for object properties.

// ====================================================
// -Property shorthand
// class Fruit {
//   constructor(public name: string, protected sweetness: number) {}
// }
// const apple = new Fruit("Apple", 80);
// console.log(apple); // Fruit { name: "Apple", sweetness: 80 }

// ====================================================
// ECMAScript private fields: #name, #color, etc
// ES Private Fields
// ES Private Fields are a relatively new addition to the JavaScript language, and are distinctly different from TypeScript private fields. Since ES Private Fields are part of the JavaScript language, they have runtime guarantees which TypeScript cannot provide. If you mark a field as an ES Private Field, that field will not be accessible outside of the class instance.
// Also, classes that extend your class still won't have access to the private fields, which can help you avoid field naming collisions.

// ====================================================
// Class setters and getters
// Accessors (get and set)
// JavaScript provides the ability to add "accessors" to classes. These define virtual properties which call functions whenever a class property is read or changed. These functions have full access to the class instance and can read, transform, and modify any other instance property. We define accessors using the get and set keyword.
// Adding set to classes can be helpful when we want to validate the input before assigning it to the class.

// ====================SUMMARY================================
// As a rule of thumb, ES Private fields are generally what you want to use. However, if you can't target ES Next when you compile your code, or if you can't afford to have a lot of polyfill code, TypeScript's private modifier is a good alternative. Also, if you need classes that extend the base class to access a private property, you should use the protected modifier.
