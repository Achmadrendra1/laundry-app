const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pembayaran', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jenis_bayar_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jenis_bayar',
        key: 'id'
      }
    },
    jumlah_bayar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tanggal_bayar: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pembayaran',
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
        name: "jenis_bayar",
        using: "BTREE",
        fields: [
          { name: "jenis_bayar_id" },
        ]
      },
    ]
  });
};
