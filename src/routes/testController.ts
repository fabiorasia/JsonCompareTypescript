import express, { Request, Response } from 'express';

export const testRouter = express.Router({
    strict: true
});

console.log("testRouter INIT");

testRouter.post("/test/test", async (req: Request, res: Response) => {
    try {
        const item = req.body;

        res.status(201).json(req.body);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
