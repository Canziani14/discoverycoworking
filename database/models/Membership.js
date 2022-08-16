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

    return Membership
}