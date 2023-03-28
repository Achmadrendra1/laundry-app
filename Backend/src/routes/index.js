const {Router} = require('express')
const user = require('../controllers/userController')

const router = new Router()
router.get('/user', user.FindAllUser)
router.get('/user/:username', user.FindUserByUsername)
router.post('/user', user.CreateNewUser)
router.put('/user', user.UpdateUser)
router.delete('/user/:id', user.DeleteUser)

module.exports = router