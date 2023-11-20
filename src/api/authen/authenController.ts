import { Request, Response } from "express";
import { TypedRequestBody } from "../../resource/interfaces";
import { RegisterBody } from "./authenTypes";

class authenController {
    async onRegister(req: TypedRequestBody<RegisterBody>, res: Response) {
        const { firstName, lastName, email, password } = req.body;
        res.send("test route")
    }
}

export default new authenController();