import { Request, Response, NextFunction } from "express";
import {LoremIpsumService } from "../../../services/LoremIpsumService"

interface LoremRequest {
  numeroDePalavras : number
}

export class LoremController {
  #service: LoremIpsumService;

  constructor() {
    this.#service = new LoremIpsumService();
  }

  getLoremIpsum = (req: Request<LoremRequest>, res: Response, next: NextFunction) => {
    var { numeroDePalavras } = req.body.data;
    return res.status(200).json({
      result: this.#service.getLoremIpsum(Number(req.body.data))
    });
  };
}