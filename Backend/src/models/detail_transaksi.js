const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detail_transaksi', {
    transaksi_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transaksi',
        key: 'id'
      }
    },
    paket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paket',
        key: 'id'
      }
    },
    layanan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'layanan',
        key: 'id'
      }
    },
    jenis_barang_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jenis_barang',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status_cucian',
        key: 'id'
      }
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tanggal_selesai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pembayaran_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pembayaran',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'detail_transaksi',
    timestamps: false,
    indexes: [
      {
        name: "transaksi_fk",
        using: "BTREE",
        fields: [
          { name: "transaksi_id" },
        ]
      },
      {
        name: "paket_fk",
        using: "BTREE",
        fields: [
          { name: "paket_id" },
        ]
      },
      {
        name: "layanan_fk",
        using: "BTREE",
        fields: [
          { name: "layanan_id" },
        ]
      },
      {
        name: "barang_fk",
        using: "BTREE",
        fields: [
          { name: "jenis_barang_id" },
        ]
      },
      {
        name: "status_fk",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "bayar_fk",
        using: "BTREE",
        fields: [
          { name: "pembayaran_id" },
        ]
      },
    ]
  });
};
