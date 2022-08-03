module.exports = (sequelize, dataTypes) => {
    let alias = 'Income_Expenses';
    let cols = {
        idIncome_Expenses: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Income_Time: {
            type: dataTypes.DATE
        },
        Expenses_Time: {
            type: dataTypes.DATE
        },
    };
    let config = {
        tableName: 'income_expenses',
        timestamps: false
    };
    const Income_Expenses = sequelize.define(alias, cols, config);

    return Income_Expenses
}