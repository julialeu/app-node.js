import express from "express";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 4000;


//habilitar pug
app.set('view engine', 'pug');

app.use('/', router);


app.listen(port, () => {
    console.log(`hola mundo puerto ${port}`);
});