module.exports = (sequelize, dataTypes) => {
    let alias = 'User_membership';
    let cols = {
        id_users_memberships: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: dataTypes.STRING
        },
        userEmail : {
            type: dataTypes.STRING
        },

    };
    let config = {
        tableName: 'users_memberships',
        timestamps: false
    };
    const User_membership = sequelize.define(alias, cols, config);

    return User_membership
}