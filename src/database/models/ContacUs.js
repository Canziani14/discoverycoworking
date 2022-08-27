module.exports = (sequelize, dataTypes) => {
    let alias = 'ContactUs';
    let cols = {
        id_ContactUs: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },

        email: {
            type: dataTypes.STRING
        },
        comments: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: 'ContactUs',
        timestamps: false
    };
    const ContactUs = sequelize.define(alias, cols, config);

    return ContactUs
}