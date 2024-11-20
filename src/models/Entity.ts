export class Entity {
  public id: number;

  constructor() {
    this.id = Math.floor(Math.random() * 1000);
  }
}
