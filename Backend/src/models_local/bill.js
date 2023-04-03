const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bill', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    no_bill: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "bill"
    },
    transaksi_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transaksi',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'bill',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "bill",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "no_bill" },
        ]
      },
      {
        name: "transaksi_fk",
        using: "BTREE",
        fields: [
          { name: "transaksi_id" },
        ]
      },
    ]
  });
};
