async function createFruit(fruitName) {
  try {
    const FruitClass = await import(`./${fruitName}.js`);
  } catch {
    console.error("Error getting fruit class module:", fruitName);
  }
  return new FruitClass();
}
