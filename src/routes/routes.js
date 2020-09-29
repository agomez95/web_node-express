const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index', { title: "Index Page" }); // si quieres enviarle un objeto de base datos puedes hacer esto de ejemplo
});

router.get('/contact', (req,res) => {
    res.render('contact', { title: "Contacto" });
});

router.get('/about', (req,res) => {
    res.render('about', { title: "Acerca" });
});

module.exports = router;