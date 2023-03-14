const { Router } = require('express');
const router = Router();
const {Actividades, Country} = require("../db")


router.get("/", async (req, res) => {
    try {
        const getActivities = await Actividades.findAll()
        if(getActivities){
            return res.status(200).send(getActivities); 
        } else { return "no se encontraron actividades" }      
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post("/", async (req, res) => {
try {
    req.body.duracion = parseFloat(req.body.duracion)
    const {idPais,name,dificultad,duracion,temporada} = req.body
 
    console.log( "estos son los datos que me llegan por body:",idPais,name,dificultad,duracion,temporada)
    let nuevaActividad = await Actividades.create({
        name, 
        dificultad,
        duracion,
        temporada
    })
    console.log(nuevaActividad)

    const agregarPais = await Country.findAll({
        where: {
            id: idPais,
        }
    })
    
    await nuevaActividad.addCountry(agregarPais)  //mixing sequelize add + nombreTabla

   return res.status(201).send(nuevaActividad) 
} catch (error) {
    res.status(400).send(error.message)
 }   
}) 



module.exports = router;