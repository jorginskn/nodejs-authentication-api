import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: "bar", nome: "Jorge", });
});

app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});

//npm run build - node ./dist/@types/index.js
