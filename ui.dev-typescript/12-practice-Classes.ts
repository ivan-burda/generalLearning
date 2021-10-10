export class Fruit {
  name: string;
  protected sweetness: number;
  private isEdible: boolean = true;
  constructor(name: string, sweetness: number = 50, isEdible: boolean) {
    this.name = name;
    this.sweetness = sweetness;
  }
  static cook(fruit: Fruit): string {
    return `Cooked ${fruit.name}`;
  }
  get tasty() {
    return this.sweetness > 60;
  }
}

export class Apple extends Fruit {
  constructor(public variety: string) {
    super("Apple");
  }
}
