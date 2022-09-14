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
        lastName:{
            type: dataTypes.STRING
        },
        userEmail : {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        id_membership:{
            type: dataTypes.INTEGER,
        }
        
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);
//relacion pertenece a
    User.associate = function(models){
        

        User.hasMany (models.Membership, {
            as:"memberships",
            foreignKey: "id_membership"
        })

        
        
    }

    return User
}