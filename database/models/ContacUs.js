module.exports = (sequelize, dataTypes) => {
    let alias = 'ContactUs';
    let cols = {
        idContactUs: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Email: {
            type: dataTypes.STRING
        },
        Comments: {
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