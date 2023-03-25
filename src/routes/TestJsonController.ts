import express, { Request, Response } from 'express';
var HttpStatus = require('http-status-codes');

export const testRouter = express.Router({
    strict: true
});

testRouter.post("/test/test", async (req: Request, res: Response) => {
    try {
        const item = req.body;
        res.status(HttpStatus.OK).json(Object.fromEntries(
            new Map<string, Object>()
                .set("Integer", item.int1
                    + item.int10
                    + item.subObject.int5
                    + item.subObject.int15)
                .set("String", item.string1
                    + item.string10
                    + item.subObject.string5
                    + item.subObject.string15)
                .set("Boolean", item.boolean1
                    && item.boolean10
                    && item.subObject.boolean5
                    && item.subObject.boolean15)
        ));
    } catch (e: any) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e.message);
    }
});
