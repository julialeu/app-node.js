import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        pagina: 'Inicio'});
});

router.get('/about-us', (req, res) => {
    res.render('about-us', {
        pagina: 'Nosotros'});
});

router.get('/travels', (req, res) => {    
    res.render('travels', {
        pagina: 'Viajes'});
});

router.get('/testimonials', (req, res) => {
    res.render('testimonials', {
        pagina: 'Testimonios'});
});

export default router;