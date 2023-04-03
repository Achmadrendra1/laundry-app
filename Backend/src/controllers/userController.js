const { models } = require('../models/init-models');
const bcrypt = require('bcrypt')


const FindAllUser = async(req, res) => {
    try {
        const data = await models.user.findAll()
        res.status(200).send(data)
    } catch (err) {
        res.status(404).send("Data Tidak Ditemukan\n" + err)
    }
}

const FindUserByUsername = async(req, res) => {
    try {
        const data = await models.user.findOne({
            where : {
                username : req.params.username
            }
        })
        if(!data){
           res.status(404).send("Data Tidak Ditemukan")
        }
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send("Data Tidak Ditemukan")
    }
}

const CreateNewUser = async(req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)
    try {
        await models.user.create({
            username : req.body.username,
            password : hash,
            nama : req.body.nama,
            role : req.body.role || 'Kasir'
        })
        res.status(201).send('User Berhasil Dibuat')
    } catch (error) {
        res.status(400).send('Username Sudah Ada' + error.message)
    }
}

const UpdateUser = async(req, res) => {
    try {
        await models.user.update({
            username: req.body.username,
            nama: req.body.nama,
            role: req.body.role
        },{
            where : {
                username : req.body.username
            }
        })
        res.status(200).send('User Updated')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const DeleteUser = async (req, res) => {
    try {
        await models.user.destroy({
            where : {
                id : req.params.id
            }
        })
        res.status(200).send('User Deleted')
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = {
    FindAllUser,
    FindUserByUsername,
    CreateNewUser,
    UpdateUser,
    DeleteUser
}