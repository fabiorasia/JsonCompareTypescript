/**
 * Required External Modules
 */

import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import {testRouter}  from "./routes/testController";

// export const routes = express.Router();
// routes.use(testRouter);

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
*  App Configuration
*/

app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use("/test/test", testRouter);
app.use(testRouter);




/**
 * Server Activation
 */



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/items', (req, res) => {
    console.log('OK');
    res.json({ ok: true });
});
app.use("/test/test", testRouter);

console.log('Controllers START');
app._router.stack.forEach(function (r: { route: { path: any; }; }) {
    if (r.route && r.route.path) {
        console.log(r.route.path)
    }
})
console.log('Controllers END');
