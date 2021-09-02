import type { ErrorRequestHandler } from 'express';

export const defaultErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  next;
  console.error(err);
  err?.cause && console.error('Cause: ', err?.cause);
  res.status(err?.status || 500);
  res.json({
    code: err?.code || 'ERROR',
    message: err?.message
  });
};
