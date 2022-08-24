module.exports = (sequelize, dataTypes) => {
    let alias = 'Service';
    let cols = {
        id_services: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        service: {
            type: dataTypes.STRING
        },
        id_membership : {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: 'services',
        timestamps: false
    };
    const Service = sequelize.define(alias, cols, config);
//relacion tiene muchos
    Service.associate = function(models){
        Service.hasMany (models.Category, {
            as:"membership",
            foreignKey: "id_membership"
        })
    }


    return Service
}