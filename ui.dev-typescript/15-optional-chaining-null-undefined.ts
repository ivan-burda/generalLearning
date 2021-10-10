// Optional Chaining is a relatively new JavaScript operator which allows you to attempt to access properties on an object whether or not they actually exist. This can be really useful when we want to access deep properties of objects that might not actually exist. We can prepend a question mark to our "dot property access" (.) operator to create the Optional Chaining operator (?.) that lets us safely access any property, even optional or undefined properties. If the property doesn't actually exist or is null or undefined, JavaScript will quietly return undefined for the whole expression.

const messageInputParentInnerHTML = document.getElementById("messageInput")?.parentElement?.innerHTML;
messageInputParentInnerHTML; // const messageInputParentInnerHTML: strin

// Finally, we can optionally call methods on objects that may or may not exist. To do this, we prepend the optional chaining operator to the parentheses which call the function.

async function makeAPIRequest(url: string, log?: (message: string) => void) {
  log?.("Request started.");
  const response = await fetch(url);
  const data = await response.json();

  log?.("Request complete.");

  return data;
}

// Nullish Coalescing
const messageInputValue = document.getElementById("messageInput")?.value || "Alex";
messageInputValue; // const messageInputValue: string;

// The only problem with this approach is it checks against falsy values, not just null and undefined. That means when our #messageInput field is empty, it will still give us the default value since empty string is falsy.

// The Nullish Coalescing operator solves this by only checking if a value is null or undefined. It works the same way as the logical OR, but with two question marks (??) instead of two vertical bars.

const messageInputValue = document.getElementById("messageInput")?.value ?? "Alex";
messageInputValue; // const messageInputValue: string;

// Non-null Assertion
// Sometimes, you just know better than the type checker. If you positively know that a particular value or property is not null or undefined, you can tell the type checker using the Non-null Assertion operator (!.), which looks a lot like the Optional Chaining operator. Using this operator essentially tells the type checker "There's no way this property could possibly be null or undefined, so just pretend like it's the correct type."

const messageInputValue = document.getElementById("messageInput")!.value;
messageInputValue; // const messageInputValue: string;
