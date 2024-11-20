import { Entity } from "./Entity";

export class Game extends Entity {
  title: string;

  constructor(title: string) {
    super();

    this.title = title;
  }
}
