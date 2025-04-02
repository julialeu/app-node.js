import express from "express";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 4000;


//habilitar pug
app.set('view engine', 'pug');

app.use((req, res, next) => {
    console.log('respuesta recibida', res);
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    console.log('nueva variable', res.locals);
    return next();
})

app.use(express.static('public'));

app.use('/', router);


app.listen(port, () => {
    console.log(`hola mundo puerto ${port}`);
});