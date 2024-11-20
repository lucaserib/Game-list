import { Entity } from "../models/Entity";

export abstract class BaseService<T extends Entity> {
  protected items: T[] = [];

  create(item: T): T {
    this.items.push(item);

    return item;
  }

  findAll(): T[] {
    return this.items;
  }
}
