const {DataTypes} = require("sequelize"); 

module.exports = (sequelize) => {
    sequelize.define("Actividades", { 
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name: {
            type: DataTypes.STRING,
        },
        dificultad: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"), // validacion desde el back, definiendo que atributos podes recibir como validos
        },
        duracion: {
            type: DataTypes.INTEGER
        },
        temporada: {
            type: DataTypes.ENUM("verano", "otoño", "primavera", "invierno"), 
        }
    }, {timestamps: false, freezeTableName: true}); 
}