import { Request, Response } from "express";

export const getNotes = (req: Request, res: Response) => {
  res.json({ message: "Notes endpoint works 🚀" });
};