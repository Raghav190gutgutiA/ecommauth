import type { Request, Response } from "express";

export class AuthController {
    register(req: Request, res: Response) {
        res.status(201).json({
            name: "raghav",
        });
    }
}
