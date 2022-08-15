module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id_categorys: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
    };
    
    let config = {
        tableName: 'categorys',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config);

    return Category
}
