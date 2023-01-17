import { Router, Request, Response, NextFunction } from "express";

//  get /users
//  get /user/:uuid
//  post  /users
//  put /users/:uuid
//  delete/ users/:uuid

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users: object[] = [{ userName: "Jorge" }];
  res.status(200).send(users);

  res.json(users);
});

export default usersRoute;
