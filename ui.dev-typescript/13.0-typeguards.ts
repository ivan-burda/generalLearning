// Examples include typeof, instanceof, in, and Array.isArray. Each of these is able to assert to TypeScript that a value either does or does not conform to some type.

function isFruit(maybeFruit: Fruit | Vegetable): maybeFruit is Fruit {
  if ("sweetness" in maybeFruit) return true;
  return false;
}

const tomato = { name: "Tomato", color: "red", tenderness: 70 };
if (isFruit(tomato)) {
  console.log(`Tomato is ${tomato.sweetness}% sweet.`);
} else {
  console.log(`Tomato is ${tomato.tenderness}% tender.`);
}

// "Tomato is 70% tender."

// Our type predicate, maybeFruit is Fruit, tells us that if this function returns true, then maybeFruit is definitely a Fruit. Since tomato doesn't have a sweetness property, it is recognized as a Vegetable, which lets us access the tenderness property without warning.
