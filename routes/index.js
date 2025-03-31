import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hola mundo");
})

router.get("/about-us", (req, res) => {

    const viajes = 'Viaje a Alemania';
    res.render('about-us', {
        viajes});
})

router.get("/contact", (req, res) => {
    res.send("hola contact");
})

export default router;