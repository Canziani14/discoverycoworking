module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        idUsers: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: dataTypes.STRING
        },
        LastName : {
            type: dataTypes.STRING
        },
        Email: {
            type: dataTypes.STRING
        },
        Password: {
            type: dataTypes.STRING
        },
        Work: {
            type: dataTypes.STRING
        },
        Avatar: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);

    return User
}