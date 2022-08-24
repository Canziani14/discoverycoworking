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
        category: {
            type: dataTypes.STRING
        },
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);
//relacion pertenece a
    User.associate = function(models){
        User.belongsTo (models.Category, {
            as:"categorys",
            foreignKey: "category"
        }), 

        //relacoin muchos a muchos
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