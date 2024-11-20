import { Request, Response } from "express";
import { UserService } from "../services/UserService";

import { User } from "../models/User";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  create = (req: Request, res: Response): void => {
    try {
      const { name } = req.body;
      const user = new User(name);

      const createdUser = this.userService.create(user);

      res.status(201).json(createdUser);
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(400).json({ error: errorMessage });
    }
  };

  findAll = (req: Request, res: Response): void => {
    try {
      const usersList = this.userService.findAll();

      res.status(200).json(usersList);
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(400).json({ error: errorMessage });
    }
  };
}
