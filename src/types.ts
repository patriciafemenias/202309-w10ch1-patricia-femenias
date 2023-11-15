import { type Request } from "express";

export interface Tool {
  id: number;
  toolName: string;
  difficultyLevel: number;
}

export type ByToolIdRequest = Request<{ toolId: string }>;
