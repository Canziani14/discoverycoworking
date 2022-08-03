module.exports = (sequelize, dataTypes) => {
    let alias = 'Membership';
    let cols = {
        idMemberships: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Services: {
            type: dataTypes.STRING
        },
        Details: {
            type: dataTypes.STRING
        },
        Price : {
            type: dataTypes.STRING
        },
        Images: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: 'memberships',
        timestamps: false
    };
    const Membership = sequelize.define(alias, cols, config);

    return Membership
}