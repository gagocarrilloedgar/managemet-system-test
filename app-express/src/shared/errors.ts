/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import httpStatus from "http-status";

import AppError from "./AppError";
import { config } from "./config";

/**
 * Error converter
 * @param {Error} err
 * @param {Request} _req
 * @param {Response} _res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 * @private
 * @function errorConverter
 * @memberof middlewares
 * @example
 */
export const errorConverter = (
  err: any,
  _req: any,
  _res: any,
  next: any
): void => {
  let error = err;
  const isErrorInstance = error instanceof AppError;
  if (!isErrorInstance) {
    const statusCode = error.statusCode;
    const message = error.message || httpStatus[statusCode];
    error = new AppError(statusCode, message, false, error.stack);
  }
  next(error);
};

export const errorHandler = (err: any, _req: any, res: any, _next: any) => {
  let { statusCode, message } = err;
  if (!err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(!config.isProduction && { stack: err.stack })
  };

  if (!config.isProduction) console.error(err);

  res.status(statusCode).json({ error: response });
};
