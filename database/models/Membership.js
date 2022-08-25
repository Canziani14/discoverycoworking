module.exports = (sequelize, dataTypes) => {
    let alias = 'Membership';
    let cols = {
        id_membership: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        details: {
            type: dataTypes.STRING
        },
        id_services : {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.INTEGER
        },
        img : {
            type: dataTypes.STRING
        },
        id_user : {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: 'memberships',
        timestamps: false
    };
    const Membership = sequelize.define(alias, cols, config);
//relacion pertenece a
    Membership.associate = function(models){
        Membership.belongsTo (models.Service, {
            as:"service",
            foreignKey: "id_services"
        }),

        Membership.belongsToMany(models.User, {
            as: "users",
            through: "user_membership", /// Tabla intermedia 
            foreignKey: "id_membership", /// Es el FK del modelo en el que estas (en la tabla intermedia de la bd)
            otherKey: "id_user", /// Es el FK del otro modelo (en la tabla intermedia de la bd)
            timestamps: false
        })
    }


    return Membership
}