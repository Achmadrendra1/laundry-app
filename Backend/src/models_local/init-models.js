const { Sequelize } = require('sequelize');
const sequelizes = new Sequelize(
  // file .env
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  // process.env.DATABASE_HOST,
  {
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  }
)


var DataTypes = require("sequelize").DataTypes;
var _bill = require("./bill");
var _detail_transaksi = require("./detail_transaksi");
var _jenis_barang = require("./jenis_barang");
var _jenis_bayar = require("./jenis_bayar");
var _layanan = require("./layanan");
var _paket = require("./paket");
var _pelanggan = require("./pelanggan");
var _pembayaran = require("./pembayaran");
var _status_cucian = require("./status_cucian");
var _transaksi = require("./transaksi");
var _user = require("./user");

function initModels(sequelize) {
  var bill = _bill(sequelize, DataTypes);
  var detail_transaksi = _detail_transaksi(sequelize, DataTypes);
  var jenis_barang = _jenis_barang(sequelize, DataTypes);
  var jenis_bayar = _jenis_bayar(sequelize, DataTypes);
  var layanan = _layanan(sequelize, DataTypes);
  var paket = _paket(sequelize, DataTypes);
  var pelanggan = _pelanggan(sequelize, DataTypes);
  var pembayaran = _pembayaran(sequelize, DataTypes);
  var status_cucian = _status_cucian(sequelize, DataTypes);
  var transaksi = _transaksi(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  detail_transaksi.belongsTo(jenis_barang, { as: "jenis_barang", foreignKey: "jenis_barang_id"});
  jenis_barang.hasMany(detail_transaksi, { as: "detail_transaksis", foreignKey: "jenis_barang_id"});
  pembayaran.belongsTo(jenis_bayar, { as: "jenis_bayar", foreignKey: "jenis_bayar_id"});
  jenis_bayar.hasMany(pembayaran, { as: "pembayarans", foreignKey: "jenis_bayar_id"});
  detail_transaksi.belongsTo(layanan, { as: "layanan", foreignKey: "layanan_id"});
  layanan.hasMany(detail_transaksi, { as: "detail_transaksis", foreignKey: "layanan_id"});
  detail_transaksi.belongsTo(paket, { as: "paket", foreignKey: "paket_id"});
  paket.hasMany(detail_transaksi, { as: "detail_transaksis", foreignKey: "paket_id"});
  transaksi.belongsTo(pelanggan, { as: "pelanggan", foreignKey: "pelanggan_id"});
  pelanggan.hasMany(transaksi, { as: "transaksis", foreignKey: "pelanggan_id"});
  detail_transaksi.belongsTo(pembayaran, { as: "pembayaran", foreignKey: "pembayaran_id"});
  pembayaran.hasMany(detail_transaksi, { as: "detail_transaksis", foreignKey: "pembayaran_id"});
  detail_transaksi.belongsTo(status_cucian, { as: "status", foreignKey: "status_id"});
  status_cucian.hasMany(detail_transaksi, { as: "detail_transaksis", foreignKey: "status_id"});
  bill.belongsTo(transaksi, { as: "transaksi", foreignKey: "transaksi_id"});
  transaksi.hasMany(bill, { as: "bills", foreignKey: "transaksi_id"});
  detail_transaksi.belongsTo(transaksi, { as: "transaksi", foreignKey: "transaksi_id"});
  transaksi.hasMany(detail_transaksi, { as: "detail_transaksis", foreignKey: "transaksi_id"});
  transaksi.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(transaksi, { as: "transaksis", foreignKey: "user_id"});

  return {
    bill,
    detail_transaksi,
    jenis_barang,
    jenis_bayar,
    layanan,
    paket,
    pelanggan,
    pembayaran,
    status_cucian,
    transaksi,
    user,
  };
}
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
const models = initModels(sequelizes);
module.exports = { sequelizes, models };
