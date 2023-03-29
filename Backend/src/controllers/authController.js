const { models } = require('../models/init-models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Login = async (req, res) => {
    try {
        const data = await models.user.findOne({
            where: {
                username: req.body.username
            }
        })
        if (!data) {
            res.status(404).json({
                message: "User Tidak Ditemukan"
            });
        } else {
            if (bcrypt.compareSync(req.body.password, data.dataValues.password)){
                delete data.dataValues.password
                const token = jwt.sign(
                    data.dataValues,
                    process.env.ACCESS_TOKEN,
                    {
                        expiresIn: "24h",
                    }
                )
                res.status(200).json({
                    message: "Login Berhasil",
                    token: token,
                });
            } else {
                res.status(403).json({
                    message: "Password Salah",
                });
            }
        }
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const VerifyToken = async(req, res, next) => {
    const token = req.headers.authorization
    if(!token){
        res.status(401).json({
            message: "You Aren't Authorized"
        })
    } else {
        try {
           jwt.verify(token, process.env.ACCESS_TOKEN)
           next()
        } catch (err) {
            return res.status(401).json({
                message: "Invalid Token"
            })
        }
    }
}

module.exports = { Login, VerifyToken }