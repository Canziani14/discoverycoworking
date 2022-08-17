module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id_category: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
    };
    
    let config = {
        tableName: 'category',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasMany (models.User, {
            as:"user",
            foreignKey: "id_category"
        })
    }

    return Category
}
