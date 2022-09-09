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
        services : {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.INTEGER
        },
        img : {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: 'memberships',
        timestamps: false
    };
    const Membership = sequelize.define(alias, cols, config);
//relacion pertenece a
    Membership.associate = function(models){
        Membership.belongsTo (models.User, {
            as:"users",
            foreignKey: "id_membership"
        })
    }


    return Membership
}