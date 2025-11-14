import express, {
  ErrorRequestHandler,
  RequestHandler,
  Request,
  Response,
} from "express";

const app = express();

const handler: RequestHandler = (req, res) => {
  throw new Error("test");
  res.send("Hello World");
};

app.get("/", handler);

app.get("/:id", (req: Request<{ id: string }>, res: Response) => {
  res.send(`Hello World ${req.params.id}`);
});

// const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// };

// app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
