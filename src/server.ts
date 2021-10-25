import express, {Request,Response} from 'express';

const app = express();
const port = process.env.PORT || 3000; // TO RUN - npm run dev
const consolidate = require('consolidate');

// view engine setup
app.engine(".html", consolidate.swig);
app.set("view engine", "html");
app.set("views", `${__dirname}\\views`);

app.get("/", (req:Request, res:Response) => {
    return res.send('Test Hello');
});

// TP
app.get("/test/:page", (req:Request, res:Response) => {
    const {page} = req.params
    return res.send(page);
});
// FN
app.get("/views/:page", (req:Request, res:Response) => {
    const {page} = req.params // http://localhost:3000/views/alert(1)
    return res.render(`view_test`, {someParam: page});
});
// FP
app.get("/view_page/:page", (req:Request, res:Response) => {
    const {page} = req.params
    return res.render(page, {});
});

const server = app.listen(port, ()=> {
    console.log(`Express server listening on port: ${port}`);
});