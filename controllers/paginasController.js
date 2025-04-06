import { Viaje } from "../models/Viaje.js";

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'});
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'});
};

const paginaViajes = async (req, res) => {

    const viajes = await Viaje.findAll();

    console.log('viajes --->', viajes);

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes});
};

const paginaTestimonios = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimonios'});
};

const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where: { slug } });
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
};

export {
    paginaInicio, 
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
}