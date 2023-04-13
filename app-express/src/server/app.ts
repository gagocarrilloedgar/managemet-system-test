import express, { NextFunction, Request, Response } from "express";

import bodyParser from "body-parser";
import cors from "cors";
import Router from "express-promise-router";

import { apiEndpoints } from "../api";
import { errorConverter, errorHandler } from "../shared/errors";

// Express Configuration
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Defined wich router will be used
const router = Router();
app.use(router);

router.use("/api", does_method_exist, apiEndpoints(router));

router.get("*", (_req: Request, res: Response) => {
  res.status(404).send("404 Not Found");
});

function does_method_exist(_req: Request, _res: Response, next: NextFunction) {
  next();
}

// Convert error to ApiError, if needed
router.use(errorConverter);

// Handle error
router.use(errorHandler);

export default app;
