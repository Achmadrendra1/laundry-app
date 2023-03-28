const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaksi', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tanggal_terima: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    pelanggan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pelanggan',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'transaksi',
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
        name: "user_fk",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "pelanggan_fk",
        using: "BTREE",
        fields: [
          { name: "pelanggan_id" },
        ]
      },
    ]
  });
};
