module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id_users: {
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
        password: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        id_category: {
            type: dataTypes.STRING
        },
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsTo (models.Category, {
            as:"categorys",
            foreignKey: "id_category"
        }), 

        User.belongsToMany(models.Membership, {
            as: "memberships",
            through: "user_membership", /// Tabla intermedia 
            foreignKey: "id_user", /// Es el FK del modelo en el que estas (en la tabla intermedia de la bd)
            otherKey: "id_membership", /// Es el FK del otro modelo (en la tabla intermedia de la bd)
            timestamps: false
        })
    }

    return User
}