module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    };

    let config = {
        tableName: "categorias",
        timestamps: false
    };

    const Categoria = sequelize.define("Categoria", cols, config);



    return Categoria;

}