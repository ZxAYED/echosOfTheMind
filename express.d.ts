import { NextFunction, Request, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'



declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;

    }
  }
}


