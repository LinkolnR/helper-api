import { Request, Response, NextFunction } from "express";
import { ArrayService } from "../../../services/ArrayService";


export class ArrayController {
    #service: ArrayService;
  
    constructor() {
      this.#service = new ArrayService();
    }

    getLista = (req: Request, res: Response, next: NextFunction) => {
        const x = req.body;
        let array = x.data
        const {y,z,w} = req.query
  
      return res.status(200).json({
        result: this.#service.getLista((array),String(y),String(z),String(w)),
      });
    };
  }