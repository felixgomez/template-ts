export class Greeter {
  private readonly name: string

  constructor(name: string) {
    this.name = name
  }

  sayHello(): string {
    return `Hello, ${this.name}!`
  }
}
