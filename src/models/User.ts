import { Entity } from "./Entity";

export class User extends Entity {
  name: string;
  games: string[];

  constructor(name: string) {
    super();

    this.name = name;

    this.games = [];
  }
}
