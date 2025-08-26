import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("API Error:", err);
  if (err.code && err.clientVersion) {
    return res.status(500).json({
      error: "Database error",
      details: err.message,
    });
  }
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
}